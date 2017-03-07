=================================
Overview
=================================


If you have completed the steps in the *Get started* section the result should be a running kervi application.
The application has a system dashboard that shows sensors messauring cpu, memory and disk use and a power controller.


Kervi application anatomy
=========================

---------------------------
Single file application
---------------------------

Below you see the content of a *single file application* created with the commandline tool on a Raspberry Pi. 

myapp.py

.. code-block:: python
   :linenos:
    
    if __name__ == '__main__':
        from kervi.bootstrap import Application
        APP = Application()
        #Important GPIO must be imported after application creation
        from kervi.hal import GPIO

        from kervi.dashboard import Dashboard, DashboardPanel
        DASHBOARD = Dashboard("app", "App", is_default=True)
        DASHBOARD.add_panel(DashboardPanel("light", columns=2, rows=2, title="Light"))

        SYSTEMBOARD = Dashboard("system", "System")
        SYSTEMBOARD.add_panel(DashboardPanel("cpu", columns=2, rows=2))
        SYSTEMBOARD.add_panel(DashboardPanel("cam", columns=2, rows=2))

        #Create a streaming camera server
        from kervi.camera import CameraStreamer
        CAMERA = CameraStreamer("cam1", "camera 1")

        #link camera as background
        CAMERA.link_to_dashboard("app")
        #link camera to a panel
        CAMERA.link_to_dashboard("system", "cam")

        from kervi.sensor import Sensor
        from kervi_devices.platforms.common.sensors.cpu_use import CPULoadSensorDeviceDriver
        #build in sensor that measures cpu use
        SENSOR_1 = Sensor("CPULoadSensor", "CPU", CPULoadSensorDeviceDriver())
        #link to sys area top right
        SENSOR_1.link_to_dashboard("*", "sys-header")
        #link to a panel, show value in panel header and chart in panel body
        SENSOR_1.link_to_dashboard("system", "cpu", type="value", size=2, link_to_header=True)
        SENSOR_1.link_to_dashboard("system", "cpu", type="chart", size=2)


        #More on sensors https://kervi.github.io/sensors.html


        #define a light controller
        from kervi.controller import Controller, UISwitchButtonControllerInput
        class MyController(Controller):
            def __init__(self):
                Controller.__init__(self, "lightController", "Light")
                self.type = "light"

                #define an input and link it to the dashboard panel
                light1 = UISwitchButtonControllerInput("lightctrl.light1", "Light", self)
                light1.link_to_dashboard("app", "light", label_icon="light", size=0)

                #define GPIO
                GPIO.define_as_output(12)

            def input_changed(self, changed_input):
                GPIO.set(12, changed_input.value)

        MY_CONTROLLER = MyController()

        APP.run()

######################
Application (line 1-6)
######################

The hart of a kervi application is the Application class.   
You must create an Application instance as the very first   
in your application. 

The Application class prepares your application it figures out
if you are using a Raspberry Pi as your board and loads required
driveres. It also loads a web server that serves the files to the browser. 

######################
Dashboards (line 7-13)
######################

Dashboards are as such not at part of your application logic but you need to
tell kervi how you want to organize your application in the browser. 
You can have multiple dashboards in an application. It can be floores in a house
if your are developing a house automation project or it can be a camera view and
system information if you are creating a robot.

In the example above two dashboards are defined APP and SYSTEM. 

Each dashboard has one or more panels where kervi components like sensors and controllers are linked to.

###################
camera (line 15-22) 
###################

It is possible to stream your camera as a background on a dashboard or as content in a panel.
Use the method link_to_dashboard where you specify the dashboard and panel that should display the camera.
The camera will be displayed as a background if you omit the name of a panel in the call to link_to_dashboard.

###############
Sensors (24-35)
###############

Sensors are used to sence the world and readings from sensors are handled thru the Sensor Class. 
You can program a sensor your self or you can utilize one of the ready made sensor drivers from the Kervi Device Library (KDL).

In the example above a *Cpu Load sensor* is fetched from KDL and applied to the Sensor class. 
When the application is running the Sensor class polls *Cpu load sensor* device and notify other
parts of the application via events. 

In order to display the values from the sensor in the browser you need to link it to a dashboard and a panel.
This is done by calling the method link_to_dashboard where you specify dashboard/panel and display parameters.
When a sensor is linked to a dashboard panel the UI logic will pick up sensor readings for the sensor and update the value on the screen.

########################
Controllers (line 38-55)
########################

Controllers react to input from user and input channels. 
A custom controller inherits from the class Controller. 
In __init__ ( the constructor) you define inputs and setup the hardware.

In the example above the controller defines a button and links it to a dashboard panel.
When the user pushes the button in the browser it will invoke the input_changed on the controller
and the controller will set the state on a output channel.

###########################
Start the engines (line 57)
###########################

The work so far have been to prepare your application nothing is running yet to actually launch your app you need to call APP.run().
This will launch the web server, interprocess communication systems and start sensor readings.

------------------
Normal application
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