"""

"""

class KerviGPIO(object):
    def __init__(self, driver):
        self.driver = driver

        self.IN = 'in'
        self.OUT = 'out'
        self.PWM = 'pwm'
        self.NO_EDGE = 0
        self.RISING_EDGE = 1
        self.FALLING_EDGE = 2
        self.BOTH_EDGE = 3

    def setup(self, pin, io_type, **kwargs):
        self.driver.setup_pin(pin, io_type, **kwargs)

    def set(self, pin, state):
        self.driver.set_pin(pin, state)

    def get(self, pin):
        return self.driver.get_pin(pin)

    def listen(self, pin, direction, callback):
        self.driver.listen_to_pin(pin, direction, callback)

    def duty_cycle(self, pin, duty_cycle):
        self.driver.duty_cycle(pin, duty_cycle)

