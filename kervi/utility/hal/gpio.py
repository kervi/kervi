"""

"""

class IGPIODeviceDriver(object):
    def define_as_input(self, pin):
        raise NotImplementedError

    def define_as_output(self, pin):
        raise NotImplementedError

    def define_as_pwm(self, pin, frequency, duty_cycle=None):
        raise NotImplementedError

    def set(self, pin, state):
        raise NotImplementedError

    def get(self, pin):
        raise NotImplementedError

    def listen(self, pin, callback):
        raise NotImplementedError

    def listen_rising(self, pin, callback):
        raise NotImplementedError

    def listen_falling(self, pin, callback):
        raise NotImplementedError

    def pwm_start(self, pin, duty_cycle=None, frequency=None):
        raise NotImplementedError

    def pwm_stop(self, pin):
        raise NotImplementedError
