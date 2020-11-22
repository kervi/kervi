import os
from kervi.hal.one_wire import OneWire

BASE_DIR = '/sys/bus/w1/devices/'

class OneWireDeviceDriver(OneWire):
    def __init__(self, address):
        OneWire.__init__(self, address)
        os.system('modprobe w1-gpio')
        os.system('modprobe w1-therm')

    def read_raw(self):
        tempfile = open(BASE_DIR+self.address+"/w1_slave")
        text = tempfile.readlines()
        tempfile.close()
        return text
