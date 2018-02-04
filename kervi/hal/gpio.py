#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

"""
When Kervi starts it scans for installed Kervi platform drivers and loads the GPIO driver.
In your application you access GPIO via:

.. code:: python

    import kervi.hal.GPIO as GPIO

    #define channel 23 as input
    GPIO.define_as_input(23)
"""
from kervi.values import NumberValue, BooleanValue
from kervi.values.value_list import ValueList

CHANNEL_TYPE_ANALOG_IN = 1
CHANNEL_TYPE_ANALOG_OUT = 2
CHANNEL_TYPE_GPIO = 3

class LogicIOChannel(BooleanValue):
    def __init__(self, gpio_device, channel):
        BooleanValue.__init__(self, gpio_device.name +" " + str(channel), input_id=str(channel))
        self._device = gpio_device
        self._channel = channel

        self.pwm = ValueList(self, True)
        self.pwm.add("duty_cycle", "Duty cycle", NumberValue)
        self.pwm.add("frequency", "Frequency", NumberValue)
        self.pwm.add("active", "Active", BooleanValue)

        self.pwm["duty_cycle"].min = 0
        self.pwm["duty_cycle"].max = 100

        self.pwm["frequency"].min = 0
        self.pwm["frequency"].max = 100000


    def get(self):
        return self._device.get(self, self._channel)

    def set(self, value):
        if self.is_input:
            self._device.set(self._channel, value)

    def _input_changed(self,v):
        self.value = self._device.get(self._channel)

    def define_as_input(self, pullup=False, bounce_time=200):
        self.is_input = False
        self._device.define_as_input(self._channel, pullup)
        self._device.listen(self._channel, self._input_changed, bounce_time)

    def define_as_output(self):
        self.is_input = True
        self._device.define_as_output(self._channel)

    def define_as_pwm(self, frequency=None, duty_cycle=None):
        self._device.define_as_pwm(self._channel, frequency, duty_cycle)
        if frequency:
            self.pwm["frequency"].value = frequency

        if duty_cycle:
            self.pwm["duty_cycle"].value = duty_cycle
        

    def listen(self, callback, bounce_time=.2):
        self._device.listen(self._channel, callback, bounce_time)

    def listen_rising(self, callback):
        self._device.listen_rising(self._channel, callback)

    def listen_falling(self, callback):
        self._device.listen_faling(self._channel, callback)

    def pwm_start(self, duty_cycle=None, frequency=None):
        self._device.pwm_start(self._channel, duty_cycle, frequency)

    def pwm_stop(self, channel):
        self._device.pwm_stop(self._channel)

    def value_changed(self, new_value, old_value):
        self.set(new_value)

    def dynamic_value_changed(self, changed_input, value):
        if changed_input == self.pwm["duty_cycle"]:
            if self.pwm["active"].value:
                self._device.pwm_start(self._channel, duty_cycle=changed_input.value)

        if changed_input == self.pwm["frequency"]:
            self._device.pwm_start(self._channel, frequency=changed_input.value)

        if changed_input == self.pwm["active"]:
            if changed_input.value:
                self._device.pwm_start(self._channel)
            else:
                self._device.pwm_stop(self._channel)

class AnalogIOChannel(NumberValue):
    def __init__(self, gpio_device, channel, is_input):
        NumberValue.__init__(self, str(channel), is_input=is_input)
        self._device = gpio_device
        self._channel = channel
        self.min = 0
        self.max = 100

    def get(self):
        return self._device.get(self, self._channel)

    def set(self, value):
        self._device.set(self._channel, value)

    def define_as_input(self, pullup=False):
        self.is_input = False
        self._device.define_as_input(self._channel, pullup)

    def define_as_output(self):
        self.is_input = True
        self._device.define_as_output(self._channel)

    def value_changed(self, new_value, old_value):
        self.set(new_value)

