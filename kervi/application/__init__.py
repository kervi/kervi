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
import os
import time
import threading
try:
    import thread
except ImportError:
    import _thread as thread

from kervi.application.kervi_module import KerviModule
import kervi.core.utility.process as process
import kervi.spine as spine
#from kervi.utility.process_spine import _ProcessSpine
#import kervi.kervi_logging as logging
import kervi.ui.webserver as webserver
import kervi.utility.nethelper as nethelper
import kervi.utility.encryption as encryption
import kervi.utility.application_helpers as app_helpers
from kervi.controllers.controller import Controller
from kervi.actions import action
from kervi.application.default_config import get_default_config

class _AppActions(Controller):
    def __init__(self, app):
        super().__init__("app", "App controller")

        self._app = app

    @action
    def shutdown(self):
        print("shutwown app")
        self._app.stop()

    @action
    def reboot(self):
        print("reboot app device")
        self._app.stop()

    @action
    def restart(self):
        print("restart app")
        self._app.stop()

class Application(object):
    """ Kervi application class that starts a kervi application and loads all needed modules.
        This class should be used by it self like:

    """
    def __init__(self, user_config = None):
        """ Settings is a dictionary with the following content
        """

        import inspect
        import getopt
        import sys

        config_files = []

        opts, args = getopt.getopt(sys.argv[1:], "c", ["config_file=", "service_install", "service_uninstall", "service_start", "service_stop"])
        for opt, arg in opts:
            if opt in ("-c", "--config_file"):
                if os.path.isfile(arg):
                    config_files += [arg]
                else:
                    print("Specified config file not found:", arg)
        script_path = os.path.abspath(inspect.stack()[1][1])
        script_name = os.path.basename(script_path)
        script_name, script_ext = os.path.splitext(script_name)
        
        config_files += [script_name +".config.json"]
        config_files += ["kervi.config.json"]

        selected_config_file = None
        for config_file in config_files:
            if os.path.isfile(config_file):
                selected_config_file = config_file
                break
        if not selected_config_file:
            print("no config file found, revert to defaults")

        from kervi.config import load
        self.config = load(
            config_file=selected_config_file,
            config_user=user_config,
            config_base=get_default_config()
        )

        service_commands = []
        for opt, arg in opts:
            if opt in ("--service_install"):
                service_commands += ["install"]

            if opt in ("--service_uninstall"):
                service_commands += ["uninstall"]

            if opt in ("--service_start"):
                service_commands += ["start"]

            if opt in ("--service_stop"):
                service_commands = "stop"
            
            if opt in ("--service_restart"):
                service_commands = "restart"

        if service_commands:
            import kervi.hal as hal
            hal_driver = hal._load()
            if hal_driver:
                hal.service_commands(
                    service_commands,
                    self.config.application.name,
                    self.config.application.id,
                    script_path
                )
            exit()



        print("Starting kervi application:", self.config.application.name)
        #if settings:
        #    self.settings = app_helpers._deep_update(self.settings, settings)
        #self._validateSettings()
        self.started = False
        from kervi.zmq_spine import _ZMQSpine
        self.spine = _ZMQSpine()
        self.spine._init_spine("kervi-main", self.config.network.ipc_root_port, None, self.config.network.ipc_root_address)
        spine.set_spine(self.spine)
        #process._start_root_spine(self.config, True, _ZMQSpine)
        #spine._init_spine("application-" + self.settings["info"]["id"])
        self.spine = spine.Spine()
        self.spine.register_query_handler("GetApplicationInfo", self._get_application_info)
        self.spine.register_query_handler("getProcessInfo", self.get_process_info)
        self.spine.register_event_handler("modulePing", self._module_ping)
        self.spine.register_event_handler("processReady", self._process_ready, scope="app-" + self.config.application.id)
        self._module_processes = []
        self._process_info = []
        self._process_info_lock = threading.Lock()

        self._kervi_modules = []
        self._kervi_modules_lock = threading.Lock()

        from kervi.utility.storage import init_db

        init_db(script_name)

        from kervi.messaging.message_handler import MessageHandler
        self._message_handler = MessageHandler()

        import kervi.hal as hal
        hal_driver = hal._load()
        if hal_driver:
            print("Using HAL driver:", hal_driver)

        self._app_actions = _AppActions(self)

    @property
    def actions(self):
        return self._app_actions

    def _validateSettings(self):
        pass

    def _get_application_info(self):
        return {
            "name": self.config.application.name,
            "id": self.config.application.id
        }

    def get_process_info(self):
        return {"id": "application"}

    def _module_ping(self, module_id):
        with self._kervi_modules_lock:
            for module in self._kervi_modules:
                if module.module_id == module_id:
                    
                    if not module.is_alive:
                        print("module started", module_id)
                        self.spine.trigger_event(
                            "moduleStarted",
                            module_id
                        )
                    module.ping()
                    break
            else:
                print("module started", module_id)
                self._kervi_modules += [KerviModule(module_id)]
                self.spine.trigger_event(
                    "moduleStarted",
                    module_id
                )

    def _check_kervi_modules(self):
        with self._kervi_modules_lock:
            for module in self._kervi_modules:
                if not module.is_alive and module.connected:
                    print("module stopped", module.module_id)
                    module.connected = False
                    self.spine.trigger_event(
                        "moduleStopped",
                        module.module_id
                    )

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
        module_port = self.config.network.ipc_root_port

        self._process_info_lock.acquire()
        self._process_info = [{"id":"IPC", "ready":False}]
        self._process_info_lock.release()

        module_port += 1
        self._module_processes += [
            process._start_process(
                "app-" + self.config.application.id,
                "IPC",
                self.config,
                nethelper.get_free_port([module_port]),
                app_helpers._KerviSocketIPC
            )
        ]

        for module in self.config.modules:
            self._process_info_lock.acquire()
            self._process_info += [{"id":module, "ready":False}]
            self._process_info_lock.release()

            module_port += 1
            self._module_processes += [
                process._start_process(
                    "app-" + self.config.application.id,
                    module,
                    self.config,
                    nethelper.get_free_port([module_port]),
                    app_helpers._KerviModuleLoader
                )
            ]

        if self.config.routing.kervi_io.enabled:
            module_port += 1
            self._module_processes += [
                process._start_process(
                    "app-" + self.config.application.id,
                    "kervi_io",
                    self.config,
                    nethelper.get_free_port([module_port]),
                    app_helpers._KerviIORouterProcess
                )
            ]

        while not self._is_ready():
            time.sleep(1)

        print("Your Kervi application is ready at http://" + self.config.network.ip + ":" + str(self.config.network.http_port))
        print("Press ctrl + c to stop your application")
        webserver.start(
            self.config.network.ip,
            self.config.network.http_port,
            self.config.network.ws_port
        )
        self.spine.trigger_event(
            "appReady",
            self.config.application.id
        )
        self.spine.send_command("startWebSocket")
        self.spine.send_command("kervi_action_app_main")

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
                self._check_kervi_modules()
                time.sleep(1)

        except KeyboardInterrupt:
            pass

        self.stop()

    def _xrun(self):
        """Used in tests"""

        if not self.started:
            self._start()

    def stop(self):
        self.spine.send_command("kervi_action_app_exit")
        webserver.stop()
        print("stopping processes")
        process._stop_processes("app-" + self.config.application.id)
        time.sleep(1)
        #process._stop_root_spine()
        #for thread in threading.enumerate():
        #    print("running thread",thread.name)
        print("application stopped")
