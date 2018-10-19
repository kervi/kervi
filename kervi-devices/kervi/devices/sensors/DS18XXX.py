
from kervi.hal import OneWireSensorDeviceDriver

class DS18XXXDeviceDriver(OneWireSensorDeviceDriver):
    def __init__(self, address):
        OneWireSensorDeviceDriver.__init__(self, address)
        # Check that mode is valid.

    def read_value(self):
        data = self.one_wire.read()
        equals_pos = data.find('t=')
        if equals_pos != -1:
            temp_string = data[equals_pos+2:]
            temp_c = float(temp_string) / 1000.0
            return temp_c

    @property
    def type(self):
        return "temperature"

    @property
    def unit(self):
        return "c"

    @property
    def max(self):
        return 125

    @property
    def min(self):
        return -30
