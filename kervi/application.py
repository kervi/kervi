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
import kervi.utility.encryption as encryption

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

class _KerviModuleLoader(process._KerviProcess):
    """ Private class that starts a seperate process that loads a module in the Kervi application """
    def init_process(self):
        print("load:", self.name)
        #import kervi.core_sensors.cpu_sensors
        try:
            import kervi.hal as hal
            hal._load()
            __import__(self.name, fromlist=[''])
            
        except ImportError:
            self.spine.log.exception("load module:{0}", self.name)
        #import kervi.utility.storage
        self.spine.send_command("startThreads", scope="process")
        self.spine.trigger_event(
            "moduleLoaded",
            self.name,
        )

    def terminate_process(self):
        pass

class _KerviSocketIPC(process._KerviProcess):
    """ Private class that starts a seperate process for IPC communication in the Kervi application """

    def init_process(self):
        print("load interprocess communication")
        from kervi.utility.socket_spine import SocketSpine
        self.socket_spine = SocketSpine(self.settings)
        self.spine.send_command("startThreads", scope="process")

    def process_step(self):
        self.socket_spine.step()

    def terminate_process(self):
        pass

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
            self.settings = _deep_update(self.settings, settings)
        self._validateSettings()
        self.started = False
        process._start_root_spine(self.settings, True)
        #spine._init_spine("application-" + self.settings["info"]["id"])
        self.spine = spine.Spine()
        self.spine.register_query_handler("GetApplicationInfo", self._get_application_info)
        self.spine.register_query_handler("getProcessInfo", self.get_process_info)

        self._module_processes=[]
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

    def _start(self):
        self.started = True
        
        try:
            import dashboards
        except ImportError:
            pass
        
        self.spine.run()
        self.spine.send_command("startThreads", scope="process")
        time.sleep(2)
        

        module_port = self.settings["network"]["IPCRootPort"]
        
        for module in self.settings["modules"]:
            module_port += 1
            self._module_processes+=[
                process._start_process(
                    module,
                    self.settings,
                    module_port,
                    _KerviModuleLoader
                )
            ]
            time.sleep(2)

        

        #http_address = (self.settings["network"]["IPAddress"], self.settings["network"]["WebPort"])
        print("Your Kervi application is ready at http://" + self.settings["network"]["IPAddress"] + ":" + str(self.settings["network"]["WebPort"]))
        print("Press ctrl + c to stop your application")
        webserver.start(
            self.settings["network"]["IPAddress"],
            self.settings["network"]["WebPort"],
            self.settings["network"]["WebSocketPort"]
        )
        time.sleep(1)

        module_port += 1
        self._module_processes += [
            process._start_process(
                "IPC",
                self.settings,
                module_port,
                _KerviSocketIPC
            )
        ]
        time.sleep(2)


        self.spine.trigger_event(
            "appReady",
            self.settings["info"]["id"]
        )

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
        process._stop_processes()
        time.sleep(1)
        process._stop_root_spine()
        time.sleep(1)

        print("application stopped")
