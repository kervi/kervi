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

import zmq
import random
import sys
import time
import inspect
import threading
import json
import uuid
import queue
import datetime
import logging
from kervi.plugin.message_bus.zmq.named_lists import NamedLists
import kervi.utility.nethelper as nethelper
from  kervi.core.utility.kervi_logging import KerviLog
from kervi.config.configuration import _KerviConfig
import base64

_KERVI_COMMAND_ADDRESS = "inproc://kervi_commands"
_KERVI_QUERY_ADDRESS = "inproc://kervi_query"
_KERVI_QUERY_RESPONSE_ADDRESS = "inproc://kervi_query_response"
_KERVI_EVENT_ADDRESS = "inproc://kervi_events"
_KERVI_STREAM_ADDRESS = "inproc://kervi_streams"

class _ObjectEncoder(json.JSONEncoder):
    def default(self, o):
        
        if o and isinstance(o, datetime.datetime):
           return o.strftime("%Y-%m-%dT%H:%M:%SZ")
        elif o and isinstance(o, bytes):
            return base64.b64encode(o).decode("utf8")
        elif o and isinstance(o, bytearray):
            return base64.b64encode(o).decode('utf8')
        elif o and isinstance(o, _KerviConfig):
            return o.as_dict()
        else:
            return json.JSONEncoder.default(self, o)

class ProcessConnection:
    def __init__(self, bus, is_root=False):
        self.address = None
        self.process_id = None
        self.is_connected = False
        self.is_root_connection = is_root
        self.include_ping = False
        self._bus = bus
        self._signal_socket = self._bus._context.socket(zmq.PUB)
        self._lock = threading.Lock()
        self.last_ping = None
        #self._signal_socket.setsockopt(zmq.SNDHWM, 25)

    def connect(self, address):
        self.address = address
        self._signal_socket.connect(address)

    # def connect_to(self, address, process_id):
    #     signal_message = {"address": address, "processId": process_id}
    #     p = json.dumps(signal_message, ensure_ascii=False).encode('utf8')
    #     signal_tag = "signal:connect"
    #     self.send_package([signal_tag.encode(), p])

    def register(self, address, process_id):
        self.address = address
        self.process_id = process_id
        self._signal_socket.connect(address)

    def disconnect(self):
        if self._signal_socket:
            self._lock.acquire()
            try:
                self._signal_socket.setsockopt(zmq.LINGER, 0)
                self._signal_socket.close()
                self._signal_socket = None
            finally:
                self._lock.release()

    def ping(self):
        self.last_ping = time.time()

    @property
    def is_alive(self):
        if self.is_connected:
            if time.time() - self.last_ping < 2:
                return True
        return False

    def send_package(self, package):
        self._lock.acquire()
        try:
            if self._signal_socket:
                self._signal_socket.send_multipart(package)
        except Exception as ex:
            self._bus.log.exception("send package exception")
        finally:
            self._lock.release()

class ZMQPingThread(threading.Thread):
    def __init__(self, bus):
        threading.Thread.__init__(self, None, None, "ZMQPing")
        self._bus = bus
        self.daemon = True
        self._terminate = False

    def stop(self):
        self._terminate = True

    def run(self):
        while not self._terminate:
            self._bus._ping_connections()
            time.sleep(.5)

class ZMQQueryThread(threading.Thread):
    def __init__(self, bus, tag, message):
        threading.Thread.__init__(self, None, None, "ZMQQyery")
        self._bus = bus
        self._message = message
        self._tag = tag
        self.daemon = True
        self._terminate = False

    def stop(self):
        self._terminate = True

    def run(self):
        self._bus._handle_message(self._tag, self._message)

class ZMQHandlerThread(threading.Thread):
    def __init__(self, bus):
        threading.Thread.__init__(self, None, None, "ZMQHandler")
        self._bus = bus
        self.daemon = True
        self._terminate = False
        self._messages = queue.Queue()

    def add_message(self, tag, message, stream_data):
        self._messages.put((tag, message, stream_data))

    def stop(self):
        self._terminate = True

    def run(self):
        while not self._terminate:
            try:
                tag, message, stream_data = self._messages.get(True, 1)
                self._bus._handle_message(tag, message, stream_data)
                self._messages.task_done()
            except queue.Empty:
                pass

