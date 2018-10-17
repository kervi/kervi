if __name__ == '__main__':
    from kervi.application import Application
    APP = Application()
    #Important GPIO must be imported after application creation
    from kervi.hal import GPIO

    from kervi.dashboards import Dashboard, DashboardPanel
    Dashboard(
        "app",
        "App",
        [
            DashboardPanel("fan", title="CPU fan")
        ],
        is_default=True
    )

    Dashboard(
        "system",
        "System",
        [
            DashboardPanel("cpu"),
            DashboardPanel("cam")
        ]
    )

    #Create a streaming camera server
    from kervi.vision.camera import CameraStreamer
    CAMERA = CameraStreamer("cam1", "camera 1")
    #link camera as background
    CAMERA.link_to_dashboard("app")
    #link camera to a panel
    CAMERA.link_to_dashboard("system", "cam")

    from kervi.sensors import Sensor
    from kervi.devices.sensors.system import CPULoadSensorDeviceDriver
    from kervi.devices.sensors.system import CPUTempSensorDeviceDriver
    #build in sensor that measures cpu use
    SENSOR_CPU_LOAD = Sensor("CPULoadSensor", "CPU", CPULoadSensorDeviceDriver())
    #link to sys area top right
    SENSOR_CPU_LOAD.link_to_dashboard("*", "sys-header")
    #link to a panel, show value in panel header and chart in panel body
    SENSOR_CPU_LOAD.link_to_dashboard("system", "cpu", type="value", link_to_header=True)
    SENSOR_CPU_LOAD.link_to_dashboard("system", "cpu", type="chart")

    #build in sensor that measures cpu temperature
    SENSOR_CPU_TEMP = Sensor("CPUTempSensor", "", CPUTempSensorDeviceDriver())
    #link to sys area top right
    SENSOR_CPU_TEMP.link_to_dashboard("*", "sys-header")


    #More on sensors https://kervi.github.io/sensors.html


    #define a light controller
    from kervi.controllers import Controller
    from kervi.values import NumberValue, BooleanValue
    from kervi.actions import action, Actions
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
                    if max_span != 0:
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
    #link controller actions
    FAN_CONTROLLER.actions["start"].link_to_dashboard("app", "fan", inline=True, label=None, button_text="Start")
    FAN_CONTROLLER.actions["stop"].link_to_dashboard("app", "fan", inline=True, label=None, button_text="Stop")

    @action
    def app_main():
        Actions["fan_controller.start"]()

    @action
    def app_exit():
        Actions["fan_controller.stop"]()
    
    APP.run()
