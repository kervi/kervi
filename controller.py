from kervi.spine import Spine
from kervi.utility.kerviThread import KerviThread

class ControllerButton(object):
    def __init__(self, controller):
        self.spine = Spine()
        self.controller = controller
        self.state = False
        
        if self.type == "switch":
            self.spine.registerCommandHandler(self.onCommand, self.onOnHandler)
            self.spine.registerCommandHandler(self.offCommand, self.onOffHandler)
        elif self.type == "button":
            self.spine.registerCommandHandler(self.clickCommand, self.onClickHandler)

    def getInfo(self):
        if self.type == "switch":
            return {"id":self.id, "name":self.name, "type":self.type, "onCommand":self.onCommand, "offCommand":self.offCommand, "state":self.state}
        elif self.type == "button":
            return {"id":self.id, "name":self.name, "type":self.type, "onClick":self.clickCommand}

    def onOnHandler(self, *args, **kwargs):
        self.spine.log.debug("controller button on:{0}/{1}", self.controller.id, self.id)
        self.state = True
        self.on()
        self.spine.triggerEvent("controllerButtonStateChange", self.id, {"button":self.id, "state":self.state})

    def onOffHandler(self, *args, **kwargs):
        self.spine.log.debug("controller button off:{0}/{1}", self.controller.id, self.id)
        self.state = False
        self.off()
        self.spine.triggerEvent("controllerButtonStateChange", self.id, {"button":self.id, "state":self.state})

    def onClickHandler(self, *args, **kwargs):
        self.spine.log.debug("controller button click:{0}/{1}", self.controller.id, self.id)
        self.click()
        self.spine.triggerEvent("controllerButtonClick", self.id)
	
class ControllerAxis(object):
    def __init__(self, controller):
        self.spine = Spine()
        self.spine.registerCommandHandler(self.command, self.setValue)
        self.controller = controller
		
    def setValue(self, nvalue, **kwargs):
        if (self.value != nvalue):
            self.spine.log.debug("value change on axis:{0}/{1} value:{2}", self.controller.id, self.id,nvalue)
            oldValue = self.value
            self.value = nvalue
            self.valueChanged(nvalue, oldValue)
            self.spine.triggerEvent("changeControllerAxisValue", self.id, {"axis":self.id, "value":nvalue})
	
    def getInfo(self):
        return {"name":self.name, "type":self.type,"orientation":self.orientation, "unit":self.unit, "value":self.value, "maxValue":self.maxValue, "minValue":self.minValue,"command":self.command,"id":self.id}
	
    def onGetValue(self,**kwargs):
        return self.value

class Controller(object):
    def __init__(self):
        spine = Spine()
        spine.registerQueryHandler("getControllerInfo", self.onGetInfo)

    def onGetInfo(self, controllerType, **kwargs):
        print "ci:", controllerType
        if controllerType==None or controllerType==self.type:
            axes=[]
            for axis in self.axes:
                axes += [axis.getInfo()]

            buttons=[]
            for button in self.buttons:
                buttons += [button.getInfo()]

        return {"type":self.type, "name":self.name, "id":self.id, "parameters":self.parameters, "axes":axes, "buttons": buttons, "location":self.location }