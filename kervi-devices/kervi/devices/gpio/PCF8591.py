# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

import time
from kervi.hal import I2CGPIODeviceDriver, DeviceChannelOutOfBoundsError, DACValueOutOfBoundsError
from kervi.hal import ChannelPollingThread
from kervi.hal.gpio import CHANNEL_TYPE_GPIO, CHANNEL_TYPE_ANALOG_IN, CHANNEL_TYPE_ANALOG_OUT
from kervi.core.utility.thread import KerviThread
from kervi import spine
AIN0 = 0
AIN1 = 1
AIN2 = 2
AIN3 = 3
AOUT = 4

class PCF8591Driver(I2CGPIODeviceDriver):

    # Constructor
    def __init__(self, address = 0x48, bus=0, gpio_id="PCF8591"):
        I2CGPIODeviceDriver.__init__(self, address, bus, gpio_id)
        self._dac_enabled = 0x00
        self._listeners = []

    def _get_channel_type(self, channel):
        if channel in ["AIN1", "AIN2", "AIN3", "AIN4", "AOUT"]:
            return CHANNEL_TYPE_ANALOG_IN
        elif channel == "AOUT":
            return CHANNEL_TYPE_ANALOG_OUT

    def _get_channel_names(self):
        return ["AIN1", "AIN2", "AIN3", "AIN4", "AOUT"]

    @property
    def device_name(self):
        return "PFC8591"

    

    def get(self, channel):
        """Read single ADC Channel"""
        checked_channel = self._check_channel_no(channel)
        self.i2c.write_raw8(checked_channel  | self._dac_enabled)
        reading = self.i2c.read_raw8() 
        reading = self.i2c.read_raw8() 
        return reading / 255.0

    def set(self, channel, state):
        """Set DAC value and enable output"""
        checked_val = self._check_dac_val(channel, state)
        self._dac_enabled = 0x40
        self.i2c.write8(self._dac_enabled, checked_val * 255)

    def define_as_input(self, channel, pullup=False):
        self._check_channel_no(channel)

    def define_as_output(self, channel):
        if not channel == 0:
            raise DeviceChannelOutOfBoundsError(self.device_name, channel)

    def listen(self, channel, callback, polling_time=.1):
        self._listeners += [ChannelPollingThread(channel, self, callback, polling_time)]

    # Enable DAC output
    def enable_dac(self):
        self._dac_enabled = 0x40
        self.i2c.write_raw8(self._dac_enabled)

    # Disable DAC output
    def disable_dac(self):
        self.__dac_enabled = 0x00
        self.i2c.write_raw8(self.__dac_enabled)

    # Check if ADC channel number is within bounds
    def _check_channel_no(self, chan):
        if type(chan) is not int:
            raise DeviceChannelOutOfBoundsError(self.device_name, chan)
        elif chan < 0:
            raise DeviceChannelOutOfBoundsError(self.device_name, chan)
        elif chan > 3:
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
