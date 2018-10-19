import distutils
from setuptools import setup

import sys

try:
    from kervi.platforms.generic.version import VERSION
except:
    VERSION="0.0.0"

try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

setup(
    name='kervi-hal-generic',
    version=VERSION,
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://kervi.org',
    description="""
    Generic platform driver for the Kervi automation framework.
    """,
    packages=[
        "kervi/platforms/generic",
    ],
    install_requires=[
        'psutil',
        'inputs'
    ],

)