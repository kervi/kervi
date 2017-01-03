# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Module that defines core cpu sensors """

from kervi.sensor import Sensor, SensorThread
import psutil

class CPULoadSensor(Sensor):
    """ Sensor that mesures cpu load on host """
    def __init__(self):
        Sensor.__init__(self, "CPULoadSensor", "CPU")
        self.type = "cpu"
        self.reading_interval = 1
        self.max = 1000000
        self.min = 0
        self.unit = "%"
        self.store_settings["active"] = False
        self.add_to_dashboard("*", "sys-header")
        psutil.cpu_percent()

class MemUseSensor(Sensor):
    """ Sensor that mesures memory use """
    def __init__(self):
        Sensor.__init__(self, "MemUse", "Memory")
        self.type = "memory"
        self.reading_interval = 1
        self.max = 1000000
        self.min = 0
        self.unit = "%"
        self.store_settings["active"] = False
        self.store_settings["delta"] = 0.01
        self.add_to_dashboard("*", "sys-header")

        try:
            percent = psutil.virtual_memory().percent
        except:
            percent = psutil.phymem_usage().percent
        self.value = percent

class CPUThread(SensorThread):
    def sensor_step(self):
        self.new_sensor_reading(psutil.cpu_percent())
        try:
            percent = psutil.virtual_memory().percent
        except:
            percent = psutil.phymem_usage().percent
        self.new_sensor_reading(percent, 1)

CPU_THREAD = CPUThread([CPULoadSensor(), MemUseSensor()])
#CPU_THREAD.start()
