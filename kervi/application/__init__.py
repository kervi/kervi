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
import kervi.utility.process as process
import kervi.spine as spine
#from kervi.utility.process_spine import _ProcessSpine
#import kervi.kervi_logging as logging
import kervi.ui.webserver as webserver
import kervi.utility.nethelper as nethelper
import kervi.utility.encryption as encryption
import kervi.utility.application_helpers as app_helpers

class Application(object):
    """ Kervi application class that starts a kervi application and loads all needed modules.
        This class should be used by it self like:

    ```python
    APP=Application({
        "info":{
            "id":"myRobot",
            "name":"My first robot",
            "appKey":"1234",
        },
        "log" : {
            "level":"debug",
            "file":"robot.log"
        },
        "modules":["sensors","controllers"],
        "network":{
            "IPAddress": "ip address of device",
            "IPRootAddress": nethelper.get_ip_address(),
            "IPCRootPort": 9500),
            "WebSocketPort":9000),
            "WebPort": 80,
            "IPCSecret":b"The secret"
        }
    })
    APP.run()
    ```

    """
    def __init__(self, settings = None):
        """ Settings is a dictionary with the following content
        """
        def_ports = [80, 8080, 8081]
        if encryption.enabled():
            def_ports = [443, 8443]

        self.settings = {
            "info":{
                "id":"kervi_app",
                "name":"Kervi application",
                "appKey":"",
            },
            "log" : {
                "level":"debug",
                "file":"kervi.log",
                "resetLog":False
            },
            "modules":[],
            "network":{
                "IPAddress": nethelper.get_ip_address(),
                "IPRootAddress": nethelper.get_ip_address(),
                "IPCRootPort":nethelper.get_free_port([9500]),
                "WebSocketPort":nethelper.get_free_port([9000]),
                "WebPort": nethelper.get_free_port(def_ports),
                "IPCSecret":b"12345",
            }
        }

        print("Starting kervi application, please wait")
        if settings:
            self.settings = app_helpers._deep_update(self.settings, settings)
        self._validateSettings()
        self.started = False
        
        process._start_root_spine(self.settings, True)
        #spine._init_spine("application-" + self.settings["info"]["id"])
        self.spine = spine.Spine()
        self.spine.register_query_handler("GetApplicationInfo", self._get_application_info)
        self.spine.register_query_handler("getProcessInfo", self.get_process_info)
        self.spine.register_event_handler("processReady", self._process_ready, scope="app-" + self.settings["info"]["id"])
        self._module_processes = []
        self._process_info = []
        self._process_info_lock = threading.Lock()

        import kervi.utility.storage

        import kervi.hal as hal
        hal_driver = hal._load()
        if hal_driver:
            print("Using HAL driver:", hal_driver)

    def _validateSettings(self):
        pass

    def _get_application_info(self):
        return self.settings["info"]

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

        module_port = self.settings["network"]["IPCRootPort"]

        self._process_info_lock.acquire()
        self._process_info = [{"id":"IPC", "ready":False}]
        self._process_info_lock.release()

        module_port += 1
        self._module_processes += [
            process._start_process(
                "app-" + self.settings["info"]["id"],
                "IPC",
                self.settings,
                module_port,
                app_helpers._KerviSocketIPC
            )
            
        ]
        
        for module in self.settings["modules"]:
            self._process_info_lock.acquire()
            self._process_info += [{"id":module, "ready":False}]
            self._process_info_lock.release()
            
            module_port += 1
            self._module_processes+=[
                process._start_process(
                    "app-" + self.settings["info"]["id"],
                    module,
                    self.settings,
                    module_port,
                    app_helpers._KerviModuleLoader
                )
            ]

        while not self._is_ready():
            time.sleep(1)
        print("Your Kervi application is ready at http://" + self.settings["network"]["IPAddress"] + ":" + str(self.settings["network"]["WebPort"]))
        print("Press ctrl + c to stop your application")
        webserver.start(
            self.settings["network"]["IPAddress"],
            self.settings["network"]["WebPort"],
            self.settings["network"]["WebSocketPort"]
        )
        self.spine.trigger_event(
            "appReady",
            self.settings["info"]["id"]
        )
        self.spine.send_command("startWebSocket")

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
                time.sleep(1)

        except KeyboardInterrupt:
            pass

        self.stop()

    def _xrun(self):
        """Used in tests"""

        if not self.started:
            self._start()

    def stop(self):
        webserver.stop()
        print("stopping processes")
        process._stop_processes("app-" + self.settings["info"]["id"])
        time.sleep(1)
        process._stop_root_spine()
        #for thread in threading.enumerate():
        #    print("running thread",thread.name)
        print("application stopped")
