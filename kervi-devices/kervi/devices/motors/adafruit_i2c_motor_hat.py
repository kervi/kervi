
import time

from kervi.devices.pwm.PCA9685 import PCA9685DeviceDriver
from kervi.hal.motor_controller import MotorControllerBoard, DCMotor, DCMotorControllerBase, StepperMotor, StepperMotorControllerBase

FORWARD = 1
BACKWARD = 2
BRAKE = 3
RELEASE = 4

SINGLE = 1
DOUBLE = 2
INTERLEAVE = 3
MICROSTEP = 4

class _DCMotorController(DCMotorControllerBase):
    def __init__(self, controller_id, pwm):
        self.pwm_device = pwm
        DCMotorControllerBase.__init__(self, controller_id, "Adafruit DC + Stepper hat:dc", 4)

    def _set_speed(self, motor, speed):
        pwm = in1 = in2 = 0

        if motor == 0:
            pwm = 8
            in2 = 9
            in1 = 10
        elif motor == 1:
            pwm = 13
            in2 = 12
            in1 = 11
        elif motor == 2:
            pwm = 2
            in2 = 3
            in1 = 4
        elif motor == 3:
            pwm = 7
            in2 = 6
            in1 = 5
        else:
            raise NameError('MotorHAT Motor must be between 1 and 4 inclusive')
        pwm_pin = pwm
        in1_pin = in1
        in2_pin = in2

        if speed > 0:
            self.pwm_device.set(in2_pin, 0)
            self.pwm_device.set(in1_pin, 1)
        if speed < 0:
            self.pwm_device.set(in1_pin, 0)
            self.pwm_device.set(in2_pin, 1)
        if speed == 0:
            self.pwm_device.set(in1_pin, 0)
            self.pwm_device.set(in2_pin, 0)

        self.pwm_device.set_pwm(pwm_pin, 0, abs(int(4095 * (speed/100))))

