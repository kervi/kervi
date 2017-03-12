# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
"""
A Kervi controller is a class that acts upon input from users or events or the underlaying os.
"""

from kervi.spine import Spine
from kervi.utility.thread import KerviThread
from kervi.utility.component import KerviComponent
from kervi.hal import GPIO

class UISelectControllerInput(KerviComponent):
    r"""
    Select component for Kervi controller

    Usage:

    .. code-block:: python

        class CameraFrameRate(ControllerSelect):
            def __init__(self, controller):
            ControllerSelect.__init__(self, controller.controllerId+".framerate", "Framerate" , controller)
            self.addOption("5", "5 / sec")
            self.addOption("10", "10 / sec")
            self.addOption("15", "15 / sec", True)

        def change(self, selectedOptions):
            print("Frame rate changed", selectedOptions)

    """
    def __init__(self, select_id, name, controller):
        KerviComponent.__init__(self, select_id, "select", name)
        #self.spine = Spine()
        self.controller = controller

        self._persist_value = False
        self.options = []
        self.selected_options = []
        self.change_command = self.component_id + ".change"
        self.spine.register_command_handler(self.change_command, self._on_change_handler)
        self._ui_parameters = {
            "size": 0,
            "type": "dropdown",
            "link_to_header": False,
            "label_icon": None,
            "label" : self.name,
            "flat": False,
            "inline": False,
            "input_size": 50
        }
        self.controller.add_input(self)

    @property
    def input_id(self):
        return self.component_id
    
    @property
    def value(self):
        """Current value/state of the component"""
        return self.selected_options

    @value.setter
    def value(self, new_value):
        self._on_change_handler(new_value)

    @property
    def persist_value(self):
        """ If true the value is saved to kervi DB when it change"""
        return self._persist_value

    @persist_value.setter
    def persist_value(self, do_persist):
        self._persist_value = do_persist

    def _load_persisted(self):
        if self.persist_value:
            self._on_change_handler(self.settings.retrieve_value("selected_options"), False)

    def link_to_dashboard(self, dashboard_id, panel_id, **kwargs):
        r"""
        Links this input to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            * *size* (``int``) -- The number of dashboard cells the input should occupy horizontal.
                If size is 0 (default) the input and label will expand to the width of the panel.
             
            * *type* (``str``) -- Type of select box, dropdown or list.

            * *link_to_header* (``str``) -- Link this input to header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the input.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display input and label in its actual size
                If you set inline to true the size parameter is ignored.
                The input will only occupy as much space as the label and input takes.
                
            * *input_size* (``int``) -- width of the select box as a percentage of the total container it sits in.

        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            panel_id,
            **kwargs
            )

    def _get_info(self):
        return {
            "onSelect": self.change_command,
            "options": self.options,
        }

    def add_option(self, value, text, selected=False):
        """
        Add option to select
        """
        option = {"value": value, "text": text, "selected":selected}
        self.options += [option]
        if selected:
            self.selected_options += [option]
            if self._persist_value:
                self.settings.store_value("selected_options", self.selected_options)


    def _on_change_handler(self, selected_options, allow_persist=True):
        self.spine.log.debug(
            "controller select change:{0}/{1}",
            self.controller.component_id,
            self.component_id
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

        if self._persist_value and allow_persist:
            self.settings.store_value("value", self.selected_options)

        self.spine.trigger_event(
            "controllerSelectChange",
            self.component_id,
            {"select":self.component_id, "value":self.options}
        )

    def change(self, selected_options):
        """ Abstract method fill in with your own code to be executed when a change occur. """
        self.controller.input_changed(self)

class UIButtonControllerInput(KerviComponent):
    def __init__(self, button_id, name, controller):
        KerviComponent.__init__(self, button_id, "button", name)
        self.controller = controller
       
        self.state = False
        self._down_command = self.component_id + ".down"
        self._up_command = self.component_id + ".up"
        self.spine.register_command_handler(self._down_command, self._on_down_handler)
        self.spine.register_command_handler(self._up_command, self._on_up_handler)
        self._ui_parameters = {
            "size": 0,
            "input_size": None,
            "type": "normal",
            "link_to_header": False,
            "label_icon": None,
            "label": None,
            "flat": False,
            "inline": False,
            "button_text": self.name,
            "button_icon": None

        }
        self.state = False
        self.controller.add_input(self)

    @property
    def input_id(self):
        return self._component_id

    @property
    def value(self):
        """Current state of the component"""
        return self.state

    @value.setter
    def value(self, new_value):
        if new_value:
            self._on_down_handler()
        else:
            self._on_up_handler()

    def _load_persisted(self):
        pass

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this input to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            * *size* (``int``) -- The number of dashboard cells the input should occupy horizontal.
                If size is 0 (default) the input and label will expand to the width of the panel.
             
            * *link_to_header* (``str``) -- Link this input to header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the input.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display input and label in its actual size
                If you set inline to true the size parameter is ignored.
                The input will only occupy as much space as the label and input takes.
                
            * *input_size* (``int``) -- width of the select box as a percentage of the total container it sits in.
            
            * *button_text* (``str``) -- Text to display on button. Default is name of button.
            
            * *button_icon* (``str``) -- Icon to display on button.


        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            **kwargs
            )

    def _get_info(self):
        return {
            "onPress":self._down_command,
            "onRelease":self._up_command,
            "state":self.state
        }

    def _on_down_handler(self):
        self.spine.log.debug(
            "controller button pressed:{0}/{1}",
            self.controller.component_id,
            self.component_id
        )

        if not self.state:
            self.state = True
            self.down()

            self.spine.trigger_event(
                "controllerButtonStateChange",
                self.component_id,
                {"button":self.component_id, "state":self.state}
            )

    def _on_up_handler(self):
        self.spine.log.debug(
            "controller button released:{0}/{1}",
            self.controller.component_id,
            self.component_id
        )
        if self.state:
            self.state = False
            self.up()

            self.spine.trigger_event(
                "controllerButtonStateChange",
                self.component_id,
                {"button":self.component_id, "state":self.state}
            )

    def down(self):
        """
        Abstract method fill in with your own code that should be executed when button is pressed down.
        """
        self.controller.input_changed(self)

    def up(self):
        """
        Abstract method fill in with your own code that should be executed when button is released.
        """
        self.controller.input_changed(self)

class UISwitchButtonControllerInput(KerviComponent):
    """
    Switch button controller component, shows a on/off button in UI
    """
    def __init__(self, button_id, name, controller):
        KerviComponent.__init__(self, button_id, "switchButton", name)
        #self.spine = Spine()
        self.controller = controller

        self.state = False

        self.on_command = self.component_id + ".on"
        self.off_command = self.component_id + ".off"

        self.spine.register_command_handler(self.on_command, self._on_on_handler)
        self.spine.register_command_handler(self.off_command, self._on_off_handler)
        self._ui_parameters = {
            "size": 0,
            "input_size": None,
            "type": "normal",
            "link_to_header": False,
            "flat": False,
            "on_text": "On",
            "off_text": "Off",
            "label": self.name,
            "label_icon": None,
            "inline": False,
            "on_icon": None,
            "off_icon": None,
            "read_only": False
        }
        self._persist_value = False
        self.controller.add_input(self)

    @property
    def input_id(self):
        return self.component_id

    @property
    def value(self):
        """Current state of the component"""
        return self.state

    @value.setter
    def value(self, new_value):
        if new_value:
            self._on_on_handler()
        else:
            self._on_off_handler()

    @property
    def persist_value(self):
        """ If true the value is saved to kervi DB when it change"""
        return self._persist_value

    @persist_value.setter
    def persist_value(self, do_persist):
        self._persist_value = do_persist

    def _load_persisted(self):
        if self.persist_value:
            state = self.settings.retrieve_value("state")
            if state:
                self._on_on_handler(allow_persist=False)
            else:
                self._on_off_handler(allow_persist=False)

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this input to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            * *size* (``int``) -- The number of dashboard cells the input should occupy horizontal.
                If size is 0 (default) the input and label will expand to the width of the panel.
             
            * *link_to_header* (``str``) -- Link this input to header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the input.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display input and label in its actual size
                If you set inline to true the size parameter is ignored.
                The input will only occupy as much space as the label and input takes.
                
            * *input_size* (``int``) -- width of the switch as a percentage of the total container it sits in.
            
            * *on_text* (``bool``) -- Text to show on button when on.
            
            * *off_text* (``bool``) -- Text to show on button when off.
            
            * *on_icon* (``bool``) -- Icon to show on button when on.
            
            * *off_icon* (``bool``) -- Icon to show on button when off.
            
            * *read_only* (``bool``) -- If true the user is not able to change state.

        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            **kwargs
            )

    def _get_info(self):
        return {
            "onCommand":self.on_command,
            "offCommand":self.off_command,
            "state":self.state,
        }

    def _on_on_handler(self, allow_persist=True):
        self.spine.log.debug(
            "controller button on:{0}/{1}",
            self.controller.component_id,
            self.component_id
        )

        if not self.state:
            self.state = True
            self.on()

            if self._persist_value and allow_persist:
                self.settings.store_value("state", self.state)


            self.spine.trigger_event(
                "controllerButtonStateChange",
                self.component_id,
                {"button":self.component_id, "state":self.state}
            )

    def on(self):
        """
        Abstract method fill that is executed when button is turned on.
        """
        self.controller.input_changed(self)


    def _on_off_handler(self, allow_persist=True):
        self.spine.log.debug(
            "controller button off:{0}/{1}",
            self.controller.component_id,
            self.component_id
        )
        if self.state:
            self.state = False
            self.off()
            if self._persist_value and allow_persist:
                self.settings.store_value("value", self.state)

            self.spine.trigger_event(
                "controllerButtonStateChange",
                self.component_id,
                {"button":self.component_id, "state":self.state}
            )

    def off(self):
        """
        Abstract method that is executed then button is turned off.
        """
        self.controller.input_changed(self)

class DigitalGPIOControllerInput(UISwitchButtonControllerInput):
    """
    Digital GPIO input that listens to a digital input going high or low.
    This input will show up as an UISwitchButtonControllerInput when linked to a dashboard panel
    and all ui settings for UISwitchButtonControllerInput applies to this input.

    :param input_id:
            id of the input. This id used to reference this input in other parts of the kervi app.
    :type input_id: str

    :param name:
            Name of this component is used when displayed.
    :type name: str

    :param controller:
            The controller that this component belongs to.
    :type controller: Controller instance.

    :param channel:
            channel on the gpio device that should be used.
    :type channel: int.

    :param gpio_device:
            GPIO device to use. Defaults to the host platforms gpio e.g the Raspbery PI's gpio.
    
    :type gpio_device: IGPIODeviceDriver (defined in kervi.utility.hal.gpio).

    """
    def __init__(self, button_id, name, controller, channel, gpio_device=GPIO):
        UISwitchButtonControllerInput.__init__(self, button_id, name)
        self.channel = channel
        self.gpio = gpio_device
        self.set_ui_parameter("read_only", True)
        self.gpio.define_as_input(self.channel)
        self.gpio.listen(self.channel, self._on_edge)
        self.state = self.gpio.get(self.channel)


    @property
    def value(self):
        """Current state of the component"""
        return self.state

    @value.setter
    def value(self, new_value):
        pass

    def _load_persisted(self):
        pass

    def _on_edge(self, state):
        print("state", state)
        if self.gpio.get(self.channel):
            self.on_high()
            self.state = True
        else:
            self.on_low()
            self.state = False

        self.spine.trigger_event(
            "controllerButtonStateChange",
            self.component_id,
            {"button":self.component_id, "state":self.state}
        )

    def on_high(self):
        """
        Abstract method that is executed when the channel is going high.
        """
        self.controller.input_changed(self)

    def on_low(self):
        """
        Abstract method that is executed when the channel is going low.
        """
        self.controller.input_changed(self)


class UINumberControllerInput(KerviComponent):
    """
    A number input component shows as a slider on dashboards.
    """
    def __init__(self, input_id, name, controller):
        KerviComponent.__init__(self, input_id, "number-input", name)
        #self.spine = Spine()
        self.controller = controller
        self.min_value = -100
        self.max_value = 100
        self.unit = ""
        self._value = 0
        self.command = self.component_id + ".setValue"
        self.spine.register_command_handler(self.command, self._set_value)
        self._ui_parameters = {
            "size": 0,
            "input_size": 50,
            "type": "horizontal_slider",
            "link_to_header": False,
            "label_icon": None,
            "label": self.name,
            "flat": False,
            "inline": False,
            "read_only": False,
            "value_size":10
        }
        self._persist_value = False
        self.controller.add_input(self)

    @property
    def input_id(self):
        return self.component_id

    @property
    def value(self):
        """Current state of the component"""
        return self._value

    @value.setter
    def value(self, new_value):
        self._set_value(new_value)

    @property
    def persist_value(self):
        """ If true the value is saved to kervi DB when it change"""
        return self._persist_value

    @persist_value.setter
    def persist_value(self, do_persist):
        self._persist_value = do_persist

    def _load_persisted(self):
        if self._persist_value:
            self._set_value(self.settings.retrieve_value("value"), False)

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this input to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            * *size* (``int``) -- The number of dashboard cells the input should occupy horizontal.
                If size is 0 (default) the input and label will expand to the width of the panel.

            * *link_to_header* (``str``) -- Link this input to header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the input.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display input and label in its actual size
                If you set inline to true the size parameter is ignored.
                The input will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.

            * *type* (``string``) -- 'vertical_slider' or 'horizontal_slider.
            
        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            **kwargs
            )

    def _set_value(self, nvalue, allow_persist=True):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0}/{1} value:{2}",
                self.controller.component_id,
                self.component_id,
                nvalue
            )
            old_value = self.value
            self._value = nvalue
            self.value_changed(nvalue, old_value)
            if self._persist_value and allow_persist:
                self.settings.store_value("value", self.value)

            self.spine.trigger_event(
                "changeControllerInputValue",
                self.component_id,
                {"input":self.component_id, "value":nvalue}
            )

    def value_changed(self, newValue, old_value):
        self.controller.input_changed(self)

    def _get_info(self):
        return {
            "unit":self.unit,
            "value":self.value,
            "maxValue":self.max_value,
            "minValue":self.min_value,
            "command":self.command,
        }

    def on_get_value(self):
        return self.value


class AnalogGPIOControllerInput(UINumberControllerInput):
    """
    Analog GPIO input that listens to the signal level on analog input.
    This input will show up as an UINumberControllerInput when linked to a dashboard panel
    and all ui settings for UINumberControllerInput applies to this input.

    :param input_id:
            id of the input. This id used to reference this input in other parts of the kervi app.
    :type button_id: str

    :param name:
            Name of this component is used when displayed.
    :type name: str

    :param controller:
            The controller that this component belongs to.
    :type controller: Controller instance.

    :param channel:
            channel on the gpio device that should be used.
    :type channel: int or string.

    :param gpio_device:
            GPIO device to use. Defaults to the host platforms gpio e.g the Raspbery PI's gpio.
    
    :type gpio_device: IGPIODeviceDriver (defined in kervi.utility.hal.gpio).

    """
    def __init__(self, button_id, name, controller, channel, gpio_device=GPIO):
        UINumberControllerInput.__init__(self, button_id, name, controller)
        self.channel = channel
        self.gpio = gpio_device
        self.set_ui_parameter("read_only", True)
        self.gpio.define_as_input(self.channel)
        self.gpio.listen(self.channel, self._on_change)
        self.value = self.gpio.get(self.channel)


    @property
    def value(self):
        """Current state of the component"""
        return self._value

    @value.setter
    def value(self, new_value):
        pass

    def _load_persisted(self):
        pass

    def _on_change(self, state):
        self._set_value(state)

class SensorControllerInput(UINumberControllerInput):
    """
    Sensor input that listens to a sensor.
    This input will show up as an UINumberControllerInput when linked to a dashboard panel
    and all ui settings for UINumberControllerInput applies to this input.

    :param input_id:
            id of the input. This id used to reference this input in other parts of the kervi app.
    :type button_id: str

    :param name:
            Name of this component is used when displayed.
    :type name: str

    :param controller:
            The controller that this component belongs to.
    :type controller: Controller instance.

    :param sensor_id:
            id of sensor to listen to.
    :type channel: string.

    """
    def __init__(self, input_id, name, sensor_id, controller):
        UINumberControllerInput.__init__(self, input_id, name, controller)
        self._sensor_id = sensor_id
        self._value = 0
        self.set_ui_parameter("read_only", True)
        self.spine.register_event_handler("NewSensorReading", self._new_sensor_reading, self._sensor_id)
        sensor_value = self.spine.send_query("getSensorValue", self._sensor_id)
        if sensor_value:
            self._set_value(sensor_value)

    def _new_sensor_reading(self,sensor_id, sensor_value):
        self._set_value(sensor_value["value"])

    @property
    def value(self):
        """Current state of the component"""
        return self._value

    @value.setter
    def value(self, new_value):
        pass

    def _load_persisted(self):
        pass

class UITextControllerInput(KerviComponent):
    """
    Text input component
    """
    def __init__(self, input_id, name, controller):
        KerviComponent.__init__(self, input_id, "text-input", name)
        #self.spine = Spine()
        self.controller = controller
        self._value = ""
        self.command = self.component_id + ".setValue"
        self.spine.register_command_handler(self.command, self._set_value)
        self.input_type = "text"
        self._ui_parameters = {
            "size": 0,
            "input_size": 50,
            "type": "text",
            "link_to_header": False,
            "label_icon": None,
            "label": self.name,
            "place_holder" : None,
            "flat": False,
            "inline": False
        }
        self._persist_value = False
        self.controller.add_input(self)

    @property
    def input_id(self):
        return self.component_id

    @property
    def value(self):
        """Current state of the component"""
        return self._value

    @value.setter
    def value(self, new_value):
        self._set_value(new_value)

    @property
    def persist_value(self):
        """ If true the value is saved to kervi DB when it change"""
        return self._persist_value

    @persist_value.setter
    def persist_value(self, do_persist):
        self._persist_value = do_persist

    def _load_persisted(self):
        if self._persist_value:
            self._set_value(self.settings.retrieve_value("value"))

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this input to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            * *size* (``int``) -- The number of dashboard cells the input should occupy horizontal.
                If size is 0 (default) the input and label will expand to the width of the panel.

            * *link_to_header* (``str``) -- Link this input to header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the input.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display input and label in its actual size
                If you set inline to true the size parameter is ignored.
                The input will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.


        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            *kwargs
            )

    def _set_value(self, nvalue, key, key_code):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0}/{1} value:{2}",
                self.controller.component_id,
                self.component_id,
                nvalue
            )
            old_value = self._value
            self._value = nvalue
            self.value_changed(nvalue, old_value)

            if self.persist_value:
                settings.store_value("value", self.value)

            self.spine.trigger_event(
                "changeControllerInputValue",
                self.component_id,
                {"input":self.component_id, "value":nvalue}
            )

    def value_changed(self, new_value, old_value):
        """
        Abstract method called when the content of the text box change.
        """
        self.controller.input_changed(self)

    def _get_info(self):
        return {
            "value":self.value,
            "command":self.command
        }

    def on_get_value(self):
        return self.value

class UIDateTimeControllerInput(KerviComponent):
    """
    A date and time component.
    """
    def __init__(self, input_id, name, input_type, controller):
        KerviComponent.__init__(self, input_id, "datetime-input", name)
        #self.spine = Spine()
        self.controller = controller
        self.input_type = input_type
        self._value = ""
        self.command = self.component_id + ".setValue"
        self.spine.register_command_handler(self.command, self._set_value)
        self._ui_parameters = {
            "size": 0,
            "input_size": 50,
            "type": "datetime",
            "link_to_header": False,
            "label_icon": None,
            "label": self.name,
            "flat": False,
            "inline": False
        }
        self._persist_value = False
        self.controller.add_input(self)

    @property
    def input_id(self):
        return self.component_id

    @property
    def value(self):
        """Current state of the component"""
        return self._value

    @value.setter
    def value(self, new_value):
        self._set_value(new_value)

    @property
    def persist_value(self):
        """ If true the value is saved to kervi DB when it change"""
        return self._persist_value

    @persist_value.setter
    def persist_value(self, do_persist):
        self._persist_value = do_persist

    def _load_persisted(self):
        if self._persist_value:
            self._set_value(self.settings.retrieve_value("value"))

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this input to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            * *size* (``int``) -- The number of dashboard cells the input should occupy horizontal.
                If size is 0 (default) the input and label will expand to the width of the panel.

            * *link_to_header* (``str``) -- Link this input to header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the input.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display input and label in its actual size
                If you set inline to true the size parameter is ignored.
                The input will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *type* (``str``) -- Kind of input either 'date' or 'time'.


        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            **kwargs
            )

    def _set_value(self, nvalue):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0}/{1} value:{2}",
                self.controller.component_id,
                self.component_id,
                nvalue
            )
            old_value = self.value
            self._value = nvalue
            self.value_changed(nvalue, old_value)
            if self._persist_value:
                settings.store_value("value", self.value)

            self.spine.trigger_event(
                "changeControllerInputValue",
                self.component_id,
                {"input":self.component_id, "value":nvalue}
            )

    def value_changed(self, newValue, oldValue):
        self.controller.input_changed(self)

    def _get_info(self):
        return {
            "inputType": self.input_type,
            "value":self.value,
            "command":self.command
        }

    def on_get_value(self):
        return self.value

class Controller(KerviComponent):
    """
    A Kervi controller is a class that acts upon input from users or events or the underlaying os.

    Examples for controllers are motor control, servo control, output to IO.

    """
    def __init__(self, controller_id, name):
        KerviComponent.__init__(self, controller_id, "controller", name)
        self.components = []
        self.type = "unknown"
        self.parameters = {}
        self._ui_parameters = {
            "size": 0,
            "type": "normal",
            "link_to_header": False,
            "icon": None,
            "flat": False,
            "inline": False
        }

    
    @property
    def controller_id(self):
        return self.component_id

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this component to a dashboard section.

        :param dashboard_id:
            id of the dashboard to link to.
        :type section_id: str

        :param section_id:
            id of the section.
        :type section_id: str

        :param \**kwargs:
            Use the kwargs below to override default values set in ui_parameters

        :Keyword Arguments:
            * *ui_size* (``int``) -- Size of the component in dashboard unit size.
                In order to make the sections and components align correct a dashboard unit is defined.
                Default the dashboard unit is a square that is 150 x 150 pixels.
                The width of the select box is ui_size * dashboard unit size.

            * *type* (``str``) -- Type of select box, dropdown or list.
            * *link_to_header* (``str``) -- Add this component to header of section.
            * *icon* (``str``) -- Icon that should be displayed together with label.
            * *flat* (``bool``) -- Flat look and feel.

        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            *kwargs
            )

    def add_input(self, *args):
        for component in args:
            self.components += [component]
            component._load_persisted()

    def input_changed(self, changed_input):
        """
        Abstract method that is called by when one of the controller inputs change.

        You can implement this method if your controller logic needs to respond
        changes in multiple inputs.

        :param changed_input:
            Input that has changed. You can read the value of the changed input
            via the inputs value property.

        :type changed_input: Input component
        """
        pass

    def _get_info(self):
        components = []
        for component in self.components:
            components += [component.get_reference()]

        template = None
        try:
            import os.path
            import sys
            modulepath = os.path.dirname(sys.modules[self.__class__.__module__].__file__)
            class_name = self.__class__.__name__
            cpath = os.path.join(modulepath, class_name + ".tmpl.html")
            if os.path.isfile(cpath):
                template_file = open(cpath, 'r')
                template = template_file.read()
        except:
            pass

        return {
            "components":components,
            "template" : template,
            "type": self.type
        }
