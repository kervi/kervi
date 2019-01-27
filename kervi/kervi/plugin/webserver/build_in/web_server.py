
import os
import time
import base64
import json
from socketserver import ThreadingMixIn
import http.client
from kervi.spine import Spine
from kervi.core.authentication import  Authorization
import kervi.utility.encryption as encryption
from kervi.utility import nethelper
from kervi.plugin.webserver import WebServerPlugin

try:
    from SimpleHTTPServer import SimpleHTTPRequestHandler
except:
    from http.server import SimpleHTTPRequestHandler

try:
    from BaseHTTPServer import HTTPServer
except:
    from http.server import HTTPServer

import socket
import threading
import kervi.ui
import os

class _HTTPRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, req, client_addr, server):
        try:
            SimpleHTTPRequestHandler.__init__(self, req, client_addr, server)
            self.server = server
            self.req = req
        except socket.error:
            pass

    def log_message(self, format, *args):
        return

    def do_AUTHHEAD(self):
        print("send header")
        self.send_response(401)
        self.send_header('WWW-Authenticate', 'Basic realm=\"Test\"')
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        try:
            if self.server.do_authorize() and self.headers['Authorization'] == None:
                self.do_AUTHHEAD()
                #self.wfile.write('no auth header received')
                pass
            elif self.server.authorize(self.headers['Authorization']):
                
                if self.path.startswith("/cam"):
                    path = self.path.split("/")
                    cam_id = path[-1]
                    spine = Spine()
                    print("cam:", cam_id)
                    info = spine.send_query("getComponentInfo", cam_id)
                    if info:
                        conn = http.client.HTTPConnection(info["ui"]["source"]["server"], timeout=self.timeout)
                        conn.request("GET", info["ui"]["source"]["path"])
                        res = conn.getresponse()
                        self.send_response(res.status)
                        for line in res.headers:
                            self.send_header(line, res.headers[line])
                        self.end_headers()
                        while not self.server.terminate:
                            chunk = res.read(8192)
                            if not chunk:
                                break
                            self.wfile.write(chunk)

                elif self.path.endswith("global.js"):
                    self.send_response(200)
                    self.send_header('Content-type', 'text/javascript')
                    self.end_headers()
                    if encryption.enabled():
                        response = bytes("kerviSocketAddress='" + str(self.server.ip_address) + ":" + str(self.server.ws_port) + "';\n\rsocketProtocol='wss';", 'utf-8')
                    else:
                        response = bytes("kerviSocketAddress='" + str(self.server.ip_address) + ":" + str(self.server.ws_port) + "';\n\rsocketProtocol='ws';", 'utf-8')
                    self.wfile.write(response)
                elif self.path.endswith("kervitexts.js"):
                    self.send_response(200)
                    self.send_header('Content-type', 'text/javascript')
                    self.end_headers()
                    texts = json.dumps(self.server.texts)
                    response = bytes("kerviUITexts=" + texts , 'utf-8')
                    self.wfile.write(response)
                else:
                    if self.path.startswith("/dashboard/") or self.path.startswith("/connect"):
                        path = self.server.docpath
                    else:
                        path = self.server.docpath + self.path
                    if os.path.exists(path) and os.path.isdir(path):
                        index_files = ['/index.html', '/index.htm', ]
                        for index_file in index_files:
                            tmppath = path + index_file
                            if os.path.exists(tmppath):
                                path = tmppath
                                break

                    _, ext = os.path.splitext(path)
                    ext = ext.lower()
                    content_type = {
                        '.css': 'text/css',
                        '.gif': 'image/gif',
                        '.htm': 'text/html',
                        '.html': 'text/html',
                        '.jpeg': 'image/jpeg',
                        '.jpg': 'image/jpg',
                        '.js': 'text/javascript',
                        '.png': 'image/png',
                        '.text': 'text/plain',
                        '.txt': 'text/plain',
                    }

                    if ext in content_type:
                        self.send_response(200)  # OK
                        self.send_header('Content-type', content_type[ext])
                        self.end_headers()

                        with open(path, 'rb') as ifp:
                            self.wfile.write(ifp.read())
                    else:
                        self.send_response(200)  # OK
                        self.send_header('Content-type', 'text/plain')
                        self.end_headers()

                        with open(path, 'rb') as ifp:
                            self.wfile.write(ifp.read())
            else:
                self.do_AUTHHEAD()
        except IOError:
            self.send_error(404, 'file not found')

    def relay_streaming(self, res):
        self.wfile.write("%s %d %s\r\n" % (self.protocol_version, res.status, res.reason))
        for line in res.headers.headers:
            self.wfile.write(line)
        self.end_headers()
        try:
            while not self.server.terminate:
                chunk = res.read(8192)
                if not chunk:
                    break
                self.wfile.write(chunk)
            self.wfile.flush()
        except socket.error:
            # connection closed by client
            pass

class _HTTPServer(ThreadingMixIn, HTTPServer):
    def __init__(self, address, web_port, ws_port, handler):
        HTTPServer.__init__(self, (address, web_port), handler)
        self.ip_address = address
        self.terminate = False
        self.ws_port = ws_port
        kervipath = os.path.dirname(kervi.ui.__file__)
        self.docpath = os.path.join(kervipath, "web/dist/webApp")

    def do_authorize(self):
        return False

    def authorize(self, authorize_header):
        if authorize_header is None and not self.do_authorize():
            return True
        else:
            authstr = base64.b64decode(authorize_header[6:]).decode('utf-8')
            print(authstr)
            credentials = authstr.split(":")
            print(credentials)
            return Authorization.authorize(credentials[0], credentials[1])


class KerviWebServerPlugin(WebServerPlugin):
    def __init__(self, name, config, manager):
        WebServerPlugin.__init__(self, name, config, manager)
    
        self._server = None
        self._asset_path = ""
        self._server_thread = None
        
    def start(self):
        
        self._server = _HTTPServer(self.plugin_config.ip_address, self.plugin_config.http_port, self.plugin_config.ws_port, _HTTPRequestHandler)
        if encryption.enabled():
            cert_file, key_file = encryption.get_cert()
            if key_file and cert_file:
                import ssl
                self._server.socket = ssl.wrap_socket (self._server.socket, keyfile=key_file, certfile=cert_file, server_side=True)

        self._server_thread = threading.Thread(target=self._server.serve_forever, name="webserver")
        self._server_thread.daemon = True
        self._server_thread.start()

    def stop(self):
        #print("stop web server")
        self._server.terminate = True
        self._server.shutdown()
        if not self._server_thread.join(5):
            print("")
        #print("ws terminated")

    def get_default_config(self):
        return {
                "ip_address": "0.0.0.0",
                "ws_port": "9000",
                "http_port": nethelper.get_free_port([80, 8080, 8081]),
                "http_docs": None,
            }
