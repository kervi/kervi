from kervi.hal import I2CSensorDeviceDriver
import time


CW2015_ADDR = 0x62
CW2015_VCELL = 0x02
CW2015_SOC = 0x04
CW2015_MODE = 0x06
CW2015_VERSION = 0x08
CW2015_CONFIG = 0x0c
CW2015_COMMAND = 0xfe

class CW2015VoltageDeviceDriver(I2CSensorDeviceDriver):
    def __init__(self, address=CW2015_ADDR, bus=None):
        I2CSensorDeviceDriver.__init__(self, address, bus)
        self.i2c.write8(0x0a, 0x00)
        
    @property
    def device_name(self):
        return "cw2015-voltage"

    @property
    def type(self):
        return "voltage"

    @property
    def unit(self):
        return "v"

    @property
    def max(self):
        return 100

    @property
    def min(self):
        return 0

    def read_value(self):
        v = self.i2c.read_U16(CW2015_VCELL)
        vr = self.i2c.reverse_byte_order(v)
        
        return  305 * vr / 1000000

class CW2015CapacityDeviceDriver(I2CSensorDeviceDriver):
    def __init__(self, address=CW2015_ADDR, bus=None):
        I2CSensorDeviceDriver.__init__(self, address, bus)
        self.i2c.write8(0x0a, 0x00)
        
    @property
    def device_name(self):
        return "CW2015-capacity"

    @property
    def type(self):
        return "battery"

    @property
    def unit(self):
        return "%"

    @property
    def max(self):
        return 100

    @property
    def min(self):
        return 0

    def read_value(self):
        v1 = self.i2c.read_U8(CW2015_SOC)
        v2 = self.i2c.read_U8(CW2015_SOC + 1)
        return v1 + v2/256
