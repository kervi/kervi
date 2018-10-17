#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

""" helper function for getting the ip address of host device """

import socket

def get_ip_address():
    """ returns ip addres of this device bound to primary net adapter """
    
    try:
        _socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        _socket.connect(('google.com', 0))
        return _socket.getsockname()[0]
    except:
        return "127.0.0.1"
def get_free_port(preferred_ports = None):
    """ returns a free port """

    port = 0
    if preferred_ports:
        for preferred_port in preferred_ports:
            if is_port_free(preferred_port):
                port = preferred_port
                break

    if port == 0:
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

