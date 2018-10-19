# Copyright (c) 2016 Adafruit Industries
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

from __future__ import division
import time
import math
from kervi.hal import I2CGPIODeviceDriver, DeviceChannelOutOfBoundsError, DACValueOutOfBoundsError
from kervi.hal import ChannelPollingThread
from kervi.core.utility.thread import KerviThread
from kervi import spine

import logging


# Registers/etc:
PCA9685_ADDRESS    = 0x40
MODE1              = 0x00
MODE2              = 0x01
SUBADR1            = 0x02
SUBADR2            = 0x03
SUBADR3            = 0x04
PRESCALE           = 0xFE
LED0_ON_L          = 0x06
LED0_ON_H          = 0x07
LED0_OFF_L         = 0x08
LED0_OFF_H         = 0x09
ALL_LED_ON_L       = 0xFA
ALL_LED_ON_H       = 0xFB
ALL_LED_OFF_L      = 0xFC
ALL_LED_OFF_H      = 0xFD

# Bits:
RESTART            = 0x80
SLEEP              = 0x10
ALLCALL            = 0x01
INVRT              = 0x10
OUTDRV             = 0x04


logger = logging.getLogger(__name__)


def software_reset(i2c=None, **kwargs):
    """Sends a software reset (SWRST) command to all servo drivers on the bus."""
    # Setup I2C interface for device 0x00 to talk to all of them.
    #self.i2c.writeRaw8(0x06)  # SWRST


class PCA9685DeviceDriver(I2CGPIODeviceDriver):
    """PCA9685 PWM LED/servo controller."""

    def __init__(self, address=PCA9685_ADDRESS, bus=None, gpio_id="PCA9685"):
        I2CGPIODeviceDriver.__init__(self,address, bus, gpio_id)
        """Initialize the PCA9685."""
        # Setup I2C interface for the device.
        self.set_all_pwm(0, 0)
        self.i2c.write8(MODE2, OUTDRV)
        self.i2c.write8(MODE1, ALLCALL)
        time.sleep(0.005)  # wait for oscillator
        mode1 = self.i2c.read_U8(MODE1)
        mode1 = mode1 & ~SLEEP  # wake up (reset sleep)
        self.i2c.write8(MODE1, mode1)
        time.sleep(0.005)  # wait for oscillator

    @property
    def device_name(self):
        return "PFC8591"

    def set(self, pin, value):
        if (pin < 0) or (pin > 15):
            raise NameError('PWM pin must be between 0 and 15 inclusive')

        if value == 0 or value == False:
            self.set_pwm(pin, 0, 4096)
        elif value == 1 or value == True:
            self.set_pwm(pin, 4096, 0)
        else:
            self.pwm_start(pin,value * 100)

    def define_as_pwm(self, channel, frequency, duty_cycle=None):
        """
        Defines a channel as pwm output.

        :param channel:
            The channel to define as a pwm output.

        :type channel: ``int``

        :param frequency:
            The pwn frequency.

        :type channel: ``int``

        :param duty_cycle:
            The duty_cycle to use, can be changed in call to pwm_start

        :type channel: ``int``
        """
        pass

    def pwm_start(self, channel, duty_cycle=None, frequency=None):
        """
        Starts the pwm signal on a channel. The channel should be defined as pwm prior to this call.
        If no duty_cycle or frequency is passed in this call previous values from call to
        define_as_pwm or pwm_start is used.

        :param channel:
            The channel to start the pwm signal on.

        :type channel: ``int``

        :param duty_cycle:
            The duty cycle use on the channel.

        :type duty_cycle: ``int``

        :param frequency:
            The frequency to be used on the pwm channel.

        :type frequency: ``int``

        """
        if frequency:
            self.set_pwm_freq(frequency)
        self.set_pwm(channel, 0, int(4096 * (duty_cycle/100)))

    def pwm_stop(self, channel):
        """
        Stop pwm signal on channel.
        """
        self.set_pwm(channel, 4096, 0)

    def set_pwm_freq(self, freq_hz):
        """Set the PWM frequency to the provided value in hertz."""
        prescaleval = 25000000.0    # 25MHz
        prescaleval /= 4096.0       # 12-bit
        prescaleval /= float(freq_hz)
        prescaleval -= 1.0
        logger.debug('Setting PWM frequency to {0} Hz'.format(freq_hz))
        logger.debug('Estimated pre-scale: {0}'.format(prescaleval))
        prescale = int(math.floor(prescaleval + 0.5))
        logger.debug('Final pre-scale: {0}'.format(prescale))
        oldmode = self.i2c.read_U8(MODE1)
        newmode = (oldmode & 0x7F) | 0x10    # sleep
        self.i2c.write8(MODE1, newmode)  # go to sleep
        self.i2c.write8(PRESCALE, prescale)
        self.i2c.write8(MODE1, oldmode)
        time.sleep(0.005)
        self.i2c.write8(MODE1, oldmode | 0x80)

    def set_pwm(self, channel, on, off):
        """Sets a single PWM channel."""
        self.i2c.write8(LED0_ON_L+4*channel, on & 0xFF)
        self.i2c.write8(LED0_ON_H+4*channel, on >> 8)
        self.i2c.write8(LED0_OFF_L+4*channel, off & 0xFF)
        self.i2c.write8(LED0_OFF_H+4*channel, off >> 8)

    def set_all_pwm(self, on, off):
        """Sets all PWM channels."""
        self.i2c.write8(ALL_LED_ON_L, on & 0xFF)
        self.i2c.write8(ALL_LED_ON_H, on >> 8)
        self.i2c.write8(ALL_LED_OFF_L, off & 0xFF)
        self.i2c.write8(ALL_LED_OFF_H, off >> 8)