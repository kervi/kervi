import zmq
import random
import sys
import time
import inspect
import threading
import json
import pickle
import uuid
from kervi.utility.named_lists import NamedLists
import kervi.utility.nethelper as nethelper
from  kervi.kervi_logging import KerviLog

_KERVI_COMMAND_ADDRESS = "inproc://kervi_commands"
_KERVI_QUERY_ADDRESS = "inproc://kervi_query"
_KERVI_QUERY_RESPONSE_ADDRESS = "inproc://kervi_query_response"
_KERVI_EVENT_ADDRESS = "inproc://kervi_events"

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

class ProcessConnection:
    def __init__(self, bus, is_root=False):
        self.address = None
        self.process_id = None
        self.is_root_connection = is_root
        self._bus = bus
        self._signal_socket = self._bus._context.socket(zmq.PUB)
        self._lock = threading.Lock()
        #self._signal_socket.setsockopt(zmq.SNDHWM, 1)

    def connect(self, address):
        self.address = address
        self._signal_socket.connect(address)
        time.sleep(.5)
        signal_message = {"address": self._bus._signal_address, "processId": self._bus._process_id}
        p = pickle.dumps(signal_message, -1)
        signal_tag = "signal:connect"
        self.send_package([signal_tag.encode(), p])

    def connect_to(self, address, process_id):
        signal_message = {"address": address, "processId": process_id}
        p = pickle.dumps(signal_message, -1)
        signal_tag = "signal:connect"
        self.send_package([signal_tag.encode(), p])

    def register(self, address, process_id, process_list):
        #print("register", address, process_id)
        self.address = address
        self.process_id = process_id
        self._signal_socket.connect(address)
        
        if process_list:
            time.sleep(.5)
            signal_message = {"address": self._bus._signal_address, "processId": self._bus._process_id, "processList": process_list}
            p = pickle.dumps(signal_message, -1)
            signal_tag = "signal:register"
            self.send_package([signal_tag.encode(), p])

    def disconnect(self):
        if self._signal_socket:
            self._lock.acquire(timeout=2)
            try:
                self._signal_socket.setsockopt( zmq.LINGER, 0 )
                self._signal_socket.close()
                self._signal_socket = None
            finally:
                self._lock.release()    

    def send_package(self, package):
        self._lock.acquire()
        try:
            if self._signal_socket:
                self._signal_socket.send_multipart(package)
        except Exception as ex:
            print("send package exception", ex)
        finally:
            self._lock.release()


class ZMQPingThread(threading.Thread):
    def __init__(self, bus):
        threading.Thread.__init__(self)
        self._bus = bus
        self.daemon = True
        self._terminate = False

    def stop(self):
        self._terminate = True

    def run(self):
        while not self._terminate:
            self._bus._ping_connections()
            time.sleep(1)

class ZMQHandlerThread(threading.Thread):
    def __init__(self, bus, tag, message):
        threading.Thread.__init__(self)
        self._bus = bus
        self._message = message
        self._tag = tag
        self.daemon = True
        self._terminate = False

    def stop(self):
        self._terminate = True

    def run(self):
        self._bus._handle_message(self._tag, self._message)

class ZMQMessageThread(threading.Thread):
    def __init__(self, bus, address, bind=False):
        threading.Thread.__init__(self)
        self._bus = bus
        self._address = address
        self._bind = bind
        self.daemon = True
        self._terminate = False
        self._socket = self._bus._context.socket(zmq.SUB)
        #self._socket.setsockopt( zmq.LINGER, 0 )

    def register(self, tag):
        self._socket.setsockopt_string(zmq.SUBSCRIBE, tag)

    def stop(self):
        self._terminate = True
        #if self._socket:
        #    self._socket.setsockopt( zmq.LINGER, 0 )
        #    self._socket.close()
            
        #self._socket.close()
    def connect(self):
        if self._bind:
            self._socket.bind(self._address)
        else:    
            self._socket.connect(self._address)
        
    def run(self):
        while not self._terminate:
            connection_message = None
            try:
                connection_message = self._socket.recv_multipart(zmq.NOBLOCK)
                [tag, json_message] = connection_message
                message = pickle.loads(json_message)
                #print("t", self._address, tag, message)
                if tag == b"queryResponse":
                    self._bus.resolve_response(message)
                else:
                    handler_thread = ZMQHandlerThread(self._bus, tag.decode('utf-8'), message)
                    handler_thread.start()
                #time.sleep(0.001)
            except zmq.ZMQError as e:
                if e.errno == zmq.EAGAIN:
                    time.sleep(.01)
                    pass
                elif e.errno == zmq.ETERM:
                    #print("terminate", self._address)
                    self._terminate = True
                else:
                    print("message zmq exception:", self._address, e, e.errno)
            except Exception as e:
                print("message exception:", self._address, e, connection_message)
        #print("message thread terminated:", self._address)

