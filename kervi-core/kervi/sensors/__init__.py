#Copyright 2016 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

"""
Sensor handling in Kervi is split in two parts. 
The first part is sensor device drivers that handles physical access to sensor hardware.
The second part is the Sensor class that reads a sensor device and triggers events, store readings to DB.
"""

import time
from kervi.controllers import Controller
from kervi.core.utility.thread import KerviThread
from kervi.spine import Spine
from kervi.values import NumberValue, ColorValue, KerviValue
from kervi.config import Configuration
#from kervi.actions import action
#from kervi.settings import Settings

class Sensor(Controller):
    r"""
    Sensor is a class that exposes a sensor device as a KerviValue.
    The Sensor class polls the associated sensor device and updates it self when
    the value of the sensor device change.

    It is possible to link to other KerviValues and dashboards.

    Some sensor devices are multi dimensional and each dimension are reached by a numeric index of the sensor it self.

    :param sensor_id:
            Id of the sensor. This id is never displayed it is used to reference the sensor in code.
    :type sensor_id: ``str``

    :param name:
            Name of the sensor.
    :type name: ``str``

    :param device:
        The sensor device that should be monitored. Could be one of the sensors from the kervi device library
        or a sensor device driver that inherits from kervi.hal.SensorDeviceDriver
    :type device: ``SensorDeviceDriver``

    :Keyword Arguments:
        * **polling_interval** (``float``) --  Polling interval in seconds. Zero disables polling.        

    """
    def __init__(self, sensor_id, name, device=None, **kwargs):
        #KerviComponent.__init__(self, sensor_id, "sensor", name, **kwargs)
        Controller.__init__(self, sensor_id, name)
        if device.value_type == "color":
            self._sensor_value = self.outputs.add("value", name, ColorValue)
        elif device.value_type == "number":
            self._sensor_value = self.outputs.add(sensor_id, name, NumberValue)
        else:
            raise ValueError("Can not handle device value type: " + str(device.value_type))

        self._device = device
        self._sub_sensors = []
        self._dimensions = 1
        self._index = kwargs.pop("index", -1)
        self._enabled = None
        
        if self._device:
            self.value_type = self._device.type
            self.value_unit = self._device.unit
            self._sensor_value.type = self._device.type
            self._sensor_value.unit = self._device.unit
            self._sensor_value.min = self._device.min
            self._sensor_value.max = self._device.max
            if self._index == -1:
                self._dimensions = self._device.dimensions
                self._dimension_labels = self._device.dimension_labels
        
        if self._dimensions > 1:
            count = 0
            for label in self._dimension_labels:
                sub_sensor = Sensor(
                        self.component_id + "." + label,
                        label,
                        self._device,
                        use_thread=False,
                        #parent=self,
                        index=count,
                        **kwargs
                    )
                sub_sensor.value_unit = self.value_unit
                self._sub_sensors += [
                    sub_sensor
                ]
                count += 1
        
        if kwargs.get("use_thread", True):
            self._sensor_thread = _SensorThread(self, kwargs.get("polling_interval", 1))
        else:
            self._sensor_thread = None

    def __getitem__(self, sub_sensor):
        if self._dimensions == 1:
            return self
        return self._sub_sensors[sub_sensor]

    
    @property
    def enabled(self):
        return self._enabled == True

    @enabled.setter
    def enabled(self, value):
        self._enabled = value
        if self._dimensions > 1:
            for dimension in range(0, self._dimensions):
                self._sub_sensors[dimension].enable = value

    @property
    def polling_interval(self):
        """
        The polling interval of the sensor in seconds.

        :type: ``float``
        """
        return self._sensor_thread.reading_interval

    @polling_interval.setter
    def reading_interval(self, interval):
        self._sensor_thread.reading_interval = interval

    @property
    def sensor_id(self):
        return self.component_id

    @property
    def device(self):
        """
        The device that is linked to this sensor class.
        It may be a hardware device from the kervi device library
        or a class that inherits from kervi.hal.SensorDeviceDriver
        """
        return self._device

    @device.setter
    def device(self, device):
        self._device = device

    def link_to_dashboard(self, dashboard_id=None, panel_id=None, **kwargs):
        r"""
        Links the sensor to a dashboard.

        :param dashboard_id: Id of the dashboard to link to.
                Enter a * if the sensor should be linked to all dashboards.
        :type dashboard_id: ``str``

        :param panel_id:  Id of the panel to link to.
                This is the id of a panel you have added your self to a dashboard or one of the
                system panels *sys-header*, *header* or *footer*
        :type panel_id: ``str``
        
        
        :Keyword Arguments:
                        
            * **link_to_header** (``str``) -- Link this input to header of the panel.

            * **label_icon** (``str``) -- Icon that should be displayed together with label. All Font Awesome icons are valid just enter the name of the icon without *fa-*

            * **label** (``str``) -- Label text, default value is the name of the sensor.

            * **flat** (``bool``) -- Flat look and feel.

            * **inline** (``bool``) -- Display value, sparkline and label in its actual size otherwise it occupys the entire with of the panel 

            * **type** (``str``) -- One of the following values *radial_gauge*, *vertical_gauge*, *horizontal_gauge*, *chart* or *value*.

            * **show_sparkline** (``bool``) -- Show a sparkline next to the value.

            * **icon** (``bool``) -- Icon to show. All Font Awesome icons are valid just enter the name of the icon without *fa-*.

            * **show_value** (``bool``) -- Show the numeric value and unit.

            * **label** (``str``) -- Label to show default is the name of the sensor.
        """

        if self._dimensions == 1:
            self._sensor_value.link_to_dashboard(dashboard_id, panel_id, **kwargs)
        else:
            for dimension in range(0, self._dimensions):
                self._sub_sensors[dimension].link_to_dashboard(dashboard_id, panel_id, **kwargs)

    # def _get_info(self, **kwargs):
    #     dimensions = []
    #     if self._dimensions > 1:
    #         for dimension in range(0, self._dimensions):
    #             dimensions += [self._sub_sensors[dimension]._get_component_info()]
    #     return {
    #         "type":self._sensor_value._type,
    #         "subSensors": dimensions,
    #         "isInput": False,
    #         "maxValue":self.max,
    #         "minValue":self.min,
    #         "unit":self.value_unit,
    #         "value":self._sensor_value._value,
    #         "value_type": self._device.value_type,
    #         "ranges":self._sensor_value._event_ranges,
    #         "sparkline":self._sensor_value._sparkline
    #     }

    # @action
    # def enable(self, state=True):
    #     self.enabled = state
    
    # @enable.set_interrupt
    # def enable_interrupt(self):
    #     self.enabled = False
    
    def controller_start(self):
        if self._enabled == None:
            self.enabled = True
    
    def _new_sensor_reading(self, sensor_value):
        """
        Call this method to signal a new sensor reading.
        This method handles DB storage and triggers different events.

        :param value:
            New value to be stored in the system.
        """
        if not self._active and not self._enabled:
            return

        if self._dimensions > 1:
            for dimension in range(0, self._dimensions):
                value = sensor_value[dimension]
                self._sub_sensors[dimension]._new_sensor_reading(value)
        else:
            self._sensor_value.value = sensor_value
            
    def _read_sensor(self):
        self._new_sensor_reading(self._device.read_value())

    @property
    def log_values(self):
        """
        Set to true if the values should be logged to DB.
        If false Kervi will hold a small cache in memory
        for the last reading to be used in sparklines and real time charts.
        """
        return self._sensor_value._log_values

    @log_values.setter
    def log_values(self, value):
        self._sensor_value._log_values = value

    # @property
    # def persist_value(self):
    #     """
    #     Set to true if the current value should be saved to db when the Kervi application or module exits.
    #     The value will be restored upon application or module start. 
    #     """
    #     return self._sensor_value._persist_value

    # @persist_value.setter
    # def persist_value(self, do_persist):
    #     self._sensor_value.persist_value = do_persist

    def add_value_event(self, event_value, func, event_type=None, parameters=None, **kwargs):
        """
        Add a function that is called when the value reach or pass the event_value.

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
        self._sensor_value.add_value_event(event_value, func, event_type, parameters, **kwargs)
    
    def add_normal_range(self, value, message=None, func=None, **kwargs):
        self._sensor_value.add_value_event(value, self._sensor_value._handle_range_event, parameters=[message, func, 3], **kwargs)

    def add_warning_range(self, value, message=None, func=None, **kwargs):
        self._sensor_value.add_value_event(value, self._sensor_value._handle_range_event, event_type="warning", parameters=[message, func, 2], **kwargs)

    def add_error_range(self, value, message=None, func=None, **kwargs):
        self._sensor_value.add_value_event(value, self._sensor_value._handle_range_event, event_type="error", parameters=[message, func, 1], **kwargs)

    @property
    def delta(self):
        """
        Enter how much a the value should change before it triggers changes events and updates links.
        :type: ``float``
        """
        return self._sensor_value.delta

    @delta.setter
    def delta(self, value):
        self._sensor_value.delta = value

    @property
    def max(self):
        """
        Maximum value.

        :type: ``float``
        """
        return self._sensor_value.max_value

    @max.setter
    def max(self, value):
        self._sensor_value.max_value = value

    @property
    def min(self):
        """
        Minimum value.

        :type: ``float``
        """
        return self._sensor_value.min_value

    @min.setter
    def min(self, value):
        self._sensor_value.min_value = value

    @property
    def unit(self):
        """
        Metric Unit of value.

        :type: ``str``
        """
        return self._sensor_value.unit

    @unit.setter
    def unit(self, value):
        self._sensor_value.unit = value

    @property
    def display_unit(self):
        """
        Display unit of value.

        :type: ``str``
        """
        return self._sensor_value.display_unit

    @display_unit.setter
    def display_unit(self, value):
        self._sensor_value.display_unit = value
    

    def set_ui_parameter(self, name, value):
        self._sensor_value.set_ui_parameter(name, value)

class _SensorThread(KerviThread):
    r"""
    SensorThread is the base class that  polls sensors.
    Add one or more sensors and set polling interval.

    :param sensors:
            Id of the sensor.
            This id is used in other components to reference this sesnor.
    :type sensors: ``str``

    :param reading_interval:
            Polling interval in seconds between
    :type reading_interval: ``float``

    """

    def __init__(self, sensors, reading_interval=1):
        KerviThread.__init__(self)
        self.spine = Spine()
        if self.spine:
            self.spine.register_command_handler("startThreads", self._start_command)
            self.spine.register_command_handler("stopThreads", self._stop_command)
        self.alive = False
        self.reading_interval = reading_interval
        if hasattr(sensors, "__len__"):
            self.sensors = sensors
        else:
            self.sensors = [sensors]

    def new_sensor_reading(self, value, sensor_idx=0):
        self.sensors[sensor_idx]._new_sensor_reading(value)

    def _step(self):
        for sensor in self.sensors:
            sensor._read_sensor()
        self.sensor_step()
        time.sleep(self.reading_interval)

    def sensor_step(self):
        pass

    def _start_command(self):
        if not self.alive:
            self.alive = True
            KerviThread.start(self)

    def _stop_command(self):
        if self.alive:
            self.alive = False
            self.stop()


