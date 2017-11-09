from kervi.hal import SensorDeviceDriver

class MockupSensorDeviceDriver(SensorDeviceDriver):
    def __init__(self):
        SensorDeviceDriver.__init__(self)
        self.value = 0

    def read_value(self):
        return self.value

    @property
    def type(self):
        return "temperature"

    @property
    def unit(self):
        return "%"

class MockupMultiDimSensorDeviceDriver(SensorDeviceDriver):
    def __init__(self):
        self.value1 = 0
        self.value2 = 0
        self.value3 = 0

    def read_value(self):
        return [self.value1, self.value2, self.value3]

    @property
    def dimensions(self):
        return 3

    @property
    def dimension_labels(self):
        return ["heading", "pitch", "roll"]

    @property
    def type(self):
        return "position"

    @property
    def unit(self):
        return "degree"