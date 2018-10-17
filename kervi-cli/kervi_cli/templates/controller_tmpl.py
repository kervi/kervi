""" Sample fan controller """
from kervi.controllers import Controller
from kervi.values import NumberValue, BooleanValue
from kervi.actions import action

class FanController(Controller):
    def __init__(self):
        Controller.__init__(self, "fan_controller", "Fan")
        self.type = "fan"

        self.temp = self.inputs.add("temp", "Temperature", NumberValue)
        self.temp.min = 0
        self.temp.max = 150

        self.trigger_temp = self.inputs.add("trigger_temp", "Trigger temperature", NumberValue)
        self.trigger_temp.min = 0
        self.trigger_temp.max = 100
        #remember the value when app restarts
        self.trigger_temp.persist_value = True

        self.max_temp = self.inputs.add("max_temp", "Max speed temperature", NumberValue)
        self.max_temp.min = 0
        self.max_temp.max = 100
        #remember the value when app restarts
        self.max_temp.persist_value = True

        self.fan_speed = self.outputs.add("fan_speed", "Fanspeed", NumberValue)

        self._active = True

    @action
    def start(self):
        self._active = True
        self._calc_fan_speed()

    @action
    def stop(self):
        self._active = False
        self._calc_fan_speed()

    def _calc_fan_speed(self):
        if self._active:
            temp = self.temp.value - self.trigger_temp.value
            if temp <= 0:
                self.fan_speed.value = 0
            else:
                max_span = self.max_temp.value - self.trigger_temp.value
                if max_span > 0:
                    speed = (temp / max_span) * 100
                    if speed > 100:
                        speed = 100
                    self.fan_speed.value = speed
        else:
            self.fan_speed.value = 0
    
    def input_changed(self, changed_input):
        self._calc_fan_speed()

FAN_CONTROLLER = FanController()

#link the fan controllers temp input to cpu temperature sensor
#The temp sensor is loaded in another process and linked via its id
FAN_CONTROLLER.temp.link_to("CPUTempSensor")
FAN_CONTROLLER.temp.link_to_dashboard("app", "fan")

#link the other fan controller inputs to dashboard
FAN_CONTROLLER.trigger_temp.link_to_dashboard("app", "fan")
FAN_CONTROLLER.max_temp.link_to_dashboard("app", "fan")
FAN_CONTROLLER.fan_speed.link_to_dashboard("app", "fan")
FAN_CONTROLLER.actions["start"].link_to_dashboard("app", "fan", inline=True, label=None, button_text="Start")
FAN_CONTROLLER.actions["stop"].link_to_dashboard("app", "fan", inline=True, label=None, button_text="Stop")
