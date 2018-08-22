"""
Robust Consumer that will automatically re-connect on failure.
"""
import logging
import time
import threading
import amqpstorm
from amqpstorm import Connection
from amqpstorm import UriConnection
import json
import requests

logging.basicConfig(level=logging.DEBUG)

LOGGER = logging.getLogger()

class _MQConsumer(threading.Thread):
    def __init__(self, connection):
        threading.Thread.__init__(self)
        self.deamon = True
        self._connection = connection
        self._consumer_tag = None
        self._router = connection._router
        self._exchange = connection._router._app_id
        self._queue = connection._router._router_id
        self._channel = None

    def run(self):
        """Start the Consumers.
        :return:
        """
        while True:
            try:
                
                
                channel = self._connection._connection.channel()
                self._channel = channel
                channel.queue.declare(
                    self._queue,
                    auto_delete=True,
                    arguments = {
                        "x-message-ttl": 5000,
                        "x-max-length": 100
                    }
                )

                channel.queue.bind(self._queue, self._exchange, "ping")
                channel.queue.bind(self._queue, self._exchange, "session")
                channel.queue.bind(self._queue, self._exchange, "message")# "*." + self._router._connection_id + ".*")

                channel.basic.consume(self, self._queue, no_ack=True, no_local=False)
                channel.start_consuming()
                if not channel.consumer_tags:
                    channel.close()
            except amqpstorm.AMQPError as why:
                #LOGGER.exception(why)
                break
                #self.create_connection()
            except KeyboardInterrupt:
                #self.connection.close()
                break
        print("exti consumer")

    def stop(self):
        self._channel.stop_consuming()
        #self._channel.close()

    def __call__(self, message):
        self._connection._on_message(message)
        #message.ack()

class _PingThread(threading.Thread):
    def __init__(self, publisher, id):
        threading.Thread.__init__(self)
        self.deamon = True
        self._publisher = publisher
        self._router = publisher._connection._router
        self._interval = 5

        self._headers = {
            "connection_id": id,
            "routes": None,
            "topic" : "ping",
            "router_id": self._router._router_id
        }
        self._terminated = False

    def stop(self):
        self._terminated = True

    def run(self):
        while not self._terminated:
            routes = []
            for route in self._router.routes_in:
                routes.append(route.as_dict())
            #self._headers["routes"] = routes
            json_routes = json.dumps(routes)
            properties = {
                'content_type': 'application/json',
                "headers": self._headers 
            }
            self._publisher._channel.basic.publish(
                json_routes,
                "ping",
                self._publisher._connection._app_id,
                properties
            )

            request_res = requests.post(
                "https://api.kervi.io/sessions",
                headers= {
                    "api-user": self._publisher._connection._user,
                    "api-password": self._publisher._connection._password,
                    "app_id": self._publisher._connection._app_id,
                    "app_name": self._publisher._connection._app_name
                } 
            )
            #self._publisher.send_message("ping","", self._headers)
            time.sleep(self._interval)

class _MQPublisher(object):
    def __init__(self, connection):
        self._connection = connection
        self._channel = self._connection._connection.channel()
        #self._channel.queue.declare('simple_queue')
        self._ping_thread = _PingThread(self, self._connection._router._connection_id)
        self._ping_thread.start()
        self._bus_topic = None

    def stop(self):
        self._ping_thread.stop()
        self._channel.close()
    
    def send_message(self, topic, payload, headers={}):

        headers["topic"] = topic
        headers["router_id"] = self._connection._router._router_id
        properties = {
            'content_type': 'application/json',
            'headers': headers
        }
        json_body = json.dumps(payload, ensure_ascii=False)
        #print("sm",topic + self._connection._bus_topic, payload)
        self._channel.basic.publish(
            json_body,
            "message", #self._connection._bus_topic,
            self._connection._app_id,
            properties
        )

class _MQConnection(object):
    def __init__(self, router, user, password, address, port, api_key, app_id, app_name):
        print("init mqc")
        self._max_retries = 10
        self._connection = None
        self._consumer = None
        self._publisher = None

        self._bus_topic = ""
        self._consumer_tag = None
        self._user = user
        self._password = password
        self._address = address
        self._port = port
        self._vhost = api_key
        self._app_id = app_id
        self._app_name = app_name
        self._router = router
        self.connected = False


    def connect(self):
        """Create a connection.
        :return:
        """
        attempts = 0
        while True:
            attempts += 1
            try:
                
                request_res = requests.post(
                    "https://api.kervi.io/sessions",
                    headers= {
                        "api-user": self._user,
                        "api-password": self._password,
                        "app_id": self._app_id,
                        "app_name": self._app_name
                    } 
                )
                print("cres", request_res.json())
                connection_string = 'amqps://'+self._user+':'+self._password+'@'+self._address+':' + str(self._port)+'/'+self._vhost
                print("cns", connection_string)
                self._connection = UriConnection(
                    connection_string
                )
                #self._connection = Connection(self._address, self._user, self._password, port=self._port, vhost=self._vhost)
                break
            except amqpstorm.AMQPError as why:
                LOGGER.exception(why)
                if self._max_retries and attempts > self._max_retries:
                    break
                time.sleep(min(attempts * 2, 30))
            except KeyboardInterrupt:
                break
        if self._connection:
            self._consumer = _MQConsumer(self)
            self._consumer.start()
            self._publisher = _MQPublisher(self)

    def disconnect(self):
        if self._consumer:
            self._consumer.stop()
        if self._publisher:
            self._publisher.stop()
        self._connection.close()

    def _on_message(self, message):
        
        if message.method["routing_key"] == "ping":
            self._router.on_ping(message.properties["headers"], message.json())
        elif message.method["routing_key"] == "session":
            self._router.on_session(message.properties["headers"], message.json())
        else:
            #print("Message:", message.json(), message.method, message.message_id, message.properties)
            self._router.on_message(message.properties["headers"], message.json())

    def send_message(self, topic, message, headers):
        if self._publisher:
            self._publisher.send_message(topic, message, headers)

    def register_bus_connection(self, connection):
        self._bus_topic = ".Q." + "".join(self._router._connections.keys()) + ".Q"
        print("bt", self._bus_topic)
        
    