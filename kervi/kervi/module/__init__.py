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
os.system('color')

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
from kervi.controllers import Controller
from kervi.module.default_config import get_default_config
from kervi.plugin.plugin_manager import PluginManager
from kervi.utility.logging_handler import KerviLogHandler
from kervi.core.utility.kervi_logging import KerviLog
_app_running = True

def handler_stop_signals(signum, frame):
    global _app_running
    _app_running = False
    print("signal:", signum)


def _pretty_print(d, indent=0):
    if isinstance(d, dict):
        for key in d.keys():
            value = d[key]
            
            if isinstance(value, dict) or isinstance(value, list):
                print( '  ' * indent + str(key))
                _pretty_print(value, indent+1)
            else:
                print('  ' * (indent+1) + key + ":" +  str(value))
    elif isinstance(d, list):
        for item in d:
            if isinstance(item, dict) or isinstance(item, list):
                _pretty_print(item, indent+1)
            else:
                print('  ' * (indent+1) + str(item))
    else:
        pass


class _ModuleActions(Controller):
    def __init__(self, module):
        super().__init__(module.config.module.id, "Module")

        self._module = module

    @action
    def shutdown(self):
        self._module._shutdown_action()

    @action
    def reboot(self):
        self._module._reboot_action()

    @action
    def stop(self):
        self._module._stop_action()

    @action
    def restart(self):
        self._module._restart_action()



