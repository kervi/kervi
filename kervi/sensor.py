# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

"""
Sensors in Kervi applications are handled via the classes Sensor and SensorThread.
Create a new sensor by inheriting from the sensor class. 
"""

from datetime import datetime
import time
from kervi.utility.thread import KerviThread
from kervi.spine import Spine
from kervi.utility.component import KerviComponent

class Sensor(KerviComponent):
    """
    Create a Sensor by inherit from Sensor

    *Properties*:
    """
    def __init__(self, sensor_id, name):
        KerviComponent.__init__(self, sensor_id, "sensor", name)
        self.type = None
        #:Maximum value the sensor may mesaure.
        self.max = None
        #:Minimum value the sensor may mesaure.
        self.min = None
        #:mesauring unit for value.
        self.unit = None
        self.reading_interval = .5

        #:If set the sensor will trigger an event *sensorUpperFatal* if the value pases this limit.
        #:When the sensor is displayed on a dashboard the zone from upper_fatal_limit to max is marked red.
        self.upper_fatal_limit = None
        #:If set the sensor will trigger an event *sensorUpperWarning* if the value pases this limit.
        #:When the sensor is displayed on a dashboard the zone from upper_warning_limit
        #:to upper_fatal_limit or max is marked yellow.
        self.upper_warning_limit = None
        #:If set the sensor will trigger an event *sensorLowerWarning*
        #:if the value pases this limit from a higher previus value.
        #:When the sensor is displayed on a dashboard
        #:the zone from min or lower_fatal_limit to lower_warning_limit is marked yellow.
        self.lower_warning_limit = None
        #:If set the sensor will trigger an event *sensorLowerFatal*
        #:if the value pases this limit from a higher previus value.
        #:When the sensor is displayed on a dashboard
        #:the zone from min to lower_fatal_limit is marked red.
        self.lower_fatal_limit = None
        self.store_settings = {"delta":1, "interval":60, "active":True}
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
        }

    # def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
    #     result = self._ui_parameters
    #     return KerviComponent.link_to_dashboard(
    #         self,
    #         dashboard_id,
    #         section_id,
    #         {
    #             "size": kwargs.get("ui_size", self.ui_parameters["size"]),
    #             "type": kwargs.get("ui_type", self.ui_parameters["type"]),
    #             "chartPoints": kwargs.get("ui_chart_points", self.ui_parameters["chart_points"]),
    #             "showSparkline": kwargs.get("ui_show_sparkline", self.ui_parameters["show_sparkline"]),
    #             "addToHeader":kwargs.get("ui_link_to_header", self.ui_parameters["link_to_header"]),
    #             "icon":kwargs.get("ui_icon", self.ui_parameters["icon"]),
    #             "flat":kwargs.get("ui_flat", self.ui_parameters["flat"]),
    #             "showValue":kwargs.get("ui_show_value", self.ui_parameters["show_value"]),
    #         })

    def _get_info(self):
        return {
            "type":self.type,
            "max":self.max,
            "min":self.min,
            "unit":self.unit,
            "readingInterval":self.reading_interval,
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
        elif value >= self._old_val + self.store_settings["delta"]:
            return True
        elif value <= self._old_val - self.store_settings["delta"]:
            return True
        else:
            return False

    def new_sensor_reading(self, value):
        if self.__delta_exceeded(value):
            self.spine.log.debug(
                "delta exceeded:{0} value:{1}, old value:{2}",
                self.component_id,
                value,
                self._old_val
            )
            timestamp = (datetime.utcnow() - datetime(1970, 1, 1)).total_seconds()
            val = {"sensor":self.component_id, "value":value, "timestamp":timestamp}
            if self.store_settings["active"]:
                self.spine.send_command("StoreSensorValue", val)
            self.spine.trigger_event("NewSensorReading", self.component_id, val)
            self._old_val = value
            if len(self._sparkline) == 0:
                self._sparkline += [value]
            elif len(self._sparkline) >= 10:
                self._sparkline.pop(0)
            self._sparkline += [value]
            self._last_reading = time.clock()

    def read_sensor(self):
        pass

class SensorThread(KerviThread):
    """ Thread that handles polling of one or more sensors """
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
            sensor.read_sensor()

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
