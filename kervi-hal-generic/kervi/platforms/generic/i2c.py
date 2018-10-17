from kervi.hal.i2c import II2CDeviceDriver

class I2CDriver(II2CDeviceDriver):
    """
    Class for communicating with an I2C devices.
    """
    def __init__(self, address, bus):
        pass

    def write_raw8(self, value):
        """Write an 8-bit value on the bus (without register)."""
        raise NotImplementedError

    def write8(self, register, value):
        """Write an 8-bit value to the specified register."""
        raise NotImplementedError

    def write16(self, register, value):
        """Write a 16-bit value to the specified register."""
        raise NotImplementedError

    def write_list(self, register, data):
        """Write bytes to the specified register."""
        raise NotImplementedError

    def read_list(self, register, length):
        """Read a length number of bytes from the specified register.  Results
        will be returned as a bytearray."""
        raise NotImplementedError

    def read_raw8(self):
        """Read an 8-bit value on the bus (without register)."""
        raise NotImplementedError

    def read_U8(self, register):
        """Read an unsigned byte from the specified register."""
        raise NotImplementedError

    def read_S8(self, register):
        """Read a signed byte from the specified register."""
        raise NotImplementedError

    def read_U16(self, register, little_endian=True):
        """Read an unsigned 16-bit value from the specified register, with the
        specified endianness (default little endian, or least significant byte
        first)."""
        raise NotImplementedError

    def read_S16(self, register, little_endian=True):
        """Read a signed 16-bit value from the specified register, with the
        specified endianness (default little endian, or least significant byte
        first)."""
        raise NotImplementedError

    def read_U16LE(self, register):
        """Read an unsigned 16-bit value from the specified register, in little
        endian byte order."""
        raise NotImplementedError

    def read_U16BE(self, register):
        """Read an unsigned 16-bit value from the specified register, in big
        endian byte order."""
        raise NotImplementedError

    def read_S16LE(self, register):
        """Read a signed 16-bit value from the specified register, in little
        endian byte order."""
        raise NotImplementedError

    def read_S16BE(self, register):
        """Read a signed 16-bit value from the specified register, in big
        endian byte order."""
        raise NotImplementedError
