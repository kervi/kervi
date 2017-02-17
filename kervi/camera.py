# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

import os
import threading
import time

#from twisted.web.server import Site
#from twisted.web.resource import Resource
#from twisted.internet import reactor, endpoints


try:
    from io import BytesIO
except ImportError:
    from StringIO import StringIO as BytesIO

import socket
from kervi.controller import Controller, ControllerNumberInput, ControllerSwitchButton, ControllerButton, ControllerSelect
from kervi.utility.thread import KerviThread
import kervi.utility.nethelper as nethelper
import kervi.spine as spine
try:
    from SimpleHTTPServer import SimpleHTTPRequestHandler
except:
    from http.server import SimpleHTTPRequestHandler

try:
    from BaseHTTPServer import HTTPServer
except:
    from http.server import HTTPServer


class _CameraPanInput(ControllerNumberInput):
    def __init__(self, controller):
        ControllerNumberInput.__init__(self, controller.component_id+".pan", "Pan", controller)
        self.unit = "degree"
        self.value = 0
        self.max_value = 90
        self.min_value = -90
        self.visible = False

    def value_changed(self, newValue, old_value):
        self.controller.pan_changed(newValue)

class _CameraTiltInput(ControllerNumberInput):
    def __init__(self, controller):
        ControllerNumberInput.__init__(self, controller.component_id+".tilt", "Tilt", controller)
        self.unit = "degree"
        self.value = 0
        self.max_value = 90
        self.min_value = -90
        self.visible = False

    def value_changed(self, newValue, old_value):
        self.controller.tilt_changed(newValue)

class _CameraFrameRate(ControllerSelect):
    """ Framerate selector """
    def __init__(self, controller):
        ControllerSelect.__init__(
            self,
            controller.component_id + ".framerate",
            "Framerate",
            controller
        )
        self.persist_value = True
        self.add_option("5", "5 / sec")
        self.add_option("10", "10 / sec")
        self.add_option("15", "15 / sec", True)

    def change(self, selected_options):
        if (len(selected_options)):
            value = selected_options[0]["value"]
            self.controller.framerate_changed(value)


class _CameraRecordButton(ControllerSwitchButton):
    def __init__(self, controller):
        ControllerSwitchButton.__init__(
            self, controller.component_id+".record",
            "Record",
            controller)
        self.set_ui_parameter("on_icon", "video-camera")
        self.set_ui_parameter("off_icon", "video-camera")
        self.set_ui_parameter("size", 1)
        self.set_ui_parameter("on_text", None)
        self.set_ui_parameter("off_text", None)
        self.set_ui_parameter("show_name", False)

    def on(self):
        self.controller.start_record()

    def off(self):
        self.controller.stop_record()

class _CameraPictureButton(ControllerButton):
    def __init__(self, controller):
        ControllerButton.__init__(
            self,
            controller.component_id+".savePicture",
            "Take picture",
            controller
        )
        self.set_ui_parameter("icon", "camera")
        self.set_ui_parameter("size", 1)

    def click(self):
        self.controller.save_picture()

class CameraBase(Controller):
    def __init__(self, camera_id, name, **kwargs):
        Controller.__init__(self, camera_id, name)
        self.type = "camera"
        self.add_components(
            _CameraPanInput(self),
            _CameraTiltInput(self),
            _CameraRecordButton(self),
            _CameraPictureButton(self),
            _CameraFrameRate(self)
        )

        self._ui_parameters["height"] = kwargs.get("height", 480)
        self._ui_parameters["width"] = kwargs.get("width", 640)
        self._ui_parameters["type"] = kwargs.get("type", "")
        self._ui_parameters["fps"] = kwargs.get("fps", 10)
        self._ui_parameters["source"] = kwargs.get("source", "")

    @property
    def height(self):
        """
        Height of images to capture
        """
        return self._ui_parameters["height"]

    @height.setter
    def height(self, value):
        self.set_ui_parameter("height", value)

    @property
    def width(self):
        """
        Width of images to capture
        """
        return self._ui_parameters["width"]

    @width.setter
    def width(self, value):
        self.set_ui_parameter("width", value)

    @property
    def fps(self):
        """
        Frames to capture per second
        """
        return self._ui_parameters["fps"]

    @fps.setter
    def fps(self, value):
        self.set_ui_parameter("fps", value)

    @property
    def source(self):
        """
        How to connect to this camera
        """
        return self._ui_parameters["source"]

    @source.setter
    def source(self, value):
        self.set_ui_parameter("source", value)


    def pan_changed(self, pan_value):
        """abstract method"""
        self.spine.log.debug(
            "abstract method pan_changed reached:{0}",
            self.component_id
        )

    def tilt_changed(self, tilt_value):
        """abstract method"""
        self.spine.log.debug(
            "abstract method tilt_frame reached:{0}",
            self.component_id
        )

    def framerate_changed(self, framerate):
        """abstract method"""
        self.spine.log.debug(
            "abstract method framerate_changed reached:{0}",
            self.component_id
        )

    def save_picture(self):
        """abstract method"""
        self.spine.log.debug(
            "abstract method save_picture reached:{0}",
            self.component_id
        )

    def start_record(self):
        """abstract method"""
        self.spine.log.debug(
            "abstract method start_record reached:{0}",
            self.component_id
        )

    def stop_record(self):
        """abstract method"""
        self.spine.log.debug(
            "abstract method stop_record reached:{0}",
            self.component_id
        )

