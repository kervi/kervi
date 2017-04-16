=================================
Overview
=================================

If you have completed the steps in the *Get started* section the result should be a running kervi application.

Kervi application anatomy
=========================

---------------------------
Single file application
---------------------------

Below you see the content of a *single file application* that controls the speed of a motor based on the cpu temperature. 

myapp.py

.. code-block:: python
   :linenos:
    
    if __name__ == '__main__':
        from kervi.bootstrap import Application
        APP = Application()
        
        from kervi.dashboard import Dashboard, DashboardPanel
        DASHBOARD = Dashboard("app", "App", is_default=True)
        DASHBOARD.add_panel(DashboardPanel("fan", columns=3, rows=2, title="CPU fan"))

        SYSTEMBOARD = Dashboard("system", "System")
        SYSTEMBOARD.add_panel(DashboardPanel("cpu", columns=2, rows=2))
        SYSTEMBOARD.add_panel(DashboardPanel("cam", columns=2, rows=2))

        from kervi.sensor import Sensor
        from kervi_devices.platforms.common.sensors.cpu_use import CPULoadSensorDeviceDriver
        from kervi_devices.platforms.common.sensors.cpu_temp import CPUTempSensorDeviceDriver
        
        #build in sensor that measures cpu use
        SENSOR_CPU_LOAD = Sensor("CPULoadSensor", "CPU", CPULoadSensorDeviceDriver())
        #link to sys area top right
        SENSOR_CPU_LOAD.link_to_dashboard("*", "sys-header")
        #link to a panel, show value in panel header and chart in panel body
        SENSOR_CPU_LOAD.link_to_dashboard("system", "cpu", type="value", size=2, link_to_header=True)
        SENSOR_CPU_LOAD.link_to_dashboard("system", "cpu", type="chart", size=2)

        #build in sensor that measures cpu temperature
        SENSOR_CPU_TEMP = Sensor("CPUTempSensor", "", CPUTempSensorDeviceDriver())
        
        #define a fan controller
        from kervi.controller import Controller
        from kervi.values import DynamicNumber, DynamicBoolean
        class FanController(Controller):
            def __init__(self):
                Controller.__init__(self, "fan_controller", "Fan")
                self.type = "fan"

                #define inputs
                self.temp = self.inputs.add("temp", "Temperature", DynamicNumber)
                self.temp.min = 0
                self.temp.max = 150

                self.trigger_temp = self.inputs.add("trigger_temp", "Trigger temperature", DynamicNumber)
                self.trigger_temp.min = 0
                self.trigger_temp.max = 100
                #remember the value when app restarts
                self.trigger_temp.persists = True

                self.max_temp = self.inputs.add("max_temp", "Max speed temperature", DynamicNumber)
                self.max_temp.min = 0
                self.max_temp.max = 100
                #remember the value when app restarts
                self.max_temp.persists = True

                self.active = self.inputs.add("active", "Active", DynamicBoolean)
                
                #define output
                self.fan_speed = self.outputs.add("fan_speed", "Fan speed", DynamicNumber)

            def input_changed(self, changed_input):
                if self.active.value:
                    temp = self.temp.value - self.trigger_temp.value
                    if temp <= 0:
                        self.fan_speed.value = 0
                    else:
                        max_span = self.max_temp.value - self.trigger_temp.value
                        speed = (temp / max_span) * 100
                        if speed > 100:
                            speed = 100
                        self.fan_speed.value = speed
                else:
                    self.fan_speed.value = 0

        FAN_CONTROLLER = FanController()

        #link the fan controllers temp input to cpu temperature sensor
        FAN_CONTROLLER.temp.link_to(SENSOR_CPU_TEMP)
        
        #link the other fan controller inputs to dashboard
        FAN_CONTROLLER.trigger_temp.link_to_dashboard("app", "fan")
        FAN_CONTROLLER.max_temp.link_to_dashboard("app", "fan")
        FAN_CONTROLLER.active.link_to_dashboard("app", "fan")
        
        #link the fan controller to a DC motor on controlled by a Adafruit motor hat
        from kervi_devices.motors.adafruit_i2c_motor_hat import AdafruitMotorHAT
        MOTOR_CONTROLLER = AdafruitMotorHAT()
        MOTOR_CONTROLLER.dc_motors[2].speed.link_to(FAN_CONTROLLER.fan_speed)

        APP.run()


######################
Application (line 1-3)
######################

The hart of a kervi application is the Application class.   
You must create an Application instance as the very first   
in your application. 

The Application class prepares your application it figures out
if you are using a Raspberry Pi as your board and loads required
driveres. It also loads a web server that serves the files to the browser. 

######################
Dashboards (line 5-11)
######################

Dashboards are as such not at part of your application logic but you need to
tell kervi how you want to organize your dashboards in the browser. 
You can have multiple dashboards in an application. It can be floors in a house
if your are developing a house automation project or it can be a camera view and
system information if you are creating a robot.

