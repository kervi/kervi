# The MIT License (MIT)
#
# Copyright (c) 2018 Carter Nelson for Adafruit Industries
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
"""
`ads1x15`
====================================================

CircuitPython base class driver for ADS1015/1115 ADCs.

* Author(s): Carter Nelson
"""

__version__ = "0.0.0-auto.0"
__repo__ = "https://github.com/adafruit/Adafruit_CircuitPython_ADS1x15.git"

from adafruit_bus_device.i2c_device import I2CDevice

# pylint: disable=bad-whitespace
_ADS1X15_DEFAULT_ADDRESS            = 0x48
_ADS1X15_POINTER_CONVERSION         = 0x00
_ADS1X15_POINTER_CONFIG             = 0x01
_ADS1X15_CONFIG_OS_SINGLE           = 0x8000
_ADS1X15_CONFIG_MUX_OFFSET          = 12
_ADS1X15_CONFIG_COMP_QUE_DISABLE    = 0x0003
_ADS1X15_CONFIG_GAIN = {
    2/3: 0x0000,
    1:   0x0200,
    2:   0x0400,
    4:   0x0600,
    8:   0x0800,
    16:  0x0A00
}
# pylint: enable=bad-whitespace

class _Mode:
    """An enum-like class representing possible ADC operating modes."""
    # See datasheet "Operating Modes" section
    # values here are masks for setting MODE bit in Config Register
    #pylint: disable=too-few-public-methods
    CONTINUOUS = 0x0000
    SINGLE = 0x0100


class _ADS1x15(object):
    """Base functionality for ADS1x15 analog to digital converters."""

    def __init__(self, i2c, gain=1, data_rate=None, mode=_Mode.SINGLE,
                 address=_ADS1X15_DEFAULT_ADDRESS):
        #pylint: disable=too-many-arguments
        self.buf = bytearray(3)
        self._data_rate = self._gain = self._mode = None
        self.gain = gain
        self.data_rate = self._data_rate_default() if data_rate is None else data_rate
        self.mode = mode
        self.i2c_device = I2CDevice(i2c, address)

    @property
    def data_rate(self):
        """The data rate for ADC conversion in samples per second."""
        return self._data_rate

    @data_rate.setter
    def data_rate(self, rate):
        possible_rates = self.rates
        if rate not in possible_rates:
            raise ValueError("Data rate must be one of: {}".format(possible_rates))
        self._data_rate = rate

    @property
    def rates(self):
        """Possible data rate settings."""
        raise NotImplementedError('Subclass must implement rates property.')

    @property
    def rate_config(self):
        """Rate configuration masks."""
        raise NotImplementedError('Subclass must implement rate_config property.')

    @property
    def gain(self):
        """The ADC gain."""
        return self._gain

    @gain.setter
    def gain(self, gain):
        possible_gains = self.gains
        if gain not in possible_gains:
            raise ValueError("Gain must be one of: {}".format(possible_gains))
        self._gain = gain

    @property
    def gains(self):
        """Possible gain settings."""
        g = list(_ADS1X15_CONFIG_GAIN.keys())
        g.sort()
        return g

    @property
    def mode(self):
        """The ADC conversion mode."""
        return self._mode

    @mode.setter
    def mode(self, mode):
        if mode != Mode.CONTINUOUS and mode != Mode.SINGLE:
            raise ValueError("Unsupported mode.")
        self._mode = mode

    def read(self, pin, is_differential=False):
        """I2C Interface for ADS1x15-based ADCs reads.

        params:
            :param pin: individual or differential pin.
            :param bool is_differential: single-ended or differential read.
        """
        pin = pin if is_differential else pin + 0x04
        return self._read(pin)

    def _data_rate_default(self):
        """Retrieve the default data rate for this ADC (in samples per second).
        Should be implemented by subclasses.
        """
        raise NotImplementedError('Subclasses must implement _data_rate_default!')

    def _conversion_value(self, raw_adc):
        """Subclasses should override this function that takes the 16 raw ADC
        values of a conversion result and returns a signed integer value.
        """
        raise NotImplementedError('Subclass must implement _conversion_value function!')

    def _read(self, pin):
        """Perform an ADC read. Returns the signed integer result of the read."""
        config = _ADS1X15_CONFIG_OS_SINGLE
        config |= (pin & 0x07) << _ADS1X15_CONFIG_MUX_OFFSET
        config |= _ADS1X15_CONFIG_GAIN[self.gain]
        config |= self.mode
        config |= self.rate_config[self.data_rate]
        config |= _ADS1X15_CONFIG_COMP_QUE_DISABLE
        self._write_register(_ADS1X15_POINTER_CONFIG, config)

        if self.mode == Mode.SINGLE:
            while not self._conversion_complete():
                pass

        return self.get_last_result()

    def _conversion_complete(self):
        """Return status of ADC conversion."""
        # OS is bit 15
        # OS = 0: Device is currently performing a conversion
        # OS = 1: Device is not currently performing a conversion
        return self._read_register(_ADS1X15_POINTER_CONFIG) & 0x8000

    def get_last_result(self):
        """Read the last conversion result when in continuous conversion mode.
        Will return a signed integer value.
        """
        return self._conversion_value(self._read_register(_ADS1X15_POINTER_CONVERSION))

    def _write_register(self, reg, value):
        """Write 16 bit value to register."""
        self.buf[0] = reg
        self.buf[1] = (value >> 8) & 0xFF
        self.buf[2] = value & 0xFF
        with self.i2c_device as i2c:
            i2c.write(self.buf)

    def _read_register(self, reg):
        """Read 16 bit register value."""
        self.buf[0] = reg
        with self.i2c_device as i2c:
            i2c.write(self.buf, end=1, stop=False)
            i2c.readinto(self.buf, end=2)
        return self.buf[0] << 8 | self.buf[1]


