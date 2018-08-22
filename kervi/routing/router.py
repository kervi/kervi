import threading
import uuid
import datetime
import time
import json

import kervi.spine as spine
import kervi.utility.authorization_handler as authorization

class _PrepareThread(threading.Thread):
    def __init__(self, router):
        threading.Thread.__init__(self)
        self.daemon = True
        self._router = router

    def run(self):
        self._router._prepare()


class _MQSession:
    def __init__(self, mq_session):
        self.mq_session = mq_session
        self.authenticated = False

class _Connection:
    def __init__(self, connection_id):
        self.connection_id = connection_id
        self.last_ping = datetime.datetime.now

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

class Router(object):
    def __init__(self, config):
        self._spine = spine.Spine()
        self._spine.register_event_handler("appReady", self._app_ready)

        self._spine.register_event_handler("moduleReady", self._module_ready)
        self._spine.register_event_handler("appReady", self._app_ready)
        print("rr")
        self._routes_in = []
        self._routes_out = []
        self._ids = []
        self._prepare_thread = None
        self._route_table_ready = False
        self._router_id = uuid.uuid4().hex
        self._connection_id = None
        self._connections = {}
        self._mq_sessions= {}
        print("rid", self._router_id)

    @property
    def routes_in(self):
        return self._routes_in

    @property
    def routes_out(self):
        return self._routes_out

    def _app_ready(self, id):
        self._connection_id = id
        self._prepare_thread = _PrepareThread(self)
        self._prepare_thread.start()

    def _module_ready(self, id):
        print("vv")
        self._connection_id = id
        self._prepare_thread.start()

    def _read_routes(self, routes):
        if hasattr(routes, "__len__") and not isinstance(routes, dict):
            for route in routes:
                self._read_routes(route)
        else:
            for route in routes["routes"]:
                new_route = Route(routes["id"], route["id"], route["topic_type"], route["topic"])
                if route["direction"] == "in":
                    self._routes_in.append(new_route)
                else:
                    self._routes_out.append(new_route)

    def _prepare(self):
        self._internal_ids = []
        routes = self._spine.send_query("getComponentRoutes")
        print("r", routes)
        self._read_routes(routes)
        self._spine._add_linked_handler(self._spine_handler)
        self._spine._add_linked_response_handler(self._on_response)     
        for route in self._routes_out:
            if route.topic_type == "event":
                self._spine.register_event_handler(route.topic, self._event_handler)
            if route.topic_type == "command":
                self._spine.register_command_handler(route.topic, self._command_handler)
        self._route_table_ready = True

    def _spine_handler(self, *args, **kwargs):
        #print("sh", *args, kwargs)
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
    
    def _query_handler(self, *args, **kwargs):
        topic = kwargs.pop("topic_tag", "query:")
        query_id = kwargs.pop("query_id", "0")
        response_address = kwargs.pop("response_address", None)
        injected = kwargs.pop("injected", None)
        #print("qh", topic, query_id, injected, injected != "KIO_" + self._router_id)
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
            self.send_message(topic, message, headers)
            return "****no_response****"
        return None

    def start_router(self):
        raise NotImplementedError

    def stop(self):
        raise NotImplementedError

    def send_message(self, topic, payload, headers):
        raise NotImplementedError

    
    def on_ping(self, headers, routes):
        #print("p", self._connection_id, headers)
        if headers["connection_id"] == self._connection_id:
            pass
        elif not headers["connection_id"] in self._connections:
            print("new cloud connection:", headers["connection_id"])
            self._connections[headers["connection_id"]] = _Connection(headers["connection_id"])
            self.register_bus_connection(self._connections[headers["connection_id"]])
            for route in routes:
                if route["topic_type"] == "event":
                    self._spine.register_event_handler(route["topic"], self._event_handler)
                if route["topic_type"] == "command":
                    self._spine.register_command_handler(route["topic"], self._command_handler)
        else:
            self._connections[headers["connection_id"]].last_ping = datetime.datetime.now()

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
                #print("oq", time.time()- float(headers["qts"]), topic, payload)
                headers = {
                    "type": "query_response",
                    "topic": "query_response:",
                    "response_address": headers["response_address"],
                    "query_id": headers["query_id"],
                    "router_id": self._router_id,
                    "qts": headers["qts"]
                }
                message_kwargs = dict(payload["kwargs"], injected="KIO_" + self._router_id, wait=False, headers=headers)
                res = self._spine.send_query(topic[1], *payload["args"], **message_kwargs)
                
            elif topic[0] == "query_response":
                #print("oqr", time.time()- float(headers["qts"]))
                self._spine.send_query_response(headers["response_address"],headers["query_id"], payload)
            elif topic[0] == "registerEventHandler":
                print("re", payload)
                self._spine.register_event_handler(payload["event"], self._event_handler, payload["eventId"])
        #else:
        #    print("kervi io error, receiving own messages")