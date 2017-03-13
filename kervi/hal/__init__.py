# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
"""Hardware abstraction layer"""
import time
from kervi.hal import gpio
from kervi.hal import i2c
from kervi.spine import Spine
from kervi.utility.thread import KerviThread
import pip
import importlib

_DRIVER = None
GPIO = None

def get_gpio(gpio_type=None):
    if gpio_type == None:
        return _DRIVER.get_gpio_driver()


def default_i2c_bus():
    if _DRIVER:
        return _DRIVER.default_i2c_bus()
    return 0

def i2c(address, bus=default_i2c_bus()):
    return _DRIVER.get_i2c_driver(address, bus)



def get_camera_driver(source = None):
    return _DRIVER.get_camera_driver(source)

def _load():
    global GPIO, _DRIVER

    if not _DRIVER:
        installed_packages = pip.get_installed_distributions()
        flat_installed_packages = [package.project_name for package in installed_packages]
        known_drivers = [
            ("kervi-hal-win", "kervi_hal_win"),
            ("kervi-hal-win", "kervi_hal_linux"),
            ("kervi-hal-rpi", "kervi_hal_rpi"),
            ("kervi-hal-generic", "kervi_hal_generic")
        ]
        for driver_name, module_name in known_drivers:
            if driver_name in flat_installed_packages:
                _DRIVER = importlib.import_module(module_name)
                GPIO = get_gpio()
                return driver_name

class SensorDeviceDriver(object):

    @property
    def device_name(self):
        return None

    @property
    def max(self):
        return None

    @property
    def min(self):
        return None

    @property
    def type(self):
        raise NotImplementedError

    @property
    def unit(self):
        raise NotImplementedError

    def read_value(self):
        raise NotImplementedError

    @property
    def logger(self):
        return Spine().log

class I2CaddressOutOfBoundsError(Exception):
    def __init__(self, device_name, address):
        super(I2CaddressOutOfBoundsError, self).__init__(
            '{0} I2C Address Out of Bounds:{1}'.format(device_name, address)
        )

class DeviceChannelOutOfBoundsError(Exception):
    def __init__(self, device_name, channel):
        super(DeviceChannelOutOfBoundsError, self).__init__(
            '{0} Exception: Channel Out of Bounds, channel={1}'.format(device_name, channel)
        )

# Exception class for a DAC value out of bounds
class DACValueOutOfBoundsError(Exception):
    def __init__(self, device_name, channel, value):
        super(DACValueOutOfBoundsError, self).__init__(
            '{0} Exception: DAC Output Value Out of Bounds, channel={1} value={2}'.format(device_name, channel, value)
        )

class I2CSensorDeviceDriver(SensorDeviceDriver):
    def __init__(self, address, bus):
        if address > 0x77:
            raise I2CaddressOutOfBoundsError(self, device_name, address)
        self.i2c = i2c(address, bus)

class I2CGPIODeviceDriver(gpio.IGPIODeviceDriver):
    def __init__(self, address, bus):
        gpio.IGPIODeviceDriver.__init__(self)
        if address > 0x77:
            raise I2CaddressOutOfBoundsError(self, device_name, address)
        self.i2c = i2c(address, bus)

    @property
    def device_name(self):
        return None

    @property
    def num_gpio(self):
        return 0

    def _bit2(self, src, bit, val):
        bit = 1 << bit
        return (src | bit) if val else (src & ~bit)


    def _validate_channel(self, channel):
        # Raise an exception if pin is outside the range of allowed values.
        if channel < 0 or channel >= self.num_gpio:
            raise DeviceChannelOutOfBoundsError(self.device_name, channel)

class ChannelPollingThread(KerviThread):
    def __init__(self, channel, device, callback, polling_time=.1):
        KerviThread.__init__(self)
        self._callback = callback
        self._channel = channel
        self._device = device
        self._value = None
        self._polling_time = polling_time
        self.alive = False
        self.spine = Spine()
        if self.spine:
            self.spine.register_command_handler("startThreads", self._start_command)
            self.spine.register_command_handler("stopThreads", self._stop_command)

    def _step(self):
        """Private method do not call it directly or override it."""
        try:
            new_value = self._device.get(self._channel)
            if new_value != self._value:
                self._callback(new_value)
                self._value = new_value
            time.sleep(self._polling_time)
        except:
            self.spine.log.exception("_PollingThread")

    def _start_command(self):
        if not self.alive:
            self.alive = True
            KerviThread.start(self)

    def _stop_command(self):
        if self.alive:
            self.alive = False
            self.stop()

