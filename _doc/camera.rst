Camera and video
=================================

Video and camera is managed via special Camera kervi controllers. 
The CameraBase class handles settings for ui display, reacts to user 

**Raspberry pi camera excample**

.. code-block:: python

    import datetime
    import picamera
    from kervi.camera import FrameCamera
    from PIL import Image
    import time
    import io
    
    class Cam_1(FrameCamera):
        def __init__(self):
            FrameCamera.__init__(self, "cam1", "camera 1")
            self.fps = 10
    
        def capture_frames(self):
            with picamera.PiCamera() as camera:
                camera.resolution = (self.width, self.height)
                camera.framerate = self.fps
                
                #wait for camera to be ready
                time.sleep(2)

                stream = io.BytesIO()
                for foo in camera.capture_continuous(stream, format='jpeg', use_video_port=True):
                    stream.seek(0)
                    i = Image.open(stream)
                    image=i.copy()
                    
                    self.frame_ready(image)
                    stream.seek(0)
                    self.wait_next_frame()

                    #check if fps has changed
                    if camera.framerate <> self.fps:
                        camera.framerate = self.fps
                        time.sleep(1)

                    if self.terminate:
                        break
            
            
        def pan_changed(self, pan_value, old_value):
            #The user has changed the pan in ui.
            #If you have a pan servo you can control it from here.
            #pan_value range is from -100 to 100 where zero is center.
            print("pan changed", pan_value)
    
        def tilt_changed(self, tilt_value, old_value):
            #The user has changed the tilt in ui.
            #If you have a tilt servo you can control it from here.
            #tilt_value range is from -100 to 100 where zero is center.
            print("tilt changed", tilt_value)
    
        def start_record(self):
            #The user has clicked on the start record button in ui.
            #Implement you save functionality here
            print("start record")
    
        def stop_record(self):
            #The user has stopped the recording in ui.
            print("stop record")
    
    Cam_1()

.. toctree::
   :hidden:

   controllers_api