class _CameraFrameThread(KerviThread):
    def __init__(self, camera):
        KerviThread.__init__(self)
        self.spine = spine.Spine()
        self.alive = False
        self.camera = camera
        if self.spine:
            self.spine.register_command_handler("startThreads", self._start_command)
            self.spine.register_command_handler("stopThreads", self._stop_command)
        #KerviThread.__init__(self)

    def run(self):
        """Private method do not call it directly or override it."""
        try:
            self.camera.capture_frames()
        except:
            self.spine.log.exception("CameraFrameThread")

    def _start_command(self):
        if not self.alive:
            self.alive = True
            KerviThread.start(self)

    def _stop_command(self):
        self.camera.terminate = True
        if self.alive:
            self.alive = False
            self.stop()


# class _TwistedResource(Resource):
#     def __init__(self,camera):
#         self.camera = camera
#         Resource.__init__(self)

#     def render_GET(self,request):
#         print("t",request)
#         request.setResponseCode(200)
#         request.setHeader('Content-type', 'image/png')
#         print("x")
#         if self.server.camera.current_frame:
#             buf = BytesIO()
#             self.camera.current_frame.save(buf, format='png')
#             data = buf.getvalue()
#             request.setHeader('Content-length', len(data))
#             return data
#         request.setHeader('Content-length', 0)
#         return ""

class _HTTPFrameHandler(SimpleHTTPRequestHandler):
    def __init__(self, req, client_addr, server):
        try:
            SimpleHTTPRequestHandler.__init__(self, req, client_addr, server)
            self.server = server
            self.req = req
        except socket.error:
            pass

    def log_message(self, format, *args):
        return

    def do_GET(self):
        try:
            self.send_response(200)
            self.send_header('Content-type', 'image/png')

            if self.server.camera.current_frame:
                buf = BytesIO()
                self.server.camera.current_frame.save(buf, format='png')
                data = buf.getvalue()
                self.send_header('Content-length', len(data))
                self.end_headers()
                self.wfile.write(data)
            return
        except:
            pass

class _HTTPFrameServer(HTTPServer):
    def __init__(self, addres, handler, camera):
        HTTPServer.__init__(self, addres, handler)
        self.camera = camera

class FrameCamera(CameraBase):
    r"""
    Simple camera that streams video frame by frame to the ui.
    Colud be used with the Raspberry PI camera.
    Fill in the abstract method get_frame with functionality that graps one frame from the camera.
    Frames must be pil images.

    :param camera_id:
        Id of the camera used to reference in dashboards.
    :type name: str

    :param name:
        Name of the camera used in ui.
    :type name: str

    :param \**kwargs:
            See below

    :Keyword Arguments:
            * *height* (``int``) --
                Height of video frame. Default value is 480.

            * *width* (``int``) --
                Width of video frame. Default value is 640.

            * *fps* (``int``) --
                Frames per second.
    """
    def __init__(self, camera_id, name, **kwargs):
        CameraBase.__init__(self, camera_id, name, type="frame", **kwargs)
        self._terminate = False
        self.ip_address = nethelper.get_ip_address()
        self.ip_port = nethelper.get_free_port()
        self.source = "http://" + str(self.ip_address) + ":" + str(self.ip_port) + "/" + camera_id# + ".png"
        self.current_frame = None

        self.server = _HTTPFrameServer(
            (self.ip_address, self.ip_port),
            _HTTPFrameHandler,
            self
        )
        self.server_thread = threading.Thread(target=self.server.serve_forever)
        self.server_thread.daemon = True
        self.server_thread.start()

        self.frame_thread = _CameraFrameThread(self)

        #root = Resource()
        #root.putChild(camera_id, _TwistedResource(self))
        #factory = Site(root)
        #reactor.listenTCP(self.ip_port, factory)
        #endpoint = endpoints.TCP4ServerEndpoint(reactor, self.ip_port)
        #endpoint.listen(factory)
        #print("a")
        #reactor.run()
        #self.server_thread = threading.Thread(target=reactor.run())
        #self.server_thread.daemon = True
        #self.server_thread.start()

        print("b")

    @property
    def terminate(self):
        """
        Flag to signal that the get_frames method should exit
        """
        return self._terminate

    @terminate.setter
    def terminate(self, value):
        self._terminate = value

    def get_font(self, name="Fanwood", size=16):
        """
        Returns a font that can be used by pil image functions.
        This default font is "Fanwood" that is available on all platforms.
        """
        import kervi
        from PIL import ImageFont
        kervipath = os.path.dirname(kervi.__file__)
        fontpath = os.path.join(kervipath, "fonts", name + ".otf")
        font = ImageFont.truetype(fontpath, size)
        return font

    def wait_next_frame(self):
        """
        Waits for next frame.
        """
        time.sleep(1.0 / self.fps)

    def frame_ready(self, frame):
        """
        Call this method when a frame is ready
        """
        if frame:
            self.current_frame = frame

    def capture_frames(self):
        """
        Abstract method use it like the run method in a thread.
        capture frames from camera until the flag self.terminate is True.
        captured frames should be passed to the method frame_ready.
        """
        pass

class IPCamera(CameraBase):
    def __init__(self, camera_id, name, dashboards, source):
        CameraBase.__init__(self, camera_id, name)
        self.parameters = {"height":480, "width":640, "source":source}

class USBCamera(CameraBase):
    def __init__(self, camera_id, name, dashboards, source):
        CameraBase.__init__(self, camera_id, name)
        self.parameters = {"height":480, "width":640, "source":source}
