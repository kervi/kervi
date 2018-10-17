
from kervi.routing.router import Router
from kervi.routing.kervi_io.rbmq import _MQConnection

class KerviIORouter(Router):
    def __init__(self, config):
        Router.__init__(self, config)
        self._config = config.routing.kervi_io
        self._address = self._config.address
        self._port = self._config.port
        self._api_user = self._config.api_user
        self._api_password = self._config.api_password
        self._api_key = self._config.api_channel
        self._app_id = config.application.id
        self._app_name = config.application.name
        self._enabled = self._config.enabled
        self._connection = _MQConnection(self, self._api_user, self._api_password, self._address, self._port, self._api_key, self._app_id, self._app_name)
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
