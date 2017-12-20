========
Motors
========

Kervi offers a standardized interface where it is possible to link up signals from your application logic to the motor drivers. 


DC motors
=========

Below is a code snippet that shows how to link the speed input on a dc motor to a dashboard allowing
a user to set the speed and direction of the motor via the web UI.

.. code:: python

    from kervi.application import Application

    APP = Application()

    #add dashboard and panel
    from kervi.dashboards.dashboard import Dashboard, DashboardPanel
    
    Dashboard(
        "dashboard",
        "adafruit motor driver dc test",
        [
            DashboardPanel("input" title="input")
        ],
        is_default=True
    )
    
    #import motor device driver
    from kervi.devices.motors.adafruit_i2c_motor_hat import AdafruitMotorHAT

    motor_controller = AdafruitMotorHAT()
    motor_controller.dc_motors[0].speed.link_to_dashboard("dashboard")



Servo motor
===========



Stepper motors
==============