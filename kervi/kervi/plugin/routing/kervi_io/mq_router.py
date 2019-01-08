#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

from kervi.plugin.routing.routing_plugin import RouterPlugin
from kervi.plugin.routing.kervi_io.rbmq import _MQConnection
from kervi.config import Configuration

class KerviIORouterPlugin(RouterPlugin):
    def __init__(self, config, manager):
        RouterPlugin.__init__(self, "KERVI_IO", config, manager)
        self._router_name = "kervi.io"
        self._config = config
        self._address = self._config.address
        self._port = self._config.port
        self._api_user = self._config.api_user
        self._api_password = self._config.api_password
        self._api_key = self._config.api_channel
        self._app_id = Configuration.application.id
        self._app_name = Configuration.application.get("name", None)
        self._enabled = self._config.enabled
        self._connection = _MQConnection(
            self,
            self._api_user,
            self._api_password,
            self._address,
            self._port,
            self._api_key,
            self._app_id,
            self._app_name
        )
        
    def connect(self):
        pass    
        #self._thread = _IncomingThread(self._channel_in)

    def start_router(self):
        self._connection.connect()

    def stop_router(self):
        self._connected = False
        self._connection.disconnect()

    def register_route(self, route):
        pass
    
    def register_bus_connection(self, connection):
        self._connection.register_bus_connection(connection)
    
    def send_message(self, topic, payload, headers):
        if self._connected:
            self._connection.send_message(topic, payload, headers)
