def get_board_name():
    return "Not detected"

def get_gpio_driver():
    from . import gpio
    return gpio.GPIODriver()

def get_i2c_driver(address, bus=0):
    from . import i2c
    return i2c.I2CDriver(address, bus)

def get_camera_driver(source):
    from . import camera_driver
    return camera_driver.CameraDriver()

def service_commands(commands, app_name, app_id, script_path):
    from . import service
    service.handle_command(commands, app_name, app_id, script_path)

def get_user_inputs():
    import inputs
    return inputs.devices

def detect_devices():
    from kervi.platforms.windows.pygrabber.PyGrabber import PyGrabber
    grabber = PyGrabber(None)
    cams = grabber.get_devices()
         
    
    import inputs
    input_devices = {}

    for device in inputs.devices:
        type = None
        if isinstance(device, inputs.Keyboard):
            type = "keyboard"
        if isinstance(device, inputs.Mouse):
            type = "mouse"
        if isinstance(device, inputs.GamePad):
            type = "game_pad"

        if isinstance(device, inputs.OtherDevice):
            type = "other_device"

        if type:
            if not type in input_devices.keys():
                input_devices[type] = []
            input_devices[type] += [{
                "name": device.name,
                "path": "?" #device.get_char_device_path()
            }]
    
    import platform
    return {
        "Platform": [{
            "name": platform.system(),
            "model": platform.release(),
        }],
        "inputs": input_devices,
        "cams": cams
    }
