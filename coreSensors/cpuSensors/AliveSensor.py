from kervi.sensor import SensorThread
import threading
import time
		
class AliveSensor (SensorThread):
    def __init__(self ):
        SensorThread.__init__(self)
        self.id = "AliveSensor"
        self.type = "counter"
        self.readingInterval = 1
        self.max = 1000000
        self.min = 0
        self.unit = ""
        self.storeSettings["active"] = False
        self.tick = 0

    def sensorStep(self):
        self.tick+=1
        self.newSensorReading(self.tick)

t=AliveSensor()
t.start()