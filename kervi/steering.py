# Copyright (c) 2017, Tim Wentzlau
# Licensed under MIT

from kervi.controller import Controller
from kervi.tasks import TaskHandler
from kervi.values import *

class MotorSteering(TaskHandler):
    """
    Control the speed and direction of two motors.
    """
    def __init__(self, controller_id, name, left_motor = None, right_motor = None, left_encoder=None, right_encoder=None):
        TaskHandler.__init__(self, controller_id, name)
        self.type = "steering"
        if left_motor:
            self.outputs["left_speed"] = left_motor
        else:
            self.outputs["left_speed"] = DynamicNumber("Left speed", input_id="left_speed", is_input=False)

        if right_motor:
            self.outputs["right_speed"] = right_motor
        else:
            self.outputs["right_speed"] = DynamicNumber("Right speed", input_id="right_speed", is_input=False)
        
        self.inputs["right_encoder"] = right_encoder
        self.inputs["left_encoder"] = left_encoder
        self._adjust = 0

        self.inputs["speed"] = DynamicNumber("Speed", parent=self, input_id="speed")
        self.inputs["direction"] = DynamicNumber("Direction", parent=self, input_id="direction")
        self.inputs["all_off"] = DynamicBoolean("All off", parent=self, input_id="all_off")

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
