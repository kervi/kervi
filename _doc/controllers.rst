Controllers
==============

A Kervi controller is a class that acts upon input from users or events or the underlaying os.

Examples for controllers are motor control, servo control, output to IO.

User input comes from the following controller components:

    * ControllerSelect
    * ControllerButton
    * ControllerSwitchButton
    * ControllerNumberInput
    * ControllerTextInput
    * ControllerDateTimeInput

The controller it self or the controller components may be linked to dashboards.

**Example**

.. code-block:: python

    from kervi.controller import Controller, ControllerSwitchButton

    #Switch button shown on a dashboard
    class LightButton(ControllerSwitchButton):
        def __init__(self, controller):
            ControllerSwitchButton.__init__(
                self,
                controller.component_id+".light",
                "Light 1",
                controller
            )
            self.link_to_dashboard("system", "light", icon="light")

        def on(self):
            #event fired when user click the button in UI
            #set GPIO pin high

        def off(self):
            #event fired when user click the button in UI
            #set GPIO pin low

    class LightController(Controller):
        def __init__(self):
            Controller.__init__(self, "lightController", "Light")
            self.type = "light"

            self.add_components(LightButton(self))

    MY_CONTROLLER = LightController()



.. toctree::
   :hidden:

   controllers_api