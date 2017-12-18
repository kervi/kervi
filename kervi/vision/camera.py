# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

import os
import threading
import time
import kervi.utility.encryption as encryption

try:
    from io import BytesIO
except ImportError:
    from StringIO import StringIO as BytesIO

import socket
from kervi.controllers.controller import Controller
from kervi.values import *
from kervi.utility.thread import KerviThread
import kervi.utility.nethelper as nethelper
import kervi.spine as spine
import kervi.hal as hal
import kervi.utility.authorization as authorization

try:
    from SimpleHTTPServer import SimpleHTTPRequestHandler
except:
    from http.server import SimpleHTTPRequestHandler

try:
    from BaseHTTPServer import HTTPServer
except:
    from http.server import HTTPServer

class CameraBase(Controller):
    def __init__(self, camera_id, name, **kwargs):
        Controller.__init__(self, camera_id, name)
        self.type = "camera"
        self.inputs.add("pan", "Pan", DynamicNumber)
        self.inputs.add("tilt", "Tilt", DynamicNumber)

        self.pan = self.outputs.add("pan", "Pan", DynamicNumber)
        self.tilt = self.outputs.add("tilt", "Tilt", DynamicNumber)

        self.flip_vertical = kwargs.get("flip_vertical", False)
        self.flip_horizontal = kwargs.get("flip_horizontal", False)

        self.inputs.add("fps", "FPS", DynamicEnum)
        self.inputs["fps"].set_ui_parameter("inline", True)

        self.inputs.add("save", "Save picture", DynamicBoolean)
        self.inputs["save"].set_ui_parameter("button_icon", "camera")
        self.inputs["save"].set_ui_parameter("inline", True)

        self.inputs.add("record", "Record video", DynamicBoolean)
        self.inputs["record"].set_ui_parameter("on_icon", "video-camera")
        self.inputs["record"].set_ui_parameter("off_icon", "video-camera")
        self.inputs["record"].set_ui_parameter("inline", True)

        self._ui_parameters["height"] = kwargs.get("height", 480)
        self._ui_parameters["width"] = kwargs.get("width", 640)
        self._ui_parameters["type"] = kwargs.get("type", "")
        self._ui_parameters["fps"] = kwargs.get("fps", 10)
        self._ui_parameters["source"] = kwargs.get("source", "")
        self._ui_parameters["show_pan_tilt"] = kwargs.get("show_pan_tilt", False)
        self._ui_parameters["show_buttons"] = kwargs.get("show_buttons", True)

    def input_changed(self, changed_input):
        if changed_input == self.inputs["pan"]:
            self.pan.value = changed_input.value
        if changed_input == self.inputs["tilt"]:
            self.tilt.value = changed_input.value

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

    def link_to_dashboard(self, dashboard_id, section_id = None, **kwargs):
        r"""
        Links this camera to a dashboard section or to the background of a dashboard.

        :param dashboard_id:
            id of the dashboard to link to.
        :type section_id: str

        :param section_id:
            id of the section.
        :type section_id: str

        :param \**kwargs:
            Use the kwargs below to override default values set in ui_parameters

        :Keyword Arguments:
            * *ui_size* (``int``) -- Size of the component in dashboard unit size.
                In order to make the sections and components align correct a dashboard unit is defined.
                Default the dashboard unit is a square that is 150 x 150 pixels.
                The width of the camera picture is ui_size * dashboard unit size.

            * *show_buttons* (``bool``) -- Add this component to header of section.
            * *show_pan_tilt* (``bool``) -- Add this component to header of section.
        """
        if section_id is None:
            section_id = "background"

        Controller.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            **kwargs
            )

class _CameraFrameThread(KerviThread):
    def __init__(self, camera, mutex):
        KerviThread.__init__(self)
        self.spine = spine.Spine()
        self.alive = False
        self.camera = camera
        self.mutex = mutex
        if self.spine:
            self.spine.register_command_handler("startThreads", self._start_command)
            self.spine.register_command_handler("stopThreads", self._stop_command)
        #KerviThread.__init__(self)

    def run(self):
        """Private method do not call it directly or override it."""
        try:
            self.camera._capture_frames()
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

class _HTTPFrameHandler(SimpleHTTPRequestHandler):
    def __init__(self, req, client_addr, server):
        try:
            SimpleHTTPRequestHandler.__init__(self, req, client_addr, server)
            self.server = server
            self.req = req
        except socket.error:
            pass

    def log_message(self, format, *args):
        pass

    def do_GET(self):
        try:
            #print("ch", self.headers["Cookie"])
            if authorization.is_session_valid(self.headers):
                self.send_response(200)
                self.send_header("Cache-Control", "max-age=0, no-cache, must-revalidate, proxy-revalidate")
                self.send_header('Content-type', 'multipart/x-mixed-replace; boundary=--jpgboundary')
                self.end_headers()
                #first_frame = True
                self.frame_number = 0
                while not self.server.camera._terminate:
                    if self.server.camera.current_frame and self.server.camera.current_frame_number != self.frame_number:
                        self.frame_number = self.server.camera.current_frame_number
                        buf = BytesIO()
                        self.server.mutex.acquire()
                        try:
                            self.server.camera.current_frame.save(buf, format='png')
                        finally:
                            self.server.mutex.release()
                        
                        data = buf.getvalue()
                        self.wfile.write(b"--jpgboundary\r\n")
                        self.send_header('Content-type', 'image/png')
                        self.send_header('Content-length', len(data))
                        self.end_headers()
                        self.wfile.write(data)
                        
                        #first_frame = False
                    time.sleep(1.0 / 30)
                print("exit cam thread")
            else:
                print("camera streamer, invalid session id")
                self.send_response(403)
                self.end_headers()
            return
        finally:
            pass
