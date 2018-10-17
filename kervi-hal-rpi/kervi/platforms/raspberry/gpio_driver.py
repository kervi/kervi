# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
import RPi.GPIO as GPIO
from kervi.hal.gpio import IGPIODeviceDriver

GPIO.setmode(GPIO.BOARD)

class GPIODriver(IGPIODeviceDriver):
    def __init__(self, gpio_id="RPI_GPIO"):

        print("init rpi gpio driver")
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
        return "RPI GPIO"

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
        if pull_up:
            GPIO.setup(int(pin), GPIO.IN, pull_up_down=GPIO.PUD_UP)
        else:
            GPIO.setup(int(pin), GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

    def define_as_output(self, pin):
        GPIO.setup(int(pin), GPIO.OUT)

    def define_as_pwm(self, pin, frequency, duty_cycle):
        GPIO.setup(int(pin), GPIO.OUT)
        pwm_pin = GPIO.PWM(int(pin), frequency)
        self._pwm_pins[int(pin)] = [pwm_pin, duty_cycle]

    def set(self, pin, state):
        GPIO.output(int(pin), state)

    def get(self, pin):
        return GPIO.input(int(pin))

    def pwm_start(self, pin, duty_cycle=None, frequency=None):
        if duty_cycle!=None:
            self._pwm_pins[int(pin)][1] = duty_cycle

        self._pwm_pins[int(pin)][0].start(self._pwm_pins[int(pin)][1])

    def pwm_stop(self, pin):
        self._pwm_pins[int(pin)][0].stop()

    def listen(self, pin, callback, bounce_time=0):
        if bounce_time > 0:
            GPIO.add_event_detect(int(pin), GPIO.BOTH, callback=callback, bouncetime=bounce_time)
        else:
            GPIO.add_event_detect(int(pin), GPIO.BOTH, callback=callback)

    def listen_rising(self, pin, callback, bounce_time=0):
        GPIO.add_event_detect(int(pin), GPIO.RISING, callback=callback, bouncetime=bounce_time)

    def listen_falling(self, pin, callback, bounce_time=0):
        GPIO.add_event_detect(int(pin), GPIO.FALLING, callback=callback, bouncetime=bounce_time)
