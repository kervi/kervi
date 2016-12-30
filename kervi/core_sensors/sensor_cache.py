# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT


import kervi.spine as spine
from kervi.utility.named_lists import NamedLists

cache=NamedLists()
spine=spine.Spine()	

def handleSensorCommand(sensorValue,**kwargs):
	cache.add(sensorValue["sensor"],sensorValue);
	return
		
def handleSensorQuery(sensor,includeHistory=0,**kwargs):
	list=cache.get_list_data(sensor)
	if (list):
		return list[0]
	return None

if spine:
	spine.register_command_handler("StoreSensorValue",handleSensorCommand)
	spine.register_query_handler("GetSensorValue",handleSensorQuery)	