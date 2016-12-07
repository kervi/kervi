# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT


from kervi.spine import Spine
from kervi.utility.thread import KerviThread

class ControllerSelect(object):
    """
    Select component for Kervi controller
    Usage:
    class CameraFrameRate(ControllerSelect):
        def __init__(self, controller):
        ControllerSelect.__init__(self, controller.controllerId+".framerate", "Framerate" , controller)
        self.addOption("5", "5 / sec")
        self.addOption("10", "10 / sec")
        self.addOption("15", "15 / sec", True)

    def change(self, selectedOptions):
        print ("Frame rate changed", selectedOptions)

    """
    def __init__(self, select_id, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.component_type = "select"
        self.select_id = select_id
        self.name = name
        self.options = []
        self.selected_options = []
        self.change_command = self.select_id + ".change"
        self.spine.register_command_handler(self.change_command, self.on_change_handler)

    def get_info(self):
        """Doc string"""
        return {
            "id": self.select_id,
            "name": self.name,
            "componentType": self.component_type,
            "onSelect": self.change_command,
            "options": self.options
            }

    def add_option(self, value, text, selected=False):
        option = {"value": value, "text": text, "selected":selected}
        self.options += [option]
        if selected:
            self.selected_options += [option]


    def on_change_handler(self, selected_options):
        self.spine.log.debug(
            "controller select change:{0}/{1}",
            self.controller.controller_id,
            self.select_id
        )

        for option in self.options:
            option["selected"] = False

        self.selected_options = []

        for selected_option in selected_options:
            for option in self.options:
                if option["value"] == selected_option:
                    option["selected"] = True
                    self.selected_options += [option]

        self.change(self.selected_options)
        self.spine.trigger_event(
            "controllerSelectChange",
            self.select_id,
            {"select":self.select_id, "value":self.options}
        )

    def change(self, selected_options):
        self.spine.log.debug(
            "abstract select change reached:{0}/{1}",
            self.controller.controller_id,
            self.select_id,
        )

class ControllerButton(object):
    def __init__(self, button_id, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.component_type = "button"
        self.state = False
        self.button_id = button_id
        self.name = name

        self.click_command = self.button_id + ".click"
        self.spine.register_command_handler(self.click_command, self.on_click_handler)

    def get_info(self):
        return {
            "id":self.button_id,
            "name":self.name,
            "componentType":self.component_type,
            "onClick":self.click_command
        }

    def on_click_handler(self):
        self.spine.log.debug(
            "controller button click:{0}/{1}",
            self.controller.controller_id,
            self.button_id
        )
        self.click()
        self.spine.trigger_event("controllerButtonClick", self.button_id)

    def click(self):
        self.spine.log.debug(
            "abstract click reached:{0}/{1}",
            self.controller.controller_id,
            self.button_id,
        )

class ControllerSwitchButton(object):
    def __init__(self, button_id, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.component_type = "switchButton"
        self.state = False
        self.button_id = button_id
        self.name = name

        self.on_command = self.button_id + ".on"
        self.off_command = self.button_id + ".off"

        self.spine.register_command_handler(self.on_command, self.on_on_handler)
        self.spine.register_command_handler(self.off_command, self.on_off_handler)

    def get_info(self):
        return {
            "id":self.button_id,
            "name":self.name,
            "componentType":self.component_type,
            "onCommand":self.on_command,
            "offCommand":self.off_command,
            "state":self.state
        }

    def on_on_handler(self):
        self.spine.log.debug(
            "controller button on:{0}/{1}",
            self.controller.controller_id,
            self.button_id
        )

        if not self.state:
            self.state = True
            self.on()
            self.spine.trigger_event(
                "controllerButtonStateChange",
                self.button_id,
                {"button":self.button_id, "state":self.state}
            )

    def on(self):
        self.spine.log.debug(
            "abstract on reached:{0}/{1}",
            self.controller.controllerId,
            self.button_id,
        )


    def on_off_handler(self):
        self.spine.log.debug(
            "controller button off:{0}/{1}",
            self.controller.controller_id,
            self.button_id
        )
        if self.state:
            self.state = False
            self.off()
            self.spine.trigger_event(
                "controllerButtonStateChange",
                self.button_id,
                {"button":self.button_id, "state":self.state}
            )

    def off(self):
        self.spine.log.debug(
            "abstract off reached:{0}/{1}",
            self.controller.controller_id,
            self.button_id,
        )

class ControllerNumberInput(object):
    def __init__(self, input_id, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.input_id = input_id
        self.min_value = -100
        self.max_value = 100
        self.unit = ""
        self.value = 0
        self.name = name
        self.command = self.input_id + ".setValue"
        self.spine.register_command_handler(self.command, self.set_value)
        self.component_type = "number-input"
        self.input_type = "number"
        self.ui = {"orientation":"vertical", "type":"singleLine"}

    def set_value(self, nvalue):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0}/{1} value:{2}",
                self.controller.controller_id,
                self.input_id,
                nvalue
            )
            old_value = self.value
            self.value = nvalue
            self.value_changed(nvalue, old_value)
            self.spine.trigger_event(
                "changeControllerInputValue",
                self.input_id,
                {"input":self.input_id, "value":nvalue}
            )

    def value_changed(self, newValue, oldValue):
        self.spine.log.debug(
            "abstract valueChanged reached:{0}/{1}",
            self.controller.controller_id,
            self.input_id,
        )

    def get_info(self):
        return {
            "name":self.name,
            "componentType":self.component_type,
            "ui":self.ui,
            "unit":self.unit,
            "value":self.value,
            "maxValue":self.max_value,
            "minValue":self.min_value,
            "command":self.command,
            "id":self.input_id
        }

    def on_get_value(self):
        return self.value

class ControllerTextInput(object):
    def __init__(self, input_id, name, controller):
        self.spine = Spine()
        self.controller = controller
        self.input_id = input_id
        self.name = name
        self.value = ""
        self.command = self.input_id + ".setValue"
        self.spine.register_command_handler(self.command, self.set_value)
        self.component_type = "text-input"
        self.input_type = "text"
        self.ui = {"orientation":"vertical", "type":"gauge"}

    def set_value(self, nvalue):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0}/{1} value:{2}",
                self.controller.controller_id,
                self.input_id,
                nvalue
            )
            old_value = self.value
            self.value = nvalue
            self.value_changed(nvalue, old_value)
            self.spine.trigger_event(
                "changeControllerInputValue",
                self.input_id,
                {"input":self.input_id, "value":nvalue}
            )

    def value_changed(self, new_value, old_value):
        self.spine.log.debug(
            "abstract valueChange reached:{0}/{1} value:{2} oldvalue:{3}",
            self.controller.controller_id,
            self.input_id,
            new_value,
            old_value
        )

    def get_info(self):
        return {
            "name":self.name,
            "componentType":self.component_type,
            "ui":self.ui,
            "value":self.value,
            "command":self.command,
            "id":self.input_id
        }

    def on_get_value(self):
        return self.value

