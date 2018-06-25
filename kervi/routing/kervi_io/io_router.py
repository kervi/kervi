
from kervi.routing.router import Router
from kervi.routing.kervi_io.io_connection import _IOConnection
#import threading import Thread

# class _IncomingThread(Thread):
#     def __init__(self, channel):
#         Thread.__init__(self)
#         self.deamon = True
#         self._terminate = False
#         self._channel = channel

#     def stop(self):
#         self._terminate = True

#     def run(self):
#         self._channel.start_consuming()




class KerviIORouter(Router):
    def __init__(self, config):
        Router.__init__(self, config)
        self._config = config.routing.kervi_io
        self._address = self._config.address
        self._port = self._config.port
        self._api_key = self._config.api_key
        self._app_id = config.application.id
        self._enabled = self._config.enabled
        print("xz2", self._address, self._api_key, self._app_id)
        self._connection = _IOConnection(self, "user_1", "1234", self._address, self._port, self._api_key, self._app_id)

    def connect(self):
        pass    
        #self._thread = _IncomingThread(self._channel_in)

    def start_router(self):
        self._connection.run()

    def register_route(self, route):
        pass
    
    def register_bus_connection(self, connection):
        self._connection.register_bus_connection(connection)
    
    def send_message(self, topic, payload, headers):
        if self._connection and self._connection._publisher_channel:
            self._connection._publisher_channel.send_message(topic, payload, headers)
        # self._channel_out.basic_publish(
        #     exchange=self._api_key,
        #     routing_key = topic,
        #     body= payload
        # )

    # def _on_channel_open(self, connection):
    #     print("channel connected")

    # def _callback(self, ch, method, properties, body):
    #     print("Received ", body)
