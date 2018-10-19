# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

import Adafruit_GPIO.I2C as I2C
from  kervi.hal.i2c import  II2CDeviceDriver

class I2CDeviceDriver(II2CDeviceDriver):
    """
    Class for communicating with an I2C devices.
    """
    def __init__(self, address, busnum):
        busnum = busnum or I2C.get_default_bus()
        self._device = I2C.get_i2c_device(address, busnum)

    def write_raw8(self, value):
        self._device.writeRaw8(value)

    def write8(self, register, value):
        self._device.write8(register, value)

    def write16(self, register, value):
        self._device.write16(register, value)

    def write_list(self, register, data):
        self._device.writeList(register, data)

    def read_list(self, register, length):
        return self._device.readList(register, length)

    def read_raw8(self):
        return self._device.readRaw8()

    def read_U8(self, register):
        return self._device.readU8(register)

    def read_S8(self, register):
        return self._device.readS8(register)

    def read_U16(self, register, little_endian=True):
        return self._device.readU16(register, little_endian)

    def read_S16(self, register, little_endian=True):
        return self._device.readS16(register, little_endian)

    def read_U16LE(self, register):
        return self._device.readU16(register)

    def read_U16BE(self, register):
        return self._device.readU16BE(register)

    def read_S16LE(self, register):
        return self._device.readS16LE(register)

    def read_S16BE(self, register):
        return self._device.readS16BE(register)
