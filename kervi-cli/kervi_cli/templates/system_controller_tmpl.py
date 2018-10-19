""" Sample system controller """
from kervi.controllers import Controller
from kervi.values import BooleanValue
from kervi.actions import action, Actions

class SystemController(Controller):
    def __init__(self):
        Controller.__init__(self, "systemController", "System")
        self.type = "system_power"

    @action
    def shutdown(self):
        #add clean up code before the application device shuts down
        Actions["app.shutdown"]()

    @action
    def restart(self):
        #add clean up code before the application device restarts
        Actions["app.restart"]()

    @action
    def stop(self):
        #add clean up code before the application stops
        Actions["app.stop"]()

SYSTEM_CONTROLLER = SystemController()
SYSTEM_CONTROLLER.actions["shutdown"].link_to_dashboard("*", "header_right", inline=True, label=None, button_icon="power-off", button_text=None)
SYSTEM_CONTROLLER.actions["shutdown"].link_to_dashboard("system", "device", inline=True, label=None, button_text="Shutdown")
SYSTEM_CONTROLLER.actions["restart"].link_to_dashboard("system", "device", inline=True, label=None, button_text="Restart")
SYSTEM_CONTROLLER.actions["stop"].link_to_dashboard("system", "device", inline=True, label=None, button_text="Stop")
