# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" helper function for getting the ip address of host device """

import socket
        
def getIPAddress():        
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(('google.com', 0))
    return s.getsockname()[0]