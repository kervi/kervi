# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
"""
When Kervi starts it scans for installed Kervi platform drivers and loads the GPIO driver.
In your application you access GPIO via:

.. code:: python

    import kervi.hal.GPIO as GPIO

    #define channel 23 as input
    GPIO.define_as_input(23)
"""
from kervi.values import DynamicNumber, DynamicBoolean 

CHANNEL_TYPE_ANALOG_IN = 1
CHANNEL_TYPE_ANALOG_OUT = 2
CHANNEL_TYPE_GPIO = 3


class LogicIOChannel(DynamicBoolean):
    def __init__(self, gpio_device, channel):
        DynamicBoolean.__init__(self, gpio_device.name +" " + str(channel))
        self._device = gpio_device
        self._channel = channel


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

    def define_as_pwm(self, frequency, duty_cycle=None):
        self._device.define_as_pwm(self._channel, frequency, duty_cycle)

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

class AnalogIOChannel(DynamicNumber):
    def __init__(self, gpio_device, channel):
        DynamicNumber.__init__(self, gpio_device.name +" " + str(channel))
        self._device = gpio_device
        self._channel = channel

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

    def define_as_pwm(self, frequency, duty_cycle=None):
        self._device.define_as_pwm(self._channel, frequency, duty_cycle)

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

class IGPIODeviceDriver(object):
    """
    """

    
        

    def __getitem__(self, channel):
        channel_type = self._get_channel_type(channel)
        if channel_type == CHANNEL_TYPE_ANALOG_IN:
            return AnalogIOChannel(self, channel)
        
        if channel_type == CHANNEL_TYPE_ANALOG_OUT:
            return AnalogIOChannel(self, channel)
        
        if channel_type == CHANNEL_TYPE_GPIO:
            return LogicIOChannel(self, channel)

        return None

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
