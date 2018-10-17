

from kervi.hal import get_i2c
from kervi.hal.motor_controller import MotorControllerBoard, DCMotorControllerBase, StepperMotorControllerBase

MOTOR_SPEED_SET = 0x82
PWM_FREQUENCE_SET = 0x84
DIRECTION_SET = 0xaa
MOTOR_SET_A = 0xa1
MOTOR_SET_B = 0xa5
NOTHING = 0x01
ENABLE_STEPPER = 0x1a
UNENABLE_STEPPER = 0x1b
STEPERNU = 0x1c
I2C_MOTOR_DRIVER_ADD = 0x0f #Set the address of the I2CMotorDriver

BOTH_CLOCK_WISE = 0x0a
BOTH_ANTI_CLOCK_WISE = 0x05
M1_CW_M2_ACW = 0x06
M1_ACW_M2CW = 0x09

class _DCMotorDeviceDriver(DCMotorControllerBase):
    def __init__(self, controller_id, address=I2C_MOTOR_DRIVER_ADD, bus=None):
        DCMotorControllerBase.__init__(self, controller_id, "Grove i2c motor driver", 2)
        self.i2c = get_i2c(address, bus)
        self.m1_speed = 0
        self.m2_speed = 0

        self.m1_direction = 1
        self.m2_direction = 1

    def _map(self, x, in_min, in_max, out_min, out_max):
        return abs(int((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min))

    def _set_speed(self, motor, speed):
        if motor == 1:
            self.m1_speed = self._map(speed, 0, 100, 0, 255)
            if speed >= 0:
                self.m1_direction = 1
            else:
                self.m1_direction = -1

        else:
            self.m2_speed = self._map(speed, 0, 100, 0, 255)
            if speed >= 0:
                self.m2_direction = 1
            else:
                self.m2_direction = -1

        if self.m1_direction == 1 and self.m2_direction == 1:
            direction = BOTH_CLOCK_WISE
        if self.m1_direction == 1 and self.m2_direction == -1:
            direction = M1_CW_M2_ACW
        if self.m1_direction == -1 and self.m2_direction == 1:
            direction = M1_ACW_M2CW
        if self.m1_direction == -1 and self.m2_direction == -1:
            direction = BOTH_ANTI_CLOCK_WISE

        self.i2c.write_list(MOTOR_SPEED_SET, [self.m1_speed, self.m2_speed])
        self.i2c.write_list(DIRECTION_SET, [direction, NOTHING])

class _StepperMotorDeviceDriver(StepperMotorControllerBase):
    def __init__(self, controller_id, address, bus=None):
        StepperMotorControllerBase.__init__(self, controller_id, "Grove i2c motor driver", 2)
        self.i2c = get_i2c(address, bus)

    def step(self, num_step):
        self.i2c.write_i2c_block_data(I2C_MOTOR_DRIVER_ADD, STEPERNU, [num_step, NOTHING])

        ## Enanble the i2c motor driver to drive a 4-wire stepper. the i2c motor driver will
        ## driver a 4-wire with 8 polarity  .
        ## Direction: stepper direction ; 1/0
        ## motor speed: defines the time interval the i2C motor driver change it output to drive the stepper
        ## the actul interval time is : motorspeed * 4ms. that is , when motor speed is 10, the interval time 
        ## would be 40 ms

    def run(self, step_interval):
        if step_interval > 0:
            direction = 1
        else:
            direction = 0

        speed = abs(int(step_interval / 4))
        self.i2c.write_i2c_block_data(I2C_MOTOR_DRIVER_ADD, ENABLE_STEPPER, [direction, speed])

    ##function to uneanble i2C motor drive to drive the stepper.
    def stop(self):
        self.i2c.write_i2c_block_data(I2C_MOTOR_DRIVER_ADD, UNENABLE_STEPPER, [NOTHING, NOTHING])


class GroveMotorController(MotorControllerBoard):
    def __init__(self, address, bus=None, board_id="grove_motor_controller", board_name="Grove motor controller"):
        MotorControllerBoard.__init__(
            self,
            board_id,
            board_name,
            dc_controller=_DCMotorDeviceDriver(board_id + ".dc_motors",address, bus),
            stepper_controller=_StepperMotorDeviceDriver(board_id + ".stepper_motors",address, bus)
        )
