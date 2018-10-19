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
    from . import camera_driver
    return camera_driver.CameraDriver()

def service_commands(commands, app_name, app_id, script_path):
    from . import service
    service.service_manager(commands, app_name, app_id, script_path)

def get_user_inputs():
    import inputs
    return inputs.devices

def getrevision():
  # Extract board revision from cpuinfo file
  revision = "?"
  try:
    f = open('/proc/cpuinfo','r')
    for line in f:
      if line[0:8]=='Revision':
        length=len(line)
        revision = line[11:length-1]
    f.close()


  except:
    revision = "?"
 
  #from https://www.raspberrypi-spy.co.uk/2012/09/checking-your-raspberry-pi-board-version/
  models = [ 
    
    {
        "revisions": ["0002", "0003"],
        "name": "Model B Rev 1",
        "ram": "256MB"
    },
    {
        "revisions": ["0004", "0005", "0006"],
        "name": "Model B Rev 2",
        "ram": "256MB"
    },
    {
        "revisions": ["0007", "0008", "0009"],
        "name": "Model A",
        "ram": "256MB"
    },
    {
        "revisions": ["000d", "000e", "000f"],
        "name": "Model B Rev 2",
        "ram": "512MB"
    },
    {
        "revisions": ["0011", "0014"],
        "name": "Compute Module",
        "ram": "512MB"
    },
    {
        "revisions": ["0012", "0015"],
        "name": "Model A+",
        "ram": "256MB"
    },
    {
        "revisions": ["0016"],
        "name": "Model A+",
        "ram": "512MB"
    },
    {
        "revisions": ["a01041", "a21041"],
        "name": "Pi 2 Model B v1.1",
        "ram": "1GB"
    },
    {
        "revisions": ["a22042"],
        "name": "Pi 2 Model B v1.2",
        "ram": "1GB"
    },
    {
        "revisions": ["900092"],
        "name": "Pi Zero v1.2",
        "ram": "512MB"
    },
    {
        "revisions": ["900093"],
        "name": "Pi Zero v1.3",
        "ram": "512MB"
    },
    {
        "revisions": ["9000c1"],
        "name": "Pi Zero W",
        "ram": "512MB"
    },
    {
        "revisions": ["a22082", "a02082"],
        "name": "Pi 3 Model B",
        "ram": "1GB"
    },
    {
        "revisions": ["a020d3"],
        "name": "Pi 3 Model B+",
        "ram": "1GB"
    }
    
      
  ]

  for model in models:
      if revision in model["revisions"]:
          return model
  
  return {
        "revisions": ["?"],
        "name": "Unknown model",
        "ram": "?"
    }

def detect_devices():
    import inputs

    import subprocess
    c = subprocess.check_output(["vcgencmd", "get_camera"])
    c = c[:-1].decode("utf-8")
    cam = ""
    try:
        c.index("supported=1")
        try:
            c.index("detected=1")
            cam = "connected"
        except ValueError:
            cam = "not connected"
    except ValueError:
        cam = "not enabled in raspi config"
        
        

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
    
    revision = getrevision()

    return {
        "Platform": [{
            "name": "Raspberry pi",
            "model": revision["name"],
            "ram": revision["ram"]
        }],
        "inputs": input_devices,
        "cams":{
            "PI Camera" : cam
        }
    }