from kervi.sensor import Sensor, SensorThread
import threading
import time

class AliveSensor (Sensor):
    def __init__(self ):
        Sensor.__init__(self)
        self.id = "AliveSensor"
        self.name="Alive sensor"
        self.type = "counter"
        self.max = 1000000
        self.min = 0
        self.unit = ""
        self.storeSettings["active"] = False
        self.tick = 0
        
    def readSensor(self):
        self.tick+=1
        self.newSensorReading(self.tick)

t=SensorThread(AliveSensor())

t.start()