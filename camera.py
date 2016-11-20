
from kervi.controller import Controller, ControllerNumberInput, ControllerSwitchButton, ControllerButton, ControllerSelect

class CameraPanInput(ControllerNumberInput):
    def __init__(self,controller):
        self.name="Pan"
        self.inputId=controller.controllerId+".pan"
        self.unit="degree"
        self.value=0
        self.maxValue=90
        self.minValue=-90
        self.ui={"orientation":"horizontal","type":"gauge"}

        ControllerNumberInput.__init__(self,controller)
		
    def valueChanged(self,newValue,oldValue):
        print "front cam pan:", self.value
		
class CameraTiltInput(ControllerNumberInput):
    def __init__(self,controller):
        self.name="Tilt"
        self.inputId=controller.controllerId+".tilt"
        self.unit="degree"
        self.value=0
        self.maxValue=90
        self.minValue=-90
        self.ui={"orientation":"vertical","type":"gauge"}

        ControllerNumberInput.__init__(self,controller)

    def valueChanged(self,newValue,oldValue):
        print "cam tilt set value:",newValue


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
        self.name="Record"
        self.buttonId=controller.controllerId+".record"
        ControllerSwitchButton.__init__(self,controller)

    def on(self):
        print "cam record on"

    def off(self):
        print "cam record off"

class CameraPictureButton(ControllerButton):
    def __init__(self,controller):
        self.name="Take picture"
        self.buttonId=controller.controllerId+".savePicture"
        
        ControllerButton.__init__(self,controller)

    def click(self):
        print "cam save picture"

class CameraBase(Controller):
    def __init__(self,cameraId,name):
        Controller.__init__(self,cameraId,name)
        self.type ="camera"
        
        if not hasattr(self, 'parameters'):
            self.parameters = None

        self.addComponents(CameraPanInput(self), CameraTiltInput(self), CameraRecordButton(self),CameraPictureButton(self), CameraFrameRate(self))
        
        if not hasattr(self, 'dashboards'): 
           self.dashboards=None

class Camera(CameraBase):
    def __init__(self,id,name,dashboards,source):
        self.parameters={"height":480,"width":640,"source":source}
        self.dashboards=dashboards
        CameraBase.__init__(self,id,name)