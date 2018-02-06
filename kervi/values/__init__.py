#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import time
from datetime import datetime
from kervi.values.kervi_value import KerviValue
from kervi.utility.component import KerviComponent

class NumberValue(KerviValue):
    """
    Value that holds a float value.
    If this value is an input it is shown as a slider on dashboards.
    If is an output it is possible to specify different kinds of gauges.
    """
    def __init__(self, name, **kwargs):
        KerviValue.__init__(self, name, "number-value", **kwargs)
        #self.spine = Spine()
        self._min_value = -100
        self._max_value = 100
        self._unit = ""
        self._default_value = 0.0
        self._value = 0
        self._delta = None
        self._ui_parameters["type"] = ""
        self._ui_parameters["chart_points"] = 60
        self._ui_parameters["show_sparkline"] = False
        self._ui_parameters["pad_auto_center"] = False
        self._ui_parameters["chart_buttons"] = True
        self._ui_parameters["chart_grid"] = True
        self._ui_parameters["chart_interval"] = "5min"
        self._ui_parameters["tick"] = 1.0

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
    def unit(self):
        """
        Unit of value. Enter values like C, F, hPa

        :type: ``str``
        """
        return self._unit

    @unit.setter
    def unit(self, value):
        self._unit = value

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

            
            val = {"value_id":self.component_id, "value":new_value, "timestamp":datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")}
            
            self.spine.trigger_event(
                "valueChanged",
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
            section_id,
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
            
            * *link_to_header* (``str``) -- Link this value to the header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the value.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display value and label in its actual size
                The value will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.

        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
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
            section_id,
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

    def _get_info(self, **kwargs):
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
            "valueChanged",
            self.component_id,
            {"select":self.component_id, "value":self.options}
        )
