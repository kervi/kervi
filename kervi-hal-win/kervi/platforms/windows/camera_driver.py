
import queue
import datetime
import time
from kervi.vision.camera import FrameCameraDeviceDriver
from kervi.platforms.windows.pygrabber.PyGrabber import *
from PIL import Image, ImageDraw

class CameraDriver(FrameCameraDeviceDriver):
    def __init__(self, source):
        FrameCameraDeviceDriver.__init__(self)
        self.queue = queue.Queue()
        self.grabber = PyGrabber(self.on_image_received)
        self._cam_idx = -1
        devices = self.grabber.get_devices()
        if len(devices) == 0:
            self.log.warning("No camera devices detected")
        else:
            idx = -1
            if source:
                for device in devices:
                    idx += 1
                    if device == source:
                        self._cam_idx = idx
                        break
            else:
                self._cam_idx = 0
            
            if self._cam_idx == -1:
                self.log.warning("Camera device not found: " + source)
            else:
                self.log.verbose("Using camera: %s", devices[self._cam_idx])
                self.grabber.set_device(self._cam_idx)
                self._buf = None
    
    def on_image_received(self, image_data, w, h):
        with BytesIO() as output:
            self.queue.put(image_data)
    
    def capture_frames(self):
        if self._cam_idx > -1:
            self.grabber.start(None)
            while not self.terminate:
                try:
                    image = self.queue.get(0)
                    
                    self.frame_ready(image)
                    self.wait_next_frame()
                    
                except queue.Empty:
                    time.sleep(.01)
                    pass
                self.grabber.grab_frame()
            print("y")
            self.grabber.stop()
        