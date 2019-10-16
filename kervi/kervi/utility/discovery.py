import socket 
import sys
import threading
import sys
import time
import json

class KerviAppDiscovery(threading.Thread):
	def __init__(self, ip, port, discovery_port, app_id, challenge, app_name, web_address):
		#print("d", ip, port, discovery_port)
		threading.Thread.__init__(self, None, None, "Kervi App discovery")
		self.deamon = True
		self._terminate = False
		self._sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
		server_address = ("0.0.0.0", discovery_port)
		self._sock.bind(server_address)
		self._response = "I am a kervi app with id:" + app_id
		self._hello = "Are you a kervi app with id: " + app_id
		self._detect = "Are you a kervi app with challenge: " + challenge
		self._detect_response = "I am a kervi app with challenge: " + challenge
		
		self._port = port
		self._discovery_port = discovery_port
		self._app_id = app_id
		self._app_name = app_name
		self._web_address = web_address
		self._ip = ip

	def terminate(self):
		self._terminate = True
		self._sock.close()

	def run(self):
		from kervi.core.utility.kervi_logging import KerviLog
		KerviLog("discovery").verbose("Listining for discovery requests on port: %s, app id:%s", self._discovery_port, self._app_id)
		while not self._terminate:
			try:
				data, address = self._sock.recvfrom(4096)
				data = str(data.decode('UTF-8'))
				#print('Received ' + str(len(data)) + ' bytes from ' + str(address) )
				#print('Data:' + data)
				if data == self._hello:
					response = {
						"challenge": self._response,
						"ip": self._ip,
						"port": self._port
					}
					response_data = json.dumps(response)
					self._sock.sendto(response_data.encode(), address)
				
				if data == self._detect:
					response = {
						"challenge": self._detect_response,
						"port": self._port,
						"id": self._app_id,
						"name": self._app_name,
						"web": self._web_address
					}
					response_data = json.dumps(response)
					self._sock.sendto(response_data.encode(), address)
				
					#print('Sent confirmation back', response)
			except OSError:
				self._terminate = True
		#print("discovery terminated")


def find_kervi_app(app_id, discovery_port=9434):
	result = (None, None)
	# Create a UDP socket
	sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
	sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
	sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
	sock.settimeout(2)

	use_local = True
	message = "Are you a kervi app with id: " + app_id
	message_reply = "I am a kervi app with id:" + app_id
	try:
		while True:
			# Send data
			#print('sending: ' + message)
			if use_local:
				server_address = ('127.255.255.255', discovery_port)
			else:
				server_address = ('255.255.255.255', discovery_port)
			use_local = not use_local
			sock.sendto(message.encode(), server_address)

			# Receive response
			#print('waiting to receive')
			try:
				data, server = sock.recvfrom(4096)
				response = json.loads(data.decode("UTF-8"))
				#print("response", server[0], response)
				if response["challenge"] == message_reply:
					result = (response["ip"], response["port"])
					#print('Received confirmation')
					#print('Server ip: ', str(server[0]), response["port"])
					break
				else:
					print('Challenge verification failed.')
			
				#print('Trying again...')
			except KeyboardInterrupt:
				break
			except TimeoutError:
				pass
			except Exception as ex:
				#print("e", ex)
				pass
		
	except KeyboardInterrupt:
		pass
	finally:	
		sock.close()

	return result