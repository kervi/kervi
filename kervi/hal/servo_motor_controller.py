class _MotorNumOutOfBoundsError(Exception):
    def __init__(self, device_name, motor):
        super(_MotorNumOutOfBoundsError, self).__init__(
            '{0} Exception: Motor num out of Bounds, motor={1}'.format(device_name, motor)
        )

class ServoMotor(object):
    def __init__(self, device, motor):
        self._device = device
        self._motor = motor
        self._min_pulse = None
        self._max_pulse = None

    def set_position(self, position):
        self._device.set_position(self._motor, position)

    @property
    def min_pulse(self):
        pass

    def set(self, value, lock=False):
        self._device._set_speed(self._motor, speed)

class ServoMotorControllerBase(object):
    def __init__(self, num_motors):
        self._num_motors = num_motors

    def __getitem__(self, motor):
        return ServoMotor(self, motor)

    def set_position(self, motor, position):
        raise NotImplementedError