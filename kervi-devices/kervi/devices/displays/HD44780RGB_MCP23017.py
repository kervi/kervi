from kervi import hal
from kervi.devices.gpio.MCP230XX import MCP23017DeviceDriver
from kervi.devices.displays.HD44780 import HD44780RGBDeviceDriver

class HD44780RGB_MCP23017_DeviceDriver(HD44780RGBDeviceDriver):
    """Class to represent and interact with an Adafruit Raspberry Pi character
    LCD plate."""

    def __init__(self, cols=16, lines=2, address=0x20, busnum=hal.default_i2c_bus(),):
        """Initialize the character LCD plate.  Can optionally specify a separate
        I2C address or bus number, but the defaults should suffice for most needs.
        Can also optionally specify the number of columns and lines on the LCD
        (default is 16x2).
        """
        # Configure MCP23017 device.
        self._mcp = MCP23017DeviceDriver(address=address, bus=busnum)
        # Set LCD R/W pin to low for writing only.
        self._mcp[LCD_PLATE_RW].define_as_output()
        self._mcp[LCD_PLATE_RW].set(False)
        # Set buttons as inputs with pull-ups enabled.
        for button in (SELECT, RIGHT, DOWN, UP, LEFT):
            self._mcp[button].define_as_input(True)
        # Initialize LCD (with no PWM support).
        super(CharLCDDeviceDriver, self).__init__(
            self._mcp[LCD_PLATE_RS],
            self._mcp[LCD_PLATE_EN],
            self._mcp[LCD_PLATE_D4],
            self._mcp[LCD_PLATE_D5],
            self._mcp[LCD_PLATE_D6],
            self._mcp[LCD_PLATE_D7],
            cols,
            lines,
            self._mcp[LCD_PLATE_RED],
            self._mcp[LCD_PLATE_GREEN],
            self._mcp[LCD_PLATE_BLUE],
            enable_pwm=False
        )

    def is_pressed(self, button):
        """Return True if the provided button is pressed, False otherwise."""
        if button not in set((SELECT, RIGHT, DOWN, UP, LEFT)):
            raise ValueError('Unknown button, must be SELECT, RIGHT, DOWN, UP, or LEFT.')
        return self._mcp.get(button)
