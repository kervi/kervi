import datetime
from kervi.vision.camera import FrameCameraDeviceDriver
from PIL import Image, ImageDraw
from apng import APNG
import io

class TestCameraDriver(FrameCameraDeviceDriver):
    def __init__(self):
        FrameCameraDeviceDriver.__init__(self)

    def capture_frames(self):
        im = APNG.open("C:/Users/tim/Downloads/ezgif.com-video-to-apng.png")
        frames = []
        basewidth = 320
        hsize = None
        for i, (png, control) in enumerate(im.frames):
            image = Image.open(io.BytesIO(png.to_bytes()))
            if not hsize:
                wpercent = (basewidth/float(image.size[0]))
                hsize = int((float(image.size[1])*float(wpercent)))
            image = image.resize((basewidth,hsize))
            frames.append(image)
        image_count = len(frames)

        i = 0
        while not self.terminate:
            self.frame_ready(frames[i])
            self.wait_next_frame()
            i += 1
            if i == image_count:
                i = 0
