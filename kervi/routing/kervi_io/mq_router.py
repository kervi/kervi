
from kervi.routing.router import Router
from kervi.routing.kervi_io.rbmq import _MQConnection

class KerviIORouter(Router):
    def __init__(self, config):
        Router.__init__(self, config)
        self._config = config.routing.kervi_io
        self._address = self._config.address
        self._port = self._config.port
        self._api_key = self._config.api_key
        self._app_id = config.application.id
        self._enabled = self._config.enabled
        print("xz1", self._address, self._api_key, self._app_id)
        self._connection = _MQConnection(self, "user_1", "1234", self._address, self._port, self._api_key, self._app_id)
        self.connected = False
    def connect(self):
        pass    
        #self._thread = _IncomingThread(self._channel_in)

    def start_router(self):
        self.connected = True
        self._connection.connect()

    def stop(self):
        self._connection.disconnect()

    def register_route(self, route):
        pass
    
    def register_bus_connection(self, connection):
        self._connection.register_bus_connection(connection)
    
    def send_message(self, topic, payload, headers):
        self._connection.send_message(topic, payload, headers)
