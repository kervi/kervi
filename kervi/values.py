
import time
from datetime import datetime

from kervi.spine import Spine
from kervi.utility.thread import KerviThread
from kervi.utility.component import KerviComponent

VALUE_COUNTER = 0

class DynamicValueList(object):
    def __init__(self, controller, is_input, inject_in_controller=False):
        self._items = {}
        self.is_input = is_input
        self.controller = controller
        self.count = 0
        self._inject = inject_in_controller

    def add(self, value_id, name, value_class):
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
        if self.is_input:
            item.add_observer(self.controller)
        return item

    @property
    def keys(self):
        return self._items.keys()

    def __getitem__(self, item_id):
        return self._items[item_id]


class DynamicValue(KerviComponent):
    """
    Generic value
    """
    def __init__(self, name, value_type, input_id=None, is_input=True, parent=None, index = None):
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
        self._index = index
        self.is_input = is_input
        self._value = None
        self._observers = []
        if parent:
            self._observers += [parent]
        self._spine_observers = []
        self.command = self.component_id + ".setValue"
        self.spine.register_command_handler(self.command, self._set_value)
        self.spine.register_query_handler("getDynamicValue", self._query_value)

        self._ui_parameters = {
            "size": 0,
            "input_size": 50,
            "type": "unkonwn",
            "link_to_header": False,
            "label_icon": None,
            "label": self.name,
            "flat": False,
            "inline": False,
            "is_input":self.is_input,
            "value_size":10
        }
        self._persist_value = False

    @property
    def index(self):
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
        self._set_value(new_value)

    @property
    def persist_value(self):
        """ If true the value is saved to kervi DB when it change"""
        return self._persist_value

    @persist_value.setter
    def persist_value(self, do_persist):
        self._persist_value = do_persist

    
    def _query_value(self, id):
        if self.component_id == id:
            return self.value
    
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

    def _value_changed_event(self, id, value ):
        if value["id"] in self._spine_observers:
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
                observer.dynamic_value_changed(self)

            if self._persist_value and allow_persist:
                self.settings.store_value("value", self.value)

            timestamp = (datetime.utcnow() - datetime(1970, 1, 1)).total_seconds()
            self.spine.trigger_event(
                "dynamicValueChanged",
                self.component_id,
                {"id":self.component_id, "value":nvalue, "timestamp":timestamp}
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
            "visible": self.visible
        }

    def on_get_value(self):
        return self.value

