# Copyright (c) 2017, Tim Wentzlau
# Licensed under MIT

class MotorSteering(object):
    """
    Control the speed and direction of two motors.
    """
    def __init__(self, left_motor, right_motor):
        self._left_motor = left_motor
        self._right_motor = right_motor
        self._adjust = 0

    @property
    def adjust(self):
        return self._adjust

    @adjust.setter
    def adjust(self, value):
        self._adjust = value

    def run(self, speed, left_right_balance, rotation=False):
        print("steering run:", speed, left_right_balance)
        new_direction = left_right_balance + self._adjust

        if rotation:
            left_speed = speed * (-new_direction / 100)
            right_speed = speed * (new_direction / 100)
        elif left_right_balance > 0:
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
