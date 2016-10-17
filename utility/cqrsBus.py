from kervi.utility.namedLists import NamedLists
from collections import deque
from kervi.utility.kerviThread import KerviThread
import threading
import sys, traceback
import time
import Queue
from  kervi.kerviLogging import KerviLog

class QueryThread (threading.Thread):
    def __init__(self,handler,query,args,**kwargs):
        threading.Thread.__init__(self)
        injected=kwargs.get("injected","")
        self.daemon = True
        self.handler=handler
        self.query=query
        self.args=args
        self.result=[]
        self.injected=injected
    def run(self):
        self.result=self.handler(self.query,self.args,injected=self.injected)
		
class CQRSQueue(KerviThread):
	
	
    def __init__(self,name):
        KerviThread.__init__(self)
        self.queues=[ Queue.Queue(), Queue.Queue(), Queue.Queue()]
        self.name=name

    def getInfo(self):
        queueSize=[]
        for queue in self.queues:
            queueSize+=[len(queue)]

        info={"queueSize":queueSize}
        return info

    def setQueuehandler(self,handler):
        self.queueHandler=handler
        super(KerviThread,self).start()

    def add(self,item,priorty=0):
        self.queues[0].put_nowait(item)

    def step(self):
        item=self.queues[0].get()
        self.queueHandler(item)

class CQRSBus(object):
    applicationId=""
    cmdHandlers=NamedLists()
    eventHandlers=NamedLists()
    queryHandlers=NamedLists()

    cmdQueue=CQRSQueue("cmd")
    queryQueue=CQRSQueue("query")
    eventQueue=None #CQRSQueue("event")

    linkedSpines=[]
    log=None


    def __init__(self):
        return
	
    def stop(self):
        self.cmdQueue.stop()
        self.queryQueue.stop()
        self.eventQueue.stop()

    def reset(self):
        self.cmdHandlers=NamedLists()
        self.eventHandlers=NamedLists()
        self.queryHandlers=NamedLists()
        self.cmdQueue.stop()
        self.queryQueue.stop()
        #self.eventQueue.stop()

        self.cmdQueue=CQRSQueue("cmd")
        self.queryQueue=CQRSQueue("query")
        self.eventQueue=CQRSQueue("event")

        self.linkedSpines=[]
	
    def setLog(self,logName):
        self.log=KerviLog(logName)

    def addLinkedSpine(self,ls):
        self.linkedSpines+=[ls]
	
    def getQueueInfo(self):
        info={"cmd":self.cmdQueue.getInfo(),"queryQueue":self.queryQueue.getInfo(),"event":self.eventQueue.getInfo()}
        return info;

    def startQueues(self):
        self.cmdQueue.setQueuehandler(self.commandQueueHandler)
        self.eventQueue.setQueuehandler(self.eventQueueHandler)

    def registerCommandHandler(self,name,func,**kwargs):
        injected=kwargs.get("injected","")
        self.log.debug("register command handler, command:{0} injected:{1}",name,injected)
        self.cmdHandlers.add(name,func)
        for ls in self.linkedSpines:
            ls.addLinkedCommandHandler(name,injected=injected)
	
    def registerEventHandler(self, name,func,id=None,**kwargs):
        injected=kwargs.get("injected","")
        self.log.debug("register event handler event:{0} id:{1} injected:{2}",name,id,injected)
        if id:
            self.eventHandlers.add(name+"/"+id,func)
        else:
            self.eventHandlers.add(name,func)

        for ls in self.linkedSpines:
            ls.addLinkedEventHandler(name,id,injected=injected)

        return func

    def registerQueryHandler(self, name,func,**kwargs):
        injected=kwargs.get("injected","")
        self.log.debug("register query handler query:{0} injected:{1}",name,injected)
        self.queryHandlers.add(name,func)
        for ls in self.linkedSpines:
            ls.addLinkedQueryHandler(name,injected=injected)
	
    def sendCommand(self,command,*args,**kwargs):
        injected=kwargs.get("injected","")
        self.log.debug("sendcommand:{0} injected:{1}",command,injected)
        self.cmdQueue.add({"command":command,"args":args,"injected":injected},kwargs.get("priority",2))
			
    def commandQueueHandler(self,queueItem):
        funcList=self.cmdHandlers.getListData(queueItem['command'])
        if funcList:
            for funcHandler in funcList:
                try:
                    funcHandler(*queueItem['args'],injected=queueItem["injected"])
                except:
                    self.log.exception("commandQueueHandler error:"+queueItem['command'])

    def sendQuery(self,query,*args,**kwargs):
        injected=kwargs.get("injected","")
        self.log.debug("sendQuery:{0} injected:{1}",query,injected)
        if (query=="getQueueInfo"):
            return self.getQueueInfo()
        q=QueryThread(self.queryHandler,query,args,injected=injected)
        q.start()
        q.join()
        return q.result

    def queryHandler(self,query,args,**kwargs):	
        injected=kwargs.get("injected","")
        self.log.debug("query handler called:{0} injected:{1}",query,injected)
        funcList=self.queryHandlers.getListData(query)
        result=[]
        if funcList:
            for func in funcList:
                subResult=func(*args,injected=injected)
                if subResult:
                    result+=[func(*args,injected=injected)]

        if len(result)==1:
            return result[0]

        return result

    def triggerEvent(self,event,id,*args,**kwargs):
        injected=kwargs.get("injected","")
        self.log.debug("triggerEvent:{0}, id:{1} injected:{2}",event,id,injected)
        self.eventQueue.add({'event':event,'id':id,'args':args,"injected":injected},kwargs.get("priority",2))
		
    def eventQueueHandler(self,queueItem):
        funcList=self.eventHandlers.getListData(queueItem['event'])
        if funcList:
            for func in funcList:
                func(None,*queueItem['args'],injected=queueItem["injected"])
        if (queueItem["id"]):
            funcList=self.eventHandlers.getListData(queueItem['event']+"/"+queueItem['id'])
            if funcList:
                for func in funcList:
                    func(queueItem["id"],*queueItem['args'],injected=queueItem["injected"])

    def getCommands(self):
        return self.cmdHandlers.getListNames()

    def getQueries(self):
        return self.queryHandlers.getListNames()

    def getEvents(self):
        return self.eventHandlers.getListNames()