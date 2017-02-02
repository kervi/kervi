
Sensors
=================================

Sensors in Kervi are special classes that handles reading from different kind of probes. 
Kervis has a base class *Sensor* that handles the hevy lifting of storing readings in database,
signal ui and send events to other kervi components.

Reading sensors
---------------
Below is an example that shows the steps to create a sensor. 
Propperties of the sensor prope is applied in the constror (__init__) and the actual reading of a probe is handled in
the abstract method read_sensor.

The read_sensor method should just containt code that handles **one** reading of the probe and the result of that reading
should be send to Kervi by calling the method new_sensor_reading.

To poll your sensor create a SensorThread and specify the polling interval in seconds.     

.. code-block:: python

    class MySensor(Sensor):
        def __init__(self):
            Sensor.__init__(self, "watertemp", "Water temp")
            self.type = "temperature"
            self.max = 100
            self.min = 0
            self.unit = "C"

        def read_sensor(self):
            #read_sensor is called by the SensorThread

            #enter your real code here to read your sensor probe

            #call new_sensor_reading to signal a new value to kervi
            self.new_sensor_reading(self.counter)

    #Add sensor to a SensorThread that polls the sensor by the specified interval 
    MY_SENSOR_THREAD = SensorThread(MySensor(),1)



Linking to dashboards
---------------------

A sensor is linked to dashboard by calling the method link_to_dashboard. 


.. code-block:: python

    class MySensor(Sensor):
        def __init__(self):
            Sensor.__init__(self, "watertemp", "Water temp")
            self.type = "temperature"
            self.max = 100
            self.min = 0
            self.unit = "C"

            #link this sensor to a dashboard called system on the panel with id=section1
            self.link_to_sensor("system", "section1")

        def read_sensor(self):
            #read_sensor is called by the SensorThread

            #enter your real code here to read your sensor probe

            #call new_sensor_reading to signal a new value to kervi
            self.new_sensor_reading(self.counter)


A sensor can displayed in different ways: just value, value with sparkline, as an animated icon or different kind of gauges.

**Value and sparkline**

If a sensor is linked with just dashboard and panel as parameters it will be displayed with name, sparkline and value.

.. code-block:: python
    
    self.link_to_sensor("system", "section1")

.. image:: images/sensor_sparkline.png


**Value and icon**

It is possible to show an icon next to a value. Kervi uses Font awesome icons. Just enter the name of the icon without *fa-*

.. code-block:: python
    
    self.link_to_dashboard("system", "temp", icon="thermometer-full", show_sparkline=False, show_name=False)

.. image:: images/sensor_icon.png

**Value and no sparkline**

.. code-block:: python
    
    self.link_to_sensor("system", "section1", show_sparkline=False)

.. image:: images/sensor_value.png


**radial gauge**

.. code-block:: python
    
    self.link_to_sensor("system", "section1", type="radial_gauge")

.. image:: images/sensor_radial.png

**Horizontal gauge**

.. code-block:: python
    
    self.link_to_sensor("system", "section1", type="horizontal_linear_gauge")

.. image:: images/sensor_horizontal.png

**Vertical gauge**

.. code-block:: python
    
    self.link_to_sensor("system", "section1", type="vertical_linear_gauge")

.. image:: images/sensor_vertical.png

**Animated icon**

Below is a full example of a battery sensor where the icon change depending on value.
The sensor is linked twice first to the header with the animation and into the body as a chart. 

.. code-block:: python
    
    from kervi.sensor import Sensor, SensorThread

    class MySensor(Sensor):
        """ My sensor """
        def __init__(self):
            Sensor.__init__(self, "batterySensor1", "Battery")
            self.type = "battery"
            self.max = 100
            self.min = 0
            self.unit = "%"

            self.set_ui_parameter("icon", [
                {
                    "range":[0, 5],
                    "icon":"battery-empty"
                },
                {
                    "range":[5, 25],
                    "icon":"battery-quarter"
                },
                {
                    "range":[20, 50],
                    "icon":"battery-half"
                },
                {
                    "range":[5, 75],
                    "icon":"battery-three-quarter"
                },
                {
                    "range":[75, 100],
                    "icon":"battery-full"
                }
            ])

            #link the sensor to the header
            self.link_to_dashboard(
                "system", "battery",
                show_sparkline=False,
                show_value=False,
                link_to_header=True
            )

            #link the sensor as a chart
            self.link_to_dashboard("system", "battery", type="chart")

            #variables needed for my sensor
            self.counter = 0 #dummy counter
            self.counter_delta = 1

        def read_sensor(self):
            #read_sensor is called by the SensorThread
            #snippet below is just dummy code
            #enter your real code here to read your sensor

            self.counter += self.counter_delta

            if self.counter > self.max:
                self.counter_delta = -1
            elif self.counter <= self.min:
                self.counter_delta = 1

            #call new_sensor_reading to signal a new value
            self.new_sensor_reading(self.counter)

    #Add sensor to a SensorThread that polls the sensor by the specified interval
    MY_SENSOR_THREAD = SensorThread(MySensor(),1)

.. image:: images/sensor_animated.png








.. toctree::
   :hidden:

   sensors_api

