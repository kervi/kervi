import io
import time
from PIL import Image, ImageDraw
from kervi.vision.camera import FrameCameraDeviceDriver
from threading import Condition

class _StreamingMPEGBuffer(object):
    def __init__(self, driver):
        self.frame = None
        self.driver = driver
        self.buffer = io.BytesIO()
        self.condition = Condition()

    def write(self, buf):
        if buf.startswith(b'\xff\xd8'):
            # New frame, copy the existing buffer's content and notify all
            # clients it's available
            self.buffer.truncate()
            with self.condition:
                frame = self.buffer.getvalue()
                self.driver.frame_ready(frame)
                #self.condition.notify_all()
            self.buffer.seek(0)
        return self.buffer.write(buf)

class CameraDriver(FrameCameraDeviceDriver):
    def __init__(self):
        FrameCameraDeviceDriver.__init__(self)
        self._buffer_type = "jpeg"

    def capture_frames(self):
        pass
        from . import v4l2
        import fcntl 
        vd = open('/dev/video0', 'rw')
        cp = v4l2.v4l2_capability()
        fcntl.ioctl(vd, v4l2.VIDIOC_QUERYCAP, cp)
