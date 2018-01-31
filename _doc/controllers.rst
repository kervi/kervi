==============
Controllers
==============

Controllers is the fun part of your Kervi application this is where you code the application logic.
Your controller acts upon input from users, GPIO events or the underlaying os and initiates different actions based on the input.

Basic controllers manages motors, light, servos and so on but you can also build more advanced controllers
for *line following* and *self navigation*.
As your application grows your application will contain multiple controllers. 

Input and output interfaces
===========================

Basically a controller reads a set of inputs and generates one or more outputs.
Below is an example of a steering controller, that takes speed, and left/right balance between motors as inputs
and calculates the speed of the left and right motors.

.. code-block:: python
   :linenos:

    from kervi.controllers.controller import Controller
    from kervi.values import *

    class MotorSteering(Controller):
        """
        Control the speed and direction of two motors.
        """
        def __init__(self, controller_id="steering", name="Steering"):
            Controller.__init__(self, controller_id, name)
            self.type = "steering"
            self.left_speed = self.outputs.add("left_speed", "Left speed", DynamicNumber)
            self.right_speed = self.outputs.add("right_speed", "Right speed", DynamicNumber)

            self.adjust = self.inputs.add("adjust", "Left right adjust", DynamicNumber)

            self.speed = self.inputs.add("speed", "Speed", DynamicNumber)
            self.direction = self.inputs.add("direction", "Direction", DynamicNumber)
            self.all_off = self.inputs.add("all_off", "All off", DynamicBoolean)

        @property
        def adjust(self):
            return self._adjust

        @adjust.setter
        def adjust(self, value):
            self._adjust = value

        def update(self):
            new_direction = self.direction.value + self.adjust.value

            if left_right_balance > 0:
                left_speed = speed * (1 - new_direction / 100)
                right_speed = speed
            elif left_right_balance < 0:
                left_speed = speed
                right_speed = speed * (1 + new_direction / 100)
            elif left_right_balance == 0:
                left_speed = speed
                right_speed = speed

            self.left_speed.value = left_speed
            self.right_speed.value = right_speed

        def input_changed(self, changed_input):
            if changed_input == self.all_off and self.all_off.value==True:
                self.left_speed.value = 0
                self.right_speed.value = 0

            if changed_input == self.speed or changed_input == self.direction:
                self.update()

In the example above the inputs and outputs are defined via::

    self.speed = self.inputs.add("speed", "Speed", DynamicNumber)
    
    self.left_speed = self.outputs.add("left_speed", "Left speed", DynamicNumber)

self.inputs.add and self.outputs.add are factory functions that creates dynamic values that are special Kervi value classes that 
may be linked to dashboards or to another dynamic value.

When an input value is changed by a user or other part of your application the input_changed event is fired and your controller may
calculate its outputs. 

Linking controllers
===================

A controller that works entirely on in- and outputs that are dynamic values
is agnostic to how it is linked to user interface and hardware.
In that way it is easy to change hardware and make changes to UI without re-coding the controller.

.. code-block:: python
   :linenos:

    steering = MotorSteering()
    
    #Link to ui
    steering.speed.link_to_dashboard("app", "steering")
    steering.direction.link_to_dashboard("app", "steering")
    steering.all_off.link_to_dashboard("app", "steering")

    #link to hardware
    motor_board = AdafruitMotorHAT()
    motor_board.dc_motors[2].speed.link_to(steering.left_speed)
    motor_board.dc_motors[3].speed.link_to(steering.right_speed)
