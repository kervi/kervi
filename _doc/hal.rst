Hardware and devices
####################

A central feature in Kervi is platform independent access to hardware and devices.
Kervi abstracts access to various systems like GPIO and I2C on your board in order to make Kervi solutions
portable. At the moment there is drivers for Raspberry Pi with more to come.

The kervi device library contains device drivers to common sensors, displays, gpio extenders. 

Select platform
---------------

It is possible to install a platform driver via pip.::
    
    pip install kervi[rpi]

The framework looks for installed platform driver upon application start and
initialise GPIO, I2C ect.

GPIO
----

Access to GPIO is done via the kervi.hal module. When your Kervi application starts it scans
for installed Kervi platform drivers and loads the GPIO driver.

.. code-block:: python

    if __name__ == '__main__':
    from kervi.application import Application
    APP = Application()

    #add dashboard and panel
    from kervi.dashboards.dashboard import Dashboard, DashboardPanel
    DASHBOARD = Dashboard("main", "Controller Buttons", is_default=True)
    DASHBOARD.add_panel(DashboardPanel("gpio", columns=3, rows=3, title="GPIO"))

    from kervi.hal import GPIO

    GPIO["GPIO12"].define_as_input()
    #Link to dashboard it will show as a read only switch.
    #If the the GPIO 12 pin is set high, the switch will change to on. 
    GPIO["GPIO12"].link_to_dashboard("main", "gpio")

    GPIO["GPIO13"].define_as_output()
    #Link to dashboard it will show as a switch
    #Press the button on screen to turn the GPIO pin 12 high
    GPIO["GPIO13"].link_to_dashboard("main", "gpio")

    APP.run()

I2C
---

I2C is used when communicating with i2c serial devices like sensors, displayes and motor controllers.

If a device exists in the device library there is no need
to work with i2c directly as the device driver handles i2c communication.

If a device is not present in the device library you could make your own device driver.

Below is an example on using I2C that implements a LUX sensor that can be used in a 
Kervi sensor (this is the actual code from the device library).

.. code-block:: python

    import time
    from kervi.hal import I2C

    class TSL2561Device(object):
        def __init__(self, address=0x39, bus=None):
            self.i2c = I2C(address, bus)
            self.gain = 0 # no gain preselected
            # enable the device
            self.i2c.write8(0x80, 0x03)     
            self.pause = 1
            self.gain = 0

        def set_gain(self, gain=1):
            """ Set the gain """
            if gain == 1:
                self.i2c.write8(0x81, 0x02)
            else:
                self.i2c.write8(0x81, 0x12)

            time.sleep(self.pause)

        def read_word(self, reg):
            try:
                wordval = self.i2c.read_U16(reg)
                newval = self.i2c.reverseByteOrder(wordval)
                return newval
            except IOError:
                print("Error accessing 0x%02X: Check your I2C address" % self.i2c.address)
                return -1


        def read_full(self, reg=0x8C):
            """Reads visible+IR diode from the I2C device"""
            return self.read_word(reg)

        def read_ir(self, reg=0x8E):
            """Reads IR only diode from the I2C device"""
            return self.read_word(reg)

        def read_value(self):
            if self.gain == 1 or self.gain == 16:
                self.set_gain(self.gain)
                ambient = self.read_full()
                IR = self.read_ir()
            elif self.gain == 0: # auto gain
                self.set_gain(16)
                ambient = self.read_full()
                if ambient < 65535:
                    ir_reading = self.read_ir()
                if ambient >= 65535 or IR >= 65535: # value(s) exeed(s) datarange
                    self.set_gain(1)
                    ambient = self.read_full()
                    ir_reading = self.read_ir()

            if self.gain == 1:
                ambient *= 16    # scale 1x to 16x
                ir_reading *= 16         # scale 1x to 16x

            ratio = (ir_reading / float(ambient))

            if (ratio >= 0) & (ratio <= 0.52):
                lux = (0.0315 * ambient) - (0.0593 * ambient * (ratio**1.4))
            elif ratio <= 0.65:
                lux = (0.0229 * ambient) - (0.0291 * ir_reading)
            elif ratio <= 0.80:
                lux = (0.0157 * ambient) - (0.018 * ir_reading)
            elif ratio <= 1.3:
                lux = (0.00338 * ambient) - (0.0026 * ir_reading)
            elif ratio > 1.3:
                lux = 0

            return lux


SPI
---

The SPI interface is comming.


Device library
--------------

It is possible to use ready made devices from the kervi device library.
Below is an example that uses the light sensor TLS2561.

For a complete list take a look at github <https://github.com/kervi/kervi-devices>  

.. code-block:: python

    """ Module for a sensor """
    from kervi.sensors.sensor import Sensor
    from kervi.devices.sensors.TSL2561 import TSL2561Device

    lux=Sensor("lux_sensor","Lux sensor", device=TSL2561Device()
    lux.link_to_dashboard("system", "light", type="radial_gauge")
        
    


Hal API
-------

.. toctree::
   :hidden:

   hal_gpio_api
   hal_i2c_api
   hal_devices_api