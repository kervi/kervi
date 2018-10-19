from kervi.hal.motor_controller import MotorControllerBoard, ServoMotorControllerBase, DCMotorControllerBase, StepperMotorControllerBase

class _DummyDCMotorDeviceDriver(DCMotorControllerBase):
    def __init__(self, controller_id, controller_name):
        DCMotorControllerBase.__init__(self, controller_id , controller_name, 4)

    def _set_speed(self, motor, speed):
        print("set speed:", motor, speed)

class _DummyStepperMotorDeviceDriver(StepperMotorControllerBase):
    def __init__(self, controller_id):
        StepperMotorControllerBase.__init__(self, controller_id, "Dummy stepper motor driver", 2)
        self.steps = 0

    def _step(self, motor, style):
        print("step:", motor, style)

    def _release(self, motor):
        print("release step motor:", motor)

    def run(self, step_interval):
        print("stepper, run")


class _DummyServoController(ServoMotorControllerBase):
    def __init__(self, controller_id):
        ServoMotorControllerBase.__init__(self, controller_id, "Dummy servo controller", 4)

    def _set_position(self, channel, position, adjust_min=0, adjust_max=0, adjust_center=0):
        print("servo set position", channel, position)

class DummyMotorBoard(MotorControllerBoard):
    def __init__(self, board_id="dummy_motors", board_name="Dummy motor board"):
        
        MotorControllerBoard.__init__(
            self,
            board_id,
            board_name,
            dc_controller=_DummyDCMotorDeviceDriver(board_id + ".dc_motors", board_name + "-DC motors"),
            stepper_controller=_DummyStepperMotorDeviceDriver(board_id + ".stepper_motors"),
            servo_controller = _DummyServoController(board_id + ".servo_motors"),
        )
