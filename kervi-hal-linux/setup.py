import distutils
from setuptools import setup

import sys

try:
    from kervi.platforms.linux.version import VERSION
except:
    VERSION="0.0.0"


try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

setup(
    name='kervi-hal-linux',
    version=VERSION,
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://kervi.org',
    description="""Generic linux hardware abstraction layer for the Kervi automation framework""",
    packages=[
        "kervi.platforms.linux",
        "kervi.devices.linux"
    ],
    install_requires=[
        'inputs',
        'acapture',
        'numpy'
    ],

)
