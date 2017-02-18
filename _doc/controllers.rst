Controllers
==============

A Kervi controller is a class that acts upon input from users, GPIO events or the underlaying os.

Examples for controllers are motor control, servo control, output to IO.

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

.. code-block:: python

    from kervi.bootstrap import Application
    from kervi.hal import GPIO
    from kervi.controller import Controller, UISwitchButtonControllerInput
    from kervi.dashboard import Dashboard, DashboardPanel

    if __name__ == '__main__':
        APP = Application()

        #add dashboard and panel
        DASHBOARD = Dashboard("system", "System", is_default=True)
        DASHBOARD.add_panel(DashboardPanel("light", columns=2, rows=2, title="Light"))
    
        #define a light controller
        class LightController(Controller):
            def __init__(self):
                Controller.__init__(self, "lightController", "Light")
                self.type = "light"

                #define an input and link it to the dashboard panel
                light1 = UISwitchButtonControllerInput("lightctrl.light1", "Light", self)
                light1.link_to_dashboard("system", "light", icon="light", size=0)

                #add the input to this controller
                self.add_input(light1)

                #define GPIO
                GPIO().define_as_output(12)

            def input_changed(self, changed_input):
                GPIO().set(12, changed_input.value)

        MY_CONTROLLER = LightController()

        APP.run()


**The same example where the controller logic is moved to the button**

.. code-block:: python

    from kervi.bootstrap import Application
    from kervi.hal import GPIO
    from kervi.controller import Controller, UISwitchButtonControllerInput
    from kervi.dashboard import Dashboard, DashboardPanel

    if __name__ == '__main__':
        APP = Application()

        #add dashboard and panel
        DASHBOARD = Dashboard("system", "System", is_default=True)
        DASHBOARD.add_panel(DashboardPanel("light", columns=2, rows=2, title="Light"))
    
    
        #Switch button shown on a dashboard
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



.. toctree::
   :hidden:

   controllers_api