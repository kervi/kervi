Kervi!
=================================

Kervi is a Python framework that makes it very easy to create robotic and automation projects.
Wire up sensors, controllers and other devices to your Raspberry PI and link them to web based dashboards
and internal application logic.

It runs on all platforms that supports Python and is optimized for Raspberry pi.

Features of the framework are:

* Python classes for handling sensor readings and display on dashboards.
* Python classes for handling user interactions from controllers on dashboards.
* Integrated camera handling (Raspberry PI camera at the moment)
* Device driver library for common devices 
* Easy dashboard setup.
* Dashboard UI is responsive and scales from mobile phones to desktop.
* Multi process oriented by spreading over more than one core.
* Multi device oriented by connecting multiple Raspberry Pi's in one large application 
* No web development knowledge is required as dashboard layout is handled in python. 

Below is a complete example that shows how to display a sensor on a dashboard with a chart

.. code-block:: python

    if __name__ == '__main__':
        from kervi.bootstrap import Application
        APP = Application()

        #add dashboard and panel
        from kervi.dashboard import Dashboard, DashboardPanel
        DASHBOARD = Dashboard("system", "Sensors", is_default=True)
        DASHBOARD.add_panel(DashboardPanel("sensors", columns=3, rows=4))
        
        from kervi.sensor import Sensor
        from kervi_devices.platforms.common.sensors.cpu_use import CPULoadSensorDeviceDriver
        
        cpu_sensor = Sensor("CPULoadSensor","CPU", CPULoadSensorDeviceDriver())
        cpu_sensor.link_to_dashboard("system", "sensors", type="value", size=2, link_to_header=True)
        cpu_sensor.link_to_dashboard("system", "sensors", type="chart", size=2)

        APP.run()

.. toctree::
   :maxdepth: 2
   :includehidden:
   :caption: Contents:
   :hidden:

   getstarted
   overview
   dashboards
   sensors
   sensors_api
   controllers
   dynamic_values
   camera
   motors
   security
   hal
   ipc
   cli
   contribute