class IGPIODeviceDriver(object):
    """
    """
    def __init__(self, gpio_id):
        self.channels = {}
        self._gpio_id = gpio_id

    def __getitem__(self, channel):
        channel = str(self._map_pin(channel))
        if not channel in self.channels.keys():
            channel_type = self._get_channel_type(channel)
            if channel_type == CHANNEL_TYPE_ANALOG_IN:
                self.channels[channel] = AnalogIOChannel(self, channel, False)
            elif channel_type == CHANNEL_TYPE_ANALOG_OUT:
                self.channels[channel] = AnalogIOChannel(self, channel, True)
            elif channel_type == CHANNEL_TYPE_GPIO:
                self.channels[channel] = LogicIOChannel(self, channel)
            else:
                print("unknown channel_type:", channel, channel_type)

        return self.channels[channel]

    def _map_pin(self, channel):
        return channel

    def _get_channel_type(self, channel):
        """creates a channel"""
        raise NotImplementedError

    def define_as_input(self, channel, pullup=False):
        """Define a channel as input"""
        raise NotImplementedError

    def define_as_output(self, channel):
        """Define a channel as output"""
        raise NotImplementedError

    def define_as_pwm(self, channel, frequency, duty_cycle=None):
        """
        Defines a channel as pwm output.

        :param channel:
            The channel to define as a pwm output.

        :type channel: ``int``

        :param frequency:
            The pwn frequency.

        :type channel: ``int``

        :param duty_cycle:
            The duty_cycle to use, can be changed in call to pwm_start

        :type channel: ``int``
        """
        raise NotImplementedError

    def set(self, channel, state):
        """Sets the state of a channel that is defined as output.

        :param channel:
            The channel that should be changed.

        :type channel: ``int``

        :param state:
            The state of the channel.

        :type channel: ``bool``

        """
        raise NotImplementedError

    def set_channels(self, channels):
        """Sets the state of multiple channels in one operation.

        :param channels:
            A dictionary where keys are channels and values the value to set for each channel.

        :type channels: ``dict``

        """
        for key in channels:
            self.set(key, channels[key])

    def get(self, channel):
        """
        Returns the state of a channel.
        """
        raise NotImplementedError

    def listen(self, channel, callback, bounce_time=.2):
        """
        Listen on a channel for state change.
        The callback function is called when a channel is going high and low.

        :param channel:
            The channel to listen on.

        :type channel: ``int``

        :param callback:
            The function or method to call when the state of the channel change.

            .. code:: python
                def callback_func(state):
                    print(state)

                GPIO.listen(12, callback_func)

        :type callback: ``function or method``

        :param bounce_time:
            To reduce switch noice a bounce_time > 0 filters small jitters when a switch or button is pressed

        :type channel: ``float``
        """

        raise NotImplementedError

    def listen_rising(self, channel, callback):
        """
        calls the callback when a channel is going high.

        :param channel:
            The channel to listen on.

        :type channel: ``int``

        :param callback:
            The function or method to call when the state of the channel change.

        :type channel: ``function or method``
        """
        raise NotImplementedError

    def listen_falling(self, channel, callback):
        """
        calls the callback when a channel is going low.

        :param channel:
            The channel to listen on.

        :type channel: ``int``

        :param callback:
            The function or method to call when the state of the channel change.

        :type channel: ``function or method``
        """

        raise NotImplementedError

    def pwm_start(self, channel, duty_cycle=None, frequency=None):
        """
        Starts the pwm signal on a channel. The channel should be defined as pwm prior to this call.
        If no duty_cycle or frequency is passed in this call previous values from call to
        define_as_pwm or pwm_start is used.

        :param channel:
            The channel to start the pwm signal on.

        :type channel: ``int``

        :param duty_cycle:
            The duty cycle use on the channel.

        :type duty_cycle: ``int``

        :param frequency:
            The frequency to be used on the pwm channel.

        :type frequency: ``int``

        """
        raise NotImplementedError

    def pwm_stop(self, channel):
        """
        Stop pwm signal on channel.
        """
        raise NotImplementedError
