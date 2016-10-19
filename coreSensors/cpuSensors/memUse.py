from kervi.sensor import SensorThread
import psutil
		
class MemUseSensor (SensorThread):
    def __init__(self ):
        SensorThread.__init__(self)
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

    def sensorStep(self):
        try:
            percent = psutil.virtual_memory().percent
        except:
            percent = psutil.phymem_usage().percent
        self.newSensorReading(percent)
        
t=MemUseSensor()
t.start()
		
