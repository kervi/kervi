# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" IPC between processes  """

from multiprocessing.connection import Listener, Client
import time
import threading
import kervi.spine as spine
import sys, traceback
import kervi.utility.nethelper as nethelper

class ConnCommandHandler(object):
    def __init__(self, command, conn,src):
        self.conn = conn
        self.command = command
        self.spine = spine.Spine()
        self.src=src
        self.spine.registerCommandHandler(command,self.onCommand, injected="processSpine")
        
    def onCommand(self,*args,**kwargs):
        try:
            injected=kwargs.get("injected","")
            if  not injected=="processSpine":
                self.conn.send({"messageType":"command","command":self.command,"args":args})
        except IOError:
            self.spine.log.debug(" IOError ConnCommandHandler:{0}",self.src)
        except:
            self.spine.log.exception("ConnCommandHandler")

class ConnQueryHandler(object):
    idCount=0

    def __init__(self,query,conn,processSpine,src):
        self.conn=conn
        self.query=query
        self.processSpine=processSpine
        self.spine=spine.Spine()
        self.src=src
        self.spine.registerQueryHandler(query,self.onQuery,injected="processSpine")
        
    def onQuery(self,*args,**kwargs):
        try:
            injected=kwargs.get("injected","")
            if not injected=="processSpine":
                self.idCount+=1
                self.conn.send({"id":self.idCount,"messageType":"query","query":self.query,"args":args})
                e=threading.Event()
                eventData={"id":self.idCount,"eventSignal":e,"response":None,"processed":False}
                self.processSpine.addResponseEvent(eventData)
                e.wait()
                res=eventData["response"]
                eventData["processed"]=True
                return res
        except IOError:
                self.processSpine.spine.log.debug("IOError in ConnQueryHandler:{0}",self.src)
        except:
            self.spine.log.exception("ConnQueryHandler")
            pass

class ConnEventHandler(object):
    def __init__(self,event,id,conn,src):
        self.conn=conn;
        self.event=event
        self.id=id
        self.src=src
        self.spine=spine.Spine()
        self.spine.registerEventHandler(event,self.onEvent,id,injected="processSpine")
        
    def onEvent(self,id,*args,**kwargs):
        try:
            injected=kwargs.get("injected","")
            if not injected=="processSpine":
                self.spine.log.debug("trigger event: {0} on:{1} ",self.event,self.src)
                self.conn.send({"messageType":"event","event":self.event,"id":id,"args":args})
        except IOError:
                self.spine.log.debug("IOError ConnEventHandler:",self.src)
        except:
            self.spine.log.exception("ConnEventHandler")
            pass
 
class ClientConnectionThread (threading.Thread):
    def __init__(self,processSpine):
        threading.Thread.__init__(self)
        self.daemon = True
        self.processSpine=processSpine
        self.terminate=False
    def run(self):
        try:
            while not self.terminate:
                conn=self.processSpine.listener.accept()
                
                self.processSpine.spine.log.debug('connection accepted from {0}', self.processSpine.listener.last_accepted)
                self.processSpine.addProcessConnection(conn,self.processSpine.listener.last_accepted)
                if self.processSpine.isRoot:
                    conn.send({"messageType":"processList","list":self.processSpine.getIPCProcesses()})
        except IOError:
                self.processSpine.spine.log.debug("IOError in ClientConnectionThread")
        except:
            self.processSpine.spine.log.exception("ClientConnectionThread")
            pass    
        
class ConnectionMessageThread (threading.Thread):
    def __init__(self,processSpine,conn,src,isRootConnection=False):
        threading.Thread.__init__(self)
        self.daemon = True
        self.processSpine=processSpine
        self.connection=conn
        self.terminate=False
        self.isRootConnection=isRootConnection
        self.src=src
    def run(self):
        try:
            while not self.terminate:
                message=self.connection.recv()
                self.processSpine.handleMessage(message,self.connection,self.src)
                time.sleep(0.001)
            self.connection.close()
        except EOFError:
            self.processSpine.spine.log.debug("connection messageThread eof from:{0}",self.src)
            self.processSpine.connectionTerminated(self)
        except IOError:
            self.processSpine.spine.log.debug("connection messageThread disconnected from:{0}",self.src)
            self.processSpine.connectionTerminated(self)
        except:
            self.processSpine.spine.log.exception("connectionMessageThread",self.src)
            pass

