#Copyright 2018 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

from  kervi.hal.i2c import  II2CDeviceDriver

class I2CDeviceDriver(II2CDeviceDriver):
    """
    Class for communicating with an I2C devices.
    """
    def __init__(self, address, busnum):
        raise NotImplementedError

    def write_raw8(self, value):
        raise NotImplementedError

    def write8(self, register, value):
        raise NotImplementedError

    def write16(self, register, value):
        raise NotImplementedError

    def write_list(self, register, data):
        raise NotImplementedError

    def read_list(self, register, length):
        raise NotImplementedError

    def read_raw8(self):
        raise NotImplementedError

    def read_U8(self, register):
        raise NotImplementedError

    def read_S8(self, register):
        raise NotImplementedError

    def read_U16(self, register, little_endian=True):
        raise NotImplementedError

    def read_S16(self, register, little_endian=True):
        raise NotImplementedError

    def read_U16LE(self, register):
        raise NotImplementedError

    def read_U16BE(self, register):
        raise NotImplementedError

    def read_S16LE(self, register):
        raise NotImplementedError

    def read_S16BE(self, register):
        raise NotImplementedError
