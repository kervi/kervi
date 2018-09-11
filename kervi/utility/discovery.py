import socket 
import sys
import threading
import sys
import time
import json

class KerviAppDiscovery(threading.Thread):
	def __init__(self, ip, port, app_id):
		threading.Thread.__init__(self)
		self.deamon = True
		self._terminate = False
		self._sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
		server_address = (ip, 9434)
		self._sock.bind(server_address)
		self._response = "I am a kervi app with id:" + app_id
		self._hello = "Are you a kervi app with id: " + app_id
		self._port = port

	def terminate(self):
		self._terminate = True
		self._sock.close()

	def run(self):
		#print("Listining for discovery requests:", self._hello)
		while not self._terminate:
			try:
				data, address = self._sock.recvfrom(4096)
				data = str(data.decode('UTF-8'))
				#print('Received ' + str(len(data)) + ' bytes from ' + str(address) )
				#print('Data:' + data)
				
				if data == self._hello:
					response = {
						"challange": self._response,
						"port": self._port
					}
					response_data = json.dumps(response)
					self._sock.sendto(response_data.encode(), address)
					#print('Sent confirmation back')
			except OSError:
				self._terminate = True
		#print("discovery terminated")


def find_kervi_app(app_id):
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
				server_address = ('127.255.255.255', 9434)
			else:
				server_address = ('255.255.255.255', 9434)
			use_local = not use_local
			sock.sendto(message.encode(), server_address)

			# Receive response
			#print('waiting to receive')
			try:
				data, server = sock.recvfrom(4096)
				response = json.loads(data.decode("UTF-8"))
				if response["challange"] == message_reply:
					result = (server[0], response["port"])
					#print('Received confirmation')
					#print('Server ip: ', str(server[0]), response["port"])
					break
				else:
					print('Verification failed')
			
				print('Trying again...')
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