class ControllerDateTimeInput(object):
    def __init__(self, input_id, name, input_type, controller):
        self.spine = Spine()
        self.controller = controller
        self.input_id = input_id
        self.input_type = input_type
        self.name = name
        self.value = ""
        self.command = self.input_id + ".setValue"
        self.spine.register_command_handler(self.command, self.set_value)
        self.component_type = "datetime-input"
        self.ui = {"orientation":"vertical", "type":"gauge"}

    def set_value(self, nvalue):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0}/{1} value:{2}",
                self.controller.controller_id,
                self.input_id,
                nvalue
            )
            old_value = self.value
            self.value = nvalue
            self.value_changed(nvalue, old_value)
            self.spine.trigger_event(
                "changeControllerInputValue",
                self.input_id,
                {"input":self.input_id, "value":nvalue}
            )

    def value_changed(self, newValue, oldValue):
        self.spine.log.debug(
            "abstract valueChanged reached:{0}/{1}",
            self.controller.controllerId,
            self.input_id,
        )

    def get_info(self):
        return {
            "name":self.name,
            "componentType":self.component_type,
            "inputType": self.input_type,
            "ui":self.ui,
            "value":self.value,
            "command":self.command,
            "id":self.input_id
        }

    def on_get_value(self):
        return self.value

class Controller(object):
    def __init__(self, controller_id, name):
        spine = Spine()
        spine.register_query_handler("getControllerInfo", self.on_get_info)
        spine.register_query_handler("getObjectInfo", self.on_get_object_info)
        self.controller_id = controller_id
        self.name = name
        self.components = []
        self.type = "unknown"
        self.parameters = {}
        self.dashboards = []

    def add_components(self, *args):
        for component in args:
            self.components += [component]

    def on_get_object_info(self, ctrl_id):
        if self.controller_id == ctrl_id:
            return self.on_get_info(None)

    def on_get_info(self, controller_type):
        if controller_type is None or controller_type == self.type:

            components = []
            for component in self.components:
                components += [component.get_info()]

            template = None
            import os.path
            import sys
            modulepath = os.path.dirname(sys.modules[self.__class__.__module__].__file__)
            class_name = self.__class__.__name__
            cpath = os.path.join(modulepath, class_name + ".tmpl.html")
            if os.path.isfile(cpath):
                template_file = open(cpath, 'r')
                template = template_file.read()

            return {
                "type":self.type,
                "name":self.name,
                "id":self.controller_id,
                "parameters":self.parameters,
                "components":components,
                "dashboards":self.dashboards,
                "template" : template
            }
