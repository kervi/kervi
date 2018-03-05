#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

"""Module that holds classes for creating / bootstraping a Kervi application or a Kervi module.
"""
import time
import threading
try:
    import thread
except ImportError:
    import _thread as thread

#import sys
#import uuid
import kervi.core.utility.process as process
import kervi.spine as spine
#from kervi.utility.process_spine import _ProcessSpine
#import kervi.kervi_logging as logging
#import kervi_ui.webserver as webserver
import kervi.utility.nethelper as nethelper
import kervi.utility.encryption as encryption
import kervi.utility.application_helpers as app_helpers
from kervi.actions import action, Actions
from kervi.controllers.controller import Controller
from kervi.module.default_config import get_default_config

class _ModuleActions(Controller):
    def __init__(self, module):
        super().__init__(module.config.module.id, "Module")

        self._module = module

    @action
    def shutdown(self):
        print("shutwown module device")
        self._module.stop()

    @action
    def reboot(self):
        print("reboot module device")
        self._module.stop()

    @action
    def stop(self):
        print("stop module")
        self._module.stop()

    @action
    def restart(self):
        print("restart module")
        self._module.stop()



class Module(object):
    """ Kervi application class that starts a kervi application and loads all needed modules.
    """
    def __init__(self, user_config=None, **kwargs):
        """ Settings is a dictionary with the following content
        """

        from kervi.config import load
        import inspect
        #import sys
        import os

        script_name = os.path.basename(os.path.abspath(inspect.stack()[1][1]))
        script_name, script_ext = os.path.splitext(script_name)

        config_files = []
        config_files += [script_name +".config.json"]
        config_files += ["kervi.config.json"]

        selected_config_file = None
        for config_file in config_files:
            if os.path.isfile(config_file):
                selected_config_file = config_file
                break
        if selected_config_file:
            print("using config file:", selected_config_file)
        else:
            print("no config file found, revert to defaults")

        self.config = load(
            config_file=selected_config_file,
            config_user=user_config,
            config_base= get_default_config()
        )

        print("Starting kervi module, please wait")
        self.started = False
        self._root_address = "tcp://" + self.config.network.ipc_root_address + ":" + str(self.config.network.ipc_root_port)
        
        
        from kervi.zmq_spine import _ZMQSpine
        self.spine = _ZMQSpine()
        if self.config.module.app_connection_local:
            self.spine._init_spine("kervi-module", self.config.network.ipc_module_port, "tcp://" + self.config.network.ipc_root_address + ":" + str(self.config.network.ipc_root_port), self.config.network.ip)
        else:
            # self.spine._init_spine("kervi-module-main", self.config.network.ipc_module_port, None, self.config.network.ip)
        spine.set_spine(self.spine)
        
        #spine._init_spine(self.config.module.id, self.config.network.ipc_module_port, self._root_address, self.config.network.ip)

        self.spine = spine.Spine()

        self._module_processes = []
        self._process_info = []
        self._process_info_lock = threading.Lock()

        import kervi.hal as hal
        hal_driver = hal._load()
        if hal_driver:
            print("Using HAL driver:", hal_driver)

        self._actions = _ModuleActions(self)

    @property
    def actions(self):
        return self._actions

    def _validateSettings(self):
        pass

    def get_process_info(self):
        return {"id": "application"}

    def _process_ready(self, scope, process_id):
        self._process_info_lock.acquire()
        try:
            for process in self._process_info:
                if process["id"] == process_id:
                    process["ready"] = True
        finally:
            self._process_info_lock.release()

    def _is_ready(self):
        result = True
        self._process_info_lock.acquire()
        try:
            for process in self._process_info:
                if not process["ready"]:
                    result = False
        finally:
            self._process_info_lock.release()

        return result

    def _start(self):
        self.started = True

        try:
            import dashboards
        except ImportError:
            pass

        #self.spine.run()
        self.spine.send_command("startThreads", scope="process")
        time.sleep(.5)

        module_port = self.config.network.ipc_module_port

        for module in self.config.modules:
            module_port += 1
            self._process_info_lock.acquire()
            self._process_info += [{"id":module, "ready":False}]
            self._process_info_lock.release()
                
            self._module_processes += [
                process._start_process(
                    "module-" + self.config.module.ip,
                    module,
                    self.config,
                    nethelper.get_free_port([module_port]),
                    app_helpers._KerviModuleLoader,
                    process_id=self.config.module.id + "-" + module
                )
            ]


        if self.config.routing.kervi_io.enabled:
            module_port += 1
            self._module_processes += [
                process._start_process(
                    "module-" + self.config.module.id,
                    "kervi_io",
                    self.config,
                    nethelper.get_free_port([module_port]),
                    app_helpers._KerviIORouterProcess
                )
            ]
            #time.sleep(1)
        while not self._is_ready():
            time.sleep(1)
        
        print("module connected to application at:", self._root_address)
        print("Press ctrl + c to stop your module")
        self.spine.trigger_event(
            "moduleReady",
            self.config.module.id
        )
        self.spine.send_command("kervi_action_module_main")

    def _input_thread(self, list):
        try:
            raw_input()
            list.append(None)
        except KeyboardInterrupt:
            pass
        except:
            pass

    def run(self):
        """Run the application loop. The application will continue until termination with ctrl-c"""

        if not self.started:
            self._start()
        try:
            char_list = []
            thread.start_new_thread(self._input_thread, (char_list,))
            while not char_list:
                self.spine.trigger_event("modulePing", self.config.module.id)
                time.sleep(1)

        except KeyboardInterrupt:
            pass

        self.stop()

    def _xrun(self):
        """Used in tests"""

        if not self.started:
            self._start()

    def stop(self):
        self.spine.trigger_event(
            "moduleStopped",
            self.config.module.id
        )
        print("stopping processes")
        process._stop_processes("module-" + self.config.module.id)
        time.sleep(1)
        spine.Spine().stop()
        #for thread in threading.enumerate():
        #    print("running thread",thread.name)
        print("module stopped")
