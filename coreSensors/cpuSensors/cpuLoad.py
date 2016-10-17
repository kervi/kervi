from kervi.sensor import SensorThread
import psutil

class CPULoadSensor (SensorThread):
    def __init__(self ):
        SensorThread.__init__(self)
        self.id = "CPULoadSensor"
        self.name = "CPU Load"
        self.type = "cpu"
        self.readingInterval = 1
        self.max = 1000000
        self.min = 0
        self.unit = "%"
        self.storeSettings["active"] = False
        self.location = ["cpu"]
        psutil.cpu_percent()

    def sensorStep(self):
        self.newSensorReading(psutil.cpu_percent())

t=CPULoadSensor()
t.start()