#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

from kervi.controllers.controller import Controller
from kervi.controllers.tasks import TaskHandler
from kervi.values import DynamicNumber, DynamicBoolean

class MotorSteering(TaskHandler):
    """
    Control the speed and direction of two motors.
    """
    def __init__(self, controller_id="steering", name="Steering"):
        TaskHandler.__init__(self, controller_id, name)
        self.type = "steering"
        self.left_speed = self.outputs.add("left_speed", "Left speed", DynamicNumber)
        self.right_speed = self.outputs.add("right_speed", "Right speed", DynamicNumber)

        self.inputs.add("left_encoder", "Left encoder", DynamicNumber)
        self.inputs.add("right_encoder", "Right encoder", DynamicNumber)
        
        self._adjust = 0


        self.speed = self.inputs.add("speed", "Speed", DynamicNumber)
        self.adaptive_speed = self.inputs.add("adaptive_speed", "Adaptive speed", DynamicNumber)
        self.direction = self.inputs.add("direction", "Direction", DynamicNumber)
        self.adaptive_direction = self.inputs.add("Adaptive direction", "Adaptive direction", DynamicNumber)
        self.all_off = self.inputs.add("all_off", "All off", DynamicBoolean)

    @property
    def adjust(self):
        return self._adjust

    @adjust.setter
    def adjust(self, value):
        self._adjust = value

    def rotate(self, speed, wheel_rotations=None, duration=None ):
        print("steering rotate:", speed)
        new_direction = self._adjust
        left_speed = speed * (-new_direction / 100)
        right_speed = speed * (new_direction / 100)

        self.outputs["left_speed"].value = left_speed
        self.outputs["right_speed"].value = right_speed

    def update(self):
        print("steering update:", self.speed.value, self.direction.value)
        new_direction = self.direction.value + self.adaptive_direction.value + self._adjust
        speed = self.speed.value + self.adaptive_speed.value
        print("steering adaptive update:", speed, new_direction)
        if new_direction > 0:
            left_speed = speed * (1 - new_direction / 100)
            right_speed = speed
        elif new_direction < 0:
            left_speed = speed
            right_speed = speed * (1 + new_direction / 100)
        elif new_direction == 0:
            left_speed = speed
            right_speed = speed

        self.outputs["left_speed"].value = left_speed
        self.outputs["right_speed"].value = right_speed

    def input_changed(self, changed_input):
        #print("steering input changed:", changed_input.input_id, changed_input.value)
        if changed_input == self.all_off and self.all_off.value:
            self.left_speed.value = 0
            self.right_speed.value = 0

        if changed_input in [self.speed, self.direction, self.adaptive_speed]:
            self.update()
