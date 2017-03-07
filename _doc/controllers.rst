Controllers
==============

Controllers is the fun part of your Kervi application this is where you code the application logic.
Your controller acts upon input from users, GPIO events or the underlaying os and initiates different actions based on the input.

Basic controllers manages motors, light, servo and so on but you can also build more advanced controllers
for *line following* and *self navigation* into your controllers.
As your application grows your application will contain multiple controllers. 

User input comes from the following controller inputs:

    * UISelectControllerInput
    * UIButtonControllerInput
    * UISwitchButtonControllerInput
    * UINumberControllerInput
    * UITextControllerInput
    * UIDateTimeControllerInput

Input to controllers from devices is handled via
    * DigitalGPIOControllerInput
    * AnalogGPIOControllerInput
    * SensorControllerInput

The controller it self or the controller inputs may be linked to dashboards.

**Example**
The example below shows how to create a light controller that uses pwm to change the level of the light.
The user controls the level via browser. 

.. code-block:: python

    

    if __name__ == '__main__':
        from kervi.bootstrap import Application
        APP = Application()
        
        #add dashboard and panel
        from kervi.dashboard import Dashboard, DashboardPanel
        DASHBOARD = Dashboard("system", "System", is_default=True)
        DASHBOARD.add_panel(DashboardPanel("light", columns=2, rows=2, title="Light"))
        
        #define a light controller
        from kervi.hal import GPIO
        from kervi.controller import Controller, UISwitchButtonControllerInput, UINumberControllerInput

        class LightController(Controller):
            def __init__(self):
                Controller.__init__(self, "lightController", "Light")
                self.type = "light"

                #define an input and link it to the dashboard panel
                light_button = UISwitchButtonControllerInput("lightctrl.on", "Light", self)
                light_button.link_to_dashboard("system", "light", icon="light")

                #add the input to this controller
                self.add_input(light_button)

                level_input= UINumberControllerInput("lightctrl.level", "Level")
                level_input.min = 0
                level_input.max = 100
                level_input.value = 100
                level_input.link_to_dashboard("system", "light")

                self.add_input(level_input)

                #define GPIO
                GPIO.define_as_pwm(12, 50)

            def input_changed(self, changed_input):
                if changed_input.input_id == "lightctrl.on":
                    if changed_input.value:
                        GPIO.pwn_start(12)
                    else:
                        GPIO.pwm_stop(12)

                if changed_input.input_id == "lightctrl.level":
                    #change the duty_cycle on the pwm pin
                    GPIO.pwm_start(12, duty_cycle=changed_input.value)

        LightController()

        APP.run()



**A light controller where logic is moved to a on/off button**
 

.. code-block:: python

    
    if __name__ == '__main__':
        from kervi.bootstrap import Application
        APP = Application()

        #add dashboard and panel
        from kervi.dashboard import Dashboard, DashboardPanel
        DASHBOARD = Dashboard("system", "System", is_default=True)
        DASHBOARD.add_panel(DashboardPanel("light", columns=2, rows=2, title="Light"))
    
        #Switch button shown on a dashboard
        from kervi.hal import GPIO
        from kervi.controller import Controller, UISwitchButtonControllerInput
    
        class LightButton(UISwitchButtonControllerInput):
            def __init__(self, controller):
                UISwitchButtonControllerInput.__init__(
                    self,
                    controller.component_id+".light",
                    "Light 1",
                    controller
                )
                self.link_to_dashboard("system", "light", icon="light")
                GPIO().define_as_output(12)

            def on(self):
                #event fired when user click the button in UI
                #set GPIO pin high
                GPIO().set(12, True)

            def off(self):
                #event fired when user click the button in UI
                #set GPIO pin low
                GPIO().set(12, False)
    
    
        #define a light controller
        class LightController(Controller):
            def __init__(self):
                Controller.__init__(self, "lightController", "Light")
                self.type = "light"

                self.add_input(LightButton(self))


        MY_CONTROLLER = LightController()

        APP.run()

**Reading a sensor and control a pwm channel**
This controller listen to a temperature sensor and controls the speed by changing duty_cycle.

.. code-block:: python
    
    if __name__ == '__main__':
        from kervi.bootstrap import Application
        APP = Application()

        #add dashboard and panel
        from kervi.dashboard import Dashboard, DashboardPanel
        DASHBOARD = Dashboard("dashboard.system", "System", is_default=True)
        DASHBOARD.add_panel(DashboardPanel("panel.system.fan", columns=2, rows=2, title="Fan"))

        from kervi.sensor import Sensor
        from kervi_devices.sensors import BMP085
        Sensor("sensor.room1.temp", "Room 1", BMP085.BMP085DeviceDriver(BMP085.TEMPERATURE_SENSOR))

        class FanController(Controller):
            def __init__(self):
                Controller.__init__(self,"fanctrl", "Fan controller")
                self.type = "fan"
                self.link_to_dashboard("dashboard.system", "panel.system.fan")
                
                self.add_input(SensorControllerInput("input.cputemp", "Room 1 temp", "sensor.room1.temp", self))
                
                #define GPIO
                GPIO.define_as_pwm(12, duty_cycle=0, frequency=20000)
                GPIO.pwm_start(12)
                
            def input_changed(self, changed_input):
                #stop fan if temperature is below 22 C
                #Increase speed as temperature raises
                #max speed is reached at 42 C
                if (changed_input.component_id == "input.cpu.temp"):
                    if changed_input.value < 22:
                        GPIO.pwm_stop(12)
                    else:
                        fan_speed = (changed_input.value - 22) / 20
                        if fan_speed > 1:
                            fan_speed = 1
                        GPIO.pwm_start(12, fan_speed)

        FanController()



.. toctree::
   :hidden:

   controllers_api