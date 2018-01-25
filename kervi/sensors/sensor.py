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

    All the possibilities for linking to other dynamic values and dashboards are inherited from DynamicNumber.

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
        DynamicNumber.__init__(self, name, value_id=sensor_id, is_input=False, **kwargs)
        self._device = device
        self._component_type = "sensor"
        self._type = None
        self._sub_sensors = []
        self._dimensions = 1
        if self._device:
            self._type = self._device.type
            self.unit = self._device.unit
            self.min = self._device.min
            self.max = self._device.max
            self._dimensions = self._device.dimensions
            self._dimension_labels = self._device.dimension_labels
            if self._dimensions > 1:
                count = 0
                for label in self._dimension_labels:
                    sub_sensor = Sensor(
                            self.component_id + "." + label,
                            label,
                            use_thread=False,
                            parent=self,
                            index=count,
                            **kwargs
                        )
                    sub_sensor.unit = self.unit
                    self._sub_sensors += [
                        sub_sensor
                    ]
                    count += 1

        self._ui_parameters["type"] = "value"
        self._ui_parameters["show_value"] = True
        self._ui_parameters["show_sparkline"] = True
        if kwargs.get("use_thread", True):
            self._sensor_thread = _SensorThread(self, kwargs.get("polling_interval", 1))
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

        KerviComponent.link_to_dashboard(self, dashboard_id, panel_id, **kwargs)

    def _get_info(self, **kwargs):
        dimensions = []
        if self._dimensions > 1:
            for dimension in range(0, self._dimensions):
                dimensions += [self._sub_sensors[dimension]._get_component_info()]
        return {
            "type":self.type,
            "subSensors": dimensions,
            "isInput": False,
            "maxValue":self.max,
            "minValue":self.min,
            "unit":self.unit,
            "value":self._value,
            "ranges":self._event_ranges,
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
