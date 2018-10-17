


class DummyCharDisplayDriver(object):
    """Class used in tests"""

    def __init__(self):
        pass
    @property
    def display_type(self):
        return "char"
    

    def home(self):
        """Move the cursor back to its home (first line and first column)."""
        print("dummy lcd: home")

    def clear(self):
        """Clear the LCD."""
        print("dummy lcd: clear")

    def set_cursor(self, col, row):
        """Move the cursor to an explicit column and row position."""
        print("dummy lcd: set_cursor", col, row)

    def enable_display(self, enable):
        """Enable or disable the display.  Set enable to True to enable."""
        print("dummy lcd: enable", enable)

    def show_cursor(self, show):
        """Show or hide the cursor.  Cursor is shown if show is True."""
        print("dummy lcd: show_cursor", show)

    def blink(self, blink):
        """Turn on or off cursor blinking.  Set blink to True to enable blinking."""
        print("dummy lcd: blink", blink)

    def move_left(self):
        """Move display left one position."""
        print("dummy lcd: move_left")

    def move_right(self):
        """Move display right one position."""
        print("dummy lcd: right")

    def set_left_to_right(self):
        """Set text direction left to right."""
        print("dummy lcd: set_left_right")

    def set_right_to_left(self):
        """Set text direction right to left."""
        print("dummy lcd: set_right_to_Left")

    def autoscroll(self, autoscroll):
        """Autoscroll will 'right justify' text from the cursor if set True,
        otherwise it will 'left justify' the text.
        """
        print("dummy lcd: autoscroll")

    def message(self, text):
        """Write text to display.  Note that text can include newlines."""
        print("dummy lcd: message", text)

    def set_backlight(self, backlight):
        """Enable or disable the backlight.  If PWM is not enabled (default), a
        non-zero backlight value will turn on the backlight and a zero value will
        turn it off.  If PWM is enabled, backlight can be any value from 0.0 to
        1.0, with 1.0 being full intensity backlight.
        """
        print("dummy lcd: backlight", backlight)

    def create_char(self, location, pattern):
        """Fill one of the first 8 CGRAM locations with custom characters.
        The location parameter should be between 0 and 7 and pattern should
        provide an array of 8 bytes containing the pattern. E.g. you can easyly
        design your custom character at http://www.quinapalus.com/hd44780udg.html
        To show your custom character use eg. lcd.message('\x01')
        """
        print("dummy lcd: create_char", location, pattern)

    
class DummyBitmapDisplayDriver(object):
    """Base class for SSD1306-based OLED displays.  Implementors should subclass
    and provide an implementation for the _initialize function.
    """

    def __init__(self, width, height):
        self.width = width
        self.height = height
        self._pages = height//8
        self._buffer = [0]*(width*self._pages)
        
    @property
    def display_type(self):
        return "bitmap"
 
    def reset(self):
        """Reset the display."""
        print("bitmap display: reset")

    def display(self):
        """Write display buffer to physical display."""
        print("bitmap display: display")

    def image(self, image):
        """Set buffer to value of Python Imaging Library image.  The image should
        be in 1 bit mode and a size equal to the display size.
        """
        if image.mode != '1':
            raise ValueError('Image must be in mode 1.')
        imwidth, imheight = image.size
        if imwidth != self.width or imheight != self.height:
            raise ValueError('Image must be same dimensions as display ({0}x{1}).' \
                .format(self.width, self.height))
        print("bitmap display: image")
        image.save("dummydisplay.bmp")

    def clear(self):
        """Clear contents of image buffer."""
        print("bitmap display: clear")

    def set_contrast(self, contrast):
        """Sets the contrast of the display.  Contrast should be a value between
        0 and 255."""
        print("bitmap display: set_contrast", contrast)

    def dim(self, dim):
        """Adjusts contrast to dim the display if dim is True, otherwise sets the
        contrast to normal brightness if dim is False.
        """
        print("bitmap display: dim", dim)