In the example above two dashboards are defined APP and SYSTEM. 

Each dashboard has one or more panels where kervi components like sensors and controllers are linked to.

###############
Sensors (13-26)
###############

Sensors are used to sense the world and readings from sensors are handled thru the Sensor Class. 
You can program a sensor your self or you can utilize one of the ready made sensor drivers from the Kervi Device Library (KDL).

In the example above a *Cpu Load sensor* is fetched from KDL and applied to the Sensor class. 
When the application is running the Sensor class polls *Cpu load sensor* device and notify other
parts of the application via events. 

In order to display the values from the sensor in the browser you need to link it to a dashboard and a panel.
This is done by calling the method link_to_dashboard where you specify dashboard/panel and display parameters.
When a sensor is linked to a dashboard panel the UI logic will pick up sensor readings for the sensor and update the value on the screen.

########################
Controllers (line 28-69)
########################

A controller reacts to one or more inputs and generates one or more outputs.
The input could come from the user via the web based UI, sensors or other application logic.

The example above implements a fan controller that calculates speed of a fan by reading the temperature of a sensor.
The controller is agnostic to how it is linked to user interface and hardware it only works in the interface of inputs it
defines and the output it produces. In that way it is easy to change hardware and UI without recoding the controller.

In order to do the calculation the controller uses the following inputs:

* temp, the temperature that should be used in the calculation.
* trigger_temp, if the temperature is below this temperature the fan is stopped.
* max_temp, if the temperature is greater that this temperature the fan should run at max speed.
* active, if true the controller should calculate the speed. If false the fan should be turned off.

In the span from trigger_temp to max_temp the controller will graduatly increase the speed.

In __init__ ( the constructor) you define inputs and outputs.
A controller input is defined by calling self.inputs.add and specify the id, name and type of the input::

    self.temp = self.inputs.add("temp", "Temperature", DynamicNumber)
                
A controller output is defined by calling self.outputs.add and specify the id, name and type of the output::

    self.temp = self.inputs.add("temp", "Temperature", DynamicNumber)

The controller reacts to the input_changed event and calculates the outputs (fan_speed)

###########################
Linking controller inputs (line 72 - 77)
###########################

The next step is to link the controller to the cpu sensor:: 

 FAN_CONTROLLER.temp.link_to(SENSOR_CPU_TEMP)

Now the temp input listen to changes in cpu temperature, when the the temperature changes the input_changed event is fired.

The other controller inputs are linked the dashboard where the user can control these parameters. 
When the user changes one of the inputs the input_changed event is fired.


###########################
Linking controller outputs (line 72 - 77)
###########################

In this example the the fan controller is linked to a DC motor that is controlled via a Adafruit motor hat.

The dc motor is linked to fan_speed::

    MOTOR_CONTROLLER.dc_motors[2].speed.link_to(FAN_CONTROLLER.fan_speed)

Now the dc motor listen to changes in fan_speed. 

###########################
Start the engines (line 84)
###########################

The work so far have been to prepare your application nothing is running yet to actually launch your app you need to call APP.run().
This will launch the web server, interprocess communication systems and start sensor readings.

------------------
Multi file application
------------------

Below is the structure of a multi file Kervi application. All the parts from a single file application are moved into
seperate files and foldes. Kervi uses this structure to load each section in its own process in order to improve the performance.

A second advantance to this model is that it is easier to maintain as the Kervi project grows bigger.

.. code::

    app root
    |
    |- cams
        |- __init__
        |- cam1.py
    |- controllers 
        |- __init__.py
        |- my_controller.py
        |- system_controller.py
    |- dashboards
        |- __init__.py
    |- sensors
        |- __init__.py
        |- my_sensor.py
        |- system_sensor.py
    |- myapp.py

The kervi application is bootstrapped in myapp.py

.. code:: python
    
    from kervi.bootstrap import Application
    import kervi.utility.nethelper as nethelper

    if __name__ == '__main__':
        APP = Application({
            "info":{
                "id":"myapp",
                "name":"My app",
                "appKey":"",
            },
            "network":{
                "IPAddress": nethelper.get_ip_address(),
                "IPCBasePort":9500,
                "WebSocketPort":9000,
                "WebPort": 8080,
                "IPCSecret":b"a5fa439d-c285-49c1-a39a-af98babd2cbc"
            },
        })

        APP.run()

The values for ports and secrets are generated by the Kervi commandline tool.
When the Application.run is called the system looks for Kervi components in cam, controllers, dashboard and sensor folders.
In each folder the __init__.py file bootstraps and load the components that resides in the local folder.

-----------------------
Distributed application
-----------------------

It is possible to create a distributed kervi application where multiple computers and controllers Works together.
One computer is the main computer where a kervi application is created.
On the other computers kervi application modules are created that connects to the central kervi application.
The web interface will update it self as modules starts and stops.