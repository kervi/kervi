

import threading
import uuid
import datetime
import time
import json

import kervi.spine as spine
import kervi.utility.authorization as authorization
from kervi.plugin.kervi_plugin import KerviPlugin


# class _CatchUnhandledQueriesThread(threading.Thread):
#     def __init__(self, router):
#         threading.Thread.__init__(self, name="RouterCatchUnhandledQueriesThread")
#         self.daemon = True
#         self._router = router
#         self._terminate = False

#     def run(self):
#         while not self._terminate:
#             self._router._check_pending_queries()
#             time.sleep(1)

class _CheckDeadConnectionsThread(threading.Thread):
     def __init__(self, router):
         threading.Thread.__init__(self, name="RouterCheckDeadConnectionsThread")
         self.daemon = True
         self._router = router
         self._terminate = False

     def run(self):
         while not self._terminate:
             self._router._remove_dead_connections()
             time.sleep(5)

class _PrepareThread(threading.Thread):
    def __init__(self, router):
        threading.Thread.__init__(self, name="RouterPrepareThread")
        self.daemon = True
        self._router = router

    def run(self):
        self._router._prepare()


class _MQSession:
    def __init__(self, mq_session):
        self.mq_session = mq_session
        self.authenticated = False

class _Connection:
    def __init__(self, connection_id, routes):
        self.connection_id = connection_id
        self.last_ping = datetime.datetime.now()
        self.routes = routes

    @property
    def is_alive(self):
        delta = datetime.datetime.now() - self.last_ping
        return  delta.total_seconds() < 10

class Route:
    def __init__(self, source_id, id, topic_type, topic):
        self.source_id = source_id
        self.id = id
        self.topic_type = topic_type
        self.topic = topic

    def as_dict(self):
        return {
            "source_id": self.source_id,
            "id": self.id,
            "topic_type": self.topic_type,
            "topic": self.topic
        }

