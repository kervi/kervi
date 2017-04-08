# Copyright (c) 2017, Tim Wentzlau
# Licensed under MIT

from kervi.controller import Controller
from kervi.tasks import TaskHandler
from kervi.values import *

class MotorSteering(TaskHandler):
    """
    Control the speed and direction of two motors.
    """
    def __init__(self, controller_id, name):
        TaskHandler.__init__(self, controller_id, name)
        self.type = "steering"
        self.outputs.add("left_speed", "Left speed", DynamicNumber)
        self.outputs.add("right_speed", "Right speed", DynamicNumber)

        self.inputs.add("left_encoder", "Left encoder", DynamicNumber)
        self.inputs.add("right_encoder", "Right encoder", DynamicNumber)
        self._adjust = 0


        self.inputs.add("speed", "Speed", DynamicNumber)
        self.inputs.add("direction", "Direction", DynamicNumber)
        self.inputs.add("all_off", "All off", DynamicBoolean)

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

    def run(self, speed, left_right_balance, wheel_rotations=None, duration=None):
        print("steering run:", speed, left_right_balance)
        new_direction = left_right_balance + self._adjust

        if left_right_balance > 0:
            left_speed = speed * (1 - new_direction / 100)
            right_speed = speed
        elif left_right_balance < 0:
            left_speed = speed
            right_speed = speed * (1 + new_direction / 100)
        elif left_right_balance == 0:
            left_speed = speed
            right_speed = speed

        self.outputs["left_speed"].value = left_speed
        self.outputs["right_speed"].value = right_speed

    def dynamic_value_changed(self, changed_input):
        #print("steering input changed:", changed_input.input_id, changed_input.value)
        if changed_input == self.inputs["all_off"]:
            self.outputs["left_speed"].value = 0
            self.outputs["right_speed"].value = 0

        if changed_input == self.inputs["speed"] or changed_input == self.inputs["direction"]:
            self.run(self.inputs["speed"].value, self.inputs["direction"].value)
