from kervi.spine import Spine
from kervi.utility.kerviThread import KerviThread



class ControllerButton(object):
    def __init__(self, controller):
        self.spine = Spine()
        self.controller = controller
        self.componentType="button"
        self.state = False
        if not  hasattr(self, 'buttonId'):
            self.buttonId=None

        if not  hasattr(self, 'name'):
            self.name = None

        self.clickCommand =  self.buttonId + ".click" 
        self.spine.registerCommandHandler(self.clickCommand, self.onClickHandler)

    def getInfo(self):
        return {"id":self.buttonId, "name":self.name, "componentType":self.componentType, "onClick":self.clickCommand}
    
    def onClickHandler(self, *args, **kwargs):
        self.spine.log.debug("controller button click:{0}/{1}", self.controller.controllerId, self.buttonId)
        self.click()
        self.spine.triggerEvent("controllerButtonClick", self.buttonId)
	
    def click(self):
        print "abstract click reached"


class ControllerSwitchButton(object):
    def __init__(self, controller):
        self.spine = Spine()
        self.controller = controller
        self.componentType="switchButton"
        self.state = False
        if not  hasattr(self, 'buttonId'):
            self.buttonId=None

        if not  hasattr(self, 'name'):
            self.name = None

        self.onCommand =  self.buttonId + ".on"
        self.offCommand = self.buttonId + ".off" 
        
        self.spine.registerCommandHandler(self.onCommand, self.onOnHandler)
        self.spine.registerCommandHandler(self.offCommand, self.onOffHandler)
        
    def getInfo(self):
        return {"id":self.buttonId, "name":self.name, "componentType":self.componentType, "onCommand":self.onCommand, "offCommand":self.offCommand, "state":self.state}
        
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

class ControllerNumberInput(object):
    def __init__(self, controller):
        self.spine = Spine()
        self.controller = controller
        self.command = self.inputId + ".setValue"
        self.spine.registerCommandHandler(self.command, self.setValue)
        self.componentType="input"
        self.inputType="number"
        #self.ui={"orientation":"vertical","type":"gauge"}
        if not  hasattr(self, 'inputId'):
            self.inputId=None

        if not  hasattr(self, 'name'):
            self.name = None
        
    def setValue(self, nvalue, **kwargs):
        if (self.value != nvalue):
            self.spine.log.debug("value change on input:{0}/{1} value:{2}", self.controller.controllerId, self.inputId,nvalue)
            oldValue = self.value
            self.value = nvalue
            self.valueChanged(nvalue, oldValue)
            self.spine.triggerEvent("changeControllerInputValue", self.inputId, {"input":self.inputId, "value":nvalue})
	
    def valueChanged(self,newValue,oldValue):
        print "abstract valueChanged reached"

    def getInfo(self):
        return {"name":self.name, "componentType":self.componentType,"ui":self.ui, "unit":self.unit, "value":self.value, "maxValue":self.maxValue, "minValue":self.minValue,"command":self.command,"id":self.inputId}
	
    def onGetValue(self,**kwargs):
        return self.value

class Controller(object):
    def __init__(self, controllerId, name):
        spine = Spine()
        spine.registerQueryHandler("getControllerInfo", self.onGetInfo)
        spine.registerQueryHandler("getObjectInfo", self.onGetObjectInfo)
        self.controllerId = controllerId
        self.name = name
        self.components = []

    def addComponents(self, *args):
        for component in args:
            self.components += [component]

    def onGetObjectInfo(self, id, *args, **kwargs):
        print "goi", id
        if self.controllerId == id:
            return self.onGetInfo(None)

    def onGetInfo(self, controllerType, **kwargs):
        print "ci:", self.controllerId
        if controllerType == None or controllerType == self.type:

            components = []
            for component in self.components:
                components += [component.getInfo()]

            template = None
            import os.path
            import sys
            modulepath = os.path.dirname(sys.modules[self.__class__.__module__].__file__)
            className = self.__class__.__name__
            cpath = os.path.join(modulepath, className + ".tmpl.html")
            if os.path.isfile(cpath):
                file = open(cpath, 'r')
                template = file.read()
            #processClass.__name__


            return {"type":self.type, "name":self.name, "id":self.controllerId, "parameters":self.parameters, "components":components, "dashboards":self.dashboards , "template" : template}