from kervi.spine import Spine
from kervi.utility.kerviThread import KerviThread

class ControllerSelect(object):
    """Doc string"""
    def __init__(self, selectId, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.componentType = "select"
        self.selectId = selectId
        self.name = name
        self.options = []
        self.selectedOptions = []
        self.changeCommand = self.selectId + ".change"
        self.spine.registerCommandHandler(self.changeCommand, self.onChangeHandler)

    def getInfo(self):
        """Doc string"""
        return {
            "id": self.selectId,
            "name": self.name,
            "componentType": self.componentType,
            "onSelect": self.changeCommand,
            "options": self.options
            }

    def addOption(self, value, text, selected=False):
        option = {"value": value, "text": text, "selected":selected}
        self.options += [option]
        if selected:
            self.selectedOptions += [option]


    def onChangeHandler(self, selectedOptions):
        self.spine.log.debug(
            "controller select change:{0}/{1}",
            self.controller.controllerId,
            self.selectId
        )

        for option in self.options:
            option["selected"] = False

        self.selectedOptions = []

        for selectedOption in selectedOptions:
            for option in self.options:
                if option["value"] == selectedOption:
                    option["selected"] = True
                    self.selectedOptions += [option]

        self.change(self.selectedOptions)
        self.spine.triggerEvent(
            "controllerSelectChange",
            self.selectId,
            {"select":self.selectId, "value":self.options}
        )

    def change(self, selectedOptions):
        self.spine.log.debug(
            "abstract select change reached:{0}/{1}",
            self.controller.controllerId,
            self.selectId,
        )

class ControllerButton(object):
    def __init__(self, buttonId, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.componentType = "button"
        self.state = False
        self.buttonId = buttonId
        self.name = name

        self.clickCommand = self.buttonId + ".click"
        self.spine.registerCommandHandler(self.clickCommand, self.onClickHandler)

    def getInfo(self):
        return {
            "id":self.buttonId,
            "name":self.name,
            "componentType":self.componentType,
            "onClick":self.clickCommand
        }

    def onClickHandler(self):
        self.spine.log.debug(
            "controller button click:{0}/{1}",
            self.controller.controllerId,
            self.buttonId
        )
        self.click()
        self.spine.triggerEvent("controllerButtonClick", self.buttonId)

    def click(self):
        self.spine.log.debug(
            "abstract click reached:{0}/{1}",
            self.controller.controllerId,
            self.buttonId,
        )

class ControllerSwitchButton(object):
    def __init__(self, buttonId, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.componentType = "switchButton"
        self.state = False
        self.buttonId = buttonId
        self.name = name

        self.onCommand = self.buttonId + ".on"
        self.offCommand = self.buttonId + ".off"

        self.spine.registerCommandHandler(self.onCommand, self.onOnHandler)
        self.spine.registerCommandHandler(self.offCommand, self.onOffHandler)

    def getInfo(self):
        return {
            "id":self.buttonId,
            "name":self.name,
            "componentType":self.componentType,
            "onCommand":self.onCommand,
            "offCommand":self.offCommand,
            "state":self.state
        }

    def onOnHandler(self):
        self.spine.log.debug(
            "controller button on:{0}/{1}",
            self.controller.controllerId,
            self.buttonId
        )

        if not self.state:
            self.state = True
            self.on()
            self.spine.triggerEvent(
                "controllerButtonStateChange",
                self.buttonId,
                {"button":self.buttonId, "state":self.state}
            )

    def on(self):
        self.spine.log.debug(
            "abstract on reached:{0}/{1}",
            self.controller.controllerId,
            self.buttonId,
        )


    def onOffHandler(self):
        self.spine.log.debug(
            "controller button off:{0}/{1}",
            self.controller.controllerId,
            self.buttonId
        )
        if self.state:
            self.state = False
            self.off()
            self.spine.triggerEvent(
                "controllerButtonStateChange",
                self.buttonId,
                {"button":self.buttonId, "state":self.state}
            )

    def off(self):
        self.spine.log.debug(
            "abstract off reached:{0}/{1}",
            self.controller.controllerId,
            self.buttonId,
        )

class ControllerNumberInput(object):
    def __init__(self, inputId, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.inputId = inputId
        self.minValue = float("-inf")
        self.maxValue = float("inf")
        self.unit = ""
        self.value = 0
        self.name = name
        self.command = self.inputId + ".setValue"
        self.spine.registerCommandHandler(self.command, self.setValue)
        self.componentType = "number-input"
        self.inputType = "number"
        self.ui = {"orientation":"vertical", "type":"singleLine"}

    def setValue(self, nvalue):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0}/{1} value:{2}",
                self.controller.controllerId,
                self.inputId,
                nvalue
            )
            oldValue = self.value
            self.value = nvalue
            self.valueChanged(nvalue, oldValue)
            self.spine.triggerEvent(
                "changeControllerInputValue",
                self.inputId,
                {"input":self.inputId, "value":nvalue}
            )

    def valueChanged(self, newValue, oldValue):
        self.spine.log.debug(
            "abstract valueChanged reached:{0}/{1}",
            self.controller.controllerId,
            self.inputId,
        )

    def getInfo(self):
        return {
            "name":self.name,
            "componentType":self.componentType,
            "ui":self.ui,
            "unit":self.unit,
            "value":self.value,
            "maxValue":self.maxValue,
            "minValue":self.minValue,
            "command":self.command,
            "id":self.inputId
        }

    def onGetValue(self):
        return self.value

class ControllerTextInput(object):
    def __init__(self, inputId, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.inputId = inputId
        self.name = name
        self.value = ""
        self.command = self.inputId + ".setValue"
        self.spine.registerCommandHandler(self.command, self.setValue)
        self.componentType = "text-input"
        self.inputType = "text"
        self.ui = {"orientation":"vertical", "type":"gauge"}

    def setValue(self, nvalue):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0}/{1} value:{2}",
                self.controller.controllerId,
                self.inputId,
                nvalue
            )
            oldValue = self.value
            self.value = nvalue
            self.valueChanged(nvalue, oldValue)
            self.spine.triggerEvent(
                "changeControllerInputValue",
                self.inputId,
                {"input":self.inputId, "value":nvalue}
            )

    def valueChanged(self, newValue, oldValue):
        self.spine.log.debug(
            "abstract valueChange reached:{0}/{1} value:{2} oldvalue:{3}",
            self.controller.controllerId,
            self.inputId,
            newValue,
            oldValue
        )

    def getInfo(self):
        return {
            "name":self.name,
            "componentType":self.componentType,
            "ui":self.ui,
            "value":self.value,
            "command":self.command,
            "id":self.inputId
        }

    def onGetValue(self):
        return self.value

class ControllerDateTimeInput(object):
    def __init__(self, inputId, name, inputType, controller):
        self.spine = Spine()
        self.controller = controller
        self.inputId = inputId
        self.inputType = inputType
        self.name = name
        self.value = ""
        self.command = self.inputId + ".setValue"
        self.spine.registerCommandHandler(self.command, self.setValue)
        self.componentType = "datetime-input"
        self.ui = {"orientation":"vertical", "type":"gauge"}

    def setValue(self, nvalue):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0}/{1} value:{2}",
                self.controller.controllerId,
                self.inputId,
                nvalue
            )
            oldValue = self.value
            self.value = nvalue
            self.valueChanged(nvalue, oldValue)
            self.spine.triggerEvent(
                "changeControllerInputValue",
                self.inputId,
                {"input":self.inputId, "value":nvalue}
            )

    def valueChanged(self, newValue, oldValue):
        self.spine.log.debug(
            "abstract valueChanged reached:{0}/{1}",
            self.controller.controllerId,
            self.inputId,
        )

    def getInfo(self):
        return {
            "name":self.name,
            "componentType":self.componentType,
            "inputType": self.inputType,
            "ui":self.ui,
            "value":self.value,
            "command":self.command,
            "id":self.inputId
        }

    def onGetValue(self):
        return self.value

class Controller(object):
    def __init__(self, controllerId, name):
        spine = Spine()
        spine.registerQueryHandler("getControllerInfo", self.onGetInfo)
        spine.registerQueryHandler("getObjectInfo", self.onGetObjectInfo)
        self.controllerId = controllerId
        self.name = name
        self.components = []
        self.type = "unknown"
        self.parameters = {}
        self.dashboards = []

    def addComponents(self, *args):
        for component in args:
            self.components += [component]

    def onGetObjectInfo(self, id):
        if self.controllerId == id:
            return self.onGetInfo(None)

    def onGetInfo(self, controllerType):
        if controllerType is None or controllerType == self.type:

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
                templateFile = open(cpath, 'r')
                template = templateFile.read()

            return {
                "type":self.type,
                "name":self.name,
                "id":self.controllerId,
                "parameters":self.parameters,
                "components":components,
                "dashboards":self.dashboards,
                "template" : template
            }
