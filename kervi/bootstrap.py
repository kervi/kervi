# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
"""Module that holds classes for creating / bootstraping a Kervi application or a Kervi module.
"""
import time
try:
    import thread
except ImportError:
    import _thread as thread

#import sys
import collections
import uuid
import kervi.utility.process as process
import kervi.spine as spine
from kervi.utility.process_spine import _ProcessSpine
import kervi.kervi_logging as logging
import kervi_ui.webserver as webserver
import kervi.utility.nethelper as nethelper
import kervi.hal as hal

def _deep_update(d, u):
    """Update a nested dictionary or similar mapping.

    Modify ``source`` in place.
    """

    for k, v in u.items():
        if isinstance(v, collections.Mapping):
            r = _deep_update(d.get(k, {}), v)
            d[k] = r
        else:
            d[k] = u[k]
    return d

class _KerviSensors(process._KerviProcess):
    """ Private class that starts a seperate process that loads sensors in the Kervi application """
    def init_process(self):
        print("load sensors")
        #import kervi.core_sensors.cpu_sensors
        try:
            hal._load()
            import sensors
        except ImportError:
            self.spine.log.exception("load sensors")
        import kervi.utility.storage
        self.spine.send_command("startThreads")

    def terminate_process(self):
        pass

class _KerviControllers(process._KerviProcess):
    """ Private class that starts a seperate process that loads controllers in the Kervi application """
    def init_process(self):
        print("load controllers")
        try:
            import kervi.hal as hal
            hal._load()
            import controllers
        except ImportError:
            self.spine.log.exception("load controllers")
        self.spine.send_command("startThreads")

    def terminate_process(self):
        pass

class _KerviCams(process._KerviProcess):
    """ Private class that starts a seperate process that loads cam controllers in the Kervi application """
    def init_process(self):
        print("load cameras")
        try:
            hal._load()
            import cams
        except ImportError:
            self.spine.log.exception("load cams")
        self.spine.send_command("startThreads")

    def terminate_process(self):
        pass

class _KerviSocketIPC(process._KerviProcess):
    """ Private class that starts a seperate process for IPC communication in the Kervi application """

    def init_process(self):
        print ("load interprocess communication")
        import kervi.utility.socket_spine as socketSpine
        time.sleep(2)
        socketSpine._start(self.settings)

    def terminate_process(self):
        import kervi.utility.socket_spine as socketSpine
        socketSpine._stop()

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
            "IPCRootPort":9500,
            "WebSocketPort":9000,
            "UIPort":"2222",
            "IPCRoot":(nethelper.getIPAddress(),9500),
            "IPCSecret":b"The secret"
        },
        "web-ui":{
            "address":((nethelper.getIPAddress(),4444)),


        }
    })
    APP.run()
    ```

    """
    def __init__(self, settings = None):
        """ Settings is a dictionary with the following content
        """

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
                "WebPort": nethelper.get_free_port([80, 8080, 8081]),
                "IPCSecret":b"12345"
            }
        }


        print("Starting kervi application, please wait")
        if settings:
            self.settings = _deep_update(self.settings, settings)
        self._validateSettings()
        self.started = False
        process._start_root_spine(self.settings, True)
        #spine._init_spine("application-" + self.settings["info"]["id"])
        self.spine = spine.Spine()
        self.spine.register_query_handler("GetApplicationInfo", self._get_application_info)

        hal_driver = hal._load()
        if hal_driver:
            print("Using HAL driver:", hal_driver)

    def _validateSettings(self):
        pass

    def _get_application_info(self):
        return self.settings["info"]

    def _start(self):
        self.started = True
        self.spine.send_command("startThreads")

        try:
            import dashboards
        except ImportError:
            pass

        for module in self.settings["modules"]:
            if module == "sensors":
                time.sleep(2)
                self.p1 = process._start_process(
                    "sensors",
                    self.settings,
                    self.settings["network"]["IPCRootPort"]+1,
                    _KerviSensors
                )

            elif module == "controllers":
                time.sleep(2)
                self.p2 = process._start_process(
                    "Controllers",
                    self.settings,
                    self.settings["network"]["IPCRootPort"]+2,
                    _KerviControllers
                )
            elif module == "cams":
                time.sleep(2)
                self.p2 = process._start_process(
                    "cams",
                    self.settings,
                    self.settings["network"]["IPCRootPort"]+3,
                    _KerviCams
                )

        time.sleep(2)

        self.p3 = process._start_process(
            "IPC",
            self.settings,
            self.settings["network"]["IPCRootPort"]+4,
            _KerviSocketIPC
        )

        time.sleep(2)

        #http_address = (self.settings["network"]["IPAddress"], self.settings["network"]["WebPort"])
        print("Your Kervi application is ready at http://" + self.settings["network"]["IPAddress"] + ":" + str(self.settings["network"]["WebPort"]))
        print("Press ctrl + c to stop your application")
        webserver.start(
            self.settings["network"]["IPAddress"],
            self.settings["network"]["WebPort"],
            self.settings["network"]["WebSocketPort"]
        )

    def _input_thread(self, list):
        try:
            raw_input()
            list.append(None)
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


        print("stopping processes")
        webserver.stop()
        process._stop_processes()
        time.sleep(2)
        process._stop_root_spine()
        time.sleep(2)

class ApplicationModule(object):
    """
    Kervi application module that is used to start a module that connects to at running instance of
    a Kervi application. Settings for is a dictionary on the following form:

    MODULE=ApplicationModule(
        "testmodule",
        {
            "network":{
                "IPCPort":9600,
                "IPCRoot":(nethelper.getIPAddress(),9500),
                "IPCSecret":"The secret"
            }
        }
    )

    """
    def __init__(self, settings=None):
        

        self.settings = {
            "info":{
                "id":"kervi_module",
                "name":"Kervi module",
                "appKey":"",
            },
            "log" : {
                "level":"debug",
                "file":"kervi.log",
                "resetLog":False
            },
            "modules":[],
            "network":{
                "IPRootAddress": nethelper.get_ip_address(),
                "IPCRootPort":9500,
                "IPAddress": nethelper.get_ip_address(),
                "IPCPort":nethelper.get_free_port([9600]),
                "IPCSecret":b"12345"
            }
        }


        print("Starting kervi module, please wait")
        if settings:
            self.settings = _deep_update(self.settings, settings)

        self.started = False
        logging.init_process_logging("kervi-main", self.settings["log"])
        logging.KerviLog("kervi main")
        spine._init_spine("kervi-main")
        _ProcessSpine(self.settings["network"]["IPCPort"], self.settings)
        self.spine = spine.Spine()
        hal_driver = hal._load()
        if hal_driver:
            print("Using HAL driver:", hal_driver)

    def _start(self):
        self.started = True
        self.spine.send_command("startThreads")
        time.sleep(2)
        self.spine.trigger_event("moduleStarted", self.settings["info"]["id"])
        time.sleep(2)
        print("Module started")

    def _input_thread(self, list):
        try:
            raw_input()
            list.append(None)
        except:
            pass

    def run(self):

        if not self.started:
            self._start()
        self.spine.send_command("startThreads")
        time.sleep(1)
        try:
            char_list = []
            thread.start_new_thread(self._input_thread, (char_list,))
            while not char_list:
                time.sleep(1)

        except KeyboardInterrupt:
            pass


        print("stopping module")
        self.spine.trigger_event("moduleStopped", self.settings["info"]["id"])
        time.sleep(1)