class _StepperMotor(StepperMotor):

    MICROSTEP_CURVE = [0, 50, 98, 142, 180, 212, 236, 250, 255]

    #MICROSTEPS = 16
    # a sinusoidal curve NOT LINEAR!
    #MICROSTEP_CURVE = [0, 25, 50, 74, 98, 120, 141, 162, 180, 197, 212, 225, 236, 244, 250, 253, 255]

    def __init__(self, pwm_device, num, steps=200):
        StepperMotor.__init__(self, pwm_device, num)
        self.pwm = pwm_device
        self.revsteps = steps
        if num == 0:
            self.PWMA = 8
            self.AIN2 = 9
            self.AIN1 = 10
            self.PWMB = 13
            self.BIN2 = 12
            self.BIN1 = 11
        elif num == 1:
            self.PWMA = 2
            self.AIN2 = 3
            self.AIN1 = 4
            self.PWMB = 7
            self.BIN2 = 6
            self.BIN1 = 5
        else:
            raise NameError('MotorHAT Stepper must be between 1 and 2 inclusive')

    def _release(self):
        self.pwm.set(self.PWMA, 0)
        self.pwm.set(self.AIN2, 0)
        self.pwm.set(self.BIN1, 0)
        self.pwm.set(self.AIN1, 0)
        self.pwm.set(self.BIN2, 0)
        self.pwm.set(self.PWMB, 0)

    def _step(self, dir, style):
        pwm_a = pwm_b = 255

        # first determine what sort of stepping procedure we're up to
        if style == self.SINGLE:
            if (self.current_step//(self.MICROSTEPS//2)) % 2:
                # we're at an odd step, weird
                if dir == FORWARD:
                    self.current_step += self.MICROSTEPS//2
                else:
                    self.current_step -= self.MICROSTEPS//2
            else:
                # go to next even step
                if dir == FORWARD:
                    self.current_step += self.MICROSTEPS
                else:
                    self.current_step -= self.MICROSTEPS
        if style == self.DOUBLE:
            if not self.current_step//(self.MICROSTEPS//2) % 2:
                # we're at an even step, weird
                if dir == FORWARD:
                    self.current_step += self.MICROSTEPS//2
                else:
                    self.current_step -= self.MICROSTEPS//2
            else:
                # go to next odd step
                if dir == self.FORWARD:
                    self.current_step += self.MICROSTEPS
                else:
                    self.current_step -= self.MICROSTEPS
        if style == self.INTERLEAVE:
            if dir == FORWARD:
                self.current_step += self.MICROSTEPS//2
            else:
                self.current_step -= self.MICROSTEPS//2

        if style == MICROSTEP:
            if dir == FORWARD:
                self.current_step += 1
            else:
                self.current_step -= 1

                # go to next 'step' and wrap around
                self.current_step += self.MICROSTEPS * 4
                self.current_step %= self.MICROSTEPS * 4

            pwm_a = pwm_b = 0
            if (self.current_step >= 0) and (self.current_step < self.MICROSTEPS):
                pwm_a = self.MICROSTEP_CURVE[self.MICROSTEPS - self.current_step]
                pwm_b = self.MICROSTEP_CURVE[self.current_step]
            elif (self.current_step >= self.MICROSTEPS) and (self.current_step < self.MICROSTEPS*2):
                pwm_a = self.MICROSTEP_CURVE[self.current_step - self.MICROSTEPS]
                pwm_b = self.MICROSTEP_CURVE[self.MICROSTEPS*2 - self.current_step]
            elif (self.current_step >= self.MICROSTEPS*2) and (self.current_step < self.MICROSTEPS*3):
                pwm_a = self.MICROSTEP_CURVE[self.MICROSTEPS*3 - self.current_step]
                pwm_b = self.MICROSTEP_CURVE[self.current_step - self.MICROSTEPS*2]
            elif (self.current_step >= self.MICROSTEPS*3) and (self.current_step < self.MICROSTEPS*4):
                pwm_a = self.MICROSTEP_CURVE[self.current_step - self.MICROSTEPS*3]
                pwm_b = self.MICROSTEP_CURVE[self.MICROSTEPS*4 - self.current_step]


        # go to next 'step' and wrap around
        self.current_step += self.MICROSTEPS * 4
        self.current_step %= self.MICROSTEPS * 4

        # only really used for microstepping, otherwise always on!
        self.pwm.set_pwm(self.PWMA, 0, pwm_a*16)
        self.pwm.set_pwm(self.PWMB, 0, pwm_b*16)

        # set up coil energizing!
        coils = [0, 0, 0, 0]

        if style == MICROSTEP:
            if (self.current_step >= 0) and (self.current_step < self.MICROSTEPS):
                coils = [1, 1, 0, 0]
            elif (self.current_step >= self.MICROSTEPS) and (self.current_step < self.MICROSTEPS*2):
                coils = [0, 1, 1, 0]
            elif (self.current_step >= self.MICROSTEPS*2) and (self.current_step < self.MICROSTEPS*3):
                coils = [0, 0, 1, 1]
            elif (self.current_step >= self.MICROSTEPS*3) and (self.current_step < self.MICROSTEPS*4):
                coils = [1, 0, 0, 1]
        else:
            step2coils = [
                [1, 0, 0, 0],
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 1],
                [0, 0, 0, 1],
                [1, 0, 0, 1]
            ]
            coils = step2coils[self.current_step//(self.MICROSTEPS//2)]

        #print "coils state = " + str(coils)
        self.pwm.set(self.AIN2, coils[0])
        self.pwm.set(self.BIN1, coils[1])
        self.pwm.set(self.AIN1, coils[2])
        self.pwm.set(self.BIN2, coils[3])

        return self.current_step

class _StepperMotorController(StepperMotorControllerBase):
    def __init__(self, controller_id, pwm):
        self.pwm = pwm
        StepperMotorControllerBase.__init__(self, controller_id, "Adafruit DC + Stepper hat:servo", 2)

    def __getitem__(self, motor):
        return _StepperMotor(self.pwm, motor)

class AdafruitMotorHAT(MotorControllerBoard):
    def __init__(self, address=0x60, bus=None, board_id="adafruit_motor_hat"):
        self.pwm = PCA9685DeviceDriver(address, bus)
        self.pwm.set_pwm_freq(60)

        MotorControllerBoard.__init__(
            self,
            board_id,
            "Adafruit DC + Stepper hat",
            dc_controller=_DCMotorController(board_id + ".dc_motors",self.pwm),
            stepper_controller=_StepperMotorController(board_id + ".stepper_motors",self.pwm)
        )
