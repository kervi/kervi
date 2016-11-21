
from kervi.controller import Controller, ControllerNumberInput, ControllerSwitchButton, ControllerButton, ControllerSelect

class CameraPanInput(ControllerNumberInput):
    def __init__(self, controller):
        ControllerNumberInput.__init__(self, controller.controllerId+".pan", "Pan", controller)
        self.unit = "degree"
        self.value = 0
        self.maxValue = 90
        self.minValue = -90
        self.ui = {"orientation":"horizontal", "type":"gauge"}

    def valueChanged(self, newValue, oldValue):
        print "front cam pan:", self.value

class CameraTiltInput(ControllerNumberInput):
    def __init__(self, controller):
        ControllerNumberInput.__init__(self, controller.controllerId+".tilt", "Tilt", controller)
        self.unit = "degree"
        self.value = 0
        self.maxValue = 90
        self.minValue = -90
        self.ui = {"orientation":"vertical", "type":"gauge"}

    def valueChanged(self, newValue, oldValue):
        print "cam tilt set value:", newValue


class CameraFrameRate(ControllerSelect):
    def __init__(self, controller):
        ControllerSelect.__init__(self, controller.controllerId+".framerate", "Framerate" , controller)
        self.addOption("5", "5 / sec")
        self.addOption("10", "10 / sec")
        self.addOption("15", "15 / sec", True)

    def change(self, selectedOptions):
        print "cameraFrameRate change", selectedOptions

class CameraRecordButton(ControllerSwitchButton):
    def __init__(self,controller):
        ControllerSwitchButton.__init__(self, controller.controllerId+".record", "Record", controller)

    def on(self):
        print "cam record on"

    def off(self):
        print "cam record off"

class CameraPictureButton(ControllerButton):
    def __init__(self,controller):
        ControllerButton.__init__(self, controller.controllerId+".savePicture", "Take picture", controller) 

    def click(self):
        print "cam save picture"

class CameraBase(Controller):
    def __init__(self, cameraId, name):
        Controller.__init__(self, cameraId, name)
        self.type = "camera"
        self.parameters = None
        self.addComponents(
            CameraPanInput(self),
            CameraTiltInput(self),
            CameraRecordButton(self),
            CameraPictureButton(self),
            CameraFrameRate(self))
        self.dashboards = None

class Camera(CameraBase):
    def __init__(self, cameraId, name, dashboards, source):
        CameraBase.__init__(self, cameraId, name)
        self.parameters = {"height":480, "width":640, "source":source}
        self.dashboards = dashboards
