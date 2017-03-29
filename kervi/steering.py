# Copyright (c) 2017, Tim Wentzlau
# Licensed under MIT

from kervi.controller import Controller, UIButtonControllerInput, UINumberControllerInput
from kervi.tasks import TaskHandler

class MotorSteering(TaskHandler):
    """
    Control the speed and direction of two motors.
    """
    def __init__(self, controller_id, name, left_motor, right_motor, left_encoder=None, right_encoder=None):
        TaskHandler.__init__(self, controller_id, name)
        self.type = "steering"
        self._left_motor = left_motor
        self._right_motor = right_motor
        self._right_encoder = right_encoder
        self._left_encoder = left_encoder
        self._adjust = 0

        self.speed_input = UINumberControllerInput(controller_id + ".speed", "Speed", self)
        self.speed_input.min = -100
        self.speed_input.max = 100
        self.speed_input.value = 0
        #self.speed_input.link_to_dashboard("app", "steering")

        self.direction_input = UINumberControllerInput(controller_id + "direction", "Direction", self)
        self.direction_input.min = -100
        self.direction_input.max = 100
        self.direction_input.value = 0

        self.all_off_button = UIButtonControllerInput(controller_id + ".allOff", "All off", self)

    @property
    def adjust(self):
        return self._adjust

    @adjust.setter
    def adjust(self, value):
        self._adjust = value

    @task
    def rotate(self, speed, wheel_rotations=None, duration=None ):
        print("steering rotate:", speed)
        new_direction = self._adjust
        left_speed = speed * (-new_direction / 100)
        right_speed = speed * (new_direction / 100)

        self._left_motor.set_speed(left_speed)
        self._right_motor.set_speed(right_speed)

    @task
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

        self._left_motor.set_speed(left_speed)
        self._right_motor.set_speed(right_speed)

    def input_changed(self, changed_input):
        print("steering input changed:", changed_input.input_id, changed_input.value)
        if changed_input == self.all_off_button:
            self._left_motor.set_speed(0)
            self._right_motor.set_speed(0)

        if changed_input == self.speed_input or changed_input == self.direction_input:
            self.run(self.speed_input.value, self.direction_input.value)
