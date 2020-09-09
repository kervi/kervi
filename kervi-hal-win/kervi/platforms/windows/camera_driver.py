
import queue
import datetime
import time
from kervi.vision.camera import FrameCameraDeviceDriver
from kervi.platforms.windows.pygrabber.PyGrabber import *
from PIL import Image, ImageDraw

class CameraDriver(FrameCameraDeviceDriver):
    def __init__(self):
        FrameCameraDeviceDriver.__init__(self)
        self.queue = queue.Queue()
        self.grabber = PyGrabber(self.on_image_received)
        devices = self.grabber.get_devices()
        print("dv", devices, devices[0])
        self.grabber.set_device(0)
        self._buf = None
    
    def on_image_received(self, image_data, w, h):
        with BytesIO() as output:
            #print("x", w, h)
            
            #img = Image.frombuffer("RGB", (w, h), image_data, "RGB")
            #img = Image.fromarray(image_data, "JPEG")
            #img.save(output, 'JPG')
            #self._buf = image_data
            self.queue.put(image_data)
    
    def capture_frames(self):
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
        