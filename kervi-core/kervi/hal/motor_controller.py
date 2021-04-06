#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

import time
from kervi.core.utility.thread import KerviThread
from kervi.values import *
from kervi.controllers import Controller

class _MotorNumOutOfBoundsError(Exception):
    def __init__(self, device_name, motor):
        super(_MotorNumOutOfBoundsError, self).__init__(
            '{0} Exception: Motor num out of Bounds, motor={1}'.format(device_name, motor)
        )

class DCMotor(object):
    def __init__(self, motor):
        self._speed = motor

    @property
    def speed(self):
        return self._speed

class DCMotorControllerBase(Controller):
    def __init__(self, controller_id, device_name, num_motors):
        Controller.__init__(self, controller_id, device_name + "-DC motors")
        self._num_motors = num_motors
        self._device_name = device_name

        for motor in range(0, num_motors):
            self.inputs.add("motor_" +  str(motor), "Motor " + str(motor), NumberValue)

    def __getitem__(self, motor):
        return DCMotor(self.inputs["motor_" + str(motor)])

    def _validate_motor(self, motor):
        if motor < 0 or motor > self._num_motors:
            raise _MotorNumOutOfBoundsError(self._device_name, motor)

    @property
    def device_name(self):
        """Motor controller device name"""
        return self._device_name

    @property
    def num_motors(self):
        """Number of DC motors this motor controller can handle"""
        return self._num_motors

    def input_changed(self, changed_input):
        self._set_speed(changed_input.index, changed_input.value)

    def _set_speed(self, motor, speed):
        """
        Change the speed of a motor on the controller.

        :param motor: The motor to change.
        :type motor: ``int``

        :param speed: Speed from -100 to +100, 0 is stop
        :type speed: ``int``

        """
        raise NotImplementedError

    def stop_all(self):
        """Stops all motors connected to the motor controller"""
        raise NotImplementedError

class _StepperRunThread(KerviThread):
    def __init__(self, motor):
        KerviThread.__init__(self)
        self.motor = motor
        self.thread_enabled = False
        self.step_delay = 1
        self.direction = 1
        self.step_type = 1
        self.steps = 1
        self.continuous = False 

    def _step(self):
        if self.thread_enabled:
            if self.steps > 0:
                self.motor._step(self.direction, self.step_delay, self.step_type)
                if not self.continuous:
                    self.steps -= 1
                    if self.steps == 0:
                        self.thread_enabled = False
                        self.motor._device._step(self.motor._motor, [False, False, False, False])
        else:
            time.sleep(.1)

class StepperMotor(object):
    FULL_STEP = 2
    HALF_STEP = 1
    WAVE_DRIVE = 0

    def __init__(self, device, motor):
        self._device = device
        self._motor = motor
        self._step_style = self.HALF_STEP
        self._stepping_counter = 0
        self._current_step = 0
        self._stepper_thread = None

        self._min_step_delay = 0.01
        
        self._position = NumberValue(
            "stepper position " +str(motor),
            input_id="stepper_position_" + str(motor),
            parent=self._device,
            index=motor
        )
        self._position.add_observer(self)

        self._speed = NumberValue(
            "stepper speed " +str(motor),
            input_id="stepper_speed_" + str(motor),
            parent=self._device,
            index=motor
        )
        self._speed.add_observer(self)
        
        self._map = [
        [
            [True, False, False, False],
            [True, True, False, False],
            [False, True, False, False],
            [False, True, True, False],
            [False, False, True, False],
            [False, False, True, True],
            [False, False, False, True],
            [True, False, False, True]
        ],
        [
            [True, False, False, False],
            [False, True, False, False],
            [False, False, True, False],
            [False, False, False, True],
            [True, False, False, False],
            [False, True, False, False],
            [False, False, True, False],
            [False, False, False, True]    
        ],
        [
            [True, True, False, False],
            [False, True, True, False],
            [False, False, True, True],
            [True, False, False, True],
            [True, True, False, False],
            [False, True, True, False],
            [False, False, True, True],
            [True, False, False, True]    
        ]]
    
    @property
    def speed(self):
        return self._speed
    
    @property
    def position(self):
        return self._position

    def kervi_value_changed(self, input, value):
        if input == self._speed:
            print("vcs", value)
        if input == self._position:
            print("vcp", value)
        pass
    
    def _step(self, steps, step_delay, step_type = 1):
        map_index = step_type
        if steps > 0:
            while steps > 0:
                if self._current_step < 7:
                    self._current_step += 1
                else:
                    self._current_step = 0
                self._device._step(self._motor, self._map[map_index][self._current_step])
                time.sleep(step_delay)
                steps -= 1
        else:
            while steps < 0:
                if self._current_step > 0:
                    self._current_step -= 1
                else:
                    self._current_step = 7
                self._device._step(self._motor, self._map[map_index][self._current_step])
                time.sleep(step_delay)
                steps += 1
    

    def step(self, steps, step_delay, step_type = 1, step_async = False):
        self._current_step= -1
        if not step_async:
            
            self._step(steps, step_delay, step_type)
            self._device._step(self._motor, [False, False, False, False])
        else:
            if not self._stepper_thread:
                self._stepper_thread = _StepperRunThread(self)
                self._stepper_thread.step_delay = step_delay
                self._stepper_thread.direction = 1 if steps > 0 else -1
                self._stepper_thread.steps = abs(steps)
                self._stepper_thread.thread_enabled = True
                self._stepper_thread.start()
            else:
                self._stepper_thread.direction = 1 if steps > 0 else -1
                self._stepper_thread.step_delay = step_delay
                self._stepper_thread.steps = abs(steps)
                self._stepper_thread.thread_enabled = True
    
    def stop(self):
        if self._stepper_thread:
            self._stepper_thread.thread_enabled = False
            self._device._step(self._motor, [False, False, False, False])
        