try:
    from socketserver import ThreadingMixIn
    class _HTTPFrameServer(ThreadingMixIn, HTTPServer):
        def __init__(self, addres, handler, camera, mutex):
            HTTPServer.__init__(self, addres, handler)
            self.camera = camera
            self.terminate = False
            self.mutex = mutex
except:
    print("ThreadingMixIn not found, use single thread camera server")
    class _HTTPFrameServer(HTTPServer):
        def __init__(self, addres, handler, camera, mutex):
            HTTPServer.__init__(self, addres, handler)
            self.camera = camera
            self.terminate = False
            self.mutex = mutex

class CameraStreamer(CameraBase):
    r"""
    Camera controller that streams video to the ui.

    :param camera_id:
        Id of the camera. The id is used to reference the camera in other parts of the kervi application.
    :type camera_id: str

    :param name:
        Name of the camera used in ui.
    :type name: str

    :param camera_source:
        A frame driver that is used to capture frames from a camera.

    :type camera_source: The name of the camera source to use.

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
    def __init__(self, camera_id, name, camera_source = None, **kwargs):
        CameraBase.__init__(self, camera_id, name, type="frame", **kwargs)
        self._device_driver = hal.get_camera_driver(camera_source)
        self._device_driver.camera = self

        protocol = "http://"
        if encryption.enabled():
            protocol = "https://"

        self.ip_address = nethelper.get_ip_address()
        self.ip_port = nethelper.get_free_port()
        self.source = protocol + str(self.ip_address) + ":" + str(self.ip_port) + "/" + camera_id# + ".png"
        self.source = {
            "server": protocol + str(self.ip_address) + ":" + str(self.ip_port),
            "path": "/"+camera_id
        }
        self.current_frame = None
        self.current_frame_number = 0

        from threading import Lock
        self.mutex = Lock()

        self.server = _HTTPFrameServer(
            (self.ip_address, self.ip_port),
            _HTTPFrameHandler,
            self,
            self.mutex
        )

        if encryption.enabled():
            cert_file, key_file = encryption.get_cert()
            if key_file and cert_file:
                import ssl
                self.server.socket = ssl.wrap_socket (self.server.socket, keyfile=key_file, certfile=cert_file, server_side=True)
                
        self.server_thread = threading.Thread(target=self.server.serve_forever)
        self.server_thread.daemon = True
        self.server_thread.start()

        self.frame_thread = _CameraFrameThread(self, self.mutex)

    def exit(self):
        print("stop cam")
        self.terminate = True
        self._terminate = True
        self.server.shutdown()

    @property
    def _terminate(self):
        """
        Flag to signal that the get_frames method should exit
        """
        return self._device_driver.terminate

    @_terminate.setter
    def _terminate(self, value):
        self._device_driver.terminate = value

    def get_font(self, name="Fanwood", size=16):
        """
        Returns a font that can be used by pil image functions.
        This default font is "Fanwood" that is available on all platforms.
        """
        import kervi.vision as vision
        from PIL import ImageFont
        vision_path = os.path.dirname(vision.__file__)
        fontpath = os.path.join(vision_path, "fonts", name + ".otf")
        font = ImageFont.truetype(fontpath, size)
        return font

    def _capture_frames(self):
        self._device_driver.capture_frames()

    def _frame_ready(self, frame):
        if frame:
            self.mutex.acquire()
            self.current_frame = frame
            self.current_frame_number += 1
            self.mutex.release()

    def frame_captured(self, image):
        """
        Abstract method that is called when a new frame is ready from the camera.
        You can use this method to post process images before they are streamed.
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


class FrameCameraDeviceDriver(object):
    """
    Base class for camera drivers that grap frames from a camera and streams them via the FrameCamera class.
    Could be used with the Raspberry PI camera.
    Fill in the abstract method capture_frames with functionality that graps
    frames from the camera and feeds them to the streamer.
    Frames must be pil images.
    """
    def __init__(self):
        self._terminate = False

    @property
    def camera(self):
        return self._camera

    @camera.setter
    def camera(self, value):
        self._camera = value

    @property
    def terminate(self):
        return self._terminate

    @terminate.setter
    def terminate(self, value):
        self._terminate = value

    def capture_frames(self):
        """
        Abstract method use it like the run method in a thread.
        capture frames from camera until the flag self.terminate is True.
        captured frames should be passed to the method frame_ready.
        """
        raise NotImplementedError

    def wait_next_frame(self):
        """
        Waits for next frame.
        """
        time.sleep(1.0 / self.camera.fps)

    def frame_ready(self, frame):
        """
        Call this method when a frame is ready
        """
        self.camera._frame_ready(frame)
        