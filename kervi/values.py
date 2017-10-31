
import time
from datetime import datetime

#from kervi.spine import Spine
#from kervi.utility.thread import KerviThread
from kervi.utility.component import KerviComponent

VALUE_COUNTER = 0

class DynamicValueList(object):
    """
    List that holds dynamic values

    :param parent: Parent component that holds this list. 

    :param is_input: True if the list holds input values.
    """
    def __init__(self, parent, is_input):
        
        self._items = {}
        self.is_input = is_input
        self.controller = parent
        self.count = 0
        #self._inject = inject_in_controller

    def add(self, value_id, name, value_class):
        """
        Factory function that creates a dynamic value.

        :param value_id: id of the value, used to reference the value within this list.BaseException

        :param value_class: The class of the dynamic value that should be created with this function.
        """
        item = value_class(
            name,
            input_id=self.controller.component_id + "." + value_id,
            is_input=self.is_input,
            index=self.count
        )

        #if self._inject and self.controller:
        #    setattr(self.controller, value_id, item)
        #setattr(self, value_id, item)

        self.count += 1
        self._items[value_id] = item
        if self.is_input and self.controller:
            item.add_observer(self.controller)
        return item

    def _add_internal(self, value_id, item):
        self._items[value_id] = item
        item._component_id = self.controller.component_id + "." + value_id
        item._index = self.count
        self.count += 1

        if self.is_input and self.controller:
            item.add_observer(self.controller)

    @property
    def keys(self):
        return self._items.keys()

    def __getitem__(self, item_id):
        return self._items[item_id]


