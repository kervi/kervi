"""
When Kervi starts it scans for installed Kervi platform drivers and loads the GPIO driver.
In your application you access GPIO via:

.. code:: python

    import kervi.hal.GPIO as GPIO

    #define pin 23 as input
    GPIO.define_as_input(23)
"""

class IGPIODeviceDriver(object):
    """
    """
    def define_as_input(self, pin):
        """Define a pin as input"""
        raise NotImplementedError

    def define_as_output(self, pin):
        """Define a pin as output"""
        raise NotImplementedError

    def define_as_pwm(self, pin, frequency, duty_cycle=None):
        """
        Defines a pin as pwm output.

        :param pin:
            The pin to define as a pwm output.

        :type pin: ``int``

        :param frequency:
            The pwn frequency.

        :type pin: ``int``

        :param duty_cycle:
            The duty_cycle to use, can be changed in call to pwm_start

        :type pin: ``int``
        """
        raise NotImplementedError

    def set(self, pin, state):
        """Sets the state of a pin that is defined as output.

        :param pin:
            The pin that should be changed.

        :type pin: ``int``

        :param state:
            The state of the pin.

        :type pin: ``bool``

        """
        raise NotImplementedError

    def get(self, pin):
        """
        Returns the state of a pin.
        """
        raise NotImplementedError

    def listen(self, pin, callback):
        """
        Listen on a pin for state change.
        The callback function is called when a pin is going high and low.

        :param pin:
            The pin to listen on.

        :type pin: ``int``

        :param callback:
            The function or method to call when the state of the pin change.

            .. code:: python
                def callback_func(state):
                    print(state)

                GPIO.listen(12, callback_func)

        :type callback: ``function or method``
        """

        raise NotImplementedError

    def listen_rising(self, pin, callback):
        """
        calls the callback when a pin is going high.

        :param pin:
            The pin to listen on.

        :type pin: ``int``

        :param callback:
            The function or method to call when the state of the pin change.

        :type pin: ``function or method``
        """
        raise NotImplementedError

    def listen_falling(self, pin, callback):
        """
        calls the callback when a pin is going low.

        :param pin:
            The pin to listen on.

        :type pin: ``int``

        :param callback:
            The function or method to call when the state of the pin change.

        :type pin: ``function or method``
        """

        raise NotImplementedError

    def pwm_start(self, pin, duty_cycle=None, frequency=None):
        """
        Starts the pwm signal on a pin. The pin should be defined as pwm prior to this call.
        If no duty_cycle or frequency is passed in this call previous values from call to
        define_as_pwm or pwm_start is used.

        :param pin:
            The pin to start the pwm signal on.

        :type pin: ``int``

        :param duty_cycle:
            The duty cycle use on the pin.

        :type duty_cycle: ``int``

        :param frequency:
            The frequency to be used on the pwm pin.

        :type frequency: ``int``

        """
        raise NotImplementedError

    def pwm_stop(self, pin):
        """
        Stop pwm signal on pin.
        """
        raise NotImplementedError
