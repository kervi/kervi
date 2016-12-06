# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" CQRS handles in process communication """

from kervi.sensor import Sensor, SensorThread
#import threading
#import time

class AliveSensor(Sensor):
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

sensor_thread = SensorThread(AliveSensor())

sensor_thread.start()
