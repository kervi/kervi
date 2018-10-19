import datetime
from kervi.vision.camera import CameraStreamer

CAM_1 = CameraStreamer("cam1", "camera 1")
CAM_1.link_to_dashboard("app")