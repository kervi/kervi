import distutils
from setuptools import setup

try:
    from kervi.devices.version import VERSION
except:
    VERSION = "0.0"

try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

setup(
    name='kervi-device-library',
    version=VERSION,
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://github.com/kervi/kervi-components',
    description="""Hardware component library for the Kervi automation framework""",
    packages=[
        "kervi/devices",
        "kervi/devices/displays",
        "kervi/devices/gpio",
        "kervi/devices/motors",
        #"kervi/devices/platforms",
        #"kervi/devices/platforms/common",
        #"kervi/devices/platforms/common/sensors",
        "kervi/devices/pwm",
        "kervi/devices/sensors"
    ],
    install_requires=[
        'psutil'
    ]
)
