# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" helper function for getting the ip address of host device """

import socket

def get_ip_address():
    """ returns ip addres of this device bound to primary net adapter """
    _socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    _socket.connect(('google.com', 0))
    return _socket.getsockname()[0]

def get_free_port():
    """ returns a free port """
    _socket = socket.socket()
    _socket.bind(('', 0))
    port = _socket.getsockname()[1]
    _socket.close()
    return port

def is_port_free(port):
    """ return True if port is free """
    _socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    try:
        _socket.bind(("127.0.0.1", port))
    except socket.error:
        return False

    _socket.close()
    return True
