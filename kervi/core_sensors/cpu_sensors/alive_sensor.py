# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Sensor that once every second sends a signal that is monitored by the UI """

from kervi.sensor import Sensor, SensorThread
#import threading
#import time

class AliveSensor(Sensor):
    """ Sensor that once every second sends a signal that is monitored by the UI """
    def __init__(self):
        Sensor.__init__(self, "AliveSensor", "Alive sensor")
        self.type = "counter"
        self.max = 1000000
        self.min = 0
        self.unit = ""
        self.store_settings["active"] = False
        self.tick = 0

    def read_sensor(self):
        self.tick += 1
        self.new_sensor_reading(self.tick)

SENSOR_THREAD = SensorThread(AliveSensor())

SENSOR_THREAD.start()
