def get_board_name():
    return "unknown board"

def get_gpio_driver():
    pass

def get_i2c_driver(address, bus):
    from . import i2c_driver
    return i2c_driver.I2CDeviceDriver(address, bus)

def get_one_wire_driver(address):
    from . import one_wire
    return one_wire.OneWireDeviceDriver(address)

def default_i2c_bus():
    return 0

def shutdown():
    import subprocess
    import sys
    subprocess.run(["sudo", "shutdown", "now"], stderr=sys.stderr)

def reboot():
    import subprocess
    import sys
    subprocess.run(["sudo", "shutdown", "-r", "now"], stderr=sys.stderr)

def get_camera_driver(source):
    from . import camera_driver
    return camera_driver.CameraDriver()

def service_commands(commands, app_name, app_id, script_path):
    from . import service
    service.service_manager(commands, app_name, app_id, script_path)

def get_user_inputs():
    import inputs
    return inputs.devices


def detect_devices():
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
    
    return {
        "Platform": [{
            "name": "Linux",
            #"model": revision["name"],
            #"ram": revision["ram"]
        }],
        "inputs": input_devices,
        "cams":{
            
        }
    }