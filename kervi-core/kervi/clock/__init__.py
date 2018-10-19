#Copyright 2018 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

import time
import datetime
import threading
from kervi.values import DateTimeValue
from kervi.controllers import Controller

class _ClockThread(threading.Thread):
    def __init__(self, controller, tick_time=1):
        threading.Thread.__init__(self)
        self.deamon = True
        self._controller = controller
        self._terminate = False
        self._tick_time = tick_time

    def terminate(self):
        self._terminate = True

    def run(self):
        while not self._terminate:
            self._controller.tick()
            time.sleep(self._tick_time)

class Clock(Controller):
    def __init__(self):
        Controller.__init__(self,"clock", "Clock")

        self.date = self.outputs.add("date", "Date", DateTimeValue)
        self.time = self.outputs.add("time", "Time", DateTimeValue)

    def _tick(self):
        now = datetime.datetime.utcnow()
        self.time.value = now
        if self.date.value != now:
            self.date.value = now