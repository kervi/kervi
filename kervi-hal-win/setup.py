import distutils
from setuptools import setup

import sys

try:
    from kervi.platforms.windows.version import VERSION
except:
    VERSION="0.0.0"


try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

setup(
    name='kervi-hal-win',
    version=VERSION,
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://kervi.org',
    description="""
    This is a sub package used by the Kervi framework. See Kervi for more information.
    """,
    packages=[
        "kervi/platforms/windows",
        "kervi/platforms/windows/pygrabber"
    ],
    install_requires=[
        'psutil',
        'inputs',
        'comtypes',
        'numpy'
    ],

)