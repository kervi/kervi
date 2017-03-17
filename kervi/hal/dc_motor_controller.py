
class _MotorNumOutOfBoundsError(Exception):
    def __init__(self, device_name, motor):
        super(_MotorNumOutOfBoundsError, self).__init__(
            '{0} Exception: Motor num out of Bounds, motor={1}'.format(device_name, motor)
        )

class DCMotor(object):
    def __init__(self, device, motor):
        self._device = device
        self._motor = motor

    def speed(self, speed):
        self._device._set_speed(self._motor, speed)

class DCMotorControllerBase(object):
    def __init__(self, device_name, num_motors):
        self._num_motors = num_motors
        self._device_name = device_name

    def __getitem__(self, motor):
        return DCMotor(self, motor)


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
