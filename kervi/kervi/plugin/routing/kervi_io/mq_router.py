#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

import os
import json
from kervi.plugin.routing.routing_plugin import RouterPlugin
from kervi.plugin.routing.kervi_io.rbmq import _MQConnection

            
class KerviIORouterPlugin(RouterPlugin):
    def __init__(self, config, manager):
        RouterPlugin.__init__(self, "KERVI_IO", config, manager)
        self._router_name = "kervi.io"
        self._address = self.plugin_config.address
        self._port = self.plugin_config.port
        self._app_id = self.global_config.application.id
        if os.path.isfile('api_credentials.kervi_io'):
            with open('api_credentials.kervi_io') as handle:
                self.spine.log.verbose("using credentials file")
                json_data = json.loads(handle.read())
                self._api_user = json_data["api_user"]
                self._api_password = json_data["api_password"]
                self._api_key = json_data["api_channel"]
        else:
            self._api_user = self.plugin_config.api_user
            self._api_password = self.plugin_config.api_password
            self._api_key = self._config.api_channel
        
        self._app_name = self.global_config.application.get("name", None)
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
        
    def get_default_config(self):
        return{
            "enabled": False,
            "address": "mq.kervi.io",
            "port": 5671,
            "api_user": "",
            "api_password": "",
            "api_channel": ""
        }
    
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