class ZMQMessageThread(threading.Thread):
    def __init__(self, bus, address, bind=False):
        threading.Thread.__init__(self, None, None, "ZMQMessage")
        self._bus = bus
        self._address = address
        self._bind = bind
        self.daemon = True
        self._terminate = False
        self._socket = self._bus._context.socket(zmq.SUB)
        #self._socket.setsockopt( zmq.LINGER, 0 )

    def register(self, tag):
        self._socket.setsockopt_string(zmq.SUBSCRIBE, tag)

    def unregister(self, tag):
        self._socket.setsockopt_string(zmq.UNSUBSCRIBE, tag)

    def stop(self):
        self._terminate = True

    def connect(self):
        if self._bind:
            self._socket.bind(self._address)
        else:
            self._socket.connect(self._address)

    def run(self):
        while not self._terminate:
            connection_message = None
            try:
                connection_message = self._socket.recv_multipart()
                stream_data = None
                if len(connection_message) == 2:
                    [tag, json_message] = connection_message
                if len(connection_message) == 3:
                    [tag, json_message, stream_data] = connection_message
                message = json.loads(json_message.decode('utf8'))
                if tag == b"signal:exit":
                    if not self._bind:
                        break
                elif tag == b"queryResponse":
                    self._bus.resolve_response(message)
                else:
                    self._bus._add_message(tag.decode('utf-8'), message, stream_data)
            except zmq.ZMQError as e:
                if e.errno == zmq.EAGAIN:
                    time.sleep(.001)
                    pass
                elif e.errno == zmq.ETERM:
                    self._terminate = True
                else:
                    self._bus.log.exception("message zmq exception: %s %s %s", self._address, e, e.errno)
            except Exception as e:
                self.bus.log.exception("message exception: %s %s %s", self._address, e, connection_message)
        self._socket.close()

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

    def reset_bus(self, process_id, signal_port, ip=None, root_address=None, event_port=None):
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
        self._connections_lock = threading.Lock()

        self._linked_handlers = []
        self._linked_response_handlers = []

        self._message_threads = []
        self._message_thread = 0
        self._message_threads_lock = threading.Lock()
        for i in range(5):
            self._message_threads += [ZMQHandlerThread(self)]

        self._root_event = None
        self._event_socket = self._context.socket(zmq.PUB)
        self._event_socket.bind(_KERVI_EVENT_ADDRESS)

        self._stream_socket = self._context.socket(zmq.PUB)
        self._stream_socket.bind(_KERVI_STREAM_ADDRESS)

        self._command_socket = self._context.socket(zmq.PUB)
        self._command_socket.bind(_KERVI_COMMAND_ADDRESS)

        self._query_socket = self._context.socket(zmq.PUB)
        self._query_socket.bind(_KERVI_QUERY_ADDRESS)

        self._message_handler = ZMQMessageThread(self, self._signal_address, True)
        self._query_handler = ZMQMessageThread(self, _KERVI_QUERY_ADDRESS)
        self._event_handler = ZMQMessageThread(self, _KERVI_EVENT_ADDRESS)
        self._stream_handler = ZMQMessageThread(self, _KERVI_STREAM_ADDRESS)
        self._command_handler = ZMQMessageThread(self, _KERVI_COMMAND_ADDRESS)

        self._register_handler("signal:ping", self._on_ping)
        self._message_handler.register("signal:ping")
        self._message_handler.register("signal:exit")
        
        self._message_handler.register("queryResponse")
        self._message_handler.register("query:")

        self._query_handler.register("query:")

        self._message_handler.register("signal:exit")
        self._query_handler.register("signal:exit")
        self._event_handler.register("signal:exit")
        self._stream_handler.register("signal:exit")
        self._command_handler.register("signal:exit")

        self._ping_thread = ZMQPingThread(self)
        self._command_lock = threading.Lock()
        self._event_lock = threading.Lock()
        self._stream_lock = threading.Lock()
        self._query_lock = threading.Lock()

        self._observed_streams = []

        self.register_query_handler("GetRoutingInfo", self._get_routing_info)

    def _get_routing_info(self):
        result = []
        ignore_topics = [
            "GetRoutingInfo", 
            "ping", 
            "terminateProcess", 
            "getProcessInfo", 
            "processReady", 
            "appReady", 
            "authorizationAllowAnonymousUser",
            "authorizationValidSessionHeader",
            "authorizationRemoveSession",
            "startWebSocket",
            "stopThreads"
        ]
        for tag  in self._handlers.get_list_names():
            tag_info = tag.split(":")
            tag_id = None
            if len(tag_info) == 3:
                tag_id = tag_info[2]
            
            if not tag_info[1] in ignore_topics:
                result.append({
                    "id": tag_id,
                    "direction": "in",
                    "topic_type": tag_info[0],
                    "topic": tag_info[1]
                })
        return result
    
    def _add_linked_handler(self, func, **kwargs):
        groups = kwargs.get("groups", None)
        scopes = kwargs.get("scopes", [])
        argspec = inspect.getargspec(func)
        self._linked_handlers.append((func, groups, scopes, argspec.keywords != None))


    def _add_linked_response_handler(self, handler):
        self._linked_response_handlers.append(handler)

    def _register_handler(self, tag, func, **kwargs):
        groups = kwargs.get("groups", None)
        scopes = kwargs.get("scopes", [])

        argspec = inspect.getargspec(func)
        self._handlers.add(tag, (func, groups, scopes, argspec.keywords != None))

    
    def _unregister_handler(self, tag, func, **kwargs):
        groups = kwargs.get("groups", None)
        scopes = kwargs.get("scopes", [])

        argspec = inspect.getargspec(func)
        self._handlers.remove(tag, (func, groups, scopes, argspec.keywords != None))

    
    def get_handler_info(self):
        return self._handlers.get_list_names()

    def get_connection_info(self):
        result = []
        for connection in self._connections:
            result += [{"process": connection.process_id, "address": connection.address}]
        return result

    def _add_message(self, tag, message, stream_data):
        with self._message_threads_lock:
            if tag.startswith("query:"):
                query = ZMQQueryThread(self, tag, message)
                query.start()
            else:
                self._message_threads[self._message_thread].add_message(tag, message, stream_data)
                self._message_thread += 1
                if self._message_thread >= len(self._message_threads):
                    self._message_thread = 0

    def _handle_message(self, tag, message, stream_data=None):
        func_list = [] 
        func_list += self._linked_handlers
        functions = self._handlers.get_list_data(tag)
        if functions:
            func_list += functions
        
        if tag.startswith("event:"):
            tag_parts = tag.split(":")
            event = "event:" + tag_parts[1] +":"
            if event!=tag:
                functions = self._handlers.get_list_data(event)
                if functions:
                    func_list += functions

        
        stream_event = None
        if tag.startswith("stream:"):
            
            tag_parts = tag.split(":")
            event = "stream:" + tag_parts[1] +":"
            if len(tag_parts)>2:
                stream_event = tag_parts[2]
            
            try:
                self._observed_streams.index(tag)
            except ValueError:
                #print("s", tag, event, stream_event, self._process_id)
                self._observed_streams.append(tag)

            
            if event!=tag:
                functions = self._handlers.get_list_data(event)
                if functions:
                    func_list += functions

        result = []
        session = None
        session_groups = None
        message_scopes = None
        process_id = None

        if "process_id" in message:
            process_id = message["process_id"]

        if "session" in message:
            session = message["session"]
            if session:
                session_groups = session['groups']
            else:
                session_groups = None

        if "scope" in message:
            message_scopes = message["scope"]

        if "injected" in message:
            injected = message["injected"]
        else:
            injected = None

        message_args = []
        message_kwargs = dict()
        if "kwargs" in message:
            message_kwargs = message["kwargs"]

        if "id" in message:
            if tag.startswith("query:"):
                message_kwargs["query_id"] = message["id"]
            else:
                message_args += [message["id"]]

        if stream_event:
            message_args += [stream_event]

        if stream_data:
            message_args += [stream_data]

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

        message_kwargs = dict(message_kwargs, injected=injected, session=session, topic_tag=tag, response_address=response_address, process_id=process_id)
        send_response = True
        try:
            if func_list:
                for func, groups, handler_scopes, has_keywords in func_list:
                    authorized = True
                    if session_groups != None and groups and len(groups) > 0:
                        for group in groups:
                            if group in session_groups:
                                break
                        else:
                            authorized = False

                    if message_scopes:
                        for message_scope in message_scopes:
                            if message_scope in handler_scopes:
                                break
                        else:
                            authorized = False

                    if authorized:
                        if not has_keywords:
                            sub_result = func(*message_args)
                            if sub_result and sub_result == "****no_response****":
                                send_response = False
                            if sub_result:
                                result += [sub_result]
                        else:
                            sub_result = func(*message_args, **message_kwargs)
                            if sub_result and sub_result == "****no_response****":
                                send_response = False
                            elif sub_result:
                                result += [sub_result]
            if len(result) == 1:
                result = result[0]
        except Exception as e:
            raise e

        
        if response_address and send_response:
            self.send_query_response(response_address, message["id"], result)
        return result

    def send_query_response(self, response_address, query_id, result):
        message = {"messageType":"queryResponse", "address": self._signal_address, "id":query_id, "response":result}
        if response_address == "inproc_query":
            self.resolve_response(message)
        else:
            self.send_connection_message(response_address, "queryResponse", message)

    def run(self):

        for message_thread in self._message_threads:
            message_thread.start()

        self._message_handler.connect()
        self._message_handler.start()
        #time.sleep(1)
        self._event_handler.connect()
        self._stream_handler.connect()
        self._command_handler.connect()
        self._query_handler.connect()

        self._query_handler.start()
        self._event_handler.start()
        self._stream_handler.start()
        self._command_handler.start()

        if self._root_address:
            self.connect_to_root()

        self._ping_thread.start()
        if self._is_root:
            logger = logging.getLogger()
            self.log.verbose("IPC address: %s", self._signal_address)

    def stop(self):
        exit_tag = "signal:exit"
        package = [exit_tag.encode(), json.dumps({}, ensure_ascii=False, cls=_ObjectEncoder).encode('utf8')]

        for connection in self._connections:
            connection.send_package(package)

        self._command_lock.acquire()
        try:
            self._command_socket.send_multipart(package)
        finally:
            self._command_lock.release()

        self._query_lock.acquire()
        try:
            self._query_socket.send_multipart(package)
        finally:
            self._query_lock.release()

        self._event_lock.acquire()
        try:
            self._event_socket.send_multipart(package)
        finally:
            self._event_lock.release()

        self._stream_lock.acquire()
        try:
            self._stream_socket.send_multipart(package)
        finally:
            self._stream_lock.release()

        time.sleep(1)
        self._ping_thread.stop()
        self._ping_thread.join()
        
        self._message_handler.stop()
        self._event_handler.stop()
        self._stream_handler.stop()
        self._command_handler.stop()
        self._query_handler.stop()
        
        for connection in self._connections:
            connection.disconnect()

        for message_thread in self._message_threads:
            message_thread.stop()
        
    def connect_to_root(self):
        self._root_event = threading.Event()
        connection = ProcessConnection(self, True)
        connection.process_id = "kervi-main"
        self._connections_lock.acquire()
        self._connections += [connection]
        connection.connect(self._root_address)
        self._connections_lock.release()

    def wait_for_root(self, timeout=20):
        if self._root_event:
            if self._root_event.wait(timeout):
                pass
            else:
                self.log.error("root not found! Process= %s address= %s", self._process_id, self._root_address)
            self._root_event = None

    @property
    def is_connected(self):
        result = True
        self._connections_lock.acquire()
        try:
            if not self._is_root and not self._connections:
                result = False

            if result:
                for connection in self._connections:
                    if not connection.is_connected:
                        result = False
        finally:
            self._connections_lock.release()
        return result

    def send_connection_message(self, address, tag, message):
        for connection in self._connections:
            if connection.address == address:
                p = json.dumps(message, ensure_ascii=False, cls=_ObjectEncoder).encode('utf8')
                connection.send_package([tag.encode(), p])
                return
        self.log.warn("connection not found %s %s %s", address, tag, message)

    def _on_ping(self, address, process_id, process_list):
        #print("p", address, process_id)
        self._connections_lock.acquire()
        new_connection = True
        connection_list = []
        try:
            is_connected = False
            for process in process_list:
                if process["processId"] == self._process_id:
                    is_connected = True
                    break
            
            for connection in self._connections:
                if connection.process_id == process_id:
                    if not connection.is_connected and is_connected:
                        connection.is_connected = True
                        connection.include_ping = True
                        if connection.is_root_connection and self._root_event:
                            self._root_event.set()
                    if connection.is_connected:
                        connection.ping()

                    new_connection = False

            if new_connection:
                connection = ProcessConnection(self)
                connection.include_ping = True
                self._connections += [connection]
                connection.register(address, process_id)

            if not self._is_root and address == self._root_address:
                self._last_ping = time.time()
                for process in process_list:
                    if process["processId"] == self._process_id:
                        break
                    for connection in self._connections:
                        if connection.process_id == process["processId"]:
                            break
                    else:
                        connection = ProcessConnection(self)
                        self._connections += [connection]
                        connection.register(process["address"], process["processId"])

        finally:
            self._connections_lock.release()

    def _ping_connections(self):
        self._connections_lock.acquire()
        try:
            connection_list = []
            for connection in self._connections:
                if connection.include_ping:
                    connection_list += [{"address":connection.address, "processId":connection.process_id}]

            ping_message = {
                'address':self._signal_address,
                'processId':self._process_id,
                'processList': connection_list
            }
            p = json.dumps(ping_message, ensure_ascii=False, cls=_ObjectEncoder).encode('utf8')
            ping_tag = "signal:ping"
            package = [ping_tag.encode(), p]
            
            for connection in self._connections:
                connection.send_package(package)
        
        finally:
            self._connections_lock.release()

    def send_command(self, command, *args, **kwargs):
        injected = kwargs.pop("injected", "")
        scope = kwargs.pop("scope", None)
        groups = kwargs.pop("groups", None)
        session = kwargs.pop("session", None)
        local_only = kwargs.pop("local_only", False)
        command_message = {
            "command":command,
            "args":args,
            "injected":injected,
            "scope":scope,
            "session":session,
            "groups": groups,
            "kwargs": kwargs
        }
        p = json.dumps(command_message, ensure_ascii=False, cls=_ObjectEncoder).encode('utf8')
        command_tag = "command:" + command
        package = [command_tag.encode(), p]
        self._command_lock.acquire()
        try:
            self._command_socket.send_multipart(package)
        finally:
            self._command_lock.release()

        if not local_only:
            for connection in self._connections:
                connection.send_package(package)

    def register_command_handler(self, command, func, **kwargs):
        tag = "command:"+command
        self._register_handler(tag, func, **kwargs)
        self._command_handler.register(tag)
        self._message_handler.register(tag)

    def unregister_command_handler(self, command, func, **kwargs):
        tag = "command:"+command
        self._unregister_handler(tag, func, **kwargs)
        self._command_handler.unregister(tag)
        self._message_handler.unregister(tag)

    def trigger_event(self, event, id, *args, **kwargs):
        injected = kwargs.pop("injected", "")
        scope = kwargs.pop("scope", None)
        groups = kwargs.pop("groups", None)
        session = kwargs.pop("session", None)
        local_only = kwargs.pop("local_only", False)
        event_message = {
            'event':event,
            'id':id,
            'args':args,
            "injected":injected,
            "scope":scope,
            "groups":groups,
            "session":session,
            "kwargs": kwargs,
            "process_id": self._process_id
        }
        p = json.dumps(event_message, ensure_ascii=False, cls=_ObjectEncoder).encode('utf8')
        event_tag = "event:" + event + ":"
        if id:
            event_tag += id
        package = [event_tag.encode(), p]
        self._event_lock.acquire()
        try:
            self._event_socket.send_multipart(package)
        finally:
            self._event_lock.release()

        if not local_only:
            for connection in self._connections:
                connection.send_package(package)

    def register_event_handler(self, event, func, component_id=None, **kwargs):
        tag = "event:"+event +":"
        if component_id:
            tag +=  component_id
        if func:
            self._register_handler(tag, func, **kwargs)
        self._event_handler.register(tag)
        self._message_handler.register(tag)

    def unregister_event_handler(self, event, func, component_id=None, **kwargs):
        tag = "event:"+event +":"
        if component_id:
            tag +=  component_id
        
        if func:
            self._unregister_handler(tag, func, **kwargs)
        self._event_handler.unregister(tag)
        self._message_handler.unregister(tag)

    def stream_data(self, stream_id, stream_event, data, *args, **kwargs):
        injected = kwargs.pop("injected", "")
        scope = kwargs.pop("scope", None)
        groups = kwargs.pop("groups", None)
        session = kwargs.pop("session", None)
        local_only = kwargs.pop("local_only", False)
        event_message = {
            'event':stream_event,
            'id':stream_id,
            #'data': data,
            'args':args,
            "injected":injected,
            "scope":scope,
            "groups":groups,
            "session":session,
            "kwargs": kwargs,
            "process_id": self._process_id
        }
        p = json.dumps(event_message, ensure_ascii=False, cls=_ObjectEncoder).encode('utf8')
        event_tag = "stream:" + stream_id + ":" + stream_event + ":"
        package = [event_tag.encode(), p, data]
        self._stream_lock.acquire()
        try:
            self._stream_socket.send_multipart(package)
        finally:
            self._stream_lock.release()

        if not local_only:
            for connection in self._connections:
                connection.send_package(package)

    def register_stream_handler(self, stream_id, func, stream_event=None, **kwargs):
        tag = "stream:" + stream_id + ":"
        if stream_event:
            tag +=  stream_event + ":"
        if func:
            self._register_handler(tag, func, **kwargs)
        
        #print("rsh", self._process_id, tag, func)
        self._stream_handler.register(tag)
        self._message_handler.register(tag)

    def unregister_stream_handler(self, stream_id, func, stream_event=None, **kwargs):
        tag = "stream:" + stream_id + ":"
        if stream_event:
            tag +=  stream_event + ":"
        
        if func:
            self._unregister_handler(tag, func, **kwargs)
        self._stream_handler.unregister(tag)
        self._message_handler.unregister(tag)

    def resolve_response(self, message):
        for event in self._response_events:
            if event["id"] == message["id"] and not event["processed"]:
                if message["response"]:
                    event["response"] += [message["response"]]
                event["process_count"] = event["process_count"] - 1
                event["handled_by"] += [message["address"]]
                if  event["process_count"] <= 0:
                    event["processed"] = True
                    event["eventSignal"].set()
                    for handler in self._linked_response_handlers:
                        handler(event)

    def send_query(self, query, *args, **kwargs):
        self._connections_lock.acquire()
        try:
            self._query_id_count += 1
            result = []
            injected = kwargs.pop("injected", "")
            scope = kwargs.pop("scope", None)
            groups = kwargs.pop("groups", None)
            session = kwargs.pop("session", None)
            processes = kwargs.pop("processes", None)
            timeout = kwargs.pop("timeout", 10)
            wait = kwargs.pop("wait", True)
            headers = kwargs.pop("headers", None)
            local_only = kwargs.pop("local_only", False)
            query_id = self._uuid_handler + "-" + str(self._query_id_count)

            process_count = 1
            if not local_only:
                for connection in self._connections:
                    if connection.is_alive and (not processes or (connection.process_id in processes)):
                        process_count += 1

            event = threading.Event()
            event_data = {
                "id":query_id,
                "eventSignal":event,
                "response":[],
                "processed":False,
                "process_count": process_count,
                "process_id": self._process_id,
                "query": query,
                "handled_by": [],
                "headers": headers
            }
            self._response_events += [event_data]
            query_message = {
                'query':query,
                "id":query_id,
                "responseAddress":"inproc_query",
                'args':args,
                "injected":injected,
                "scope":scope,
                "groups":groups,
                "session":session,
                "kwargs": kwargs
            }
            p = json.dumps(query_message, ensure_ascii=False, cls=_ObjectEncoder).encode('utf8')
            query_tag = "query:" + query
            package = [query_tag.encode(), p]
            self._query_lock.acquire()
            try:
                self._query_socket.send_multipart(package)
            finally:
                self._query_lock.release()

            if not local_only and len(self._connections) > 0:
                query_message["responseAddress"] = self._signal_address
                p = json.dumps(query_message, ensure_ascii=False, cls=_ObjectEncoder).encode('utf8')
                package = [query_tag.encode(), p]

                for connection in self._connections:
                    if connection.is_alive and (not processes or (connection.process_id in processes)):
                        connection.send_package(package)
        except Exception as ex:
            self.log.exception("error send query %s", query)
        finally:
            self._connections_lock.release()

        if wait:
            event.wait(timeout)
            if not event_data["processed"]:
                self.log.warn("send query timeout %s %s %s %s", self._signal_address, query, event_data["handled_by"], event_data["id"])
            result = event_data["response"]
            self._response_events.remove(event_data)
            if isinstance(result, list) and not isinstance(result, dict) and len(result) == 1:
                return result[0]
            else:
                return result
        return None

    def register_query_handler(self, query, func, **kwargs):
        self._register_handler("query:"+query, func, **kwargs)

    def unregister_query_handler(self, query, func, **kwargs):
        self._unregister_handler("query:"+query, func, **kwargs)
