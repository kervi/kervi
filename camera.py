
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
        self.controller.panChanged(newValue)

class CameraTiltInput(ControllerNumberInput):
    def __init__(self, controller):
        ControllerNumberInput.__init__(self, controller.controllerId+".tilt", "Tilt", controller)
        self.unit = "degree"
        self.value = 0
        self.maxValue = 90
        self.minValue = -90
        self.ui = {"orientation":"vertical", "type":"gauge"}

    def valueChanged(self, newValue, oldValue):
        self.controller.tiltChanged(newValue)


class CameraFrameRate(ControllerSelect):
    def __init__(self, controller):
        ControllerSelect.__init__(self, controller.controllerId+".framerate", "Framerate" , controller)
        self.addOption("5", "5 / sec")
        self.addOption("10", "10 / sec")
        self.addOption("15", "15 / sec", True)

    def change(self, selectedOptions):
        self.controller.framerateChanged(selectedOptions)

class CameraRecordButton(ControllerSwitchButton):
    def __init__(self,controller):
        ControllerSwitchButton.__init__(self, controller.controllerId+".record", "Record", controller)

    def on(self):
        self.controller.startRecord()

    def off(self):
        self.controller.stopRecord()

class CameraPictureButton(ControllerButton):
    def __init__(self,controller):
        ControllerButton.__init__(self, controller.controllerId+".savePicture", "Take picture", controller)

    def click(self):
        self.controller.savePicture()

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

    def panChanged(self,panValue):
        print "panChanged", panValue
        pass

    def tiltChanged(self,tiltValue):
        print "tiltChanged", tiltValue
        pass

    def framerateChanged(self,framerate):
        print "framerateChanged", framerate
        pass

    def savePicture(self):
        print "save picture"
        pass

    def startRecord(self):
        print "start record"
        pass

    def stopRecord(self):
        print "stop record"
        pass

class Camera(CameraBase):
    def __init__(self, cameraId, name, dashboards, source):
        CameraBase.__init__(self, cameraId, name)
        self.parameters = {"height":480, "width":640, "source":source}
        self.dashboards = dashboards
