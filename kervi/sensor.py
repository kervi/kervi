# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
from datetime import datetime
import time
from kervi.utility.thread import KerviThread
from kervi.spine import Spine
from kervi.utility.component import KerviComponent

class Sensor(KerviComponent):
    def __init__(self, sensor_id, name):
        KerviComponent.__init__(self, sensor_id, "sensor", name)
        self.type = None
        self.max = None
        self.min = None
        self.unit = None
        self.reading_interval = .5
        self.upper_fatal_limit = None
        self.upper_warning_limit = None
        self.lower_warning_limit = None
        self.lower_fatal_limit = None
        self.store_settings = {"delta":1, "interval":60, "active":True}
        self.old_val = None
        self.last_reading = None
        self.sparkline = []
        print "sensor created", self.component_id

    def add_to_dashboard(self, dashboard_id, section_id, **kwargs):
        KerviComponent.add_to_dashboard(
            self,
            dashboard_id,
            section_id,
            {
                "size": kwargs.get("ui_size", 1),
                "type": kwargs.get("ui_type", "value"),
                "showSparkline": kwargs.get("ui_show_sparkline", True),
                "addToHeader":kwargs.get("add_to_header", False)
            })

    def _get_info(self):
        return {
            "type":self.type,
            "max":self.max,
            "min":self.min,
            "unit":self.unit,
            "readingInterval":self.reading_interval,
            "value":self.old_val,
            "upperFatalLimit":self.upper_fatal_limit,
            "upperWarningLimit":self.upper_warning_limit,
            "lowerWarningLimit":self.lower_warning_limit,
            "lowerFatalLimit":self.lower_fatal_limit,
            "sparkline":self.sparkline
        }

    def __delta_exceeded(self, value):
        if value is None:
            return False
        elif self.old_val is None:
            return True
        elif value >= self.old_val + self.store_settings["delta"]:
            return True
        elif value <= self.old_val - self.store_settings["delta"]:
            return True
        else:
            return False

    def new_sensor_reading(self, value):
        if self.__delta_exceeded(value):
            self.spine.log.debug(
                "delta exceeded:{0} value:{1}, old value:{2}",
                self.component_id,
                value,
                self.old_val
            )
            timestamp = (datetime.utcnow() - datetime(1970, 1, 1)).total_seconds()
            val = {"sensor":self.component_id, "value":value, "timestamp":timestamp}
            if self.store_settings["active"]:
                self.spine.send_command("StoreSensorValue", val)
            self.spine.trigger_event("NewSensorReading", self.component_id, val)
            self.old_val = value
            if len(self.sparkline) == 0:
                self.sparkline += [value]
            elif len(self.sparkline) >= 10:
                self.sparkline.pop(0)
            self.sparkline += [value]
            self.last_reading = time.clock()

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
