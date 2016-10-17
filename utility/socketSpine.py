from kervi.spine import Spine
from kervi.utility.kerviThread import KerviThread
from autobahn.asyncio.websocket import WebSocketServerProtocol
import json
import kervi.utility.nethelper as nethelper 
import time
import inspect

class ObjectEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, "to_json"):
            return self.default(obj.to_json())
        elif hasattr(obj, "__dict__"):
            d = dict(
                (key, value)
                for key, value in inspect.getmembers(obj)
                if not key.startswith("__")
                and not inspect.isabstract(value)
                and not inspect.isbuiltin(value)
                and not inspect.isfunction(value)
                and not inspect.isgenerator(value)
                and not inspect.isgeneratorfunction(value)
                and not inspect.ismethod(value)
                and not inspect.ismethoddescriptor(value)
                and not inspect.isroutine(value)
            )
            return self.default(d)
        return obj

class WebCommandHandler(object):
    def __init__(self,command,protocol):
        self.protocol=protocol
        self.command=command
        spine=Spine()
        spine.registerCommandHandler(command,self.onCommand,injected="socketSpine")
		
		
    def onCommand(self,*args,**kwargs):
        injected=kwargs.get("injected","")
        if not injected=="socketSpine":
            jsonres=json.dumps({"messageType":"command","command":self.command,"args":args}, ensure_ascii = False).encode('utf8')
            self.protocol.sendMessage(jsonres,False)

class WebQueryHandler(object):
    def __init__(self,query,protocol):
        self.protocol = protocol
        self.query=query
        spine=Spine()
        spine.registerQueryHandler(query,self.onQuery,injected="socketSpine")
		
    def onQuery(self,*args,**kwargs):
        injected=kwargs.get("injected","")
        if not injected=="socketSpine":
            jsonres=json.dumps({"messageType":"query","query":self.query,"args":args}, ensure_ascii = False).encode('utf8')
            self.protocol.sendMessage(jsonres,False)

class WebEventHandler(object):
	def __init__(self,event,id,protocol):
		self.protocol=protocol;
		self.event=event
		self.id=id
		self.spine=Spine()
		self.spine.registerEventHandler(event,self.onEvent,id,injected="socketSpine")
		
	def onEvent(self,id,*args,**kwargs):
		injected=kwargs.get("injected","")
		self.spine.log.debug("WS relay event:{0} injected:{1}",self.event,injected)
		if not injected=="socketSpine":
			cmd={"messageType":"event","event":self.event,"id":id,"args":args}
			jsonres=json.dumps(cmd,cls=ObjectEncoder, ensure_ascii = False).encode('utf8')
			self.protocol.sendMessage(jsonres,False)

class SpineProtocol(WebSocketServerProtocol):
	
	def __init__(self):
		self.spine=Spine()
		WebSocketServerProtocol.__init__(self)
		self.handlers={"command":[],"query":[],"event":[]}
	
	def addCommandHandler(self,command):
		found=False
		for ch in self.handlers["command"]:
			if ch.command==command:
				found=True
		if not found:
			self.handlers["command"]+=[WebCommandHandler(command,self)]
	
	def addQueryHandler(self,query):
		found=False
		for qh in self.handlers["query"]:
			if qh.query==query:
				found=True
		if not found:
			self.handlers["query"]+=[WebQueryHandler(query,self)]

	def addEventHandler(self,event,id):
		found=False
		for eh in self.handlers["event"]:
			if eh.event==event and eh.id==id:
				found=True
		if not found:
			self.handlers["event"]+=[WebEventHandler(event,id,self)]
	
	def sendResponse(self,id,response,state="ok",message=""):
		res= {"id":id,"messageType":"response","state":state,"message":message,"response":response}
		jsonres=json.dumps(res, ensure_ascii = False).encode('utf8')
		self.sendMessage(jsonres, False)
		
	
	def onMessage(self, payload, isBinary):
		try:
			obj = json.loads(payload.decode('utf8'))
			self.spine.log.debug("WS onMessage:{0}",obj)
			
			if obj["messageType"]=="query":
				res=self.spine.sendQuery(obj["query"],*obj["args"],injected="socketSpine")
				self.spine.log.debug("query response:{0}",res)
				self.sendResponse(obj["id"],res)
			elif obj["messageType"]=="registerQueryHandler":
				self.addQueryHandler(obj["query"])
				self.sendResponse(None)
			elif obj["messageType"]=="command":
				self.spine.sendCommand(obj["command"],*obj["args"],injected="socketSpine")
				self.sendResponse(obj["id"],None)
			elif obj["messageType"]=="registerCommandHandler":
				self.addCommandHandler(obj["command"])
				self.sendResponse(obj["id"],None)
				
			elif obj["messageType"]=="event":
				self.spine.triggerEvent(obj["event"],obj["id"],obj["args"],injected="socketSpine")
				self.sendResponse(obj["id"],None)
			elif obj["messageType"]=="registerEventHandler":
				self.addEventHandler(obj["event"],obj["eventId"])
				self.sendResponse(obj["id"],None)
		except :
			self.spine.log.exception("WS onMessage exception")
			#res={"execptionType":exc_type,"value":exc_value,"traceback":exc_traceback}
			#self.sendResponse(res,"exception")
			
 		return

terminateSocket=False
def start(settings):
	global terminateSocket
	try:
		import asyncio
	except ImportError:
		## Trollius >= 0.3 was renamed
		import trollius as asyncio

	from autobahn.asyncio.websocket import WebSocketServerFactory

	factory = WebSocketServerFactory()
	factory.protocol = SpineProtocol

	loop = asyncio.get_event_loop()
	print "web socket ip:",nethelper.getIPAddress(), "port:",settings["network"]["WebSocketPort"]
	
	Spine().log.debug("start websocket on:{0}, port:{1}",nethelper.getIPAddress(),settings["network"]["WebSocketPort"])
	coro = loop.create_server(factory, nethelper.getIPAddress(), settings["network"]["WebSocketPort"])
	server = loop.run_until_complete(coro)
	try:
		while not terminateSocket:
			loop.run_until_complete(coro)
			time.sleep(.001)
	except KeyboardInterrupt:
            pass
	#loop.run_forever()

def stop():
	global terminateSocket
	terminateSocket=True