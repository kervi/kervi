#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

import time
try:
    from datetime import datetime
except:
    from kervi.core.utility.udatetime import datetime

from kervi.values.kervi_value import KerviValue
from kervi.core.utility.component import KerviComponent
from kervi.config import Configuration


class NumberValue(KerviValue):
    """
    Value that holds a float value.
    If this value is an input it is shown as a slider on dashboards.
    If is an output it is possible to specify different kinds of gauges.
    """
    def __init__(self, name, **kwargs):
        KerviValue.__init__(self, name, "number-value", **kwargs)
        #self.spine = Spine()
        try:
            from pint import UnitRegistry
            self._ureg = UnitRegistry()
            self._ureg.autoconvert_offset_to_baseunit = True
            self._Q = self._ureg.Quantity
        except ModuleNotFoundError:
            self._Q = None

        self._q_unit = None
        self._q_display = None
        self._min_value = -100
        self._max_value = 100
        self._type = None
        #self._display_unit = None
        self._value = 0
        self._delta = None
        self._ui_parameters["type"] = ""
        self._ui_parameters["value_icon"] = None
        self._ui_parameters["min_integer_digits"] = 1
        self._ui_parameters["min_fraction_digits"] = 1
        self._ui_parameters["max_fraction_digits"] = 1
        self._ui_parameters["show_sparkline"] = False
        self._ui_parameters["show_value"] = True
        self._ui_parameters["pad_auto_center"] = False
        self._ui_parameters["chart_buttons"] = True
        self._ui_parameters["chart_grid"] = True
        self._ui_parameters["chart_interval"] = "5min"
        self._ui_parameters["chart_fill"] = True
        self._ui_parameters["chart_point"] = 0
        if Configuration:
            unit_system = Configuration.unit_system
            chart_time_format = Configuration.display.unit_systems.systems[unit_system].datetime.chart
            self._ui_parameters["chart_time_format"] = chart_time_format
        else:
            self._ui_parameters["chart_time_format"] = {
                "millisecond": "h:mm:ss.SSS",
                "second": "h:mm:ss",
                "minute": "h:mm",
                "hour":   "h",
                "day":    "MMM D",
                "week":   "ll",
                "month":  "MMM YYYY",
                "quarter":"[Q]Q - YYYY",
                "year":   "YYYY",
            }

        self._ui_parameters["tick"] = 1.0
        self._ui_parameters["display_unit"] = True

        self._last_reading = None

    @property
    def delta(self):
        """
        Enter how much a the value should change before it triggers changes events and updates links.
        :type: ``float``
        """
        return self._delta

    @delta.setter
    def delta(self, value):
        self._delta = value

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
    def type(self):
        """
        Value type.

        :type: ``str``
        """
        return self._type

    @type.setter
    def type(self, value):
        self._type = value

    @property
    def display_unit(self):
        """
        Display unit of value.

        :type: ``str``
        """
        if self._display_unit:
            return self._display_unit
        elif self._Q:
            config = Configuration.display.unit_systems
            default_system = Configuration.unit_system
            units = config.systems[default_system]

            self._display_unit = units.get(self._type, self._unit)

            if self._type == "temperature":
                from_unit = "deg" + self._unit.upper()
                to_unit = "deg" + self._display_unit.upper()
            else:
                from_unit = self._unit
                to_unit = self._display_unit

            #print("dv", from_unit, to_unit)
            self._q_unit = self._Q("1 " + from_unit)
            self._q_display = self._Q("1 " + to_unit)
            
            
        return self._display_unit

    @display_unit.setter
    def display_unit(self, value):
        if value != self._display_unit:
            self._display_unit = value
            if self._type == "temperature":
                from_unit = "deg" + self._unit.upper()
                to_unit = "deg" + self._display_unit.upper()
            else:
                from_unit = self._unit
                to_unit = self.display_unit

            self._q_unit = self._ureg.parse_expression(from_unit)
            self._q_display = self._ureg.parse_expression(to_unit)

    @property
    def display_value(self):
        if self._q_display and self._q_unit:
            dv = self._value * self._q_unit
            return round(dv.to(self._q_display).magnitude, 3)
        else:
            if self._value:
                return round(self._value, 3)
            else:
                return 0.0
    
    def _get_info(self, **kwargs):
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
                        item.kervi_value_changed(self, transformation(new_value))
                    else:
                        item.kervi_value_changed(self, new_value)
                else:
                    observer.kervi_value_changed(self, new_value)

            self._check_value_events(new_value, old_value)

            if self._persist_value and allow_persist:
                self.settings.store_value("value", self.value)

            timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
            if len(self._sparkline) == 0:
                self._sparkline += [{"timestamp":timestamp, "value":new_value}]
            elif len(self._sparkline) >= 10:
                self._sparkline.pop(0)
            self._sparkline += [{"timestamp":timestamp, "value":new_value}]
            self._last_reading = time.clock()

            
            val = {
                "id":self.component_id,
                "value":new_value,
                "timestamp":timestamp,
                "display_value": self.display_value,
                "display_unit": self.display_unit
            }
            
            self.spine.trigger_event(
                "valueChanged",
                self.component_id,
                val,
                self._log_values,
                groups=self.user_groups
            )

    def link_to_dashboard(self, dashboard_id=None, panel_id=None, **kwargs):
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
            
            * *link_to_header* (``str``) -- Link this value to the header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the value.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display value and label in its actual size
                The value will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.

            * *type* (``string``) -- How to display the value on the panel. The possible display type values depends on the value type being input or output
                                     Input: 'horizontal_slider' (default) or 'vertical_slider'. 
                                     Output: 'value' (default), 'chart', 'radial_gauge', 'horizontal_gauge', 'vertical_gauge'
            
            * *chart_buttons* (``bool / str``) -- False no chart buttons are shown. 
                                                  True chart buttons are shown at the bottom.
                                                  "top" the chart buttons are shown above the chart.
            
            * *chart_grid* (``bool``) -- If true the value grid is displayed.
            * *chart_interval* (``str``) -- Initial time interval displayed.
            possible values are "5min", "15min", "30min", "hour" (default), "day", "week", "month", "year"

        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            panel_id,
            **kwargs
        )


