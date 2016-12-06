# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" helper function for getting the ip address of host device """

import socket

def get_ip_address():
    """ returns ip addres of this device bound to primary net adapter """
    _socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    _socket.connect(('google.com', 0))
    return _socket.getsockname()[0]
