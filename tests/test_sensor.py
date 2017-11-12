from kervi.utility.component import KerviComponent
#from kervi.spine import Spine

from kervi.sensor import Sensor
from mockup_spine import MockupSpine
from mockup_sensor_device import MockupSensorDeviceDriver, MockupMultiDimSensorDeviceDriver


class MockupSensorThread:
    def __init__(self, sensors):
        if hasattr(sensors, "__len__"):
            self.sensors = sensors
        else:
            self.sensors = [sensors]

    def step(self):
        for sensor in self.sensors:
            sensor._read_sensor()
        

def test_single_sensor():
    spine = MockupSpine()
    device = MockupSensorDeviceDriver()

    device.value = 10

    sensor = Sensor("test_id", "Test sensor", device, spine=spine)

    assert sensor.device == device
    assert sensor.type == "temperature"
    assert sensor.unit == "%"
    

    sensor_thread = MockupSensorThread(sensor)
    sensor_thread.step()

    assert sensor.value == 10


def test_multi_sensor():
    spine = MockupSpine()
    device = MockupMultiDimSensorDeviceDriver()

    device.value1 = 10
    device.value2 = 20
    device.value3 = 30

    sensor = Sensor("test_id", "Test sensor", device, spine=spine)

    assert sensor.device == device
    assert sensor.type == "position"
    assert sensor.unit == "degree"

    sensor_thread = MockupSensorThread(sensor)
    sensor_thread.step()

    assert sensor[0].value == 10
    assert sensor[1].value == 20
    assert sensor[2].value == 30