class DynamicNumber(DynamicValue):
    """
    A number input component shows as a slider on dashboards.
    """
    def __init__(self, name, input_id=None, is_input=True, parent=None, index = None):
        DynamicValue.__init__(self, name, "dynamic-number", input_id, is_input, parent, index)
        #self.spine = Spine()
        self._min_value = -100
        self._max_value = 100
        self.unit = ""
        self._value = 0
        self._delta = None
        self._save_to_db = False
        self._ui_parameters["type"] = "horizontal_slider"
        self._ui_parameters["chart_points"] = 60
        self._ui_parameters["show_sparkline"] = False

        self._upper_fatal_limit = None
        self._upper_warning_limit = None
        self._lower_warning_limit = None
        self._lower_fatal_limit = None

        self._upper_fatal_message = None
        self._upper_warning_message = None
        self._lower_warning_message = None
        self._lower_fatal_message = None

        self._normal_message = None

        self._log_warnings = False
        self._log_errors = False

        self._sparkline = []
        self._last_reading = None
        
    @property
    def persist_to_db(self):
        """
        If true the method new_sensor_reading
        will save the sensor reading to DB.

        :type: ``bool``
        """
        return self._save_to_db

    @persist_to_db.setter
    def persist_to_db(self, value):
        self._save_to_db = value

    @property
    def delta(self):
        """
        Enter how much a sensor value should change to trigger a new sensor read response.
        The method new_sensor_reading triggers db saving.
        Only relevant if persist_to_db is True.
        :type: ``float``
        """
        return self._store_delta

    @delta.setter
    def delta(self, value):
        self._store_delta = value

    @property
    def max(self):
        """
        Maximum value the sensor may mesaure.

        :type: ``float``
        """
        return self._max_value

    @max.setter
    def max(self, value):
        self._max_value = value

    @property
    def min(self):
        """
        Minimum value the sensor may mesaure.

        :type: ``float``
        """
        return self._min_value

    @min.setter
    def min(self, value):
        self._min_value = value

    @property
    def unit(self):
        """
        Mesauring unit for value. Enter values like C, F, hPa

        :type: ``str``
        """
        return self._unit

    @unit.setter
    def unit(self, value):
        self._unit = value
      

    @property
    def upper_fatal_limit(self):
        """
        If set the sensor will trigger an event *sensorUpperFatal* if the value pases this limit.
        When the sensor is displayed on a dashboard
        the zone from upper_fatal_limit to max is marked red.

        :type: ``float``
        """
        return self._upper_fatal_limit


    @property
    def normal_message(self):
        """
        Message to log when the sensor value reach normal levels from lower or upper limits.

        :type: ``str``
        """
        return self._normal_message

    @normal_message.setter
    def normal_message(self, value):
        self._normal_message = value

    @upper_fatal_limit.setter
    def upper_fatal_limit(self, value):
        self._upper_fatal_limit = value

    @property
    def upper_fatal_message(self):
        """
        Message to log when the sensor value reach upper_fatal_limit

        :type: ``str``
        """
        return self._upper_fatal_message

    @upper_fatal_message.setter
    def upper_fatal_message(self, value):
        self._upper_fatal_message = value

    @property
    def upper_warning_limit(self):
        """
        If set the sensor will trigger an event *sensorUpperWarning* if the value pases this limit.
        When the sensor is displayed on a dashboard the zone from upper_warning_limit
        to upper_fatal_limit or max is marked yellow.

        :type: ``float``
        """
        return self._upper_warning_limit

    @upper_warning_limit.setter
    def upper_warning_limit(self, value):
        self._upper_warning_limit = value

    @property
    def upper_warning_message(self):
        """
        Message to log when the sensor value reach upper_warning_limit

        :type: ``str``
        """
        return self._upper_warning_message

    @upper_warning_message.setter
    def upper_warning_message(self, value):
        self._upper_warning_message = value

    @property
    def lower_warning_limit(self):
        """
        If set the sensor will trigger an event *sensorLowerWarning*
        if the value pases this limit from a higher previus value.
        When the sensor is displayed on a dashboard
        the zone from min or lower_fatal_limit to lower_warning_limit is marked yellow.

        :type: ``float``
        """
        return self._lower_warning_limit

    @lower_warning_limit.setter
    def lower_warning_limit(self, value):
        self._lower_warning_limit = value

    @property
    def lower_warning_message(self):
        """
        Message to log when the sensor value reach lower_warning_limit

        :type: ``str``
        """
        return self._lower_warning_message

    @lower_warning_message.setter
    def lower_warning_message(self, value):
        self._lower_warning_message = value

    @property
    def lower_fatal_limit(self):
        """
        If set the sensor will trigger an event *sensorLowerFatal*
        if the value pases this limit from a higher previus value.
        When the sensor is displayed on a dashboard
        the zone from min to lower_fatal_limit is marked red.

        :type: ``float``
        """
        return self._lower_fatal_limit

    @lower_fatal_limit.setter
    def lower_fatal_limit(self, value):
        self._lower_fatal_limit = value

    @property
    def lower_fatal_message(self):
        """
        Message to log when the sensor value reach lower_fatal_limit

        :type: ``str``
        """
        return self._lower_fatal_message

    @lower_fatal_message.setter
    def lower_fatal_message(self, value):
        self._lower_fatal_message = value

    def _get_info(self):
        return {
            "isInput":self.is_input,
            "unit":self.unit,
            "value":self.value,
            "maxValue":self._max_value,
            "minValue":self._min_value,
            "command":self.command,
            "upperFatalLimit":self.upper_fatal_limit,
            "upperWarningLimit":self.upper_warning_limit,
            "lowerWarningLimit":self.lower_warning_limit,
            "lowerFatalLimit":self.lower_fatal_limit,
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
                observer.dynamic_value_changed(self)
            if self._persist_value and allow_persist:
                self.settings.store_value("value", self.value)

            if len(self._sparkline) == 0:
                self._sparkline += [new_value]
            elif len(self._sparkline) >= 10:
                self._sparkline.pop(0)
            self._sparkline += [new_value]
            self._last_reading = time.clock()

            timestamp = (datetime.utcnow() - datetime(1970, 1, 1)).total_seconds()
            val = {"value_id":self.component_id, "value":new_value, "timestamp":timestamp}
            if self.persist_to_db:
                self.spine.send_command("StoreDynamicValue", val)

            self.spine.trigger_event(
                "dynamicValueChanged",
                self.component_id,
                {"id":self.component_id, "value":new_value, "timestamp":timestamp}
            )

    def _send_messages(self, old_val, value):
        if old_val == None:
            return
        if self.lower_fatal_message:
            if old_val > self.lower_fatal_limit and value <= self.lower_fatal_limit:
                self.user_log_message(self.lower_fatal_message, level=1)

        if self.lower_warning_message:
            if self.lower_fatal_limit and self.lower_warning_limit:
                if old_val < self.lower_fatal_limit and value >= self.lower_fatal_limit:
                    self.user_log_message(self.lower_warning_message, level=2)

                elif old_val > self.lower_warning_limit and value <= self.lower_warning_limit:
                    self.user_log_message(self.lower_warning_message, level=2)

            elif self.lower_warning_limit:
                if old_val > self.lower_warning_limit and value <= self.lower_warning_limit:
                    self.user_log_message(self.lower_warning_message, level=2)

        if self.upper_fatal_message:
            if old_val < self.upper_fatal_limit and value >= self.upper_fatal_limit:
                self.user_log_message(self.upper_fatal_message, level=1)

        if self.upper_warning_message:
            if self.upper_fatal_limit and self.upper_warning_limit:
                if old_val > self.upper_fatal_limit and value <= self.upper_fatal_limit:
                    self.user_log_message(self.upper_warning_message, level=2)
                elif old_val < self.upper_warning_limit and value >= self.upper_warning_limit:
                    self.user_log_message(self.upper_warning_message, level=2)


            elif self.upper_warning_limit:
                if old_val < self.upper_warning_limit and value >= self.upper_warning_limit:
                    self.user_log_message(self.upper_warning_message, level=2)

        if self.normal_message:
            if self.upper_warning_limit:
                if old_val >= self.upper_warning_limit and value < self.upper_warning_limit and value:
                    self.user_log_message(self.normal_message, level=3)
            elif self.upper_fatal_limit:
                if old_val >= self.upper_fatal_limit and value < self.upper_fatal_limit and value:
                    self.user_log_message(self.normal_message, level=3)

            if self.lower_warning_limit:
                if old_val <= self.lower_warning_limit and value > self.lower_warning_limit and value:
                    self.user_log_message(self.normal_message, level=3)
            elif self.lower_fatal_limit:
                if old_val <= self.lower_fatal_limit and value > self.lower_fatal_limit and value:
                    self.user_log_message(self.normal_message, level=3)

    
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
    def __init__(self, name, input_id=None, is_input=True, parent=None, index = None):
        DynamicValue.__init__(self, name, "dynamic-string", input_id, is_input, parent, index)
        #self.spine = Spine()
        self._value = ""
        self._ui_parameters["type"] = "text"

class DynamicDateTime(DynamicValue):
    """
    A date and time component.
    """
    def __init__(self, name, input_type="datetime", input_id=None, index = None):
        DynamicValue.__init__(self, name, "dynamic-datetime", input_id, index)
        #self.spine = Spine()
        self._value = ""
        self._ui_parameters["type"] = input_type

class DynamicBoolean(DynamicValue):
    """
    Switch button controller component, shows a on/off button in UI
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
    def __init__(self, name, input_id=None, is_input=True, parent=None, index = None):
        DynamicValue.__init__(self, name, "dynamic-enum", input_id, is_input, parent, index)

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
