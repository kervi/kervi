# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

import time
import random
from kervi.hal import DeviceChannelOutOfBoundsError, DACValueOutOfBoundsError
from kervi.hal import ChannelPollingThread
from kervi.hal.gpio import IGPIODeviceDriver, CHANNEL_TYPE_GPIO, CHANNEL_TYPE_ANALOG_IN, CHANNEL_TYPE_ANALOG_OUT
from kervi.core.utility.thread import KerviThread
from kervi import spine

class GPIODummyDriver(IGPIODeviceDriver):

    # Constructor
    def __init__(self, gpio_id = "dummy_gpio", manual = False):
        IGPIODeviceDriver.__init__(self, gpio_id)
        self._manual = manual
        self._listeners = []
        self._pin_map = {
            "AIN0": 0,
            "AIN1": 1,
            "AIN2": 2,
            "AIN3": 3,
            "AOUT0": 4,
            "AOUT1": 5,
            "AOUT2": 6,
            "AOUT3": 7
        }
        self._values = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0
        }

    def _get_channel_type(self, channel):
        if int(channel) in [0, 1, 2, 3]:
            return CHANNEL_TYPE_ANALOG_IN
        elif int(channel) in [4, 5, 6, 7]:
            return CHANNEL_TYPE_ANALOG_OUT

    def _get_channel_names(self):
        return self._pin_map.keys()

    def _map_pin(self, channel):
        if isinstance(channel, int):
            return channel
        elif str(channel) in self._pin_map.keys():
            return self._pin_map[str(channel)]
        else:
            return int(channel)
    
    @property
    def device_name(self):
        return "DummyGPIO"
 
    def get(self, channel):
        checked_channel = self._check_channel_adc(channel)
 
        if channel in [0, 1, 2, 3]:
            if self._manual:
                self._values[checked_channel] = self._values[4 + checked_channel] 
            else:
                old_reading = self._values[checked_channel]
                new_reading = random.randrange(10) / 100
                new_reading = (-1)**random.randrange(2) * new_reading
                self._values[checked_channel] = old_reading + new_reading

        return self._values[checked_channel]

    def set(self, channel, state):
        checked_channel = self._check_channel_dac(channel)
        checked_val = self._check_dac_val(channel, state)
        self._values[checked_channel] = checked_val 

    def define_as_input(self, channel, pullup=False):
        self._check_channel_adc(channel)

    def define_as_output(self, channel):
        self._check_channel_dac(channel)

    def listen(self, channel, callback, polling_time=.1):
        self._listeners += [ChannelPollingThread(channel, self, callback, polling_time)]

    # Check if ADC channel number is within bounds
    def _check_channel_adc(self, chan):
        if type(chan) is str:
            chan = int(chan)
        if type(chan) is not int:
            raise DeviceChannelOutOfBoundsError(self.device_name, chan)
        elif chan < 0:
            raise DeviceChannelOutOfBoundsError(self.device_name, chan)
        elif chan > 3:
            raise DeviceChannelOutOfBoundsError(self.device_name, chan)
        return chan

    def _check_channel_dac(self, chan):
        if type(chan) is str:
            chan = int(chan)
        if type(chan) is not int:
            raise DeviceChannelOutOfBoundsError(self.device_name, chan)
        elif chan < 4:
            raise DeviceChannelOutOfBoundsError(self.device_name, chan)
        elif chan > 7:
            raise DeviceChannelOutOfBoundsError(self.device_name, chan)
        return chan

    # Check if DAC output value is within bounds
    def _check_dac_val(self, channel, val):
        if type(val) is not float:
            raise DACValueOutOfBoundsError(self.device_name, channel, val)
        elif val < 0:
            raise DACValueOutOfBoundsError(self.device_name, channel, val)
        elif val > 1:
            raise DACValueOutOfBoundsError(self.device_name, channel, val)
        return val