class ProcessSpine(object):
    def __init__(self,port,settings,**kwargs):
        self.isRoot=kwargs.get("isRoot",False)
        self.spine=spine.Spine()
        self.settings=settings
        self.port=port
        self.address = (nethelper.getIPAddress(), port)
        self.listener=Listener(self.address, authkey=self.settings["network"]["IPCSecret"])
        self.responseList=[]   
        self.processList=[]
        self.processConnections=[]
        self.handlers={"command":[],"query":[],"event":[]}


        self.spine.addLinkedSpine(self)
        self.clientConnectionThread=ClientConnectionThread(self)
        self.clientConnectionThread.start()
        

        self.registerAtRoot()
        

    def getIPCProcesses(self,*args,**kwargs):
        
        return self.processList

    def registerAtRoot(self):
        if self.isRoot:
            return
        
        conn=None
        while conn==None:
            try:
                print ("Try to connect to root")
                conn = Client(self.settings["network"]["IPCRoot"], authkey=self.settings["network"]["IPCSecret"])
            except IOError:
                print ("root not found")
                time.sleep(1)
        print ("root found and connected")
        conn.send({"messageType":"registerProcess","address":self.address})
        self.addProcessConnection(conn,self.settings["network"]["IPCRoot"],True)

    def registerProcess(self,process):
        self.processList+=[process]

    def addProcessConnections(self,processList):
        for p in processList:
            if p!=self.address:
                try:
                    conn = Client(p, authkey=self.settings["network"]["IPCSecret"])
                    self.addProcessConnection(conn,p)  
                except:
                    
                    print ("error connection to:",p)

    def connectionTerminated(self,connection):
        
        try:
            self.processConnections.remove(connection)
        except:
            pass
        

        for a in self.handlers:
            for h in self.handlers[a]:
                if (h.src==connection.src):
                    try:
                        h.stop()
                        self.handlers[a].remove(connection)
                        break
                    except:
                        pass
       
        if connection.isRootConnection:
        #     for p in self.processConnections:
        #         p.connection.close()

            #self.handlers={"command":[],"query":[],"event":[]}

            self.registerAtRoot()

    def sendMessage(self,port,message):
        self.clientConnections[port].send(message) 

    def addProcessConnection(self,conn,src,isRootConnection=False):
        connThread=ConnectionMessageThread(self,conn,src,isRootConnection)
        self.processConnections+=[connThread]  
        connThread.start()
        
        injectedCommands=[]
        for ijc in self.handlers["command"]:
            injectedCommands+=[{"command":ijc.command,"matched":False}]
        for cmd in self.spine.getCommands():
            found=False
            for ic in injectedCommands:
                if ic["command"]==cmd and not ic["matched"]:
                    found=True
                    ic["matched"]=True 
            
            if not found:
                conn.send({"messageType":"registerCommandHandler","command":cmd})


        injectedQueries=[]
        for ijq in self.handlers["query"]:
            injectedQueries+=[{"query":ijq.query,"matched":False,"src":ijq.src}]

        for query in self.spine.getQueries():
            found=False
            for iq in injectedQueries:
                if iq["query"]==query and not iq["matched"]:
                    found=True
                    iq["matched"]=True 

            if not found:
                conn.send({"messageType":"registerQueryHandler","query":query}) 

        injectedEvents=[]
        for ije in self.handlers["event"]:
            injectedEvents+=[{"id":ije.id,"event":ije.event,"matched":False}]

        for event in self.spine.getEvents():
            path=event.split("/")
            eventName=path[0]
            eventId=None
            if (len(path)>1):
                eventId=path[1]
            found=False
            for ie in injectedEvents:
                if ie["id"]==eventId and ie["event"]==eventName and not ie["matched"]:
                    found=True
                    ie["matched"]=True 

           
            if not found:
                conn.send({"messageType":"registerEventHandler","eventId":eventId,"event":eventName})        

    def closeAllConnections(self):
        self.listener.close()
        for connThread in self.processConnections:
            connThread.terminate=True
            #connThread.join()
        self.clientConnectionThread.terminate=True
        time.sleep(1)

    def addCommandHandler(self,command,connection,src):
        found=False
        for ch in self.handlers["command"]:
            if ch.command==command and ch.conn==connection:
                found=True
        if not found:
            self.handlers["command"]+=[ConnCommandHandler(command,connection,src)]

    def addLinkedCommandHandler(self,name,**kwargs):
        injected=kwargs.get("injected","")
        if not injected=="processSpine":
            for connThread in self.processConnections:
                
                connThread.connection.send({"messageType":"registerCommandHandler", "command":name})        
	
    def addQueryHandler(self,query,connection,src):
        found=False
        for qh in self.handlers["query"]:
            if qh.query==query and qh.conn==connection:
                found=True
        if not found:
            self.handlers["query"]+=[ConnQueryHandler(query,connection,self,src)]

    def addLinkedQueryHandler(self,name,**kwargs):
        injected=kwargs.get("injected","")
        if not injected=="processSpine":
            for connThread in self.processConnections:
                connThread.connection.send({"messageType":"registerQueryHandler", "query":name})


    def addLinkedEventHandler(self,name,id,**kwargs):
        injected=kwargs.get("injected","")
        if not injected=="processSpine":
            for connThread in self.processConnections:
                connThread.connection.send({"messageType":"registerEventHandler", "event":name,"eventId":id})
        

    def addEventHandler(self,event,id,connection,src):
        found=False
        for eh in self.handlers["event"]:
            if eh.event==event and eh.id==id and eh.conn==connection:
                found=True
        if not found:
            self.handlers["event"]+=[ConnEventHandler(event,id,connection,src)]   

    def addResponseEvent(self,event):
        self.responseList+=[event]  
    
    def resolveResponse(self,message):
        for event in self.responseList:
            if (event["id"]==message["id"]):
                event["response"]=message["response"]
                event["eventSignal"].set()

    def handleMessage(self,message,connection,src):
        try:
            self.spine.log.debug("message from:{0} on:{1} message:{2}",src,self.port,message)
            if message["messageType"]=="query":
                res=self.spine.sendQuery(message["query"],*message["args"],injected="processSpine")
                connection.send({"messageType":"queryResponse","id":message["id"],"response":res})
                
            elif message["messageType"]=="queryResponse":
                self.resolveResponse(message)
            elif message["messageType"]=="registerQueryHandler":
                self.addQueryHandler(message["query"],connection,src)
                
            elif message["messageType"]=="command":
                self.spine.sendCommand(message["command"],*message["args"], injected="processSpine")
                
            elif message["messageType"]=="registerCommandHandler":
                self.addCommandHandler(message["command"],connection,src)
                
            elif message["messageType"]=="event":
                self.spine.triggerEvent(message["event"],message["id"],*message["args"],injected="processSpine")
                
            elif message["messageType"]=="registerEventHandler":
                self.addEventHandler(message["event"],message["eventId"],connection,src)
            elif message["messageType"]=="processList":
                self.addProcessConnections(message["list"])
            elif message["messageType"]=="registerProcess":
                self.registerProcess(message["address"])
        except:
            self.spine.log.exception("on process message")