class StringValue(KerviValue):
    """
    Value that holds a string.
    """
    def __init__(self, name, **kwargs):
        KerviValue.__init__(self, name, "string-value", **kwargs)
        #self.spine = Spine()
        self._value = ""
        self._ui_parameters["type"] = "text"
        self._ui_parameters["input_size"] = "5rem"

    def link_to_dashboard(self, dashboard_id=None, panel_id=None, **kwargs):
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
            
            * *link_to_header* (``str``) -- Link this value to the header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the value.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display value and label in its actual size
                The value will only occupy as much space as the label and input takes.

            * *input_size* (``int | str``) -- Width of the input field. Use px, % or rem as unit.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.

        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            panel_id,
            **kwargs
            )


class DateTimeValue(KerviValue):
    """
    A value that holds a date and/or time.
    """
    def __init__(self, name, input_type="datetime", **kwargs):
        KerviValue.__init__(self, name, "datetime-value", **kwargs)
        #self.spine = Spine()
        self._value = ""
        self._ui_parameters["type"] = input_type

    @property
    def value(self):
        """Current value of the component"""
        if self._value:
            return datetime.strptime(self._value,'%Y-%m-%dT%H:%M:%SZ')
        return None

    @property
    def date(self):
        """Current value of the component"""
        if self._value:
            return datetime.strptime(self._value[:10],'%Y-%m-%d')
        return None

    @property
    def time(self):
        """Current value of the component"""
        if self._value:
            return datetime.strptime(self._value[10:],'T%H:%M:%SZ')
        return None


    @value.setter
    def value(self, new_value):
        """
        Updates the value.
        If the change exceeds the change delta observers and linked values are notified.  
        """
        datetime_value = None
        if new_value:
            datetime_value = new_value.strftime("%Y-%M-%dT%H:%M:%SZ")
        self._set_value(datetime_value)

class BooleanValue(KerviValue):
    """
    A value that holds a boolean.
    When linked to a dashboard it is represented as a switch button or push button.
    """
    def __init__(self, name, **kwargs):
        KerviValue.__init__(self, name, "boolean-value", **kwargs)
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

    def link_to_dashboard(self, dashboard_id=None, panel_id=None, **kwargs):
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
            
            * *link_to_header* (``str``) -- Link this value to the header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the value.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display value and label in its actual size
                If you set inline to true the size parameter is ignored.
                The value will only occupy as much space as the label and input takes.

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
            panel_id,
            **kwargs
        )

