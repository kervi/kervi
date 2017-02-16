"""Hardware abstraction layer"""
from kervi.utility.hal import gpio
from kervi.utility.hal import i2c
from kervi.spine import Spine

import pip
import importlib

_DRIVER = None

GPIO = None

def GPIO(gpio_type=None):
    if gpio_type == None:
        return _DRIVER.get_gpio_driver()

def I2C(address, busnum=0):
    return _DRIVER.get_i2c_driver(address, busnum)

def _load():
    global GPIO, _DRIVER


    installed_packages = pip.get_installed_distributions()
    flat_installed_packages = [package.project_name for package in installed_packages]
    known_drivers = [("kervi-hal-win", "kervi_hal_win"), ("kervi-hal-rpi", "kervi_hal_rpi")]
    for driver_name, module_name in known_drivers:
        if driver_name in flat_installed_packages:
            _DRIVER = importlib.import_module(module_name)
            GPIO = GPIO()
            return driver_name

class SensorDevice(object):

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

class I2CSensorDevice(SensorDevice):
    def __init__(self, address, bus):
        self.i2c = I2C(address, bus)
