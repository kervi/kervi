import datetime
from kervi.vision.camera import FrameCameraDeviceDriver
from PIL import Image, ImageDraw

class CameraDriver(FrameCameraDeviceDriver):
    def __init__(self):
        FrameCameraDeviceDriver.__init__(self)

    def capture_frames(self):
        font = self.camera.get_font()
        while not self.terminate:
            # image = Image.new('RGBA', size=(self.camera.width, self.camera.height), color=(155, 0, 0))
            # draw = ImageDraw.Draw(image)
            # draw.rectangle([(self.camera.width/2-50, self.camera.height/2-50), (self.camera.width/2+50, self.camera.height/2+50)])
            # draw.rectangle([(10, 10), (self.camera.width-10, self.camera.height-10)])
            # picture_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S:%f")
            # draw.text((15, 15), "Dummy cam -" + picture_time[:-5], font=font)
            # self.frame_ready(image)
            self.wait_next_frame()
