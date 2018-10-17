# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Module that defines core cpu sensors """

from kervi.sensors import Sensor
from kervi.devices.sensors.system import CPULoadSensorDeviceDriver
from kervi.devices.sensors.system import MemoryUseSensorDeviceDriver
from kervi.devices.sensors.system import DiskUseSensorDeviceDriver
from kervi.devices.sensors.system import CPUTempSensorDeviceDriver

CPU_SENSOR = Sensor("CPULoadSensor","CPU", CPULoadSensorDeviceDriver())
CPU_SENSOR.store_to_db = False
CPU_SENSOR.link_to_dashboard("*", "header_right")
CPU_SENSOR.link_to_dashboard("system", "cpu", type="value", link_to_header=True)
CPU_SENSOR.link_to_dashboard("system", "cpu", type="chart")

MEM_SENSOR = Sensor("MemLoadSensor", "Memory",MemoryUseSensorDeviceDriver())
MEM_SENSOR.store_to_db = False
MEM_SENSOR.link_to_dashboard("*", "header_right")
MEM_SENSOR.link_to_dashboard("system", "memory", type="value", link_to_header=True)
MEM_SENSOR.link_to_dashboard("system", "memory", type="chart")

DISK_SENSOR = Sensor("DiskUseSensor", "Disk", DiskUseSensorDeviceDriver())
DISK_SENSOR.store_to_db = False
DISK_SENSOR.link_to_dashboard("system", "disk", type="vertical_linear_gauge")

#build in sensor that measures cpu temperature
SENSOR_CPU_TEMP = Sensor("CPUTempSensor", "CPU T", CPUTempSensorDeviceDriver())
#link to sys area top right
SENSOR_CPU_TEMP.link_to_dashboard("*", "header_right")