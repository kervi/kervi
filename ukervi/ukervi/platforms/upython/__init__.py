#Copyright 2018 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

def get_gpio_driver():
    from . import gpio_driver
    return gpio_driver.GPIODriver()

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
    raise NotImplementedError

def service_commands(commands, app_name, app_id, script_path):
    raise NotImplementedError

def get_user_inputs():
    raise NotImplementedError

def detect_devices():
    
    return {
        "Platform": [{
            "name": "upython",
            
        }]
    }