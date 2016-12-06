# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

from kervi.controller import Controller, ControllerNumberInput, ControllerSwitchButton, ControllerButton, ControllerSelect

class CameraPanInput(ControllerNumberInput):
    def __init__(self, controller):
        ControllerNumberInput.__init__(self, controller.controller_id+".pan", "Pan", controller)
        self.unit = "degree"
        self.value = 0
        self.max_value = 90
        self.min_value = -90
        self.ui = {"orientation":"horizontal", "type":"gauge"}

    def value_changed(self, newValue, oldValue):
        self.controller.pan_changed(newValue)

class CameraTiltInput(ControllerNumberInput):
    def __init__(self, controller):
        ControllerNumberInput.__init__(self, controller.controller_id+".tilt", "Tilt", controller)
        self.unit = "degree"
        self.value = 0
        self.max_value = 90
        self.min_value = -90
        self.ui = {"orientation":"vertical", "type":"gauge"}

    def value_changed(self, newValue, oldValue):
        self.controller.tilt_changed(newValue)


class CameraFrameRate(ControllerSelect):
    """ Framerate selector """
    def __init__(self, controller):
        ControllerSelect.__init__(
            self,
            controller.controller_id + ".framerate",
            "Framerate",
            controller
        )
        self.add_option("5", "5 / sec")
        self.add_option("10", "10 / sec")
        self.add_option("15", "15 / sec", True)

    def change(self, selected_options):
        self.controller.framerate_changed(selected_options)

class CameraRecordButton(ControllerSwitchButton):
    def __init__(self, controller):
        ControllerSwitchButton.__init__(
            self, controller.controller_id+".record",
            "Record",
            controller)

    def on(self):
        self.controller.start_record()

    def off(self):
        self.controller.stop_record()

class CameraPictureButton(ControllerButton):
    def __init__(self, controller):
        ControllerButton.__init__(
            self,
            controller.controller_id+".savePicture",
            "Take picture",
            controller
        )

    def click(self):
        self.controller.save_picture()

class CameraBase(Controller):
    def __init__(self, camera_id, name):
        Controller.__init__(self, camera_id, name)
        self.type = "camera"
        self.parameters = None
        self.add_components(
            CameraPanInput(self),
            CameraTiltInput(self),
            CameraRecordButton(self),
            CameraPictureButton(self),
            CameraFrameRate(self))
        self.dashboards = None

    def pan_changed(self, panValue):
        print ("panChanged", panValue)
        pass

    def tilt_changed(self, tiltValue):
        print ("tiltChanged", tiltValue)
        pass

    def framerate_changed(self, framerate):
        print ("framerateChanged", framerate)
        pass

    def save_picture(self):
        print ("save picture")
        pass

    def start_record(self):
        print ("start record")
        pass

    def stop_record(self):
        print ("stop record")
        pass

class Camera(CameraBase):
    def __init__(self, camera_id, name, dashboards, source):
        CameraBase.__init__(self, camera_id, name)
        self.parameters = {"height":480, "width":640, "source":source}
        self.dashboards = dashboards
