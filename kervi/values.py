

from kervi.spine import Spine
from kervi.utility.thread import KerviThread
from kervi.utility.component import KerviComponent


VALUE_COUNTER = 0

class DynamicValue(KerviComponent):
    """
    Generic value
    """
    def __init__(self, name, value_type, input_id=None, is_input=True, parent=None):
        global VALUE_COUNTER
        if input_id is None:
            VALUE_COUNTER += 1
            if parent:
                input_id = parent.component_id + ".DV_" + str(VALUE_COUNTER)
            else:
                input_id = "DV_" + str(VALUE_COUNTER)
        elif parent:
            input_id = parent.component_id + "." + input_id

        KerviComponent.__init__(self, input_id, value_type, name)
        #self.spine = Spine()
        self.unit = ""
        self.is_input = is_input
        self._value = None
        self._observers = []
        if parent:
            self._observers += [parent]
        self._spine_observers = []
        self.command = self.component_id + ".setValue"
        self.spine.register_command_handler(self.command, self._set_value)

        self._ui_parameters = {
            "size": 0,
            "input_size": 50,
            "type": "unkonwn",
            "link_to_header": False,
            "label_icon": None,
            "label": self.name,
            "flat": False,
            "inline": False,
            "read_only": False,
            "value_size":10
        }
        self._persist_value = False

    @property
    def input_id(self):
        return self.component_id

    @property
    def value(self):
        """Current value of the component"""
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

    def link_to(self, src):
        if isinstance(src, DynamicValue):
            if src.is_input and not self.is_input:
                self.add_observer(src)
            elif not src.is_input and self.is_input:
                src.add_observer(self)
            else:
                raise Exception("input/output mismatch in dynamic value link:{0} - {1}".format(src.name, self.name))
        elif isinstance(src, str):
            if len(self._spine_observers) == 0:
                self.spine.register_event_handler("dynamicValueChanged", self._value_changed_event)
            
            self._spine_observers += [src]

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

    def add_observer(self, observer):
        self._observers += [observer]

    def _value_changed_event(self, value ):
        if value["id"] in self._spine_observers:
            self.value = value["value"]

    def _set_value(self, nvalue, allow_persist=True):
        if self.value != nvalue:
            self.spine.log.debug(
                "value change on input:{0} value:{1}",
                self.component_id,
                nvalue
            )
            old_value = self.value
            self._value = nvalue
            self.value_changed(nvalue, old_value)
            for observer in self._observers:
                observer.dynamic_value_changed(self)
            if self._persist_value and allow_persist:
                self.settings.store_value("value", self.value)

            self.spine.trigger_event(
                "dynamicValueChanged",
                self.component_id,
                {"id":self.component_id, "value":nvalue}
            )

    def dynamic_value_changed(self, dynamic_value):
        self.value = dynamic_value.value

    def value_changed(self, new_value, old_value):
        pass

    def _get_info(self):
        return {
            "unit":self.unit,
            "value":self.value,
            "command":self.command,
        }

    def on_get_value(self):
        return self.value


class DynamicNumber(DynamicValue):
    """
    A number input component shows as a slider on dashboards.
    """
    def __init__(self, name, input_id=None, is_input=True, parent=None):
        DynamicValue.__init__(self, name, "dynamic-number", input_id, is_input, parent)
        #self.spine = Spine()
        self.min_value = -100
        self.max_value = 100
        self.unit = ""
        self._value = 0
        self._ui_parameters ["type"] = "horizontal_slider"

    
    def _get_info(self):
        return {
            "unit":self.unit,
            "value":self.value,
            "maxValue":self.max_value,
            "minValue":self.min_value,
            "command":self.command,
        }
    
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


class DynamicString(DynamicValue):
    """
    Text input component
    """
    def __init__(self, name, input_id=None, is_input=True, parent=None):
        DynamicValue.__init__(self, name, "dynamic-string", input_id, is_input, parent)
        #self.spine = Spine()
        self._value = ""
        self._ui_parameters["type"] = "text"

class DynamicDateTime(DynamicValue):
    """
    A date and time component.
    """
    def __init__(self, name, input_type="datetime", input_id=None):
        DynamicValue.__init__(self, name, "dynamic-datetime", input_id)
        #self.spine = Spine()
        self._value = ""
        self._ui_parameters["type"] = input_type

class DynamicBoolean(DynamicValue):
    """
    Switch button controller component, shows a on/off button in UI
    """
    def __init__(self, name, input_id=None, is_input=True, parent=None):
        DynamicValue.__init__(self, name, "dynamic-boolean", input_id, is_input, parent)
        self._value = False
        self._ui_parameters["type"] = "switch"
        self._ui_parameters["on_text"] = "On"
        self._ui_parameters["off_text"] = "Off"
        self._ui_parameters["on_icon"] = None
        self._ui_parameters["off_icon"] = None
        self._ui_parameters["button_icon"] = None
        self._ui_parameters["button_text"] = self.name
       

class DynamicEnum(DynamicValue):
    r"""
    EnumControllerValue holds a selection of predefined values to select amount.

    Usage:

    .. code-block:: python

        class CameraFrameRate(EnumControllerValue):
            def __init__(self, controller):
            EnumControllerValue.__init__(self, controller.controllerId+".framerate", "Framerate" , controller)
            self.addOption("5", "5 / sec")
            self.addOption("10", "10 / sec")
            self.addOption("15", "15 / sec", True)

        def change(self, selectedOptions):
            print("Frame rate changed", selectedOptions)

    """
    def __init__(self, name, input_id=None, is_input=True, parent=None):
        DynamicValue.__init__(self, name, "dynamic-enum", input_id, is_input, parent)

        self.options = []
        self.selected_options = []
        self._ui_parameters["type"] = "dropdown"

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

    def _get_info(self):
        return {
            "options": self.options,
            "command":self.command
        }

    def _set_value(self, selected_options, allow_persist=True):
        self.spine.log.debug(
            "enum value changed:{0}",
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

        self.value_changed(self.selected_options, None)

        if self._persist_value and allow_persist:
            self.settings.store_value("value", self.selected_options)

        self.spine.trigger_event(
            "dynamicValueChanged",
            self.component_id,
            {"select":self.component_id, "value":self.options}
        )
