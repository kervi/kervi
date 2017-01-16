# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

import os
import threading
import time
import StringIO
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
        self.visible = True

    def value_changed(self, newValue, oldValue):
        self.controller.pan_changed(newValue)

class _CameraTiltInput(ControllerNumberInput):
    def __init__(self, controller):
        ControllerNumberInput.__init__(self, controller.component_id+".tilt", "Tilt", controller)
        self.unit = "degree"
        self.value = 0
        self.max_value = 90
        self.min_value = -90
        self.visible = True

    def value_changed(self, newValue, oldValue):
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
        self.add_option("5", "5 / sec")
        self.add_option("10", "10 / sec")
        self.add_option("15", "15 / sec", True)

    def change(self, selected_options):
        self.controller.framerate_changed(selected_options)

class _CameraRecordButton(ControllerSwitchButton):
    def __init__(self, controller):
        ControllerSwitchButton.__init__(
            self, controller.component_id+".record",
            "Record",
            controller)

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

    def click(self):
        self.controller.save_picture()

class CameraBase(Controller):
    def __init__(self, camera_id, name):
        Controller.__init__(self, camera_id, name)
        self.type = "camera"
        self.parameters = None
        self.add_components(
            _CameraPanInput(self),
            _CameraTiltInput(self),
            _CameraRecordButton(self),
            _CameraPictureButton(self),
            _CameraFrameRate(self)
        )

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

class Camera(CameraBase):
    def __init__(self, camera_id, name, dashboards, source):
        CameraBase.__init__(self, camera_id, name)
        self.parameters = {"height":480, "width":640, "source":source}


class _FrameThread(KerviThread):
    def __init__(self, camera):
        KerviThread.__init__(self)
        self.spine = spine.Spine()
        self.alive = False
        self.camera = camera
        if self.spine:
            self.spine.register_command_handler("startThreads", self._start_command)
            self.spine.register_command_handler("stopThreads", self._stop_command)
        KerviThread.__init__(self)

    def _step(self):
        self.camera._get_frame()

    def _start_command(self):
        if not self.alive:
            self.alive = True
            KerviThread.start(self)

    def _stop_command(self):
        if self.alive:
            self.alive = False
            self.stop()


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
                buf = StringIO.StringIO()
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
    """
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
        CameraBase.__init__(self, camera_id, name)
        self.ip_address = nethelper.get_ip_address()
        self.ip_port = nethelper.get_free_port()
        self.fps = kwargs.get("fps", 10)
        self.current_frame = None

        self.server = _HTTPFrameServer(
            (self.ip_address, self.ip_port),
            _HTTPFrameHandler,
            self
        )
        self.server_thread = threading.Thread(target=self.server.serve_forever)
        self.server_thread.daemon = True
        self.server_thread.start()

        self.frame_thread = _FrameThread(self)
        self.parameters = {
            "height":kwargs.get("height", 480),
            "width":kwargs.get("width", 640),
            "type":"frame",
            "fps":self.fps,
            "source":"http://"+str(self.ip_address)+":"+str(self.ip_port)+"/"+camera_id+".png"
        }

    def get_font(self, name="Fanwood", size=16):
        import kervi
        from PIL import ImageFont
        kervipath = os.path.dirname(kervi.__file__)
        fontpath = os.path.join(kervipath, "fonts", name + ".otf")
        font = ImageFont.truetype(fontpath, size)
        return font

    def _get_frame(self):
        frame = self.get_frame(self.parameters["height"], self.parameters["width"])
        if frame:
            self.current_frame = frame
        time.sleep(1.0/self.fps)

    def get_frame(self, height, width):
        """
        Abstract method.
        Fill in the abstract method get_frame with functionality that graps one frame from the camera.
        The method must return a pil images.
        """
        self.spine.log.debug(
            "abstract method get_frame reached:{0}",
            self.component_id
        )
        return None

class IPCamera(CameraBase):
    def __init__(self, camera_id, name, dashboards, source):
        CameraBase.__init__(self, camera_id, name)
        self.parameters = {"height":480, "width":640, "source":source}

class USBCamera(CameraBase):
    def __init__(self, camera_id, name, dashboards, source):
        CameraBase.__init__(self, camera_id, name)
        self.parameters = {"height":480, "width":640, "source":source}
