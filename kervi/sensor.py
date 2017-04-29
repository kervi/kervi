# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

"""
Sensor handling in Kervi is split in two parts. 
The first part is sensor device drivers that handles physical access to sensor hardware.
The second part is the Sensor class that reads a sensor device and triggers events, store readings to DB.
"""

import time
from kervi.utility.thread import KerviThread
from kervi.spine import Spine
from kervi.utility.component import KerviComponent
from kervi.values import DynamicNumber
#from kervi.settings import Settings

class Sensor(DynamicNumber):
    r"""
    Sensor is a class that exposes a sensor device as a dynamic value.
    The Sensor class polls the associated sensor device and updates it self when
    the value of the sensor device change.

    All the possibilities for linking to other dynamic values and dashboards is inherit from DynamicNumber.

    Some sensor devices are multi dimensional and each dimension are reached by a numeric index of the sensor it self.

    :param sensor_id:
            Id of the sensor.
            This id is used in other components to reference this sesnor.
    :type sensor_id: ``str``

    :param name:
            Name of the sensor. Used in web dashboards
    :type name: ``str``

    :param device:
        The sensor device that should be monitored. Could be one of the sensors from the kervi device library
        or a sensor device driver that inherits from kervi.hal.SensorDeviceDriver
    :type device: ``SensorDeviceDriver``

    :param polling_interval:
        Polling interval in seconds. Set to zero to disable polling.        
    :type device: ``float``

    (self, name, input_id=None, is_input=True, parent=None, index = None):

    """
    def __init__(self, sensor_id, name, device=None, use_thread=True, parent=None, index=None, polling_interval=1):
        DynamicNumber.__init__(self, name, sensor_id, False, parent, index)
        self._device = device
        self._component_type = "sensor"
        self._type = None
        self._sub_sensors = []
        self._dimensions = 1
        if self._device:
            self._type = self._device.type
            self._unit = self._device.unit
            self._min = self._device.min
            self._max = self._device.max
            self._dimensions = self._device.dimensions
            self._dimension_labels = self._device.dimension_labels
            if self._dimensions > 1:
                count = 0
                for label in self._dimension_labels:
                    self._sub_sensors += [
                        Sensor(
                            self.component_id + "." + label,
                            label,
                            use_thread=False,
                            parent=self,
                            index=count
                        )
                    ]
                    count += 1

        self._save_to_db = True
        self._ui_parameters["type"] = "value"
        self._ui_parameters["show_value"] = True
        self._ui_parameters["show_sparkline"] = True
        if use_thread:
            self._sensor_thread = _SensorThread(self, polling_interval)
        else:
            self._sensor_thread = None

    def __getitem__(self, sub_sensor):
        if self._dimensions == 1:
            return self
        return self._sub_sensors[sub_sensor]

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
    def type(self):
        """
        Sensor type enter values like temperature, pressure, counter.

        :type: ``str``
        """
        return self._type

    @type.setter
    def type(self, value):
        self._type = value

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

    def link_to_dashboard(self, dashboard_id, panel_id, **kwargs):
        r"""
        Links the sensor to a dashboard.

        :param dashboard_id: Id of the dashboard to link to.
                Enter a * if the sensor should be linked to all dashboards.
        :type dashboard_id: ``str``

        :param panel_id:  Id of the panel to link to.
                This is the id of a panel you have added your self to a dashboard or one of the
                system panels *sys-header*, *header* or *footer*
        :type panel_id: ``str``

        :param \**kwargs:
                See below

        :Keyword Arguments:
            :Keyword Arguments:
            * *size* (``int``) -- The number of dashboard cells the sensor should occupy horizontal or vertical.
                If size is 0 (default) the input and label will expand to the width of the panel.

            * *link_to_header* (``str``) -- Link this input to header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label. 
                All Font Awesome icons are valid just enter the name of the icon without *fa-*

            * *label* (``str``) -- Label text, default value is the name of the sensor.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display value, sparkline and label in its actual size
                If you set inline to true the size parameter is ignored.
                The input will only occupy as much space as the label and sensor takes.

            * *type* (``str``) -- One of the following values *radial_gauge*, *vertical_gauge*, *horizontal_gauge*, *chart* or *value*.

            * *chart_points* (``int``) -- Maximun number of points in the chart.

            * *show_sparkline* (``bool``) -- Show a sparkline next to the value.

            * *icon* (``bool``) -- Icon to show. All Font Awesome icons are valid just enter the name of the icon without *fa-*.

            * *show_value* (``bool``) -- Show the numeric value and unit.

            * *label* (``bool``) -- Show the numeric value and unit.
        """

        KerviComponent.link_to_dashboard(self, dashboard_id, panel_id, **kwargs)

    def _get_info(self):
        dimensions = []
        if self._dimensions > 1:
            for dimension in range(0, self._dimensions):
                dimensions += [self._sub_sensors[dimension]._get_component_info()]
        return {
            "type":self.type,
            "max":self.max,
            "min":self.min,
            "unit":self.unit,
            "value":self._value,
            "ranges":self.event_ranges,
            "subSensors": dimensions,
            "sparkline":self._sparkline
        }

    def _new_sensor_reading(self, sensor_value):
        """
        Call this method to signal a new sensor reading.
        This method handles DB storage and triggers different events.

        :param value:
            New value to be stored in the system.

        :type value: ``float``

        """
        if self._dimensions > 1:
            for dimension in range(0, self._dimensions):
                value = sensor_value[dimension]
                self._sub_sensors[dimension]._new_sensor_reading(value)
        else:
            self._set_value(sensor_value)

    def _read_sensor(self):
        self._new_sensor_reading(self._device.read_value())

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
