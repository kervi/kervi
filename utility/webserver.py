
from SimpleHTTPServer import SimpleHTTPRequestHandler
from BaseHTTPServer import HTTPServer
import threading
import kervi
import os
import time
    
server=None
def start(address):
    global server
    kervipath = os.path.dirname(kervi.__file__)
    docpath = os.path.join(kervipath,"web-ui")
    print "dp",docpath
    cwd = os.getcwd()
    os.chdir(docpath)
    print "cw a",os.getcwd()
    server = HTTPServer(address, SimpleHTTPRequestHandler)
    thread = threading.Thread(target = server.serve_forever)
    thread.daemon = True
    thread.start()
    time.sleep(2)
    #os.chdir(cwd)
    
    print "cw b",os.getcwd()

def stop():
    print "stop web server"
    server.shutdown()