class Module(object):
    """ Kervi application class that starts a kervi application and loads all needed modules.
    """
    def __init__(self, user_config=None, **kwargs):
        """ Settings is a dictionary with the following content
        """

        from kervi.config import load
        import inspect
        import sys
        import os

        script_path = os.path.basename(os.path.abspath(inspect.stack()[1][1]))
        script_name, script_ext = os.path.splitext(script_path)

        config_files = []
        
        import getopt
        opts, args = getopt.getopt(sys.argv[1:], "c", ["config_file=", "as-service", "install-service", "uninstall-service", "start-service", "stop-service", "restart-service", "status-service", "detect-devices"])
        for opt, arg in opts:
            if opt in ("-c", "--config_file"):
                if os.path.isfile(arg):
                    config_files += [arg]
                else:
                    print("Specified config file not found:", arg)
        
        
        
        config_files += [script_name +".config.json"]
        config_files += ["kervi.config.json"]

        selected_config_file = None
        for config_file in config_files:
            if os.path.isfile(config_file):
                selected_config_file = config_file
                break
        if selected_config_file:
            print("using config file:", selected_config_file)
        #else:
        #    print("no config file found, revert to defaults")

        self.config = load(
            config_file=selected_config_file,
            config_user=user_config,
            config_base= get_default_config()
        )

        service_commands = []
        detect_devices = None
        self._as_service = False
        for opt, arg in opts:
            if opt in ("--as-service"):
                self._as_service = True

            if opt in ("--detect-devices"):
                detect_devices = True

            if opt in ("--install-service"):
                service_commands += ["install"]

            if opt in ("--uninstall-service"):
                service_commands += ["uninstall"]

            if opt in ("--start-service"):
                service_commands += ["start"]

            if opt in ("--stop-service"):
                service_commands = ["stop"]
            
            if opt in ("--restart-service"):
                service_commands = ["restart"]
            if opt in ("--service-status"):
                service_commands = ["status"]

        if service_commands:
            import kervi.hal as hal
            hal_driver = hal._load(self.config.platform.driver)
            if hal_driver:
                hal.service_commands(
                    service_commands,
                    self.config.application.name,
                    self.config.application.id,
                    script_path
                )
            exit()

        if detect_devices:
            import kervi.hal as hal
            hal_driver = hal._load(self.config.platform.driver)
            if hal_driver:
                devices = hal.detect_devices()
                print("devices:")
                _pretty_print(devices)
            exit()

        self._log_handler = KerviLogHandler(self.config)
        self._log_queue = self._log_handler._log_queue 
        self._logger = KerviLog("module")
        


        self._logger.info("Starting kervi module, please wait")
        self.started = False
        if self.config.module.app_connection_local and not self.config.network.ipc_root_address:
            self._logger.verbose("Locating kervi application...{0}", "")
            from kervi.utility.discovery import find_kervi_app
            address, port = find_kervi_app(self.config.application.id)
            if address:
                self.config.network.ipc_root_address = address
                self.config.network.ipc_root_port = port
            else:
                self._logger.error("Locate kervi application failed")
                exit()
        
        self._root_address = "tcp://" + self.config.network.ipc_root_address + ":" + str(self.config.network.ipc_root_port)

        from kervi.plugin.message_bus.bus_manager import BusManager
        self.bus_manager = BusManager()
        self.config.network.ipc_root_port = nethelper.get_free_port([self.config.network.ipc_root_port])
        
        if self.config.module.app_connection_local:
            self.bus_manager.load(
                "kervi-module", 
                self.config.network.ipc_module_port,
                "tcp://" + self.config.network.ipc_root_address + ":" + str(self.config.network.ipc_root_port),
                self.config.network.ip
            )
        else:
            self.bus_manager.load(
                "kervi-main", 
                self.config.network.ipc_root_port,
                None,
                self.config.network.ipc_root_address
            )
        
        from kervi import spine
        self.spine = spine.Spine()
        
        self.spine.register_event_handler("processReady", self._process_ready, scope="app-" + self.config.application.id)
        self.spine = spine.Spine()

        self._module_processes = []
        self._process_info = []
        self._process_info_lock = threading.Lock()

        import kervi.hal as hal
        hal_driver = hal._load()
        if hal_driver:
            self._logger.verbose("Using HAL driver:", hal_driver)

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

        if self._as_service:
            import signal
            signal.signal(signal.SIGINT, handler_stop_signals)
            signal.signal(signal.SIGTERM, handler_stop_signals)

        try:
            import dashboards
        except ImportError:
            pass

        #self.spine.run()
        self.spine.send_command("startThreads", local_only=True)
        time.sleep(.5)

        module_port = self.config.network.ipc_module_port
        pluginManager = PluginManager(self.config)
        self._process_info_lock.acquire()
        #self._process_info = [{"id":"IPC", "ready":False}]
        plugin_modules = pluginManager.prepare_load()
        for plugin_module in plugin_modules:
            self._process_info.append(
                {"id":plugin_module, "ready": False}
            )
        self._process_info_lock.release()


        module_port = self.config.network.ipc_module_port
        module_port = pluginManager.load_plugins(module_port+1)



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

        while not self._is_ready():
            time.sleep(1)
        
        self._logger.info("module connected to application at:", self._root_address)
        self._logger.info("Press ctrl + c to stop your module")
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
            while not char_list and _app_running:
                self.spine.trigger_event("modulePing", self.config.module.id)
                time.sleep(1)

        except KeyboardInterrupt:
            pass

        self.stop()

    def _xrun(self):
        """Used in tests"""

        if not self.started:
            self._start()

    def stop(self, force_exit=True, restart=False):
        self.spine.send_command("kervi_action_module_exit")
        self.spine.trigger_event(
            "moduleStopped",
            self.config.module.id
        )
        self._logger.warn("stopping processes")
        process._stop_processes("module-" + self.config.module.id)
        self.spine.trigger_event("processTerminating", None, local_only=True)
        time.sleep(1)
        spine.Spine().stop()
        #for thread in threading.enumerate():
        #    print("running thread",thread.name)
        self._logger.info("module stopped")
        if force_exit:
            import os
            os._exit(0)

    def _stop_action(self):
        self._logger.verbose("module action: stop")
        self.stop()

    def _restart_action(self):
        self._logger.verbose("module action: restart")
        self.stop(restart=True)

    def _reboot_action(self):
        self._logger.verbose("module action: reboot")
        import kervi.hal as hal
        hal.device_reboot()

    def _shutdown_action(self):
        self._logger.verbose("module action: shutdown")
        import kervi.hal as hal
        hal.device_shutdown()