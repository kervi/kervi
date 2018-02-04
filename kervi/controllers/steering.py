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
import time
from kervi.controllers.controller import Controller
from kervi.controllers.tasks import TaskHandler
from kervi.values import NumberValue, BooleanValue
from kervi.actions import action

class MotorSteering(TaskHandler):
    """
    Control the speed and direction of two motors.
    """
    def __init__(self, controller_id="steering", name="Steering"):
        TaskHandler.__init__(self, controller_id, name)
        self.type = "steering"
        self.left_speed = self.outputs.add("left_speed", "Left speed", NumberValue)
        self.right_speed = self.outputs.add("right_speed", "Right speed", NumberValue)

        self.inputs.add("left_encoder", "Left encoder", NumberValue)
        self.inputs.add("right_encoder", "Right encoder", NumberValue)

        self._adjust = 0

        self.speed = self.inputs.add("speed", "Speed", NumberValue)
        self.adaptive_speed = self.inputs.add("adaptive_speed", "Adaptive speed", NumberValue)
        self.direction = self.inputs.add("direction", "Direction", NumberValue)
        self.adaptive_direction = self.inputs.add("Adaptive direction", "Adaptive direction", NumberValue)

    @property
    def adjust(self):
        return self._adjust

    @adjust.setter
    def adjust(self, value):
        self._adjust = value

    @action
    def move(self, speed, **kwargs):
        direction= kwargs.pop("direction",None)
        duration=kwargs.pop("duration",None),
        wheel_rotations=kwargs.pop("wheel_rotations",None)

        if direction:
            self.direction.value = direction

        self.speed.value = speed

    @action
    def stop(self, **kwargs):
        coast = kwargs.pop("break", True)
        self.outputs["left_speed"].value = 0
        self.outputs["right_speed"].value = 0

    @action
    def rotate(self, **kwargs):
        speed = kwargs.pop("speed",None)
        wheel_rotations = kwargs.pop("wheel_rotations",None)
        duration = kwargs.pop("duration",None)
        
        print("steering rotate:", speed)
        new_direction = self._adjust
        left_speed = speed * (-new_direction / 100)
        right_speed = speed * (new_direction / 100)

        self.outputs["left_speed"].value = left_speed
        self.outputs["right_speed"].value = right_speed
        if duration:
            time.sleep(duration)

    def _update(self):
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
        if changed_input in [self.speed, self.direction, self.adaptive_speed]:
            self._update()
