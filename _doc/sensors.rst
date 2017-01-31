
Sensors
=================================

**Example**

.. code-block:: python

    class MySensor(Sensor):
        def __init__(self):
            Sensor.__init__(self, "mySensor", "My sensor")
            self.type = "temperature"
            self.max = 100
            self.min = 0
            self.unit = "C"
            self.

            #link the sensor to a dashboard section
            #show the sensor as a radial_gauge
            self.link_to_dashboard("cam", "section1", type="radial_gauge")

        def read_sensor(self):
            #read_sensor is called by the SensorThread

            #enter your real code here to read your sensor

            #call new_sensor_reading to signal a new value
            #This will save the value to DB and trigger *newSensorReadingEvent*
            self.new_sensor_reading(self.counter)

    #Add sensor to a SensorThread that polls the sensor by the specified interval 
    MY_SENSOR_THREAD = SensorThread(MySensor(),1)



.. toctree::
   :hidden:

   sensors_api