_ADS1115_CONFIG_DR = {
    8:    0x0000,
    16:   0x0020,
    32:   0x0040,
    64:   0x0060,
    128:  0x0080,
    250:  0x00A0,
    475:  0x00C0,
    860:  0x00E0
}

# Pins
P0 = 0
P1 = 1
P2 = 2
P3 = 3

class ADS1115DeviceDriver(_ADS1x15):
    """Class for the ADS1115 16 bit ADC."""

    @property
    def bits(self):
        """The ADC bit resolution."""
        return 16

    @property
    def rates(self):
        """Possible data rate settings."""
        r = list(_ADS1115_CONFIG_DR.keys())
        r.sort()
        return r

    @property
    def rate_config(self):
        """Rate configuration masks."""
        return _ADS1115_CONFIG_DR

    def _data_rate_default(self):
        return 128

    def _conversion_value(self, raw_adc):
        raw_adc = raw_adc.to_bytes(2, "big")
        value = struct.unpack(">h", raw_adc)[0]
        return value


# Data sample rates
_ADS1015_CONFIG_DR = {
    128:   0x0000,
    250:   0x0020,
    490:   0x0040,
    920:   0x0060,
    1600:  0x0080,
    2400:  0x00A0,
    3300:  0x00C0
}

# Pins
P0 = 0
P1 = 1
P2 = 2
P3 = 3

class ADS1015DeviceDriver(_ADS1x15):
    """Class for the ADS1015 12 bit ADC."""

    @property
    def bits(self):
        """The ADC bit resolution."""
        return 12

    @property
    def rates(self):
        """Possible data rate settings."""
        r = list(_ADS1015_CONFIG_DR.keys())
        r.sort()
        return r

    @property
    def rate_config(self):
        """Rate configuration masks."""
        return _ADS1015_CONFIG_DR

    def _data_rate_default(self):
        return 1600

    def _conversion_value(self, raw_adc):
        raw_adc = raw_adc.to_bytes(2, "big")
        value = struct.unpack(">h", raw_adc)[0]
        return value >> 4