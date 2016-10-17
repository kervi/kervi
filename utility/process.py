
from multiprocessing import Process, Array, Value,Manager, freeze_support
import time
import kervi.spine as spine
from kervi.utility.processSpine import ProcessSpine
import sys
import kervi.kerviLogging as logging 

mainProcessSpine=None
def startRootSpine(settings,resetLog=False):
    global mainProcessSpine
    logging.initProcessLogging("kervi-main",resetLog)
    log=logging.KerviLog("kervi main")
    spine.initSpine("kervi-main")
    mainProcessSpine=ProcessSpine(settings["network"]["IPCBasePort"],settings,isRoot=True)

def stopRootSpine():
    global mainProcessSpine
    mainProcessSpine.closeAllConnections()


class KerviProcess(object):
    def __init__(self,name,settings,ipcPort):
        self.terminate=False
        self.port=ipcPort
        self.settings = settings
        spine.initSpine(name)
        self.spine=spine.Spine()
        
        self.processSpine=ProcessSpine(ipcPort,settings)
        self.InitProcess()
        self.spine.registerCommandHandler("terminateProcess",self.Terminate)

    def Terminate(self,**kwargs):
        print "terminate:",self.port 
        self.processSpine.closeAllConnections()
        self.spine.stop()
        print "t1:",self.port
        self.TerminateProcess()
        self.terminate=True

def f(name,processClass,settings,ipcPort):
    logging.initProcessLogging("KerviSys-"+name,False)
    log=logging.KerviLog(name)
    log.info('create process:{0} ipc port:{1}:',processClass.__name__,ipcPort)
    p=processClass(name,settings,ipcPort)
    try:
        while ( not p.terminate):
            time.sleep(1)
    except:
        pass
        
    log.info("process terminated:{0}",ipcPort)

def startProcess(name,settings,portIdx,processClass):
    p = Process(target=f, args=(name,processClass,settings,portIdx))
    p.start()
    return p

def stopProcesses():
    spine.Spine().sendCommand("terminateProcess")