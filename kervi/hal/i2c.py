#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

"""
It is possible to communicate with devices via I2C.

.. code:: python

    #create i2c device on i2c address 0x77
    i2c = I2C(0x77)
    i2c.write_raw8(123)
"""


class II2CDeviceDriver(object):
    """
    """

    def reverse_byte_order(self, data):
        """Reverses the byte order of an int (16-bit) or long (32-bit) value."""
        # Courtesy Vishal Sapre
        byte_count = len(hex(data)[2:].replace('L', '')[::2])
        val = 0
        for i in range(byte_count):
            val = (val << 8) | (data & 0xff)
            data >>= 8
        return val

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
