#Copyright 2018 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

from kervi.hal.gpio import IGPIODeviceDriver

class GPIODriver(IGPIODeviceDriver):
    def __init__(self, gpio_id="UPYTHON_GPIO"):

        print("init upython gpio driver")
        IGPIODeviceDriver.__init__(self, gpio_id)
        self._pwm_pins = {}
        self._pin_map ={
            "gpio2":3,
            "gpio3":5,
            "gpio4":7,
            "gpio5":29,
            "gpio6":31,
            "gpio7":25,
            "gpio8":24,
            "gpio9":21,
            "gpio10":19,
            "gpio11":23,
            "gpio12":32,
            "gpio13":33,
            "gpio14":8,
            "gpio15":10,
            "gpio16":36,
            "gpio17":11,
            "gpio18":12,
            "gpio19":35,
            "gpio20":38,
            "gpio21":40,
            "gpio22":15,
            "gpio23":16,
            "gpio24":18,
            "gpio25":22,
            "gpio26":37,
            "gpio27":13
        }

    @property
    def name(self):
        return "uPython GPIO"

    def _map_pin(self, channel):
        if isinstance(channel, int):
            return channel
        elif str(channel) in self._pin_map.keys():
            return self._pin_map[str(channel)]
        else:
            return int(channel)

    def _get_channel_type(self, channel):
        from kervi.hal.gpio import CHANNEL_TYPE_GPIO
        return CHANNEL_TYPE_GPIO
    
    def _get_channel_names(self):
        return self._pin_map.keys()

    def define_as_input(self, pin, pull_up=False):
        raise NotImplementedError

    def define_as_output(self, pin):
        raise NotImplementedError

    def define_as_pwm(self, pin, frequency, duty_cycle):
        raise NotImplementedError

    def set(self, pin, state):
        raise NotImplementedError

    def get(self, pin):
        raise NotImplementedError

    def pwm_start(self, pin, duty_cycle=None, frequency=None):
        if duty_cycle!=None:
            self._pwm_pins[int(pin)][1] = duty_cycle

        self._pwm_pins[int(pin)][0].start(self._pwm_pins[int(pin)][1])

    def pwm_stop(self, pin):
        self._pwm_pins[int(pin)][0].stop()

    def listen(self, pin, callback, bounce_time=0):
        raise NotImplementedError

    def listen_rising(self, pin, callback, bounce_time=0):
        raise NotImplementedError

    def listen_falling(self, pin, callback, bounce_time=0):
        raise NotImplementedError
