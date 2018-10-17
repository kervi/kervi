if __name__ == '__main__':
    from kervi.module import Module
    APP_MODULE = Module()
    #Important GPIO must be imported after module creation
    from kervi.hal import GPIO

    from kervi.dashboards import Dashboard, DashboardPanel
    Dashboard(
        "module-{id}",
        "{{name}}",
        [
            DashboardPanel("light", title="Light")
        ],
        is_default=True
    )

    from kervi.sensors import Sensor
    from kervi.devices.sensors.system importMemoryUseSensorDeviceDriver
    #build in sensor that measures cpu use
    SENSOR_1 = Sensor("MemUseSensor", "Memory",MemoryUseSensorDeviceDriver())
    #link to sys area top right
    SENSOR_1.link_to_dashboard("*", "sys-header")
    #link to a panel, show value in panel header and chart in panel body
    SENSOR_1.link_to_dashboard("module-{id}", "memory", type="value", link_to_header=True)
    SENSOR_1.link_to_dashboard("module-{id}", "memory", type="chart")


    #More on sensors https://kervi.github.io/sensors.html


    

    APP_MODULE.run()