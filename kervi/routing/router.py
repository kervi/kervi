import kervi.spine as spine
import threading
import uuid
import datetime

class _PrepareThread(threading.Thread):
    def __init__(self, router):
        threading.Thread.__init__(self)
        self.daemon = True
        self._router = router

    def run(self):
        self._router._prepare()

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

class Router(object):
    def __init__(self, config):
        self._spine = spine.Spine()
        self._spine.register_event_handler("appReady", self._app_ready)

        self._spine.register_event_handler("moduleReady", self._module_ready)
        self._spine.register_event_handler("appReady", self._app_ready)
        
        self._routes_in = []
        self._routes_out = []
        self._ids = []
        self._prepare_thread = _PrepareThread(self)
        self._route_table_ready = False
        self._router_id = uuid.uuid4().hex
        self._connection_id = None
        self._connections = {}
        print("rid", self._router_id)

    @property
    def routes_in(self):
        return self._routes_in

    @property
    def routes_out(self):
        return self._routes_out

    def _app_ready(self, id):
        self._connection_id = id
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
        self._read_routes(routes)
        
        for route in self._routes_out:
            if route.topic_type == "event":
                self._spine.register_event_handler(route.topic, self._event_handler)
            if route.topic_type == "command":
                self._spine.register_command_handler(route.topic, self._command_handler)
        self._route_table_ready = True

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
        #print("ch", command, *args)
        pass
    
    def _query_handler(self, query, *args, **kwargs):
        #print("qh", query)
        pass

    def start_router(self):
        raise NotImplementedError

    def send_message(self, topic, payload, headers):
        raise NotImplementedError

    
    def on_ping(self, headers):
        if headers["connection_id"] == self._connection_id:
            pass
        elif not headers["connection_id"] in self._connections:
            self._connections[headers["connection_id"]] = _Connection(headers["connection_id"])
            self.register_bus_connection(self._connections[headers["connection_id"]])
        else:
            self._connections[headers["connection_id"]].last_ping = datetime.datetime.now()

    def register_bus_connection(self, connection):
        pass
    
    def on_message(self, headers, payload):
        print("om", self._router_id, headers)
        if headers["router_id"] != self._router_id:
            topic = headers["topic"].split(":")
            if topic[0] == "event":
                #print("te", topic[1])
                event_id = None
                if len(topic) > 2:
                    event_id = topic[2]
                message_kwargs = dict(payload["kwargs"], injected="KIO_" + self._router_id)
                self._spine.trigger_event(topic[1], event_id, payload["args"], message_kwargs)