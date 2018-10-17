from kervi.hal.gpio import IGPIODeviceDriver


class GPIODriver(IGPIODeviceDriver):

    def __init__(self, gpio_id="generic_gpio"):
        IGPIODeviceDriver.__init__(self, gpio_id)
        pass

    def _get_channel_type(self, channel):
        from kervi.hal.gpio import CHANNEL_TYPE_GPIO, CHANNEL_TYPE_ANALOG_IN, CHANNEL_TYPE_ANALOG_OUT
        if channel in ["GPIO1", "GPIO2", "GPIO3"]:
            return CHANNEL_TYPE_GPIO
        elif channel in ["DAC1", "DAC2"]:
            return CHANNEL_TYPE_ANALOG_OUT
        elif channel in ["ADC1", "ADC2"]:
            return CHANNEL_TYPE_ANALOG_IN

    def _get_channel_names(self):
        return ["GPIO1", "GPIO2", "GPIO3", "DAC1", "DAC2", "ADC1", "ADC2"]

    @property
    def name(self):
        return "Generic GPIO"

    def define_as_input(self, pin, pullup=None, bounce_time=0):
        print("define pin in")

    def define_as_output(self, pin):
        print("define pin out")

    def define_as_pwm(self, pin, frequency, duty_cycle):
        print("define pwm")

    def set(self, pin, state):
        print("set pin", state)

    def get(self, pin):
        print("get pin")
        return 0

    def pwm_start(self, channel, duty_cycle=None, frequency=None):
        print("start pwm")

    def pwm_stop(self, pin):
        print("stop pwm")

    def listen(self, pin, callback, bounce_time=0):
        print("listen rising")

    def listen_rising(self, pin, callback, bounce_time=0):
        print("listen rising")

    def listen_falling(self, pin, callback, bounce_time=0):
        print("listen falling")
