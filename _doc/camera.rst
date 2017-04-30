Camera and video
=================================

Cameras are managed via special Kervi Camera controllers and Kervi camera device drivers.
A camera device driver capture frames from a camera and feeds them into the camera controller.

The snippet below shows how to create a camera stream server and link it to a dashboard.
 

.. code:: python
    
    import datetime
    from kervi.camera import CameraStreamer
    from kervi_devices.motors.PCA9685_i2c_servo import PCA9685ServoBoard

    #Create a streaming camera server
    CAM1 = CameraStreamer("cam1", "camera 1")
    CAM1.flip_vertical = True
    CAM1.flip_horizontal = True
    
    #link camera as background
    CAM1.link_to_dashboard("app")
    #link camera to a panel
    CAM1.link_to_dashboard("system", "cam")

    #link pan and tilt to servos
    motor_board = PCA9685ServoBoard()
    motor_board.servo_motors[0].position.link_to(CAM1.pan, lambda x: -x)
    motor_board.servo_motors[1].position.link_to(CAM1.tilt)


.. image:: images/dashboard_cam.png
    :width: 45 %
.. image:: images/panel_cam.png
    :width: 45 %


**Size**

It is possible to pass values for size and frames per second when you create the camera.

.. code:: python
    
    from kervi.camera import CameraStreamer
    CAMERA = CameraStreamer("cam1", "camera 1", size=1024, width=800, fps=30)



**Source**

In the examples above the camera source is not specifyed and Kervi looks for the default camera on a Raspberry Pi it will be
the on board camera. If you want to use another camera source than the default you need to specify it. 

.. code:: python
    
    from kervi.camera import CameraStreamer
    CAMERA = CameraStreamer("cam1", "camera 1", camera_source="/dev/video0")



**Pan and tilt**

If you want to control the cameras pan and tilt with servos you can use the following code

.. code:: python

    from kervi.camera import CameraStreamer
    class MyPanTiltCamera(CameraStreamer):
        def __init__(self):
            CameraStreamer.__init__(self,"cam1", "Cam with pan and tilt")

            #link the camera to the dashboard *app*
            #enable the pan/tilt controllers in the browser
            self.link_to_dashboard("app", show_pan_tilt=True)
        
        def pan_changed(self, pan_value):
            #event that is called when the user changes the pan in the browser.
            #Add the code to move the pan servo.
            #pan_value goes from - 100 to +100

        def tilt_changed(self, tilt_value):
            #event that is called when the user changes the tilt in the browser.
            #Add the code to move the tilt servo 
            #tilt_value goes from - 100 to +100
    
    MyPanTiltCamera()


.. toctree::
   :hidden:

   camera_api