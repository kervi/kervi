import time
import kervi.hal as hal
from kervi.hal.gpio import IGPIODeviceDriver
from kervi.devices.gpio.PCF8574 import PCF8574DeviceDriver
from kervi.devices.displays.HD44780 import HD44780DeviceDriver


# Char LCD pin to I/O extender GPIO pin number maps
# PCF8574 pins 4-7,9-12 are bits 0-3,4-7, respectively
# LCD pin name: PCF port bit
PCFPINMAPS = [
{
# map0 - DFRobot, YwRobot, Sainsmart?, also generic black PCB
# http://www.dfrobot.com/image/data/DFR0175/I2C%20LCD%20Backpack%20schematic.pdf
'PCF_RS': 0,
'PCF_RW': 1,
'PCF_EN': 2,
'PCF_BL': 3,
'PCF_D4': 4,
'PCF_D5': 5,
'PCF_D6': 6,
'PCF_D7': 7,
}, {
# map1 - map0 with nibbles swapped
'PCF_RS': 4,
'PCF_RW': 5,
'PCF_EN': 6,
'PCF_BL': 7,
'PCF_D4': 0,
'PCF_D5': 1,
'PCF_D6': 2,
'PCF_D7': 3,
}, {
# map2 - mjkdz board w/22 turn trimmer, GY-LCD-V1
'PCF_RS': 6,
'PCF_RW': 5,
'PCF_EN': 4,
'PCF_BL': 7,
'PCF_D4': 0,
'PCF_D5': 1,
'PCF_D6': 2,
'PCF_D7': 3,
}, {
# map3 - map2 with nibbles swapped
'PCF_RS': 0,
'PCF_RW': 1,
'PCF_EN': 2,
'PCF_BL': 3,
'PCF_D4': 6,
'PCF_D5': 5,
'PCF_D6': 4,
'PCF_D7': 7,
}, {
# map4 - ???
'PCF_RS': 4,
'PCF_RW': 5,
'PCF_EN': 6,
'PCF_BL': 7,
'PCF_D4': 2,
'PCF_D5': 1,
'PCF_D6': 0,
'PCF_D7': 3,
},
]

class HD44780_PCF8574_DeviceDriver(HD44780DeviceDriver):
    """Class to represent and interact with an Adafruit Raspberry Pi character
    LCD plate."""

    def __init__(self, pin_map=0, cols=16, lines=2, address=0x3f, bus=hal.default_i2c_bus()):
        """Initialize the character LCD plate.  Can optionally specify a separate
        I2C address or bus number, but the defaults should suffice for most needs.
        Can also optionally specify the number of columns and lines on the LCD
        (default is 16x2).
        """
        self._storepinmap(pin_map)
        self._gpio = PCF8574DeviceDriver(address=address, bus=bus)
        # Set LCD R/W pin to low for writing only.
        self._gpio[PCF_RW].define_as_output()
        self._gpio[PCF_RW].set(False)
               
        super(CharLCDDeviceDriver, self).__init__(
            self._gpio[PCF_RS],
            self._gpio[PCF_EN],
            self._gpio[PCF_D4],
            self._gpio[PCF_D5],
            self._gpio[PCF_D6],
            self._gpio[PCF_D7],
            cols,
            lines,
            backlight=self._gpio[PCF_BL],
            invert_polarity=False,
            enable_pwm=False
        )

    @property
    def display_type(self):
        return "char"

    def _storepinmap(self, pinmap):
        try:
            m = PCFPINMAPS[int(pinmap)]
        except TypeError:
            m = pinmap
        validkeys = PCFPINMAPS[0].keys()
        globals().update(dict((k,v) for k,v in m.items() if k in validkeys))
