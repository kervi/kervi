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

    def run(self, speed, direction, rotation=False):
        print("steering run:", speed, direction)
        new_direction = direction + self._adjust

        if rotation:
            left_speed = speed * (-new_direction / 100)
            right_speed = speed * (new_direction / 100)
        elif direction > 0:
            left_speed = speed * (1 - new_direction / 100)
            right_speed = speed
        elif direction < 0:
            left_speed = speed
            right_speed = speed * (1 + new_direction / 100)
        elif direction == 0:
            left_speed = speed
            right_speed = speed

        self._left_motor.run(left_speed)
        self._right_motor.run(right_speed)
