
from kervi.controller import Controller, ControllerAxis,ControllerButton

class CameraPanAxis(ControllerAxis):
    def __init__(self,controller):
        self.name="Pan"
        self.axisId="pan"
        self.type="servo"
        self.unit="degree"
        self.value=0
        self.maxValue=90
        self.minValue=-90
        self.orientation="horizontal"

        ControllerAxis.__init__(self,controller)
		
    def valueChanged(self,newValue,oldValue):
        print "front cam pan:", self.value
		
class CameraTiltAxis(ControllerAxis):
    def __init__(self,controller):
        self.name="Tilt"
        self.axisId="tilt"
        self.type="servo"
        self.unit="degree"
        self.value=0
        self.maxValue=90
        self.minValue=-90
        self.orientation="vertical"	

        ControllerAxis.__init__(self,controller)

    def valueChanged(self,newValue,oldValue):
        print "cam tilt set value:",newValue

class CameraRecordButton(ControllerButton):
    def __init__(self,controller):
        self.name="Record"
        self.buttonId="record"
        self.type="switch"
        ControllerButton.__init__(self,controller)

    def on(self):
        print "cam record on"

    def off(self):
        print "cam record off"

class CameraPictureButton(ControllerButton):
    def __init__(self,controller):
        self.name="Take picture"
        self.buttonId="savePicture"
        self.type="button"

        ControllerButton.__init__(self,controller)

    def click(self):
        print "cam save picture"

class CameraBase(Controller):
    def __init__(self,cameraId,name):
        Controller.__init__(self,cameraId,name)
        self.type ="cam"
        
        if not hasattr(self, 'parameters'):
            self.parameters = None

        if hasattr(self, 'axes'): 
            self.axes += [CameraPanAxis(self),CameraTiltAxis(self)]
        else:
            self.axes = [CameraPanAxis(self),CameraTiltAxis(self)]

        if  hasattr(self, 'buttons'):
            self.buttons+=[CameraRecordButton(self), CameraPictureButton(self)]
        else:
            self.buttons=[CameraRecordButton(self), CameraPictureButton(self)]
        
        if not hasattr(self, 'dashboards'): 
           self.dashboards=None
        

class Camera(CameraBase):
    def __init__(self,id,name,dashboards,source):
        self.parameters={"height":480,"width":640,"source":source}
        self.dashboards=dashboards
        CameraBase.__init__(self,id,name)