from kervi.sensor import Sensor, SensorThread
import psutil

class CPULoadSensor (Sensor):
    def __init__(self ):
        Sensor.__init__(self)
        self.id = "CPULoadSensor"
        self.name = "CPU Load"
        self.type = "cpu"
        self.readingInterval = 1
        self.max = 1000000
        self.min = 0
        self.unit = "%"
        self.storeSettings["active"] = False
        self.dashboards = ["cpu"]
        psutil.cpu_percent()
    



class MemUseSensor (Sensor):
    def __init__(self ):
        Sensor.__init__(self)
        self.id = "MemUse"
        self.name = "Memory use"
        self.type = "memory"
        self.readingInterval = 1
        self.max = 1000000
        self.min = 0
        self.unit = "%"
        self.storeSettings["active"] = False
        self.storeSettings["delta"] = 0.01
        self.dashboards = ["cpu"]

        try:
            percent = psutil.virtual_memory().percent
        except:
            percent = psutil.phymem_usage().percent
        self.value=percent
        

class CPUThread(SensorThread):
    def sensorStep(self):
        self.newSensorReading(psutil.cpu_percent())

        try:
            percent = psutil.virtual_memory().percent
        except:
            percent = psutil.phymem_usage().percent
        self.newSensorReading(percent,1)

t=CPUThread([CPULoadSensor(),MemUseSensor()])
t.start()