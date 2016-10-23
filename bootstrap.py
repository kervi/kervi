import kervi.utility.process as process
import time
import kervi.spine as spine
from multiprocessing import  freeze_support
import thread

from kervi.utility.processSpine import ProcessSpine
import sys
import kervi.kerviLogging as logging
import kervi.utility.webserver as webserver

class KerviSensors(process.KerviProcess):
    def InitProcess(self):
        print "init mp sensors"
        import kervi.coreSensors.cpuSensors
        try:
            import sensors
        except:
            self.spine.log.exception("load sensors")
            pass
        #import kervi.utility.storage
        self.spine.sendCommand("startThreads")

    def TerminateProcess(self):     
        pass

class KerviControllers(process.KerviProcess):
    def InitProcess(self):
        print "init mp controller"
        try:
            import controllers
        except:
            self.spine.log.exception("load controllers")
        self.spine.sendCommand("startThreads")
    
    def TerminateProcess(self):
        pass

class KerviSocketIPC(process.KerviProcess):
    def InitProcess(self):
        print "init IPC"
        import kervi.utility.socketSpine as socketSpine
        socketSpine.start(self.settings)

    def TerminateProcess(self):
        import kervi.utility.socketSpine as socketSpine
        socketSpine.stop()

class Application(object):
    def __init__(self,settings):
        self.settings=settings
        self.started=False

    def onGetApplicationInfo(self,*args,**kwargs):
        return self.settings

    def start(self):

        self.started=True
        process.startRootSpine(self.settings, True)
        s=spine.Spine()
        s.registerQueryHandler("GetApplicationInfo", self.onGetApplicationInfo)
        s.sendCommand("startThreads")
        
        for module in self.settings["modules"]:
            if module=="sensors":
                time.sleep(2)
                self.p1=process.startProcess("sensors", self.settings, self.settings["network"]["IPCBasePort"]+1, KerviSensors)
        
            elif module=="controllers":
                time.sleep(2)
                self.p2=process.startProcess("Controllers", self.settings, self.settings["network"]["IPCBasePort"]+2, KerviControllers)
        
        time.sleep(2)
        self.p3=process.startProcess("IPC", self.settings, self.settings["network"]["IPCBasePort"]+3, KerviSocketIPC)
        
        time.sleep(2)
        print "start web ui on:",self.settings["web-ui"]["address"]
        webserver.start(self.settings["web-ui"]["address"])
    
    def input_thread(self,list):
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

        
        print "stopping processes"
        
        webserver.stop()
        process.stopProcesses()
        time.sleep(2)
        process.stopRootSpine()
        time.sleep(2)

class ApplicationModule(object):
    def __init__(self,name,settings):
        self.settings=settings
        self.started=False
        self.name=name
        logging.initProcessLogging("kervimodule-"+name)
        log=logging.KerviLog(name)
        spine.initSpine("module-"+name)
        mainProcessSpine=ProcessSpine(settings["network"]["IPCPort"],settings)
        self.spine=spine.Spine()

    def start(self):
        
        self.started=True
        
        time.sleep(2)
        self.spine.triggerEvent("applicationModuleStarted",self.name)
        time.sleep(2)
    
    def input_thread(self,list):
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


        print "stopping module"
        self.spine.triggerEvent("moduleStopped",self.name)
        time.sleep(1)
        
    