class StepperMotorControllerBase(Controller):
    def __init__(self, controller_id, device_name, num_motors):
        Controller.__init__(self, controller_id, device_name + "-Stepper motors")
        self._num_motors = num_motors
        self._device_name = device_name

    def __getitem__(self, motor):
        return StepperMotor(self, motor)

    def _validate_motor(self, motor):
        if motor < 0 or motor > self._num_motors:
            raise _MotorNumOutOfBoundsError(self._device_name, motor)

    @property
    def device_name(self):
        """Motor controller device name"""
        return self._device_name

    @property
    def num_motors(self):
        """Number of stepper motors this motor controller can handle"""
        return self._num_motors

    def _release(self, motor):
        raise NotImplementedError

    def _set_speed(self, motor, speed):
        """
        Change the speed of a motor on the controller.

        :param motor: The motor to change.
        :type motor: ``int``

        :param speed: Speed from -100 to +100, 0 is stop
        :type speed: ``int``

        """
        raise NotImplementedError

    def stop_all(self):
        """Stops all motors connected to the motor controller"""
        raise NotImplementedError

class ServoMotor(object):
    def __init__(self, device, motor):
        self._device = device
        self._motor = motor
        self._position = NumberValue(
            "Servo " +str(motor),
            input_id="servo_" + str(motor),
            parent=self._device,
            index=motor
        )
        self._position.add_observer(self)
        self._adjust_max = 0
        self._adjust_min = 0
        self._adjust_center = 0

    @property
    def position(self):
        return self._position
    
    @property
    def adjust_max(self):
        return self._adjust_max

    @adjust_max.setter
    def adjust_max(self, value):
        self._adjust_max = value

    @property
    def adjust_min(self):
        return self._adjust_min

    @adjust_min.setter
    def adjust_min(self, value):
        self._adjust_min = value

    @property
    def adjust_center(self):
        return self._adjust_center

    @adjust_center.setter
    def adjust_center(self, value):
        self._adjust_center = value

    def kervi_value_changed(self, input, value):
        self.set_position(value)

    def set_position(self, position):
        self._device._set_position(self._motor, position, self.adjust_min, self.adjust_max, self.adjust_center)

class ServoMotorControllerBase(Controller):
    def __init__(self, controller_id , device_name, num_motors):
        Controller.__init__(self, controller_id, device_name + "-DC motors")

        self._num_motors = num_motors
        self._device_name = device_name

    def __getitem__(self, motor):
        self._validate_motor(motor)
        return ServoMotor(self, motor)

    def _validate_motor(self, motor):
        if motor < 0 or motor > self._num_motors:
            raise _MotorNumOutOfBoundsError(self._device_name, motor)

    @property
    def device_name(self):
        """Motor controller device name"""
        return self._device_name

    @property
    def num_motors(self):
        """Number of DC motors this motor controller can handle"""
        return self._num_motors

    def _set_servo(self, motor, position, adjust_min=0, adjust_max=0, adjust_center=0):
        """
        Change the angle of a servo on the controller.

        :param motor: The motor to change.
        :type motor: ``int``

        :param position: position from -100 to +100, 0 is neutral
        :type position: ``int``

        :param adjust_min: factor to adjust min position. Value should be between -1 and 1
        :type position: ``float``

        :param adjust_max: factor to adjust max position. Value should be between -1 and 1.
        :type position: ``float``

        :param adjust_center: factor to adjust center position. Value should be between -1 and 1
        :type position: ``float``

        """
        raise NotImplementedError

    def stop_all(self):
        """Stops all motors connected to the motor controller"""
        raise NotImplementedError



class MotorControllerBoard(object):
    def __init__(self, board_id, device_name, dc_controller=None, stepper_controller=None, servo_controller=None):

        self.board_id = board_id

        if dc_controller:
            self._dc = dc_controller
        else:
            self._dc = DCMotorControllerBase(board_id+".dc_motors", device_name, 0)

        if stepper_controller:
            self._stepper = stepper_controller
        else:
            self._stepper = StepperMotorControllerBase(board_id+".stepper_motors", device_name, 0)

        if servo_controller:
            self._servo = servo_controller
        else:
            self._servo = ServoMotorControllerBase(board_id+".servo_motors", device_name, 0)

    @property
    def dc_motors(self):
        return self._dc

    @property
    def servo_motors(self):
        return self._servo

    @property
    def stepper_motors(self):
        return self._stepper
