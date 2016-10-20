from kervi.utility.kerviThread import KerviThread
from kervi.spine import Spine
from datetime import datetime
import time


class Sensor(object):
    def __init__(self):
        self.spine=Spine()
        self.spine.registerQueryHandler("getSensorInfo", self.handleGetSensorInfo)
        self.id = "not set"
        self.type = None
        self.max = None
        self.min = None
        self.unit = None
        self.readingInterval = .5
        self.upperFatalLimit = None
        self.upperWarningLimit = None
        self.lowerWarningLimit = None
        self.lowerFatalLimit = None
        self.storeSettings = {"delta":1, "interval":60, "active":True}
        self.oldVal = None
        self.lastReading = None
        self.sparkline = []
        self.dashboards = ["global"]
	
    def handleGetSensorInfo(self, *args, **kwargs):
        return {
            "name":self.name,
            "id":self.id,
            "type":self.type,
            "max":self.max,
            "min":self.min,
            "unit":self.unit,
            "readingInterval":self.readingInterval,
            "value":self.oldVal,
            "upperFatalLimit":self.upperFatalLimit,
            "upperWarningLimit":self.upperWarningLimit,
            "lowerWarningLimit":self.lowerWarningLimit,
            "lowerFatalLimit":self.lowerFatalLimit,
            "sparkline":self.sparkline,
            "dashboards":self.dashboards
        }

    def deltaExceeded(self,value):
        if value is None:
            return False
        elif self.oldVal is None:
            return True
        elif value  >= self.oldVal + self.storeSettings["delta"]:
            return True
        elif value <= self.oldVal - self.storeSettings["delta"]:
            return True
        else:
            return False

    def newSensorReading(self,value):
        if (self.deltaExceeded(value)):
            if not  self.id == "AliveSensor":
                self.spine.log.debug("delta exceeded:{0} value:{1}, old value:{2}",self.id, value, self.oldVal)
            timestamp = (datetime.utcnow() - datetime(1970, 1, 1)).total_seconds()
            v={"sensor":self.id,"value":value,"timestamp":timestamp}
            if self.storeSettings["active"]:
                self.spine.sendCommand("StoreSensorValue",v)
            self.spine.triggerEvent("NewSensorReading",self.id,v)	
            self.oldVal=value
            if len(self.sparkline)==0:
                self.sparkline+=[value]
            elif len(self.sparkline)>=10:
                self.sparkline.pop(0)
            self.sparkline+=[value]	
            self.lastReading=time.clock()
    
    def readSensor(self):
        pass

    def startCommand(self, *args, **kwargs):
        if not self.isAlive():
            super(KerviThread, self).start()

    def stopCommand(self):
        self.stop()

class SensorThread(KerviThread):
    def __init__(self,sensors,readingInterval=1):
        KerviThread.__init__(self)
        self.spine=Spine()
        self.readingInterval=readingInterval
        if hasattr(sensors, "__len__"):
            self.sensors=sensors
        else:
            self.sensors=[sensors]
        self.spine.registerCommandHandler("startThreads", self.startCommand)


    def newSensorReading(self,value,sensorIdx=0):
        self.sensors[sensorIdx].newSensorReading(value)

    def step(self):
        for s in self.sensors:
            s.readSensor()

        self.sensorStep()
        time.sleep(self.readingInterval)

    def sensorStep(self):
        pass
        
    def startCommand(self, *args, **kwargs):
        if not self.isAlive():
            super(KerviThread, self).start()

    def stopCommand(self):
        self.stop()