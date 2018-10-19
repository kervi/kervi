#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

""" Web socket ipc used by the web ui to communicate with Kervi """
import time
import inspect
import json
from kervi.spine import Spine
import kervi.utility.nethelper as nethelper
from kervi.core.authentication import Authorization
import kervi.utility.encryption as encryption

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
        #print("rc", command)
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
        #print("rq:", query)
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
        #print("re", event, id_event)
        self.spine.register_event_handler(event, self.on_event, id_event, injected="socketSpine")
        
    def on_event(self, id_event, *args, **kwargs):
        injected = kwargs.get("injected", "")
        groups = kwargs.get("groups", None)
        process_id = kwargs.get("process_id", None)
        self.spine.log.debug("WS relay event:{0} injected:{1}", self.event, injected)

        authorized = True

        if self.protocol.user != None and self.protocol.user["groups"] != None and groups != None and len(groups) > 0:
            for group in groups:
                if group in self.protocol.user["groups"]:
                    break
            else:
                authorized = False

        if authorized and self.protocol.authenticated and not injected == "socketSpine":
            
            cmd = {"messageType":"event", "event":self.event, "id":id_event, "args":args}
            jsonres = json.dumps(cmd, cls=_ObjectEncoder, ensure_ascii=False).encode('utf8')
            #if self.event=="userLogMessage":
            #    print("wum", id_event, process_id, injected, jsonres)
            self.protocol.sendMessage(jsonres, False)

class _SpineProtocol(WebSocketServerProtocol):

    def __init__(self):
        self.spine = Spine()
        WebSocketServerProtocol.__init__(self)
        self.handlers = {"command":[], "query":[], "event":[]}
        self.authenticated = False
        self.session = None
        self.user = None
        self._authorization = Authorization()

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
        #print("ah", event, id_event)
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

    def onConnect(self, request):
        #print("Web socket Client connecting: {}".format(request.peer))
        pass

    def onOpen(self):
        if self._authorization.active:
            res = {
                "messageType":"authenticate"
            }
        else:
            self.authenticated = True
            res = {
                "messageType":"session_authenticated",
                "session":"123456",
            }
        jsonres = json.dumps(res, ensure_ascii=False).encode('utf8')
        self.sendMessage(jsonres, False)
    
    def onMessage(self, payload, is_binary):
        try:
            obj = json.loads(payload.decode('utf8'))
            
            if obj["messageType"] == "authenticate":
                session, user = self._authorization.authorize(obj["userName"], obj["password"])
                
                if session is None:
                    print("authorization failed for:", obj["userName"])
                    res = {
                        "messageType":"authentication_failed",
                    }
                    #self.close()
                else:
                    self.session = session
                    self.user = user
                    self.authenticated = True
                    res = {
                        "messageType":"session_authenticated",
                        "session":session,
                    }
                jsonres = json.dumps(res, ensure_ascii=False).encode('utf8')
                self.sendMessage(jsonres, False)
            elif obj["messageType"] == "logoff":
                self.authenticated = False
                self.session = None
                self._authorization.remove_session(obj["session"])
                res = {
                    "messageType":"session_logoff"
                }
                jsonres = json.dumps(res, ensure_ascii=False).encode('utf8')
                self.sendMessage(jsonres, False)
            else:
                self.spine.log.debug("WS onMessage:{0}", obj)
                if not self.authenticated:
                    pass
                elif obj["messageType"] == "query":
                    res = self.spine.send_query(obj["query"], *obj["args"], injected="socketSpine", session=self.user)
                    self.spine.log.debug("query response:{0}", res)
                    self.send_response(obj["id"], res)
                elif obj["messageType"] == "registerQueryHandler":
                    self.add_query_handler(obj["query"])
                    self.send_response(None, None)
                elif obj["messageType"] == "command":
                    self.spine.send_command(obj["command"], *obj["args"], injected="socketSpine", session=self.user)
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
        except:
            self.spine.log.exception("WS onMessage exception")
            #res={"execptionType":exc_type,"value":exc_value,"traceback":exc_traceback}
            #self.sendResponse(res,"exception")

class SocketSpine:
    def __init__(self, config):
        coro = None
        self._started = False
        self._config = config
        self._spine = Spine()
        
        try:
            import asyncio
        except ImportError:
            ## Trollius >= 0.3 was renamed
            import trollius as asyncio

        from autobahn.asyncio.websocket import WebSocketServerFactory

        ssl_context = None

        if encryption.enabled():
            print("socket using ssl")
            cert_file, key_file = encryption.get_cert()
            try:
                import ssl
                ssl_context = ssl.SSLContext(ssl.PROTOCOL_SSLv23)
                ssl_context.load_cert_chain(cert_file, key_file)
                print("socket ssl found")
            except:
                ssl_context = None
                print("socket failed to use ssl")

        self._spine.log.debug(
            "start websocket on:{0}, port:{1}",
            self._config.network.ip,
            self._config.network.ws_port
        )
        print("start websocket: ", self._config.network.ip, self._config.network.ws_port)
        self.factory = WebSocketServerFactory()
        self.factory.protocol = _SpineProtocol

        self.loop = asyncio.get_event_loop()
        self.coro = self.loop.create_server(
            self.factory,
            self._config.network.ip,
            self._config.network.ws_port,
            ssl=ssl_context
        )

    def start_socket(self):
        self.loop.run_until_complete(self.coro)
        self._started = True

    def step(self):
        if self._started:
            self.loop.run_until_complete(self.coro)
        #loop.run_until_complete(coro_local)
        time.sleep(.001)
