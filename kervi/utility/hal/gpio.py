"""

"""

class KerviGPIO(object):
    def __init__(self, driver):
        self.driver = driver

    def define_as_in(self, pin):
        self.driver.define_pin_in(pin)

    def define_as_out(self, pin):
        self.driver.define_pin_out(pin)

    def define_as_pwm(self, pin, frequency):
        self.driver.define_pin_pwm(pin, frequency)

    def set_high(self, pin):
        self.driver.set_pin_high(pin)

    def set_low(self, pin):
        self.driver.set_pin_low(pin)

    def get(self, pin):
        return self.driver.get_pin(pin)

    def listen_rising(self, pin, callback):
        self.driver.listen_rising_pin(pin, callback)

    def listen_falling(self, pin, callback):
        self.driver.listen_falling_pin(pin, callback)

    def pwm_start(self, pin, duty_cycle):
        self.driver.start_pwm(pin, duty_cycle)

    def pwm_stop(self, pin):
        self.driver.stop_pwm(pin)