class DynamicValue(KerviComponent):
    """
    Generic dynamic value that is use as base class for specialized dynamic values.
    """
    def __init__(self, name, value_type, input_id=None, is_input=True, parent=None, index=None):
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
        self._unit = ""
        self._default_value = None
        self._index = index
        self.is_input = is_input
        self._value = None
        self._observers = []
        self._value_event_handlers = []
        if parent:
            self._observers += [parent]
        self._spine_observers = {}
        self.command = self.component_id + ".setValue"
        self.spine.register_command_handler(self.command, self._set_value, groups=self.admin_groups)
        self.spine.register_query_handler("getDynamicValue", self._query_value, groups=self.user_groups)

        self._ui_parameters = {
            "size": 0,
            "input_size": 0,
            "type": "unkonwn",
            "link_to_header": False,
            "label_icon": None,
            "label": self.name,
            "label_size":0,
            "flat": False,
            "inline": False,
            "is_input":self.is_input,
            "value_size":3,
            "width":0,
            "height":0
        }
        self._persist_value = False
        self._log_values = False

    @property
    def index(self):
        """
        Index of the value relative to its parent (controller or sensor)
        """
        return self._index

    @property
    def input_id(self):
        return self.component_id

    @property
    def value(self):
        """Current value of the component"""
        return self._value

    @value.setter
    def value(self, new_value):
        """
        Updates the value.
        If the change exceeds the delta for the dynamic number controllers and linked values are notified.  
        """
        self._set_value(new_value)

    @property
    def log_values(self):
        """
        Set to true if the values should be logged to DB.
        If false Kervi will hold a small cache in memory
        for the last reading to be used in sparklines and real time charts.
        """
        return self._log_values

    @log_values.setter
    def log_values(self, value):
        self._log_values = value

    @property
    def persist_value(self):
        """
        Set to true if the current value should be saved to db when the Kervi application or module exits.
        The value will be restored upon application or module start. 
        """
        return self._persist_value

    @persist_value.setter
    def persist_value(self, do_persist):
        if not self._persist_value and do_persist:
            self._persist_value = do_persist
            self._load_persisted()
        else:
            self._persist_value = do_persist

    def _query_value(self, id):
        if self.component_id == id:
            return self.value

    def _load_persisted(self):
        if self._persist_value:
            self._set_value(self.settings.retrieve_value("value", self._default_value), False)

    def link_to(self, dynamic_value, transformation=None):
        """
        Dynamic values may be linked together. 
        A dynamic value is configured to be an input or output.
        When an output value is linked to an input value the input will become
        an observer of the output. Every time the output value change it will notify the input 
        about the change.

        :param dynamic_value:
            It is possible to make direct and indirect link.

            If the type of the parameter dynamic_value is of type DynamicValue a direct link is created.
            this is a fast link where the output can signal directly to input.
            This type of link is possible if both output and input resides in the same process.

            If the type of the dynamic_value is a string it is expected to hold the id of a dynamic value.
            In this mode the input value will listen on the kervi spine for events from the output value.
            This mode is useful if the output and input does not exists in the same process.
            This type of link must be made by the input.

        :type dynamic_value: ``str`` or ``DynamicValue``

        :param transformation:
            A function or lambda expression that transform the value before the output is update.
            This is usefull if the input expects other ranges that the output produce
            or need to change the sign of the value.

        """
        source = dynamic_value
        if isinstance(source, DynamicValue):
            if source.is_input and not self.is_input:
                self.add_observer(source, transformation)
            elif not source.is_input and self.is_input:
                source.add_observer(self, transformation)
            else:
                raise Exception("input/output mismatch in dynamic value link:{0} - {1}".format(source.name, self.name))
        elif isinstance(source, str):
            if len(self._spine_observers) == 0:
                self.spine.register_event_handler("dynamicValueChanged", self._value_changed_event)

            self._spine_observers[source] = transformation

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this DynamicValue to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            * *size* (``int``) -- The number of dashboard cells the Dynamic should occupy horizontal.
                If size is 0 (default) the input and label will expand to the width of the panel.

            * *link_to_header* (``str``) -- Link this DynamicValue to header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the DynamicValue.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display DynamicValue and label in its actual size
                If you set inline to true the size parameter is ignored.
                The DynamicValue will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.
        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            **kwargs
            )

    def add_observer(self, observer, transformation=None):
        """
        Adds an observer to this value.
        The observer must implement the function dynamic_value_changed. 
        """
        self._observers += [(observer, transformation)]

    def _value_changed_event(self, id, value, old_value ):
        if value["id"] in self._spine_observers.keys():
            transformation = self._spine_observers[value["id"]]
            if transformation:
                self.value = transformation(value["value"])
            else:
                self.value = value["value"]

    def _set_value(self, nvalue, allow_persist=True):
        if self._value != nvalue:
            self.spine.log.debug(
                "value change on input:{0} value:{1}",
                self.component_id,
                nvalue
            )

            old_value = self.value
            self._value = nvalue
            self.value_changed(nvalue, old_value)

            for observer in self._observers:
                item, transformation = observer
                if transformation:
                    item.dynamic_value_changed(self, transformation(nvalue))
                else:
                    item.dynamic_value_changed(self, nvalue)

            self._check_value_events(nvalue, old_value)

            if self._persist_value and allow_persist:
                self.settings.store_value("value", self.value)

            val = {"id":self.component_id, "value":nvalue, "timestamp":datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")}
            self.spine.trigger_event(
                "dynamicValueChanged",
                self.component_id,
                val,
                self._log_values,
                groups=self.user_groups
            )

    def dynamic_value_changed(self, dynamic_value, value):
        self.value = value

    def value_changed(self, new_value, old_value):
        pass

    def add_value_event(self, event_value, func, event_type=None, parameters=None):
        """
        Add a function that is called when the dynamic value reach or pass the event_value.

        :param event_value:
            A single value or range specified as a tuple.

            If it is a range the function specified in func is called when the value enters the range. 

        :type event_value: ``float``, ``string``, ``boolean`` or a tuple of these types. 

        :param func:
            Function or lambda expression to be called. 
            This function will receive the dynamcic value as a parameter.

        :param event_type:
            String with the value "warning" of "error" or None (default).
            If warning or error is specified the value or range are shown in UI.

        :type event_type: ``str``

        """
        self._value_event_handlers += [(event_value, func, event_type, parameters)]

    def _handle_range_event(self, value, message, func, level):
        self.user_log_message(message, level=level)
        if func:
            func(self)

    def add_normal_range(self, value, message=None, func=None):
        self.add_value_event(value, self._handle_range_event, parameters=[message, func, 3])

    def add_warning_range(self, value, message=None, func=None):
        self.add_value_event(value, self._handle_range_event, event_type="warning", parameters=[message, func, 2])

    def add_error_range(self, value, message=None, func=None):
        self.add_value_event(value, self._handle_range_event, event_type="error", parameters=[message, func, 1])

    def _check_value_events(self, new_value, old_value):
        for event in self._value_event_handlers:
            value, func, event_type, parameters = event
            if func:
                if isinstance(value, tuple):
                    value_start, value_end = value
                    if old_value < value_start and new_value >= value_start:
                        func(self, *parameters)
                    elif old_value > value_end and new_value <= value_end:
                        func(self, *parameters)
                else:
                    if old_value < value and new_value >= value:
                        func(self, *parameters)
                    elif old_value > value and new_value <= value:
                        func(self, *parameters)

    @property
    def _event_ranges(self):
        ranges = []
        for event in self._value_event_handlers:
            value, func, event_type, parameters = event
            if isinstance(value, tuple):
                value_start, value_end = value
                ranges += [{"start":value_start, "end":value_end, "type":event_type}]
            if event_type:
                ranges += [{"start":value, "end":None, "type":event_type}]
        return ranges

    def _get_info(self):
        return {
            "unit":self._unit,
            "value":self.value,
            "command":self.command,
            "ranges":self._event_ranges,
            "visible": self.visible
        }

    def on_get_value(self):
        return self.value

class DynamicNumber(DynamicValue):
    """
    DynamicValue that holds a float value.
    If this DynamicValue is an input it is shown as a slider on dashboards.
    If is an output it is possible to specify different kinds of gauges.
    """
    def __init__(self, name, input_id=None, is_input=True, parent=None, index = None):
        DynamicValue.__init__(self, name, "dynamic-number", input_id, is_input, parent, index)
        #self.spine = Spine()
        self._min_value = -100
        self._max_value = 100
        self._unit = ""
        self._default_value = 0.0
        self._value = 0
        self._delta = None
        self._save_to_db = False
        self._ui_parameters["type"] = ""
        self._ui_parameters["chart_points"] = 60
        self._ui_parameters["show_sparkline"] = False
        self._ui_parameters["pad_auto_center"] = False
        self._ui_parameters["chart_buttons"] = True
        self._ui_parameters["chart_grid"] = True
        self._ui_parameters["tick"] = 1.0

        self._sparkline = []
        self._last_reading = None

    @property
    def delta(self):
        """
        Enter how much a the value should change before it triggers changes events and updates links.
        :type: ``float``
        """
        return self._store_delta

    @delta.setter
    def delta(self, value):
        self._store_delta = value

    @property
    def max(self):
        """
        Maximum value.

        :type: ``float``
        """
        return self._max_value

    @max.setter
    def max(self, value):
        self._max_value = value

    @property
    def min(self):
        """
        Minimum value.

        :type: ``float``
        """
        return self._min_value

    @min.setter
    def min(self, value):
        self._min_value = value

    @property
    def unit(self):
        """
        Unit of value. Enter values like C, F, hPa

        :type: ``str``
        """
        return self._unit

    @unit.setter
    def unit(self, value):
        self._unit = value

    def _get_info(self):
        return {
            "isInput":self.is_input,
            "unit":self._unit,
            "value":self.value,
            "maxValue":self._max_value,
            "minValue":self._min_value,
            "command":self.command,
            "ranges":self._event_ranges,
            "sparkline":self._sparkline,
        }

    def __delta_exceeded(self, value):
        if self._delta is None:
            return True
        elif value is None:
            return False
        elif self._value is None:
            return True
        elif value >= self._value + self.delta:
            return True
        elif value <= self._value - self.delta:
            return True
        else:
            return False

    def _set_value(self, new_value, allow_persist=True):
        if self.__delta_exceeded(new_value):
            self.spine.log.debug(
                "value change on input:{0} value:{1}",
                self.component_id,
                new_value
            )
            old_value = self._value
            self._value = new_value
            self.value_changed(new_value, old_value)

            for observer in self._observers:
                if isinstance(observer, tuple):
                    item, transformation = observer
                    if transformation:
                        item.dynamic_value_changed(self, transformation(new_value))
                    else:
                        item.dynamic_value_changed(self, new_value)
                else:
                    observer.dynamic_value_changed(self, new_value)

            self._check_value_events(new_value, old_value)

            if self._persist_value and allow_persist:
                self.settings.store_value("value", self.value)

            if len(self._sparkline) == 0:
                self._sparkline += [new_value]
            elif len(self._sparkline) >= 10:
                self._sparkline.pop(0)
            self._sparkline += [new_value]
            self._last_reading = time.clock()

            
            val = {"value_id":self.component_id, "value":new_value, "timestamp":datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")}
            if self.persist_value:
                self.spine.send_command("StoreDynamicValue", val)

            self.spine.trigger_event(
                "dynamicValueChanged",
                self.component_id,
                {"id":self.component_id, "value":new_value, "timestamp":datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")},
                self._log_values,
                groups=self.user_groups
            )

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this value to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            
            * *link_to_header* (``str``) -- Link this DynamicValue to the header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the DynamicValue.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display DynamicValue and label in its actual size
                The DynamicValue will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.

            * *type* (``string``) -- How to display the value on the panel. The possible display type values depends on the value type being input or output
                                     Input: 'horizontal_slider' (default) or 'vertical_slider'. 
                                     Output: 'value' (default), 'chart', 'radial_gauge', 'horizontal_gauge', 'vertical_gauge'
            
            * *chart_buttons* (``bool / str``) -- False no chart buttons are shown. 
                                                  True chart buttons are shown at the bottom.
                                                  "top" the chart buttons are shown above the chart.
            
            * *chart_grid* (``bool``) -- If true the value grid is displayed.

        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            **kwargs
            )


class DynamicString(DynamicValue):
    """
    DynamicValue that holds a string.
    """
    def __init__(self, name, input_id=None, is_input=True, parent=None, index = None):
        DynamicValue.__init__(self, name, "dynamic-string", input_id, is_input, parent, index)
        #self.spine = Spine()
        self._value = ""
        self._ui_parameters["type"] = "text"

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this value to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            
            * *link_to_header* (``str``) -- Link this DynamicValue to the header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the DynamicValue.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display DynamicValue and label in its actual size
                The DynamicValue will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.

        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            **kwargs
            )


class DynamicDateTime(DynamicValue):
    """
    A DynamicValue that holds a date and/or time.
    """
    def __init__(self, name, input_type="datetime", input_id=None, index = None):
        DynamicValue.__init__(self, name, "dynamic-datetime", input_id, index)
        #self.spine = Spine()
        self._value = ""
        self._ui_parameters["type"] = input_type

class DynamicBoolean(DynamicValue):
    """
    A DynamicValue that holds a boolean.
    When linked to a dashboard it is represented as a switch button or push button.
    """
    def __init__(self, name, input_id=None, is_input=True, parent=None, index = None):
        DynamicValue.__init__(self, name, "dynamic-boolean", input_id, is_input, parent, index)
        self._value = False
        self._ui_parameters["type"] = "switch"
        self._ui_parameters["on_text"] = "On"
        self._ui_parameters["off_text"] = "Off"
        self._ui_parameters["on_icon"] = None
        self._ui_parameters["off_icon"] = None
        self._ui_parameters["button_icon"] = None
        self._ui_parameters["button_text"] = self.name,
        self._ui_parameters["button_width"] = None
        self._ui_parameters["button_height"] = None,
        self._ui_parameters["input_size"] = 0

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this value to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str

        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            * *size* (``int``) -- The number of dashboard cells the value should occupy horizontal.
                If size is 0 (default) the DynamicValue and label will expand to the width of the panel.

            * *link_to_header* (``str``) -- Link this DynamicValue to the header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the DynamicValue.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display DynamicValue and label in its actual size
                If you set inline to true the size parameter is ignored.
                The DynamicValue will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.

            * *type* (``string``) -- if value should be displayes as a 'switch' (default) or 'push' for push button.

            * *on_text* (``string``) -- Text to display when switch is on.
            * *off_text* (``string``) -- Text to display when switch is off.
            * *on_icon* (``string``) -- Icon to display when switch is on.
            * *off_icon* (``string``) -- Icon to display when switch is off.

            * *button_icon* (``string``) -- Icon to display on button.
            * *button_text* (``string``) -- Text to display on button, default is name.
        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            **kwargs
            )

class DynamicEnum(DynamicValue):
    r"""
    A DynamicEnum value holds a selection of predefined values to select between.
    The DynamicValue is presented as a dropdown on dashboards.

    Usage:

    .. code-block:: python

            self.framerate = self.inputs.add("frame_rate", "Frame rate", DynamicEnum)
            self.framerate.addOption("5", "5 / sec")
            self.framerate.addOption("10", "10 / sec")
            self.framerate.addOption("15", "15 / sec", True)

    """
    def __init__(self, name, input_id=None, is_input=True, parent=None, index = None):
        DynamicValue.__init__(self, name, "dynamic-enum", input_id, is_input, parent, index)

        self.options = []
        self.selected_options = []
        self._ui_parameters["type"] = "dropdown"

    def add_option(self, value, text, selected=False):
        """
        Add option to select

        :param value: The value that the option represent.

        :param text: The text that should be displayer in dropdown

        :param selected: True if the option should be the default value.
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
