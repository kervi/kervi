# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

"""
Sensor handling in Kervi is split in two parts. 
The first part is sensor device drivers that handles physical access to a sensors hardware.
The second part is the Sensor class that reads a sensor devices and triggers events, store readings to DB.
"""

from datetime import datetime
import time
from kervi.utility.thread import KerviThread
from kervi.spine import Spine
from kervi.utility.component import KerviComponent
from kervi.settings import Settings

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
            Name of the sensor. Used in web dashbaords
    :type name: ``str``

    :param device:
        The sensor device that should be monitored. Could be one of the sensors from the kervi device library
        or a sensor device driver that inherits from kervi.hal.SensorDeviceDriver
    :type device: ``SensorDeviceDriver``

    

    """
    def __init__(self, sensor_id, name, device=None, use_thread=True):
        KerviComponent.__init__(self, sensor_id, "sensor", name)
        self._device = device

        self._type = None
        self._max = None
        self._min = None
        self._unit = None

        if self._device:
            self._type = self._device.type
            self._unit = self._device.unit
            self._min = self._device.min
            self._max = self._device.max
            self._dimensions = self._device.dimensions

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
            "label": self.name,
            "label_icon": None,
            "inline": False
        }
        if use_thread:
            self._sensor_thread = _SensorThread(self, 1)
        else:
            self._sensor_thread = None

        self.spine.register_query_handler("getSensorValue", self._query_value)

    @property
    def reading_interval(self):
        return self._sensor_thread.reading_interval

    @reading_interval.setter
    def reading_interval(self, interval):
        self._sensor_thread.reading_interval = interval

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

    @property
    def sensor_id(self):
        return self.component_id

    @property
    def device(self):
        """A hardware device from the kervi device library. Or a class that inherits from kervi.hal.SensorDeviceDriver"""
        return self._device

    @device.setter
    def device(self, device):
        self._device = device

    def _query_value(self, id):
        if self.component_id == id:
            return self._old_val

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
        elif self._dimensions == 1:
            if value >= self._old_val + self.delta:
                return True
            elif value <= self._old_val - self.delta:
                return True
            else:
                return False
        else:
            old = list(self._old_val)
            new = list(value)
            for dim in range(0, self._dimensions - 1):
                if new[dim] >= old[dim] + self.delta:
                    return True
                elif new[dim] <= old[dim] - self.delta:
                    return True
            return False

    def _new_sensor_reading(self, value):
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
            if self.persist_to_db:
                self.spine.send_command("StoreSensorValue", val)
            self.spine.trigger_event("NewSensorReading", self.component_id, val)

            if len(self._sparkline) == 0:
                self._sparkline += [value]
            elif len(self._sparkline) >= 10:
                self._sparkline.pop(0)
            self._sparkline += [value]
            self._last_reading = time.clock()
            self._send_messages(self._old_val, value)
            self._old_val = value

    def _read_sensor(self):
        self._new_sensor_reading(self._device.read_value())

    def _send_messages(self, old_val, value):
        if old_val == None:
            return
        if self.lower_fatal_message:
            if old_val > self.lower_fatal_limit and value <= self.lower_fatal_limit:
                self.user_log_message(self.lower_fatal_message, level = 1)

        if self.lower_warning_message:
            if self.lower_fatal_limit and self.lower_warning_limit:
                if old_val < self.lower_fatal_limit and value >= self.lower_fatal_limit:
                    self.user_log_message(self.lower_warning_message, level=2)

                elif old_val > self.lower_warning_limit and value <= self.lower_warning_limit:
                    self.user_log_message(self.lower_warning_message, level=2)

            elif self.lower_warning_limit:
                if old_val > self.lower_warning_limit and value <= self.lower_warning_limit:
                    self.user_log_message(self.lower_warning_message, level = 2)


        if self.upper_fatal_message:
            if old_val < self.upper_fatal_limit and value >= self.upper_fatal_limit:
                self.user_log_message(self.upper_fatal_message, level = 1)

        if self.upper_warning_message:
            if self.upper_fatal_limit and self.upper_warning_limit:
                if old_val > self.upper_fatal_limit and value <= self.upper_fatal_limit:
                    self.user_log_message(self.upper_warning_message, level=2)
                elif old_val < self.upper_warning_limit and value >= self.upper_warning_limit:
                    self.user_log_message(self.upper_warning_message, level=2)


            elif self.upper_warning_limit:
                if old_val < self.upper_warning_limit and value >= self.upper_warning_limit:
                    self.user_log_message(self.upper_warning_message, level = 2)
        
        if self.normal_message:
            if self.upper_warning_limit:
                if old_val >= self.upper_warning_limit and value < self.upper_warning_limit and value:
                     self.user_log_message(self.normal_message, level = 3)
            elif self.upper_fatal_limit:
                if old_val >= self.upper_fatal_limit and value < self.upper_fatal_limit and value:
                     self.user_log_message(self.normal_message, level = 3)
            
            if self.lower_warning_limit:
                if old_val <= self.lower_warning_limit and value > self.lower_warning_limit and value:
                     self.user_log_message(self.normal_message, level = 3)
            elif self.lower_fatal_limit:
                if old_val <= self.lower_fatal_limit and value > self.lower_fatal_limit and value:
                     self.user_log_message(self.normal_message, level = 3)

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
