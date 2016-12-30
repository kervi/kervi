# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Web socket ipc used by the web ui to comunicate with Kervi """
import time
import inspect
import json
from kervi.spine import Spine
import kervi.utility.nethelper as nethelper

#from kervi.utility.kerviThread import KerviThread
from autobahn.asyncio.websocket import WebSocketServerProtocol

class _ObjectEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, "to_json"):
            return self.default(obj.to_json())
        elif hasattr(obj, "__dict__"):
            data = dict(
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
            return self.default(data)
        return obj

class _WebCommandHandler(object):
    def __init__(self, command, protocol):
        self.protocol = protocol
        self.command = command
        spine = Spine()
        spine.register_command_handler(command, self.on_command, injected="socketSpine")

    def on_command(self, *args, **kwargs):
        injected = kwargs.get("injected", "")
        if not injected == "socketSpine":
            jsonres = json.dumps({"messageType":"command", "command":self.command, "args":args}, ensure_ascii=False).encode('utf8')
            self.protocol.sendMessage(jsonres, False)

class _WebQueryHandler(object):
    def __init__(self, query, protocol):
        self.protocol = protocol
        self.query = query
        spine = Spine()
        spine.register_query_handler(query, self.on_query, injected="socketSpine")

    def on_query(self, *args, **kwargs):
        injected = kwargs.get("injected", "")
        if not injected == "socketSpine":
            jsonres=json.dumps({"messageType":"query", "query":self.query, "args":args}, ensure_ascii=False).encode('utf8')
            self.protocol.sendMessage(jsonres, False)

class _WebEventHandler(object):
    def __init__(self, event, id_event, protocol):
        self.protocol = protocol
        self.event = event
        self.id_event = id_event
        self.spine = Spine()
        self.spine.register_event_handler(event, self.on_event, id_event, injected="socketSpine")

    def on_event(self, id_event, *args, **kwargs):
        injected = kwargs.get("injected", "")
        self.spine.log.debug("WS relay event:{0} injected:{1}", self.event, injected)
        if not injected == "socketSpine":
            cmd = {"messageType":"event", "event":self.event, "id":id_event, "args":args}
            jsonres = json.dumps(cmd, cls=_ObjectEncoder, ensure_ascii=False).encode('utf8')
            self.protocol.sendMessage(jsonres, False)

class _SpineProtocol(WebSocketServerProtocol):

    def __init__(self):
        self.spine = Spine()
        WebSocketServerProtocol.__init__(self)
        self.handlers = {"command":[], "query":[], "event":[]}

    def add_command_handler(self, command):
        found = False
        for command_handler in self.handlers["command"]:
            if command_handler.command == command:
                found = True
        if not found:
            self.handlers["command"] += [_WebCommandHandler(command, self)]

    def add_query_handler(self, query):
        found = False
        for query_handler in self.handlers["query"]:
            if query_handler.query == query:
                found = True
        if not found:
            self.handlers["query"] += [_WebQueryHandler(query, self)]

    def add_event_handler(self, event, id_event):
        found = False
        for event_handler in self.handlers["event"]:
            if event_handler.event == event and event_handler.id_event == id_event:
                found = True
        if not found:
            self.handlers["event"] += [_WebEventHandler(event, id_event, self)]

    def send_response(self, id, response, state="ok", message=""):
        res = {
            "id":id,
            "messageType":"response",
            "state":state,
            "message":message,
            "response":response
        }
        jsonres = json.dumps(res, ensure_ascii=False).encode('utf8')
        self.sendMessage(jsonres, False)

    def onMessage(self, payload, is_binary):
        try:
            obj = json.loads(payload.decode('utf8'))
            self.spine.log.debug("WS onMessage:{0}", obj)

            if obj["messageType"] == "query":
                res = self.spine.send_query(obj["query"], *obj["args"], injected="socketSpine")
                self.spine.log.debug("query response:{0}", res)
                self.send_response(obj["id"], res)
            elif obj["messageType"] == "registerQueryHandler":
                self.add_query_handler(obj["query"])
                self.send_response(None, None)
            elif obj["messageType"] == "command":
                self.spine.send_command(obj["command"], *obj["args"], injected="socketSpine")
                self.send_response(obj["id"], None)
            elif obj["messageType"] == "registerCommandHandler":
                self.add_command_handler(obj["command"])
                self.send_response(obj["id"], None)
            elif obj["messageType"] == "event":
                self.spine.trigger_event(
                    obj["event"], obj["id"],
                    obj["args"],
                    injected="socketSpine"
                )
                self.send_response(obj["id"], None)
            elif obj["messageType"] == "registerEventHandler":
                self.add_event_handler(obj["event"], obj["eventId"])
                self.send_response(obj["id"], None)
        except :
            self.spine.log.exception("WS onMessage exception")
            #res={"execptionType":exc_type,"value":exc_value,"traceback":exc_traceback}
            #self.sendResponse(res,"exception")

TERMINATE_SOCKET=False
def _start(settings):
    global TERMINATE_SOCKET
    try:
        import asyncio
    except ImportError:
        ## Trollius >= 0.3 was renamed
        import trollius as asyncio

    from autobahn.asyncio.websocket import WebSocketServerFactory

    factory = WebSocketServerFactory()
    factory.protocol = _SpineProtocol

    loop = asyncio.get_event_loop()
    print ("web socket ip:", settings["network"]["IPAddress"], "port:", settings["network"]["WebSocketPort"])

    Spine().log.debug(
        "start websocket on:{0}, port:{1}",
        settings["network"]["IPAddress"],
        settings["network"]["WebSocketPort"]
    )
    coro = loop.create_server(
        factory,
        settings["network"]["IPAddress"],
        settings["network"]["WebSocketPort"]
    )
    loop.run_until_complete(coro)
    try:
        while not TERMINATE_SOCKET:
            loop.run_until_complete(coro)
            time.sleep(.001)
    except KeyboardInterrupt:
            pass
    #loop.run_forever()

def _stop():
    global TERMINATE_SOCKET
    TERMINATE_SOCKET=True