class RouterPlugin(KerviPlugin):
    def __init__(self, name, config, manager):
        KerviPlugin.__init__(self, name, config, manager)
        self._router_name = ""
        self._spine = spine.Spine()
        self._spine.register_event_handler("appReady", self._app_ready)

        self._spine.register_event_handler("moduleReady", self._module_ready)
        self._spine.register_event_handler("appReady", self._app_ready)
        self._routes_in = []
        self._routes_out = []
        self._ids = []
        self._prepare_thread = None
        self._route_table_ready = False
        self._router_id = uuid.uuid4().hex
        self._connected = False
        self._connection_id = None
        self._connection_type = None
        self._connections = {}
        self._connections_lock = threading.Lock()
        self._mq_sessions = {}
        self._pending_queries = {}
        self._response_events = []
        self._check_dead_connections_thread = _CheckDeadConnectionsThread(self)
        self._check_dead_connections_thread.start()
        
        #self._pending_queries_lock = threading.Lock()
        #self._check_pending_thread = _CatchUnhandledQueriesThread(self)
        #self._check_pending_thread.start()
        #print("rid", self._router_id)
    
    @property
    def connected(self):
        return self._connected
    
    @property
    def routes_in(self):
        return self._routes_in

    @property
    def routes_out(self):
        return self._routes_out

    def _app_ready(self, app_id):
        self._connection_id = app_id
        self._connection_type = "app"
        self._prepare_thread = _PrepareThread(self)
        self._prepare_thread.start()

    def _module_ready(self, module_id):
        self._connection_id = module_id
        self._connection_type = "module"
        self._prepare_thread = _PrepareThread(self)
        self._prepare_thread.start()

    def _read_routes(self, routes):
        if hasattr(routes, "__len__") and not isinstance(routes, dict):
            for route in routes:
                self._read_routes(route)
        else:
            new_route = Route(None, routes["id"], routes["topic_type"], routes["topic"])
            if routes["direction"] == "in":
                self._routes_in.append(new_route)
            else:
                self._routes_out.append(new_route)

    def _prepare(self):
        #self._internal_ids = []
        routes = self._spine.send_query("GetRoutingInfo")
        #routes = self._spine.send_query("getComponentRoutes")
        #print("r", routes)
        self._read_routes(routes)
        #self._spine._add_linked_handler(self._spine_handler)
        #self._spine._add_linked_response_handler(self._on_response)     
        #for route in self._routes_out:
        #    if route.topic_type == "event":
        #        self._spine.register_event_handler(route.topic, self._event_handler)
        #    if route.topic_type == "command":
        #        self._spine.register_command_handler(route.topic, self._command_handler)
        self._route_table_ready = True

    def _spine_handler(self, *args, **kwargs):
        print("sh", *args, kwargs)
        topic = kwargs.get("topic_tag", None)
        
        if topic:
            if topic.startswith("query"):
                return self._query_handler(*args, **kwargs) 
            elif topic.startswith("command"):
                print("sh", topic, *args, kwargs)
                return self._command_handler(topic, *args, **kwargs)    

    def _event_handler(self, event, *args, **kwargs):
        #print("eh", event, *args, kwargs)
        topic = kwargs.pop("topic_tag", "event:")
        injected = kwargs.pop("injected", None)
        if injected != "KIO_" + self._router_id:
            message = {
                "args": args,
                "kwargs": kwargs
            }
            headers = {
                "type": "event",
                "topic": topic,
                "router_id": self._router_id
            }
            self.send_message(topic, message, headers)
    
    def _command_handler(self, command, *args, **kwargs):
        print("ch", command)
        topic = kwargs.pop("topic_tag", "command:")
        injected = kwargs.pop("injected", None)
        if injected != "KIO_" + self._router_id:
            message = {
                "args": args,
                "kwargs": kwargs
            }
            headers = {
                "type": "command",
                "topic": topic,
                "router_id": self._router_id
            }
            self.send_message(topic, message, headers)
    
    # def _add_pending_query(self, query_id, ts, response_address):
    #     self._pending_queries[query_id] = {
    #         "ts": ts,
    #         "response_address": response_address
    #     }

    # def _remove_pending_query(self, query_id):
    #     result = False
    #     with self._pending_queries_lock:
    #         if query_id in self._pending_queries:
    #             del self._pending_queries[query_id]
    #             result = True
    #     return result

    # def _check_pending_queries(self):
    #     with self._pending_queries_lock:
    #         for query_id in list(self._pending_queries.keys()):
    #             query = self._pending_queries[query_id]
    #             if time.time() - query["ts"] > 2:
    #                 self._spine.send_query_response(query["response_address"],query_id, None)
    #                 del self._pending_queries[query_id]

    def _resolve_response(self, query_id, response):
        for event in self._response_events:
            if event["id"] == query_id and not event["processed"]:
                event["response"] = response
                event["processed"] = True
                event["eventSignal"].set()
                    
    def _query_handler(self, *args, **kwargs):
        topic = kwargs.pop("topic_tag", "query:")
        query_id = kwargs.pop("query_id", "0")
        response_address = kwargs.pop("response_address", None)
        injected = kwargs.pop("injected", None)
        #print("qh", topic, query_id, injected, "KIO_" + self._router_id, injected != "KIO_" + self._router_id)
        if injected != "KIO_" + self._router_id:
            message = {
                "args": args,
                "kwargs": kwargs
            }
            headers = {
                "type": "query",
                "query_id": query_id,
                "response_address": response_address,
                "topic": topic,
                "router_id": self._router_id,
                "qts": str(time.time())
            }
            event = threading.Event()
            event_data = {
                "id":query_id,
                "eventSignal":event,
                "response":[],
                "processed":False
            }
            self._response_events += [event_data]
            #self._add_pending_query(query_id, time.time(), response_address)
            self.send_message(topic, message, headers)

            event.wait(5)
            if not event_data["processed"]:
                print("router send query timeout", topic)
            result = event_data["response"]
            self._response_events.remove(event_data)
            #print("qre", len(self._response_events), result)
            if isinstance(result, list) and not isinstance(result, dict) and len(result) == 1:
                return result[0]
            else:
                return result


            return "****no_response****"
        return None

    def start_router(self):
        raise NotImplementedError

    def stop_router(self):
        raise NotImplementedError

    def stop(self):
        #self._check_pending_thread._terminate = True
        self._check_dead_connections_thread._terminate = True
        self.stop_router()

    def send_message(self, topic, payload, headers):
        raise NotImplementedError

    def on_connected(self):
        self._connected = True
        print("connected to " + self._router_name)
    
    def on_ping(self, headers, routes):
        #print("p", self._connection_id, headers)
        if headers["connection_id"] == self._connection_id:
            pass
        elif not headers["connection_id"] in self._connections:
            print("new cloud connection:", headers["connection_id"])
            with self._connections_lock:
                self._connections[headers["connection_id"]] = _Connection(headers["connection_id"], routes)
                self.register_bus_connection(self._connections[headers["connection_id"]])
                for route in routes:
                    if route["topic_type"] == "event":
                        self._spine.register_event_handler(route["topic"], self._event_handler)
                    if route["topic_type"] == "command":
                        self._spine.register_command_handler(route["topic"], self._command_handler)
                    if route["topic_type"] == "query":
                        self._spine.register_query_handler(route["topic"], self._query_handler)
        else:
            with self._connections_lock:
                self._connections[headers["connection_id"]].last_ping = datetime.datetime.now()

    def _remove_dead_connections(self):
        for connection_id in list(self._connections.keys()):
            connection = self._connections[connection_id]
            if not connection.is_alive:
                with self._connections_lock:
                    for route in connection.routes:
                        if route["topic_type"] == "event":
                            self._spine.unregister_event_handler(route["topic"], self._event_handler)
                        if route["topic_type"] == "command":
                            self._spine.unregister_command_handler(route["topic"], self._command_handler)
                        if route["topic_type"] == "query":
                            self._spine.unregister_query_handler(route["topic"], self._query_handler)

                    del self._connections[connection_id]
    
    def register_bus_connection(self, connection):
        pass
    
    def _on_response(self, event):
        
        self.send_message("query_response:", event["response"], event["headers"])
        #print("oqd", time.time()- float(event["headers"]["qts"]), event["headers"]["topic"])

    def on_session(self, topic, headers, payload):
        print("session", topic, self._router_id)
        if headers["router_id"] == self._router_id:

            if topic == "new":
                if headers["session_id"] in self._mq_sessions:
                    pass
                else:
                    session = _MQSession(headers["session_id"])
                    self._mq_sessions[headers["session_id"]] = session
                    
                    if authorization.active():
                        topic = "authenticate"
                    else:
                        session.authenticated = True
                        topic = "session_authenticated"
                        
                    self.send_message(topic, "", {})
        
                print("new ui session", topic)
            
    def on_message(self, headers, payload):
        #print("om", self._router_id, headers, payload)
        topic = headers["topic"].split(":")
        if topic[0] == "session":
            self.on_session(topic[1], headers, payload)
            
        elif headers["router_id"] != self._router_id:
            #print("om", self._router_id, headers)
        
            if topic[0] == "event":
                #print("te", topic[1])
                event_id = None
                if len(topic) > 2:
                    event_id = topic[2]
                message_kwargs = dict(payload["kwargs"], injected="KIO_" + self._router_id)

                self._spine.trigger_event(topic[1], event_id, *payload["args"], **message_kwargs)
            elif topic[0] == "command":
                print("c", topic, headers, payload)
                message_kwargs = dict(payload["kwargs"], injected="KIO_" + self._router_id)
                self._spine.send_command(topic[1], *payload["args"], **message_kwargs)
            elif topic[0] == "query":
                #print("oq", time.time()- float(headers["qts"]), headers, payload)
                query_headers = {
                    "type": "query_response",
                    "topic": "query_response:",
                    "response_address": headers["response_address"],
                    "query_id": headers["query_id"],
                    "router_id": self._router_id,
                    "qts": headers["qts"]
                }
                message_kwargs = dict(payload["kwargs"], injected="KIO_" + self._router_id, wait=True, headers=query_headers)
                
                res = self._spine.send_query(topic[1], *payload["args"], **message_kwargs)
                #print("oqr", topic[1], res)
                response_headers = {
                    "type": "query_response",
                    "topic": "query_response:",
                    "query_id": headers["query_id"],
                    "router_id": self._router_id
                }
                self.send_message("query_response", res, response_headers)
                #self.send_message(, message, headers)
            elif topic[0] == "query_response":
                #print("oqr", headers, payload)
                self._resolve_response(headers["query_id"], payload)
                # if self._remove_pending_query(headers["query_id"]):
                #     self._spine.send_query_response(headers["response_address"],headers["query_id"], payload)
                # else:
                #     print("query not found, may have been cleaned")
            elif topic[0] == "registerEventHandler":
                print("re", payload)
                self._spine.register_event_handler(payload["event"], self._event_handler, payload["eventId"])
        #else:
        #    print("kervi io error, receiving own messages")

    def process_step(self):
        if self._route_table_ready:
            if not self.connected:
                self.start_router()

    def terminate_process(self):
        self.stop()