from kervi.spine import Spine
from kervi.utility.kerviThread import KerviThread

class ControllerButton(object):
    def __init__(self, controller):
        self.spine = Spine()
        self.controller = controller
        self.state = False
        if not  hasattr(self, 'buttonId'):
            self.buttonId=None

        if not  hasattr(self, 'type'):
            self.type = None

        if not  hasattr(self, 'name'):
            self.name = None

        self.onCommand = self.controller.controllerId + "." + self.buttonId + ".on"
        self.offCommand = self.controller.controllerId + "." + self.buttonId + ".off" 
        self.clickCommand = self.controller.controllerId + "." + self.buttonId + ".click" 

        if self.type == "switch":
            self.spine.registerCommandHandler(self.onCommand, self.onOnHandler)
            self.spine.registerCommandHandler(self.offCommand, self.onOffHandler)
        elif self.type == "button":
            self.spine.registerCommandHandler(self.clickCommand, self.onClickHandler)

    def getInfo(self):
        if self.type == "switch":
            return {"id":self.buttonId, "name":self.name, "type":self.type, "onCommand":self.onCommand, "offCommand":self.offCommand, "state":self.state}
        elif self.type == "button":
            return {"id":self.buttonId, "name":self.name, "type":self.type, "onClick":self.clickCommand}

    def onOnHandler(self, *args, **kwargs):
        self.spine.log.debug("controller button on:{0}/{1}", self.controller.controllerId, self.buttonId)
        if not self.state:
            self.state = True
            self.on()
            self.spine.triggerEvent("controllerButtonStateChange", self.buttonId, {"button":self.buttonId, "state":self.state})
        

    def on(self):
        print "abstract on reached"


    def onOffHandler(self, *args, **kwargs):
        self.spine.log.debug("controller button off:{0}/{1}", self.controller.controllerId, self.buttonId)
        if self.state:
            self.state = False
            self.off()
            self.spine.triggerEvent("controllerButtonStateChange", self.buttonId, {"button":self.buttonId, "state":self.state})

    def off(self):
        print "abstract off reached"
    
    def onClickHandler(self, *args, **kwargs):
        self.spine.log.debug("controller button click:{0}/{1}", self.controller.controllerId, self.buttonId)
        self.click()
        self.spine.triggerEvent("controllerButtonClick", self.buttonId)
	
    def click(self):
        print "abstract click reached"

class ControllerAxis(object):
    def __init__(self, controller):
        self.spine = Spine()
        self.controller = controller
        self.command = self.controller.controllerId + "." + self.axisId + ".setValue"
        self.spine.registerCommandHandler(self.command, self.setValue)

        if not  hasattr(self, 'axisId'):
            self.axisId=None

        if not  hasattr(self, 'name'):
            self.name = None
        
    def setValue(self, nvalue, **kwargs):
        if (self.value != nvalue):
            self.spine.log.debug("value change on axis:{0}/{1} value:{2}", self.controller.controllerId, self.axisId,nvalue)
            oldValue = self.value
            self.value = nvalue
            self.valueChanged(nvalue, oldValue)
            self.spine.triggerEvent("changeControllerAxisValue", self.axisId, {"axis":self.axisId, "value":nvalue})
	
    def valueChanged(self,newValue,oldValue):
        print "abstract valueChanged reached"

    def getInfo(self):
        return {"name":self.name, "type":self.type,"orientation":self.orientation, "unit":self.unit, "value":self.value, "maxValue":self.maxValue, "minValue":self.minValue,"command":self.command,"id":self.axisId}
	
    def onGetValue(self,**kwargs):
        return self.value

class Controller(object):
    def __init__(self, controllerId, name):
        spine = Spine()
        spine.registerQueryHandler("getControllerInfo", self.onGetInfo)
        spine.registerQueryHandler("getObjectInfo", self.onGetObjectInfo)
        self.controllerId = controllerId
        self.name = name

    def onGetObjectInfo(self,id,*args,**kwargs):
        print "goi",id
        if self.controllerId==id:
            return self.onGetInfo(None)
            
    def onGetInfo(self, controllerType, **kwargs):
        print "ci:", self.controllerId
        if controllerType==None or controllerType==self.type:
            axes=[]
            for axis in self.axes:
                axes += [axis.getInfo()]

            buttons=[]
            for button in self.buttons:
                buttons += [button.getInfo()]

            return {"type":self.type, "name":self.name, "id":self.controllerId, "parameters":self.parameters, "axes":axes, "buttons": buttons, "dashboards":self.dashboards }