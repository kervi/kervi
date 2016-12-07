# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Module that holds classes for creating / bootstraping a Kervi application or a Kervi module """
import time
#from multiprocessing import  freeze_support
try:
    import thread
except:
    import _thread as thread

#import sys
import kervi.utility.process as process
import kervi.spine as spine
from kervi.utility.process_spine import ProcessSpine
import kervi.kervi_logging as logging
import kervi_ui.webserver as webserver

class KerviSensors(process.KerviProcess):
    """ Private class that starts a seperate process that loads sensors in the Kervi application """
    def init_process(self):
        print ("init mp sensors")
        import kervi.core_sensors.cpu_sensors
        try:
            import sensors
        except:
            self.spine.log.exception("load sensors")
            pass
        import kervi.utility.storage
        self.spine.send_command("startThreads")

    def terminate_process(self):
        pass

class KerviControllers(process.KerviProcess):
    """ Private class that starts a seperate process that loads controllers in the Kervi application """
    def init_process(self):
        print ("load controllers")
        try:
            import controllers
        except:
            self.spine.log.exception("load controllers")
        self.spine.send_command("startThreads")

    def terminate_process(self):
        pass

class KerviSocketIPC(process.KerviProcess):
    """ Private class that starts a seperate process for IPC communication in the Kervi application """

    def init_process(self):
        print ("init IPC")
        import kervi.utility.socket_spine as socketSpine
        socketSpine.start(self.settings)

    def terminate_process(self):
        import kervi.utility.socket_spine as socketSpine
        socketSpine.stop()

class Application(object):
    """ Kervi application class that starts a kervi application and loads all needed modules.
        This class should be used by it self like:

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
                "IPCBasePort":9500,
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

    """
    def __init__(self, settings):
        """ Settings is a dictionary with the following content
        """
        self.settings = settings
        self.started = False
        self.spine = spine.Spine()

    def get_application_info(self):
        return self.settings["info"]

    def start(self):
        self.started = True
        process.start_root_spine(self.settings, True)
        self.spine = spine.Spine()
        self.spine.register_query_handler("GetApplicationInfo", self.get_application_info)
        self.spine.send_command("startThreads")

        try:
            import dashboards
        except:
            self.spine.log.exception("load sensors")
            pass


        for module in self.settings["modules"]:
            if module == "sensors":
                time.sleep(2)
                self.p1 = process.start_process(
                    "sensors",
                    self.settings,
                    self.settings["network"]["IPCBasePort"]+1,
                    KerviSensors
                )

            elif module == "controllers":
                time.sleep(2)
                self.p2 = process.start_process(
                    "Controllers",
                    self.settings,
                    self.settings["network"]["IPCBasePort"]+2,
                    KerviControllers
                )

        time.sleep(2)
        self.p3 = process.start_process(
            "IPC",
            self.settings,
            self.settings["network"]["IPCBasePort"]+3,
            KerviSocketIPC
        )

        time.sleep(2)
        print ("start web ui on:", self.settings["web-ui"]["address"])
        webserver.start(self.settings["web-ui"]["address"])

    def input_thread(self, list):
        try:
            raw_input()
            list.append(None)
        except:
            pass

    def run(self):

        if not self.started:
            self.start()
        try:
            list = []
            thread.start_new_thread(self.input_thread, (list,))
            while not list:
                time.sleep(1)

        except KeyboardInterrupt:
            pass


        print ("stopping processes")
        webserver.stop()
        process.stop_processes()
        time.sleep(2)
        process.stop_root_spine()
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
    def __init__(self, name, settings):
        self.settings = settings
        self.started = False
        self.name = name
        logging.initProcessLogging("kervimodule-"+name)
        logging.KerviLog(name)
        spine.init_spine("module-"+name)
        ProcessSpine(settings["network"]["IPCPort"], settings)
        self.spine = spine.Spine()

    def start(self):
        self.started = True
        time.sleep(2)
        self.spine.trigger_event("moduleStarted", self.name)
        time.sleep(2)

    def input_thread(self, list):
        try:
            raw_input()
            list.append(None)
        except:
            pass

    def run(self):

        if not self.started:
            self.start()
        self.spine.send_command("startThreads")
        time.sleep(1)
        try:
            list = []
            thread.start_new_thread(self.input_thread, (list,))
            while not list:
                time.sleep(1)

        except KeyboardInterrupt:
            pass


        print ("stopping module")
        self.spine.trigger_event("moduleStopped", self.name)
        time.sleep(1)
