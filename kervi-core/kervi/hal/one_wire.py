#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

import time

class OneWire(object):
    def __init__(self, address):
        self._address = address

    @property
    def address(self):
        return self._address

    def read(self):
        lines = self.read_raw()
        while lines[0].strip()[-3:] != 'YES':
            time.sleep(0.2)
            lines = self.read_raw()
        return lines[1]

    def read_raw(self):
        """Read raw data from one wire device"""
        raise NotImplementedError
