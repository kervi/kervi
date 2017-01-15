# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

import os
import threading
import time
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
        self.ui = {"orientation":"horizontal", "type":"gauge"}

    def value_changed(self, newValue, oldValue):
        self.controller._pan_changed(newValue)

class _CameraTiltInput(ControllerNumberInput):
    def __init__(self, controller):
        ControllerNumberInput.__init__(self, controller.component_id+".tilt", "Tilt", controller)
        self.unit = "degree"
        self.value = 0
        self.max_value = 90
        self.min_value = -90
        self.visible = True
        self.ui = {"orientation":"vertical", "type":"gauge"}

    def value_changed(self, newValue, oldValue):
        self.controller._tilt_changed(newValue)


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
        self.controller._framerate_changed(selected_options)

class _CameraRecordButton(ControllerSwitchButton):
    def __init__(self, controller):
        ControllerSwitchButton.__init__(
            self, controller.component_id+".record",
            "Record",
            controller)

    def on(self):
        self.controller._start_record()

    def off(self):
        self.controller._stop_record()

class _CameraPictureButton(ControllerButton):
    def __init__(self, controller):
        ControllerButton.__init__(
            self,
            controller.component_id+".savePicture",
            "Take picture",
            controller
        )

    def click(self):
        self.controller._save_picture()

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

    def _pan_changed(self, panValue):
        print ("panChanged", panValue)
        pass

    def _tilt_changed(self, tiltValue):
        print ("tiltChanged", tiltValue)
        pass

    def _framerate_changed(self, framerate):
        print ("framerateChanged", framerate)
        pass

    def _save_picture(self):
        print ("save picture")
        pass

    def _start_record(self):
        print ("start record")
        pass

    def _stop_record(self):
        print ("stop record")
        pass

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

class FrameCamera(CameraBase):
    def __init__(self, camera_id, name, **kwargs):
        CameraBase.__init__(self, camera_id, name)
        cwd = os.getcwd()
        self.docpath = os.path.join(cwd, "web_assets")
        self.frame_path = os.path.join(self.docpath, camera_id+".png")
        print self.frame_path
        self.ip_address = nethelper.get_ip_address()
        self.ip_port = nethelper.get_free_port()
        self.fps = kwargs.get("fps", 10)

        os.chdir(self.docpath)
        self.server = HTTPServer(
            (self.ip_address, self.ip_port),
            SimpleHTTPRequestHandler
        )
        self.server_thread = threading.Thread(target=self.server.serve_forever)
        self.server_thread.daemon = True
        self.server_thread.start()

        self.frame_thread = _FrameThread(self)
        self.parameters = {
            "height":kwargs.get("height", 480),
            "width":kwargs.get("width", 640),
            "fps":self.fps,
            "source":"http://"+str(self.ip_address)+":"+str(self.ip_port)+"/"+camera_id+".png"
        }

        print self.parameters["source"]

    def _get_frame(self):
        frame = self.get_frame(self.parameters["height"], self.parameters["width"])
        if frame:
            frame.save(self.frame_path, 'png')
        time.sleep(1.0/self.fps)

    def get_frame(self, height, width):
        """abstract method"""
        from PIL import Image, ImageDraw, ImageFont

        image = Image.new('RGBA', size=(width, height), color=(155, 0, 0))
        draw = ImageDraw.Draw(image)
        draw.rectangle([(width/2-50, height/2-50), (width/2+50, height/2+50)])
        draw.rectangle([(10, 10), (width-10, height-10)])

        font = ImageFont.truetype("sans-serif.ttf", 32)
        draw.text((15, 15), "test", font=font)
        return image

class IPCamera(CameraBase):
    def __init__(self, camera_id, name, dashboards, source):
        CameraBase.__init__(self, camera_id, name)
        self.parameters = {"height":480, "width":640, "source":source}

class USBCamera(CameraBase):
    def __init__(self, camera_id, name, dashboards, source):
        CameraBase.__init__(self, camera_id, name)
        self.parameters = {"height":480, "width":640, "source":source}
