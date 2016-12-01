# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT


from roboSys.spine import Spine
from roboSys.utility.namedLists import NamedLists

cache=NamedLists()
spine=Spine()	

def handleSensorCommand(sensorValue,**kwargs):
	cache.add(sensorValue["sensor"],sensorValue);
	return
		
def handleSensorQuery(sensor,includeHistory=0,**kwargs):
	list=cache.getListData(sensor)
	if (list):
		return list[0]
	return None
	
spine.registerCommandHandler("StoreSensorValue",handleSensorCommand)
spine.registerQueryHandler("GetSensorValue",handleSensorQuery)	