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
import platform
if platform.system() == "Windows":
    os.system('color')
import time
import threading
import logging
from kervi.core.utility.kervi_logging import KerviLog

try:
    import thread
except ImportError:
    import _thread as thread

import sys
if sys.version_info[0] < 3:
    print("Kervi requires Python 3")
    exit()

from kervi.application.kervi_module import KerviModule
import kervi.utility.nethelper as nethelper
from kervi.controllers import Controller
from kervi.actions import action
from kervi.application.default_config import get_default_config
from kervi.plugin.plugin_manager import PluginManager
from kervi.utility.discovery import KerviAppDiscovery
from kervi.utility.logging_handler import KerviLogHandler
import logging
import signal

_app_running = True
_console_log = 15

def handler_stop_signals(signum, frame):
    global _app_running
    _app_running = False
    logging.getLogger().fatal("signal: %s", signum)

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
        self._app._shutdown_action()

    @action
    def reboot(self):
        self._app._reboot_action()

    @action
    def restart(self):
        self._app._restart_action()

    @action
    def stop(self):
        self._app._stop_action()

class Application(object):
    """ Kervi application class that starts a kervi application and loads all needed modules.
        This class should be used by it self like:

    """
    def __init__(self, user_config = None):
        """ Settings is a dictionary with the following content
        """
        global _console_log
        
        print("\033[92mStarting kervi application \033[0m")
        import inspect
        import getopt
       
        self._in_stop = False
        self._discovery_thread = None
        config_files = []
        self._webserver_info = None
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
        self._log_handler = KerviLogHandler(self.config)
        self._log_queue = self._log_handler._log_queue 
        self._logger = KerviLog("application")
        #self._validateSettings()
        self.started = False
        self._webserver_port = None

        try:
            from kervi.version import VERSION
        except:
            VERSION="0.0.0"

        self._logger.verbose("kervi version: %s", VERSION)

        import kervi.hal as hal
        hal_driver = hal._load(self.config.platform.driver)
        if hal_driver:
            self._logger.verbose("platform driver: %s", hal_driver)
            
        from kervi.plugin.message_bus.bus_manager import BusManager
        self.bus_manager = BusManager(self._log_queue)
        self.config.network.ipc_root_port = nethelper.get_free_port([self.config.network.ipc_root_port])
        self.bus_manager.load("kervi-main", self.config.network.ipc_root_port, None, self.config.network.ipc_root_address)
        
        from kervi import spine
        self.spine = spine.Spine()
        self.spine.register_query_handler("GetApplicationInfo", self._get_application_info)
        self.spine.register_query_handler("getProcessInfo", self.get_process_info)
        self.spine.register_event_handler("modulePing", self._module_ping)
        self.spine.register_event_handler("processReady", self._process_ready, scope="app-" + self.config.application.id)
        self.spine.register_event_handler("WebAppReady", self._webapp_ready, scope="app-" + self.config.application.id)
        self._module_processes = []
        self._process_info = []
        self._process_info_lock = threading.Lock()

        self._kervi_modules = []
        self._kervi_modules_lock = threading.Lock()

        from kervi.storage.storage_manager import StorageManager
        self._storage_manager = StorageManager(self._log_queue)
    
        from kervi.utility.authorization_manager import AuthorizationManager
        self._authorization_manager = AuthorizationManager(self._log_queue)
        
        from kervi.messaging.message_manager import MessageManager
        self._message_manager = MessageManager(self._log_queue)

        self._app_actions = _AppActions(self)

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
                        self._logger.verbose("module started: %s", module_id)
                        self.spine.trigger_event(
                            "moduleStarted",
                            module_id
                        )
                    module.ping()
                    break
            else:
                self._logger.verbose("module started: %s", module_id)
                self._kervi_modules += [KerviModule(module_id)]
                self.spine.trigger_event(
                    "moduleStarted",
                    module_id
                )

    def _check_kervi_modules(self):
        with self._kervi_modules_lock:
            for module in self._kervi_modules:
                if not module.is_alive and module.connected:
                    self._logger.verbose("module stopped: %s", module.module_id)
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

    def _webapp_ready(self, scope, webserver_info):
        self._webserver_info = webserver_info
        ready_message = "Reach your application at http://" + self._webserver_info["ip"] + ":" + str(self._webserver_info["port"])
        self.spine.log.info(ready_message)
        time.sleep(2)
        self.spine.send_command("startWebSocket")

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


        #if self._as_service:
        signal.signal(signal.SIGINT, handler_stop_signals)
        signal.signal(signal.SIGTERM, handler_stop_signals)

        self.spine.send_command("startThreads", local_only=True)
        time.sleep(.5)
        module_port = self.config.network.ipc_root_port
        pluginManager = PluginManager(self.config, log_queue=self._log_queue)
        self._process_info_lock.acquire()
        plugin_modules = pluginManager.prepare_load()
        for plugin_module in plugin_modules:
            self._process_info.append(
                {"id":plugin_module, "ready": False}
            )
        self._process_info_lock.release()

        module_port = pluginManager.load_plugins(module_port+1)

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
                    app_helpers._KerviModuleLoader,
                    log_queue = self._log_queue
                )
            ]

        #print("wait for ready")
        while not self._is_ready() and self._in_stop:
            time.sleep(1)

        if not self._in_stop:
            from kervi.dashboards import Dashboard
            Dashboard._add_default()

            self.spine.send_command("kervi_action_app_main")
            ready_message = "Your Kervi application is running"
            self._logger.info(ready_message)

            self._logger.info("Press ctrl + c to stop your application")
            self.spine.trigger_event(
                "appReady",
                self.config.application.id
            )

            if self.config.discovery.enabled:
                self._discovery_thread = KerviAppDiscovery(
                    self.config.network.ip, 
                    self.config.network.ipc_root_port,
                    self.config.discovery.port, 
                    self.config.application.id, 
                    self.config.discovery.challenge,
                    self.config.application.name,
                    "http://" + self.config.network.ip# + ":" + str(self.config.network.http_port)
                )
                self._discovery_thread.start()
            else:
                self._discovery_thread = None
            
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
        self._logger.warn("stopping processes")
        self._in_stop = True
        self.spine.send_command("kervi_action_app_exit")
        
        if self._discovery_thread:
            self._discovery_thread.terminate()

        import kervi.core.utility.process as process
        process._stop_processes("app-" + self.config.application.id)
        self.spine.trigger_event("processTerminating", None, local_only=True)
        time.sleep(1)
        self.bus_manager.stop()
        self._log_handler.stop()
        #time.sleep(1)
        #for thread in threading.enumerate():
        #    print("running thread",thread.name)
        self._logger.info("application stopped")
        #import psutil
        #current_process = psutil.Process()
        #children = current_process.children(recursive=True)
        #for child in children:
        #    print('Child pid is {}'.format(child.pid))

        if force_exit:
            import os
            os._exit(0)

    def _stop_action(self):
        self._logger.verbose("stop action")
        self.stop()

    def _restart_action(self):
        self._logger.verbose("restart action")
        self.stop(restart=True)

    def _reboot_action(self):
        self._logger.verbose("reboot action")
        import kervi.hal as hal
        hal.device_reboot()

    def _shutdown_action(self):
        self._logger.verbose("shutdown action")
        import kervi.hal as hal
        hal.device_shutdown()
