import distutils
from setuptools import setup

try:
    from kervi.platforms.raspberry.version import VERSION
except:
    VERSION = "0.0"

try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

setup(
    name='kervi-hal-rpi',
    version=VERSION,
    description="""Raspberry pi hardware abstraction layer for the Kervi automation framework""",
    packages=[
        "kervi.platforms.raspberry",
        "kervi.devices.raspberry"
    ],
    install_requires=[
        'Adafruit_GPIO',
        'inputs'
    ],

)
