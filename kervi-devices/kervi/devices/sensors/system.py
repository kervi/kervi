# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Module that defines core cpu sensors """

from kervi.hal import SensorDeviceDriver, HAL_DRIVER_ID
import psutil

class CPUTempSensorDeviceDriver(SensorDeviceDriver):
    """ Sensor that mesures cpu temp on host """
    def __init__(self):
        SensorDeviceDriver.__init__(self)

    def read_value(self):
        if HAL_DRIVER_ID == "kervi.platforms.raspberry":
            return int(open('/sys/class/thermal/thermal_zone0/temp').read()) / 1e3
        return 0

    @property
    def max(self):
        return 150

    @property
    def min(self):
        return 0

    @property
    def type(self):
        return "temperature"

    @property
    def unit(self):
        return "c"


class CPULoadSensorDeviceDriver(SensorDeviceDriver):
    """ Sensor that mesures cpu load on host """
    def __init__(self):
        psutil.cpu_percent()

    def read_value(self):
        return psutil.cpu_percent()

    @property
    def max(self):
        return 100

    @property
    def min(self):
        return 0

    @property
    def type(self):
        return "cpu_use"

    @property
    def unit(self):
        return "%"


class DiskUseSensorDeviceDriver(SensorDeviceDriver):
    """ Sensor that mesures disk use """
    def __init__(self):
        psutil.disk_usage('/').percent

    def read_value(self):
        return psutil.disk_usage('/').percent

    @property
    def type(self):
        return "diskuse"

    @property
    def unit(self):
        return "%"

    @property
    def max(self):
        return 100

    @property
    def min(self):
        return 0


class MemoryUseSensorDeviceDriver(SensorDeviceDriver):
    """ Sensor that mesures memory use """
    def __init__(self):
        try:
            percent = psutil.virtual_memory().percent
        except:
            percent = psutil.phymem_usage().percent

    def read_value(self):
        try:
            percent = psutil.virtual_memory().percent
        except:
            percent = psutil.phymem_usage().percent
        return percent

    @property
    def type(self):
        return "memory_use"

    @property
    def unit(self):
        return "%"

    @property
    def max(self):
        return 100

    @property
    def min(self):
        return 0
