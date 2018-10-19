# Copyright (c) 2014 Adafruit Industries
# Author: Tony DiCola
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

#This file is a modified version of Tony DiCola's work adapted to the Kervi i2c and sensors api. 

import time
import math
from kervi.hal import I2CGPIODeviceDriver
from kervi.hal.gpio import CHANNEL_TYPE_GPIO

I2CADDR = 0x20

class _MCP230XX(I2CGPIODeviceDriver):
    IODIR    = 0x00
    GPIO     = 0x12
    GPPU     = 0x0C

    def __init__(self, device_name, num_gpio, address=I2CADDR, bus=0, gpio_id="MCP230XX"):
        I2CGPIODeviceDriver.__init__(self, address, bus, gpio_id)
        self._num_gpio = num_gpio
        self._device_name = device_name
        self.gpio_bytes = int(math.ceil(num_gpio/8.0))
        # Buffer register values so they can be changed without reading.
        self.iodir = [0x00]*self.gpio_bytes  # Default direction to all inputs.
        self.gppu = [0x00]*self.gpio_bytes  # Default to pullups disabled.
        self.gpio = [0x00]*self.gpio_bytes
        # Write current direction and pullup buffer state.
        self._write_iodir()
        self._write_gppu()

    def _get_channel_type(self, channel):
        return CHANNEL_TYPE_GPIO
    
    @property
    def device_name(self):
        return self._device_name

    @property
    def num_gpio(self):
        return self._num_gpio

    def define_as_input(self, pin, pullup=False):
        """Set the input or output mode for a specified pin.  Mode should be
        either GPIO.OUT or GPIO.IN.
        """
        self._validate_channel(pin)
        # Set bit to 1 for input or 0 for output.
        self.iodir[int(pin/8)] |= 1 << (int(pin%8))
        self._write_iodir()
        self.pullup(pin, pullup)

    def define_as_output(self, pin):
        """Set the input or output mode for a specified pin.  Mode should be
        either GPIO.OUT or GPIO.IN.
        """
        self._validate_channel(pin)
        # Set bit to 1 for input or 0 for output.
        self.iodir[int(pin/8)] &= ~(1 << (int(pin%8)))
        self._write_iodir()

    def set(self, pin, value):
        """Set the specified pin the provided high/low value.  Value should be
        either GPIO.HIGH/GPIO.LOW or a boolean (True = HIGH).
        """
        self._output_pins({pin: value})

    def get(self, pin):
        """Read the specified pin and return GPIO.HIGH/True if the pin is pulled
        high, or GPIO.LOW/False if pulled low.
        """
        return self._input_pins([pin])[0]

    def _output_pins(self, pins):
        """Set multiple pins high or low at once.  Pins should be a dict of pin
        name to pin value (HIGH/True for 1, LOW/False for 0).  All provided pins
        will be set to the given values.
        """
        [self._validate_channel(pin) for pin in pins.keys()]
        # Set each changed pin's bit.
        for pin, value in iter(pins.items()):
            if value:
                self.gpio[int(pin/8)] |= 1 << (int(pin%8))
            else:
                self.gpio[int(pin/8)] &= ~(1 << (int(pin%8)))
        # Write GPIO state.
        self._write_gpio()

    def _input_pins(self, pins):
        """Read multiple pins specified in the given list and return list of pin values
        GPIO.HIGH/True if the pin is pulled high, or GPIO.LOW/False if pulled low.
        """
        [self._validate_channel(pin) for pin in pins]
        # Get GPIO state.
        gpio = self.i2c.read_list(self.GPIO, self.gpio_bytes)
        # Return True if pin's bit is set.
        return [(gpio[int(pin/8)] & 1 << (int(pin%8))) > 0 for pin in pins]

    def pullup(self, pin, enabled):
        """Turn on the pull-up resistor for the specified pin if enabled is True,
        otherwise turn off the pull-up resistor.
        """
        self._validate_channel(pin)
        if enabled:
            self.gppu[int(pin/8)] |= 1 << (int(pin%8))
        else:
            self.gppu[int(pin/8)] &= ~(1 << (int(pin%8)))
        self._write_gppu()

    def _write_gpio(self, gpio=None):
        """Write the specified byte value to the GPIO registor.  If no value
        specified the current buffered value will be written.
        """
        if gpio is not None:
            self.gpio = gpio
        self.i2c.write_list(self.GPIO, self.gpio)

    def _write_iodir(self, iodir=None):
        """Write the specified byte value to the IODIR registor.  If no value
        specified the current buffered value will be written.
        """
        if iodir is not None:
            self.iodir = iodir
        self.i2c.write_list(self.IODIR, self.iodir)

    def _write_gppu(self, gppu=None):
        """Write the specified byte value to the GPPU registor.  If no value
        specified the current buffered value will be written.
        """
        if gppu is not None:
            self.gppu = gppu
        self.i2c.write_list(self.GPPU, self.gppu)

class MCP23017DeviceDriver(_MCP230XX):
    """MCP23017-based GPIO class with 16 GPIO pins."""
    # Define number of pins and registor addresses.
    IODIR = 0x00
    GPIO = 0x12
    GPPU = 0x0C

    def __init__(self, address=0x20, bus=0):
        _MCP230XX.__init__(self, "MCP23017", 16, address, bus)

class MCP23008DeviceDriver(_MCP230XX):
    """MCP23008-based GPIO class with 8 GPIO pins."""
    # Define number of pins and registor addresses.
    IODIR = 0x00
    GPIO = 0x09
    GPPU = 0x06

    def __init__(self, address=0x20, bus=0):
        _MCP230XX.__init__(self, "MCP23008", 8, address, bus)