class ZMQBus():
    _context = None
    _handlers = NamedLists()
    _connections = []
    _event_sock = None
    _command_sock = None
    _query_sock = None
    log = None

    def __init__(self):
        pass

    def set_log(self, logName):
        self.log = KerviLog(logName)

    @property
    def root_gone(self):
        return not self._is_root and time.time() - self._last_ping > 10
    
    def reset_bus(self, process_id, signal_port, ip="127.0.0.1", root_address=None, event_port=None, root_event=None):
        print("reset bus", process_id, signal_port, ip,root_address, event_port, root_event)
        self._handlers = NamedLists()
        self._process_id = process_id
        self._query_id_count = 0
        self._uuid_handler = uuid.uuid4().hex
        self._is_root = (root_address is None)
        self._root_address = root_address
        self._signal_address = "tcp://"+ ip +":" + str(signal_port)
        self._context = zmq.Context()
        self._response_events = []
        self._last_ping = time.time()
        self._root_event = root_event

        self._event_socket = self._context.socket(zmq.PUB)
        self._event_socket.bind(_KERVI_EVENT_ADDRESS)

        self._command_socket = self._context.socket(zmq.PUB)
        self._command_socket.bind(_KERVI_COMMAND_ADDRESS)

        self._query_socket = self._context.socket(zmq.PUB)
        self._query_socket.bind(_KERVI_QUERY_ADDRESS)

        self._message_handler = ZMQMessageThread(self, self._signal_address, True)
        self._query_handler = ZMQMessageThread(self, _KERVI_QUERY_ADDRESS)
        self._event_handler = ZMQMessageThread(self, _KERVI_EVENT_ADDRESS)
        self._command_handler = ZMQMessageThread(self, _KERVI_COMMAND_ADDRESS)

        self._register_handler("signal:connect", self._on_connect)
        self._register_handler("signal:ping", self._on_ping)
        #self._register_handler("signal:notify", self._on_notify)
        self._register_handler("signal:register", self._on_register)
        self._register_handler("queryResponse", self.resolve_response)

        self._message_handler.register("signal:connect")
        self._message_handler.register("signal:ping")
        self._message_handler.register("signal:notify")
        self._message_handler.register("signal:register")

        self._message_handler.register("queryResponse")
        self._message_handler.register("query:")

        self._query_handler.register("query:")

        self._ping_thread = ZMQPingThread(self)
        self._command_lock = threading.Lock()
        self._event_lock = threading.Lock()
        self._query_lock = threading.Lock()

    def _register_handler(self, tag, func, **kwargs):
        groups = kwargs.get("groups", None)
        argspec = inspect.getargspec(func)
        self._handlers.add(tag, (func, groups, argspec.keywords != None))

    def get_handler_info(self):
        return self._handlers.get_list_names()

    def get_connection_info(self):
        result = []
        for connection in self._connections:
            result += [{"process": connection.process_id, "address": connection.address}]
        return result

    def _handle_message(self, tag, message):
        func_list = []
        functions = self._handlers.get_list_data(tag)
        if functions:
            func_list += functions
        if tag.startswith("event:"):
            tag_parts = tag.split(":")
            event = "event:" + tag_parts[1] +":"
            functions = self._handlers.get_list_data(event)
            if functions:
                func_list += functions
            #print("eh", tag, event, self._signal_address)

        result = []
        session = None
        session_groups = None
        if "session" in message:
            session = message["session"]
            if session:
                session_groups = session['groups']
            else:
                session_groups = None

        if "injected" in message:
            injected = message["injected"]
        else:
            injected = None

        message_args = []
        if "id" in message and not tag.startswith("query:"):
            message_args += [message["id"]]

        response_address = None
        if "responseAddress" in message:
            response_address = message["responseAddress"]

        if "address" in message:
            message_args += [message["address"]]

        if "processId" in message:
            message_args += [message["processId"]]

        if "processList" in message:
            message_args += [message["processList"]]

        if "args" in message:
            message_args += message["args"]

        try:
            if func_list:
                for func, groups, has_keywords in func_list:
                    authorized = True
                    #print("ma", has_keywords, message_args, func)
                    if session_groups != None and groups and len(groups) > 0:
                        for group in groups:
                            if group in session_groups:
                                break
                        else:
                            authorized = False

                    if authorized:
                        if not has_keywords:
                            sub_result = func(*message_args)
                            if sub_result:
                                result += [sub_result]
                        else:
                            sub_result = func(*message_args, injected=message["injected"], scope=message["scope"])
                            if sub_result:
                                result += [sub_result]
            if len(result) == 1:
                result = result[0]
        except Exception as e:
            raise e

        if response_address:
            #print("qrr", tag, response_address, message)
            message = {"messageType":"queryResponse", "address": self._signal_address, "id":message["id"], "response":result}
            if response_address == "inproc_query":
                self.resolve_response(message)
            else:
                self.send_connection_message(response_address, "queryResponse", message)

        return result

    def run(self):
        self._message_handler.connect()
        self._message_handler.start()
        time.sleep(1)
        self._event_handler.connect()
        self._command_handler.connect()
        self._query_handler.connect()

        self._query_handler.start()
        self._event_handler.start()
        self._command_handler.start()

        if self._root_address:
            self.connect_to_root()

        self._ping_thread.start()
        #print("start bus", self._process_id, self._root_address, self._is_root)
    def stop(self):

        self._ping_thread.stop()
        self._ping_thread.join()
        self._message_handler.stop()
        self._event_handler.stop()
        self._command_handler.stop()
        self._query_handler.stop()

        for connection in self._connections:
            connection.disconnect()

        self._message_handler.join()
        self._event_handler.join()
        self._command_handler.join()
        self._query_handler.join()
        
        self._event_socket.close()
        self._command_socket.close()
        self._query_socket.close()

        

    def _on_connect(self, address, process_id):
        #print("on_connect", self._signal_address, address, process_id)
        result = None
        new_connection = True
        connection_list = []
        for connection in self._connections:
            if self._is_root:
                connection_list += [{"address":connection.address, "processId":connection.process_id}]
            if connection.process_id == process_id:
                connection.reconnect(address)
                new_connection = False
                result = connection

        if new_connection:
            #print("new connection", self._signal_address, address, process_id)
        
            connection = ProcessConnection(self)
            connection.register(address, process_id, connection_list)
            self._connections += [connection]
            #print("scn", self._signal_address, self.get_connection_info())
            result = connection

        return result

    def _on_register(self, address, process_id, process_list):
        #print("on_register", self._signal_address, address, process_id, process_list)
        connection_ids = []
        for connection in self._connections:
            connection_ids += [connection.address]

        for process in process_list:
            new_connection = True
            for connection_id in connection_ids:
                if connection_id == process["processId"]:
                    new_connection = False
                    break

            if new_connection:
                connection = ProcessConnection(self)
                connection.process_id = process["processId"]
                connection.connect(process["address"])
                self._connections += [connection]
                if self._root_event:
                    self._root_event.set()

    def connect_to_root(self):
        #print("connect to root", self._signal_address, self._root_address)
        connection = ProcessConnection(self, True)
        connection.connect(self._root_address)
        self._connections += [connection]

    def send_connection_message(self, address, tag, message):
        for connection in self._connections:
            if connection.address == address:
                p = pickle.dumps(message, -1)
                connection.send_package([tag.encode(), p])
                return
        print("connection not found", address, tag, message)

    def _on_ping(self, address, process_id):
        #print("on_ping", self._signal_address, address, process_id)
        self._last_ping = time.time()
        for connection in self._connections:
            if connection.process_id == process_id:
                connection.reconnect(address)
                return

    def _ping_connections(self):
        if self._is_root:
            ping_message = {
                'address':self._signal_address,
                'processId':self._process_id
            }
            p = pickle.dumps(ping_message, -1)
            ping_tag = "signal:ping"
            package = [ping_tag.encode(), p]
            
            for connection in self._connections:
                connection.send_package(package)

    def send_command(self, command, *args, **kwargs):
        injected = kwargs.get("injected", "")
        scope = kwargs.get("scope", "global")
        groups = kwargs.get("groups", None)
        session = kwargs.get("session", None)
        command_message = {
            "command":command,
            "args":args,
            "injected":injected,
            "scope":scope,
            "session":session,
            "groups": groups
        }
        #jsonres = json.dumps(command_message)
        p = pickle.dumps(command_message, -1)
        command_tag = "command:" + command
        package = [command_tag.encode(), p]
        self._command_lock.acquire()
        try:
            self._command_socket.send_multipart(package)
        finally:
            self._command_lock.release()

        if scope == "global":
            for connection in self._connections:
                connection.send_package(package)

    def register_command_handler(self, command, func, **kwargs):
        tag = "command:"+command
        self._register_handler(tag, func, **kwargs)
        self._command_handler.register(tag)
        self._message_handler.register(tag)

    def trigger_event(self, event, id, *args, **kwargs):
        injected = kwargs.get("injected", "")
        scope = kwargs.get("scope", "global")
        groups = kwargs.get("groups", None)
        session = kwargs.get("session", None)
        event_message = {
            'event':event,
            'id':id,
            'args':args,
            "injected":injected,
            "scope":scope,
            "groups":groups,
            "session":session
        }
        #jsonres = json.dumps(event_message)
        p = pickle.dumps(event_message, -1)
        event_tag = "event:" + event + ":"
        if id:
            event_tag += id
        package = [event_tag.encode(), p]
        self._event_lock.acquire()
        try:
            self._event_socket.send_multipart(package)
        finally:
            self._event_lock.release()

        if scope == "global":
            for connection in self._connections:
                connection.send_package(package)

    def register_event_handler(self, event, func, component_id=None, **kwargs):
        tag = "event:"+event +":"
        #tag_id = id
        if component_id:
            tag +=  component_id
        if func:
            self._register_handler(tag, func, **kwargs)
        self._event_handler.register(tag)
        self._message_handler.register(tag)

    def resolve_response(self, message):
        #print("m", message)
        for event in self._response_events:
            #print("e", event["id"], event["id"] == message["id"], event["process_count"])
            if event["id"] == message["id"] and not event["processed"]:
                if message["response"]:
                    event["response"] += [message["response"]]
                event["process_count"] = event["process_count"] - 1
                event["handled_by"] += [message["address"]]
                #print("e", event["id"], event["id"] == message["id"], event["process_count"])
                if  event["process_count"] <= 0:
                    event["processed"] = True
                    event["eventSignal"].set()

    def send_query(self, query, *args, **kwargs):
        self._query_id_count += 1
        result = []
        injected = kwargs.get("injected", "")
        scope = kwargs.get("scope", "global")
        groups = kwargs.get("groups", None)
        session = kwargs.get("session", None)
        processes = kwargs.get("processes", None)
        self._query_id_count += 1
        query_id = self._uuid_handler + "-" + str(self._query_id_count)

        process_count = 1
        if scope == "global":
            process_count += len(self._connections)

        event = threading.Event()
        event_data = {
            "id":query_id,
            "eventSignal":event,
            "response":[],
            "processed":False,
            "process_count": process_count,
            "process_id": self._process_id,
            "query": query,
            "handled_by": []
        }
        self._response_events += [event_data]
        #print("rs", self._response_events)
        query_message = {
            'query':query,
            "id":query_id,
            "responseAddress":"inproc_query",
            'args':args,
            "injected":injected,
            "scope":scope,
            "groups":groups,
            "session":session
        }
        #jsonres = json.dumps(query_message)
        p = pickle.dumps(query_message, -1)
        query_tag = "query:" + query
        package = [query_tag.encode(), p]
        self._query_lock.acquire()
        try:
            self._query_socket.send_multipart(package)
        finally:
            self._query_lock.release()

        if scope == "global" and len(self._connections) > 0:
            query_message["responseAddress"] = self._signal_address
            p = pickle.dumps(query_message, -1)
            package = [query_tag.encode(), p]
        
            for connection in self._connections:
                if not processes or (connection.process_id in processes):
                    connection.send_package(package)
                else:
                    event_data["process_count"] - 1
                    print("process ignored", processes)

        event.wait(10)
        if not event_data["processed"]:
            print("sq timeout", self._signal_address, query, event_data["handled_by"])
        result += [event_data["response"]]
        self._response_events.remove(event_data)
        #print("qr", len(self._response_events), result)
        if isinstance(result, list) and not isinstance(result, dict) and len(result) == 1:
            return result[0]
        else:
            return result

    def register_query_handler(self, query, func, **kwargs):
        self._register_handler("query:"+query, func, **kwargs)

# S = None
# def _init_spine(process_id, spine_port, root_address = None, ip="127.0.0.1"):
#     global S
#     print("yx")
#     S = ZMQBus()
#     event = None
    
#     if root_address:
#         print("x")
#         event = threading.Event()
#     S.reset_bus(process_id, spine_port, ip, root_address, event)
#     s.run()

#     if event:
#         print("wait for root")
#         event.wait(5)
#         print("root connected", process_id)

    

# def Spine():
#     print("S", S)
#     return S
