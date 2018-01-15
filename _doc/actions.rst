==============
Actions
==============

Actions are distributed functions that may be called from any where in your kervi application.
The framework handles process and network boundaries for you if your application
is a kervi multiprocess application and/or uses kervi modules. 

You turn a function into an action via the @action decorator

.. code:: python

    from kervi.actions import action

    @action
    def my_action(p):
        print("my action", p)


You are now able to call it from every where in your application via:

.. code:: python

    from kervi.actions import Actions

    Actions["my_action"]("x")


The @action decorator takes the optional parameters action_id.

.. code:: python

    from kervi.actions import action

    @action(action_id="alternative_id")
    def my_action(p):
        print("my action", p)

You now call it via:

.. code:: python

    from kervi.actions import Actions

    Actions["alternative_id"]("x")


You may also decorate methods in kervi controllers:

.. code:: python

    from kervi.controllers.controller import controller
    from kervi.actions import action
    
    class GateController(Controller):
        def __init__(self, controller_id="gate_controller", name="Gate controller"):
            super().__init__(controller_id, name)

        @action()
        def open(self, speed):
            print("open gate with speed:", speed)

And call the action

.. code:: python

    from kervi.actions import Actions

    Actions["gate_controller.open"](100)


When the kervi application is ready it calls the app_main action this is your hook where you can
start your application logic.

.. code:: python

    @action
    def app_main():
        #Here starts the application logic



