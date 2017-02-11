"""Hardware abstraction layer"""
from kervi.utility.hal import gpio
from kervi.utility.hal import i2c
import pip
import importlib

GPIO = None
I2C = None

def _load():
    global GPIO, I2C


    installed_packages = pip.get_installed_distributions()
    flat_installed_packages = [package.project_name for package in installed_packages]
    known_drivers = [("kervi-hal-win", "kervi_hal_win"), ("kervi-hal-rpi", "kervi_hal_rpi")]
    for driver_name, module_name in known_drivers:
        if driver_name in flat_installed_packages:
            driver = importlib.import_module(module_name)
            GPIO = gpio.KerviGPIO(driver.get_gpio_driver())
            I2C = i2c.KerviI2C(driver.get_gpio_driver())
            return driver_name
    