class EnumValue(KerviValue):
    r"""
    A value that holds a selection of predefined values to select between.
    The value is presented as a dropdown on dashboards.

    Usage:

    .. code-block:: python

            self.framerate = self.inputs.add("frame_rate", "Frame rate", EnumSignal)
            self.framerate.addOption("5", "5 / sec")
            self.framerate.addOption("10", "10 / sec")
            self.framerate.addOption("15", "15 / sec", True)

    """
    def __init__(self, name, **kwargs):
        KerviValue.__init__(self, name, "enum-value", **kwargs)
        self._value = []
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
            self._value.append(value)
            if self._persist_value:
                self.settings.store_value("selected_options", self.selected_options)

    def _get_info(self, **kwargs):
        return {
            "options": self.options,
            "command":self.command,
            "value":self.value
        }

    def _set_value(self, selected_options, allow_persist=True):
        self.spine.log.debug(
            "enum value changed:{0}",
            self.component_id
        )

        for option in self.options:
            option["selected"] = False

        self.selected_options = []
        selected = []
        if selected_options:
            for selected_option in selected_options:
                for option in self.options:
                    if option["value"] == selected_option:
                        option["selected"] = True
                        self.selected_options += [option]
                        selected.append(option["value"])
            
        old_value = self._value
        new_value = selected
        self._value = new_value
        self.value_changed(new_value, old_value)

        for observer in self._observers:
            if isinstance(observer, tuple):
                item, transformation = observer
                if transformation:
                    item.kervi_value_changed(self, transformation(new_value))
                else:
                    item.kervi_value_changed(self, new_value)
            else:
                observer.kervi_value_changed(self, new_value)

        if self._persist_value and allow_persist:
            self.settings.store_value("value", self.value)

        timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
        self._last_reading = time.clock()

        #val = {"value_id":self.component_id, "value":new_value, "timestamp":datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")}
        
        self.spine.trigger_event(
            "valueChanged",
            self.component_id,
            {"id":self.component_id, "value":new_value, "timestamp":datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")},
            self._log_values,
            groups=self.user_groups
        )

    
        
        # self._value = self.selected_options
        # self.value_changed(self.selected_options, None)

        # if self._persist_value and allow_persist:
        #     self.settings.store_value("value", self.selected_options)

        # self.spine.trigger_event(
        #     "valueChanged",
        #     self.component_id,
        #     {"select":self.component_id, "value":self.selected_options}
        # )


class ColorValue(KerviValue):
    """
    A value that holds a rgb value.
    When linked to a dashboard it is represented as a color button.
    """
    def __init__(self, name, **kwargs):
        KerviValue.__init__(self, name, "color-value", **kwargs)
        self._value = (255, 255, 255)
        self._type = None
        self._ui_parameters["type"] = "button"
        self._ui_parameters["button_icon"] = None
        self._ui_parameters["button_text"] = self.name,
        self._ui_parameters["button_width"] = None
        self._ui_parameters["button_height"] = None,
        self._ui_parameters["input_size"] = 0

    def _normalize_value(self, new_value):
        if isinstance(new_value, str) and new_value[0]=="#":
            #self._set_value(new_value)
            KerviValue._set_value(self, new_value)
        elif isinstance(new_value, list) and len(new_value)==3:
            value = '#%02x%02x%02x' % (new_value[0], new_value[1], new_value[2])
            KerviValue._set_value(self, value)
            #self._set_value(value)
        elif isinstance(new_value, tuple) and len(new_value):
            value = '#%02x%02x%02x' % new_value
            KerviValue._set_value(self, value)
        else:
            raise ValueError("invalid color value:" + str(new_value))

    def _set_value(self, new_value):
        if isinstance(new_value, str) and new_value[0]=="#":
            #self._set_value(new_value)
            KerviValue._set_value(self, new_value)
        elif isinstance(new_value, list) and len(new_value)==3:
            value = '#%02x%02x%02x' % (new_value[0], new_value[1], new_value[2])
            KerviValue._set_value(self, value)
            #self._set_value(value)
        elif isinstance(new_value, tuple) and len(new_value):
            value = '#%02x%02x%02x' % new_value
            KerviValue._set_value(self, value)
        else:
            raise ValueError("invalid color value:" + str(new_value))
    
    @property
    def value(self):
        return self._value
    
    @value.setter
    def value(self, new_value):
        """
        Updates the value.
        If the change exceeds the change delta observers and linked values are notified.  
        """
        self._normalize_value(new_value)
    
    @property
    def rgb(self):
        """retuns the color value as rgb tuple"""
        return tuple(int(self.value[i:i+2], 16) for i in (0, 2 ,4))

    
    def link_to_dashboard(self, dashboard_id=None, panel_id=None, **kwargs):
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
            
            * *link_to_header* (``str``) -- Link this value to the header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the value.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display value and label in its actual size
                If you set inline to true the size parameter is ignored.
                The value will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.

            * *type* (``string``) -- 'button' or 'input'.

            
            * *button_icon* (``string``) -- Icon to display on button.
            * *button_text* (``string``) -- Text to display on button, default is name.
        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            panel_id,
            **kwargs
        )