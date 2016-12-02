# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Module that holds classes for creating / bootstraping a Kervi application or a Kervi module """
import kervi.utility.process as process
import time
import kervi.spine as spine
#from multiprocessing import  freeze_support
try:
    import thread
except:
    import _thread as thread

from kervi.utility.processSpine import ProcessSpine
#import sys
import kervi.kerviLogging as logging
import kervi.utility.webserver as webserver

class KerviSensors(process.KerviProcess):
    """ Private class that starts a seperate process that loads sensors in the Kervi application """
    def InitProcess(self):
        print ("init mp sensors")
        import kervi.coreSensors.cpuSensors
        try:
            import sensors
        except:
            self.spine.log.exception("load sensors")
            pass
        import kervi.utility.storage
        self.spine.sendCommand("startThreads")

    def TerminateProcess(self):
        pass

class KerviControllers(process.KerviProcess):
    """ Private class that starts a seperate process that loads controllers in the Kervi application """
    def InitProcess(self):
        print ("load controllers")
        try:
            import controllers
        except:
            self.spine.log.exception("load controllers")
        self.spine.sendCommand("startThreads")

    def terminateProcess(self):
        pass

class KerviSocketIPC(process.KerviProcess):
    """ Private class that starts a seperate process for IPC communication in the Kervi application """
    
    def InitProcess(self):
        print ("init IPC")
        import kervi.utility.socketSpine as socketSpine
        socketSpine.start(self.settings)

    def TerminateProcess(self):
        import kervi.utility.socketSpine as socketSpine
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

    def onGetApplicationInfo(self):
        return self.settings["info"]

    def start(self):

        self.started = True
        process.startRootSpine(self.settings, True)
        s = spine.Spine()
        s.registerQueryHandler("GetApplicationInfo", self.onGetApplicationInfo)
        s.sendCommand("startThreads")

        try:
            import dashboards
        except:
            self.spine.log.exception("load sensors")
            pass


        for module in self.settings["modules"]:
            if module == "sensors":
                time.sleep(2)
                self.p1 = process.startProcess(
                    "sensors",
                    self.settings,
                    self.settings["network"]["IPCBasePort"]+1,
                    KerviSensors
                )

            elif module == "controllers":
                time.sleep(2)
                self.p2 = process.startProcess(
                    "Controllers",
                    self.settings,
                    self.settings["network"]["IPCBasePort"]+2,
                    KerviControllers
                )

        time.sleep(2)
        self.p3 = process.startProcess(
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
        process.stopProcesses()
        time.sleep(2)
        process.stopRootSpine()
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
        spine.initSpine("module-"+name)
        ProcessSpine(settings["network"]["IPCPort"], settings)
        self.spine = spine.Spine()

    def start(self):
        self.started = True
        time.sleep(2)
        self.spine.triggerEvent("moduleStarted", self.name)
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
        self.spine.sendCommand("startThreads")
        time.sleep(1)
        try:
            list = []
            thread.start_new_thread(self.input_thread, (list,))
            while not list:
                time.sleep(1)

        except KeyboardInterrupt:
            pass


        print ("stopping module")
        self.spine.triggerEvent("moduleStopped", self.name)
        time.sleep(1)
