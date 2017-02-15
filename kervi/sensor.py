# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

"""
Sensors in Kervi applications are handled via the classes Sensor and SensorThread. 
The sensor handles sensor settings and reading the values and sensor threads polls the sensor.
"""

from datetime import datetime
import time
from kervi.utility.thread import KerviThread
from kervi.spine import Spine
from kervi.utility.component import KerviComponent

class Sensor(KerviComponent):
    r"""
    Sensor is the base class that all sensors inherits from.
    This class handles storage in DB, trigger events when value change
    and linking to dashboards.

    :param sensor_id:
            Id of the sensor.
            This id is used in other components to reference this sesnor.
    :type sensor_id: ``str``

    :param name:
            Name of the sensor. User in UI
    :type name: ``str``

    :param \**kwargs:
            See below

    :Keyword Arguments:
        * *title* (``str``) -- Title of the section.
        * *columns* (``int``) -- Number of columns in this section, default is 1.
        * *rows* (``int``) -- Number of rows in this section, default is 1.
        * *add_user_log* (``bool``) -- This section shows user log messages.
    """
    def __init__(self, sensor_id, name, device=None):
        KerviComponent.__init__(self, sensor_id, "sensor", name)
        self._device = device

        self._type = None
        self._max = None
        self._min = None
        self._unit = None

        if self._device:
            self._type = self._device.type
            self._unit = self._device.unit

        self._upper_fatal_limit = None
        self._upper_warning_limit = None
        self._lower_warning_limit = None
        self._lower_fatal_limit = None
        self._store_delta = 1
        self._save_to_db = True
        self._old_val = None
        self._last_reading = None
        self._sparkline = []
        self._ui_parameters = {
            "size": 1,
            "type": "value",
            "chart_points": 60,
            "show_sparkline": True,
            "link_to_header": False,
            "icon": None,
            "flat": False,
            "show_value": True,
            "show_name": True
        }

    @property
    def save_to_db(self):
        """
        If true the method new_sensor_reading
        will save the sensor reading to DB.

        :type: ``bool``
        """
        return self._save_to_db

    @save_to_db.setter
    def save_to_db(self, value):
        self._save_to_db = value

    @property
    def store_delta(self):
        """
        Enter how much a sensor value should change between readings before
        the method new_sensor_reading triggers db saving and send events.

        :type: ``float``
        """
        return self._store_delta

    @store_delta.setter
    def store_delta(self, value):
        self._store_delta = value

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
    def max(self):
        """
        Maximum value the sensor may mesaure.

        :type: ``float``
        """
        return self._max

    @max.setter
    def max(self, value):
        self._max = value

    @property
    def min(self):
        """
        Minimum value the sensor may mesaure.

        :type: ``float``
        """
        return self._min

    @min.setter
    def min(self, value):
        self._min = value

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

    @upper_fatal_limit.setter
    def upper_fatal_limit(self, value):
        self._upper_fatal_limit = value

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
    def device(self):
        """A hardware device from the kervi device library."""
        return self._device

    @device.setter
    def device(self, device):
        self._device = device

    
    
    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links the sensor to a dashboard.

        :param dashboard_id:
                Id of the dashboard to link to.
                Enter a * if the sensor should be linked to all dashboards.
        :type dashboard_id: ``str``

        :param section_id:
                Id of the section to link to.
                This is the id of a section you have added your self to a dashboard or one of the
                system sections *sys-header*, *header* or *footer*
        :type section_id: ``str``

        :param \**kwargs:
                See below

        :Keyword Arguments:
            * *size* (``int``) -- How many cells should the sensor occupy in the dashboard section.
                The actual size depends on the *type* a radia gauge of size 2 fills 2*2 cells.
                A vertical gauge is 2 cells heigh and 1 cell wide. 
                If size is 0 it will be as wide as the section.  
            * *type* (``str``) -- One of the following values *radial_gauge*, *vertical_gauge*, *horizontal_gauge*, *chart* or *value*.
            * *chart_points* (``int``) -- Maximun number of points in the chart.
            * *show_sparkline* (``bool``) -- Show a sparkline next to the value.
            * *add_to_header* (``bool``) -- Place the sensor in the header of the section.
            * *icon* (``bool``) -- Icon to show. All Font Awesome icons are valid just enter the name of the icon without *fa-*.
            * *flat* (``bool``) -- Shows the sensor with out any 3d effect.
            * *show_value* (``bool``) -- Show the numeric value and unit.
        """

        KerviComponent.link_to_dashboard(self, dashboard_id, section_id, **kwargs)

    def _get_info(self):
        return {
            "type":self.type,
            "max":self.max,
            "min":self.min,
            "unit":self.unit,
            "value":self._old_val,
            "upperFatalLimit":self.upper_fatal_limit,
            "upperWarningLimit":self.upper_warning_limit,
            "lowerWarningLimit":self.lower_warning_limit,
            "lowerFatalLimit":self.lower_fatal_limit,
            "sparkline":self._sparkline
        }

    def __delta_exceeded(self, value):
        if value is None:
            return False
        elif self._old_val is None:
            return True
        elif value >= self._old_val + self.store_delta:
            return True
        elif value <= self._old_val - self.store_delta:
            return True
        else:
            return False

    def new_sensor_reading(self, value):
        """
        Call this method to signal a new sensor reading.
        This method handles DB storage and triggers different events.

        :param value:
            New value to be stored in the system.

        :type value: ``float``

        """
        if self.__delta_exceeded(value):
            self.spine.log.debug(
                "delta exceeded:{0} value:{1}, old value:{2}",
                self.component_id,
                value,
                self._old_val
            )
            timestamp = (datetime.utcnow() - datetime(1970, 1, 1)).total_seconds()
            val = {"sensor":self.component_id, "value":value, "timestamp":timestamp}
            if self.save_to_db:
                self.spine.send_command("StoreSensorValue", val)
            self.spine.trigger_event("NewSensorReading", self.component_id, val)
            self._old_val = value
            if len(self._sparkline) == 0:
                self._sparkline += [value]
            elif len(self._sparkline) >= 10:
                self._sparkline.pop(0)
            self._sparkline += [value]
            self._last_reading = time.clock()

    
    def _read_sensor(self):
        if self._device == None:
            self.read_sensor()
        else:
            self.new_sensor_reading(self._device.read_value())
    
    def read_sensor(self):
        """
            Abstract method that must be implementd if no device is set.
            This method is called by the sensor thread on regular intervals.

            There is no need to implement own polling systems or call time.sleep this
            is handles by the calling sensor thread.

            Use the method new_sensor_reading to store the value.
        """
        pass

class SensorThread(KerviThread):
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
        self.sensors[sensor_idx].new_sensor_reading(value)

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
