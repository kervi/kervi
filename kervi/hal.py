"""Hardware abstraction layer"""
from kervi.utility.hal import gpio
from kervi.utility.hal import i2c
from kervi.spine import Spine

import pip
import importlib

_DRIVER = None
GPIO = None


def get_gpio(gpio_type=None):
    if gpio_type == None:
        return _DRIVER.get_gpio_driver()

def I2C(address, bus=0):
    return _DRIVER.get_i2c_driver(address, bus)

def get_camera_driver(source = None):
    return _DRIVER.get_camera_driver(source)

def _load():
    global GPIO, _DRIVER

    if not _DRIVER:
        installed_packages = pip.get_installed_distributions()
        flat_installed_packages = [package.project_name for package in installed_packages]
        known_drivers = [("kervi-hal-win", "kervi_hal_win"), ("kervi-hal-rpi", "kervi_hal_rpi")]
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
        self.i2c = I2C(address, bus)

class I2CGPIODeviceDriver(gpio.IGPIODeviceDriver):
    def __init__(self, address, bus):
        if address > 0x77:
            raise I2CaddressOutOfBoundsError(self, device_name, address)
        self.i2c = I2C(address, bus)

    @property
    def device_name(self):
        return None
