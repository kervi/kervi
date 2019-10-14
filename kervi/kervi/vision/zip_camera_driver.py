import datetime
from kervi.vision.camera import FrameCameraDeviceDriver
from PIL import Image, ImageDraw
import io
from zipfile import ZipFile
class ZipCameraDriver(FrameCameraDeviceDriver):
    def __init__(self, image_zip_file):
        FrameCameraDeviceDriver.__init__(self)
        self.frames = []
        input_zip=ZipFile(image_zip_file)
        for name in input_zip.namelist():
            self.frames.append(input_zip.read(name))

    def capture_frames(self):
        image_count = len(self.frames)
        i = 0
        while not self.terminate:
            self.frame_ready(self.frames[i])
            self.wait_next_frame()
            i += 1
            if i == image_count:
                i = 0
