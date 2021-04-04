""" Setup module for kervi generating setup package used with pip """

import distutils
from setuptools import setup
import sys

try:
    from kervi.version import VERSION
except:
    VERSION="0.0.0"

try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    python_requires='>=3.5.0',
    name='kervi',
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://kervi.org',
    description="""
    A python framework for creating robotic and automation applications on Raspbery pi (and other platforms).
    UI is web based and generated on the fly based on configuration in python code.
    """,
    long_description=long_description,
    long_description_content_type="text/markdown",
    packages=[
        'kervi/application',
        'kervi/io',
        'kervi/messaging',
        'kervi/module',
        'kervi/plugin',
        'kervi/plugin/authentication',
        'kervi/plugin/authentication/plain',
        'kervi/plugin/io/files',
        'kervi/plugin/ipc/websocket',
        'kervi/plugin/message_bus',
        'kervi/plugin/message_bus/zmq',
        'kervi/plugin/messaging',
        'kervi/plugin/messaging/email',
        'kervi/plugin/messaging/user_log',
        'kervi/plugin/routing',
        'kervi/plugin/routing/kervi_io',
        'kervi/plugin/storage',
        'kervi/plugin/storage/sqlite',
        'kervi/plugin/storage/sqlite_temp',
        'kervi/plugin/webserver',
        'kervi/plugin/webserver/build_in',
        'kervi/routing',
        'kervi/storage',
        'kervi/utility',
        'kervi/version',
        'kervi/vision'
    ],
    version=VERSION,
    
    keywords=['raspberry pi', 'robotic', 'automation'],
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "Intended Audience :: Education",
        "Intended Audience :: Information Technology",
        "Intended Audience :: Manufacturing",
        "Intended Audience :: Science/Research",
        "Topic :: Scientific/Engineering",
        "Topic :: Scientific/Engineering :: Human Machine Interfaces",
        "Topic :: Software Development :: Documentation",
        "Topic :: System :: Monitoring",
        "Environment :: Console",
        "Operating System :: Microsoft :: Windows",
        "Operating System :: MacOS",
        "Operating System :: POSIX :: Linux",
        "Programming Language :: Python :: 3.5"
    ],
    install_requires=[
        'kervi-core==' + VERSION,
        'kervi-ui==' + VERSION,
        'kervi-cli==' + VERSION,
        'kervi-hal-generic==' + VERSION,
        'kervi-device-library==' + VERSION,
        'autobahn',
        'pyzmq>=18.1.0',
        'pillow',
        watchdog,
        'kervi-hal-win==' + VERSION,
        'kervi-hal-rpi==' + VERSION
    ],
    include_package_data=True
    # extras_require={
    #     'rpi':  ['kervi-hal-rpi'],
    #     'raspberry':  ['kervi-hal-rpi'],
    #     'win':  ['kervi-hal-win'],
    #     'windows':  ['kervi-hal-win'],
    #     'linux':  ['kervi-hal-linux'],
    #     'mac':  ['kervi-hal-linux']
    # },
    
)
