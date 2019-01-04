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

import sys
if sys.version_info[0] < 3:
    print("Kervi requires Python 3")
    exit()

import kervi.utility.nethelper as nethelper
from kervi.controllers import Controller
from kervi.actions import action
from kervi.application.default_config import get_default_config
from kervi.application.kervi_module import KerviModule
import signal

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
    

class _AppActions(Controller):
    def __init__(self, app):
        super().__init__("app", "App controller")

        self._app = app

    @action
    def shutdown(self):
        print("shutdown app device")
        self._app._shutdown_action()

    @action
    def reboot(self):
        print("reboot app device")
        self._app._reboot_action()

    @action
    def restart(self):
        print("restart app")
        self._app._restart_action()

    @action
    def stop(self):
        print("stop app")
        self._app._stop_action()

class Application(object):
    """ Kervi application class that starts a kervi application and loads all needed modules.
        This class should be used by it self like:

    """
    def __init__(self, user_config = None):
        """ Settings is a dictionary with the following content
        """
        
        
        print("Starting kervi application")
        import inspect
        import getopt
        
        config_files = []

        opts, args = getopt.getopt(sys.argv[1:], "c", ["config_file=", "as-service", "install-service", "uninstall-service", "start-service", "stop-service", "restart-service", "status-service", "detect-devices"])
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
        #if not selected_config_file:
        #    print("no config file found , revert to defaults")

        from kervi.config import load
        self.config = load(
            config_file=selected_config_file,
            config_user=user_config,
            config_base=get_default_config()
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

        
        #self._validateSettings()
        self.started = False
        import kervi.spine as spine
        from kervi.zmq_spine import _ZMQSpine
        self.spine = _ZMQSpine()
        self.config.network.ipc_root_port = nethelper.get_free_port([self.config.network.ipc_root_port])
        self.spine._init_spine("kervi-main", self.config.network.ipc_root_port, None, self.config.network.ipc_root_address)
        spine.set_spine(self.spine)
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

        from kervi.storage.storage_manager import StorageManager
        self._authentication = StorageManager()
        
        from kervi.utility.authorization_manager import AuthorizationManager
        self._authentication = AuthorizationManager()
        
        from kervi.messaging.message_manager import MessageManager
        self._message_handler = MessageManager()

        self._app_actions = _AppActions(self)

        import kervi.hal as hal
        hal_driver = hal._load(self.config.platform.driver)
        if hal_driver:
            print("platform driver:", hal_driver)


    @property
    def actions(self):
        return self._app_actions

    def _validateSettings(self):
        pass

    def _get_application_info(self):
        unit_system = self.config.unit_system
        display = {}
        display["unit_system"] = self.config.display.unit_systems.systems[unit_system]
        display["texts"] = self.config.texts.ui

        return {
            "name": self.config.application.name,
            "id": self.config.application.id,
            "display": display,
            "unit_system": unit_system
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
        
        import kervi.core.utility.process as process
        import kervi.utility.application_helpers as app_helpers


        if self._as_service:
            signal.signal(signal.SIGINT, handler_stop_signals)
            signal.signal(signal.SIGTERM, handler_stop_signals)

        self.spine.send_command("startThreads", local_only=True)
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

        self._process_info_lock.acquire()
        self._process_info += [{"id":"plugins_routing", "ready":False}]
        self._process_info_lock.release()
        module_port += 1
        app_helpers.load_plugin_section(self.config, module_port, "routing")
        #app_helpers.load_plugin_section(self.config, module_port, "general")

        # if self.config.routing.kervi_io.enabled:
        #     module_port += 1
        #     self._module_processes += [
        #         process._start_process(
        #             "app-" + self.config.application.id,
        #             "kervi_io",
        #             self.config,
        #             nethelper.get_free_port([module_port]),
        #             app_helpers._KerviIORouterProcess
        #         )
        #     ]

        while not self._is_ready():
            time.sleep(1)

        #self._module_processes += app_helpers.load_plugins(self.config, module_port)

        from kervi.dashboards import Dashboard
        Dashboard._add_default()

        import platform
        if platform.system() != "Windows":
            print("\033[92mYour Kervi application is ready at http://" + self.config.network.ip + ":" + str(self.config.network.http_port) + "\033[0m")
        else:
            print("Your Kervi application is ready at http://" + self.config.network.ip + ":" + str(self.config.network.http_port))
        print("Press ctrl + c to stop your application")
        import kervi.ui.webserver as webserver
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
            while not char_list and _app_running:
                self._check_kervi_modules()
                time.sleep(1)

        except KeyboardInterrupt:
            pass

        self.stop()

    def _xrun(self):
        """Used in tests"""

        if not self.started:
            self._start()

    def stop(self, force_exit=True, restart=False):
        self.spine.send_command("kervi_action_app_exit")
        import kervi.ui.webserver as webserver
        
        webserver.stop()
        print("stopping processes")
        import kervi.core.utility.process as process
        process._stop_processes("app-" + self.config.application.id)
        self.spine.trigger_event("processTerminating", None, local_only=True)
        time.sleep(1)
        self.spine.stop()
        #for thread in threading.enumerate():
        #    print("running thread",thread.name)
        print("application stopped")
        #exit()
        if force_exit:
            import os
            os._exit(0)

    def _stop_action(self):
        self.stop()

    def _restart_action(self):
        self.stop(restart=True)

    def _reboot_action(self):
        import kervi.hal as hal
        hal.device_reboot()

    def _shutdown_action(self):
        import kervi.hal as hal
        hal.device_shutdown()
