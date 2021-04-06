from kervi.hal.motor_controller import MotorControllerBoard, DCMotorControllerBase, StepperMotorControllerBase

class _DCMotorController(DCMotorControllerBase):
    def __init__(self, controller_id, ena, in1, in2, enb, in3, in4):
        DCMotorControllerBase.__init__(self, controller_id, "LN298", 2)

        self._motors = [(ena, in1, in2), (enb, in3, in4)]
        for motor in self._motors:
            en, in1, in2 = motor
            if en: en.define_as_pwm()
            in1.define_as_output()
            in2.define_as_output()

    def _set_speed(self, motor, speed):
        """
        Change the speed of a motor on the controller.

        :param motor: The motor to change.
        :type motor: ``int``

        :param speed: Speed from -100 to +100, 0 is stop
        :type speed: ``int``

        """
        self._validate_motor(motor)
        en, in1, in2 = self._motors[motor-1]

        if speed == 0:
            en.pwm_stop()
            in1.set(False)
            in2.set(False)
        elif speed > 0:
            en.pwm_start(abs(speed))
            in1.set(True)
            in2.set(False)
        else:
            en.pwm_start(abs(speed))
            in1.set(False)
            in2.set(True)


class _StepperMotorController(StepperMotorControllerBase):
    def __init__(self, controller_id, in1, in2, in3, in4):
        StepperMotorControllerBase.__init__(self, controller_id, "LN298", 1)
        self._current_step = -1
        self.in1 = in1
        self.in2 = in2
        self.in3 = in3
        self.in4 = in4
        self.in1.define_as_output()
        self.in2.define_as_output()
        self.in3.define_as_output()
        self.in4.define_as_output()
        self.in1.enable_change_events = False
        self.in2.enable_change_events = False
        self.in3.enable_change_events = False
        self.in4.enable_change_events = False
        self.in1.allow_persist = False
        self.in2.allow_persist = False
        self.in3.allow_persist = False
        self.in4.allow_persist = False
        

    def _step(self, motor, coil_map):
        self.in1.value = coil_map[0]
        self.in2.value = coil_map[1]
        self.in3.value = coil_map[2]
        self.in4.value = coil_map[3]
        pass

class LN298DeviceDriver(MotorControllerBoard):
    def __init__(self, ena, in1, in2, enb, in3, in4, board_id="LN298", board_name="LN298"):
        MotorControllerBoard.__init__(
            self,
            board_id,
            board_name,
            dc_controller =_DCMotorController(board_id + ".dc_motors", ena, in1, in2, enb, in3, in4),
            stepper_controller = _StepperMotorController(board_id + "._stepper_motors", in1, in2, in3, in4) 
        )
