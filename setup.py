""" Setup module for kervi generating setup package used with pip """
from distutils.core import setup
#from distutils import dir_util
#from distutils import sysconfig
#import os

setup(
    name='kervi',
    packages=['kervi', 'kervi/utility', 'kervi/core_sensors', 'kervi/core_sensors/cpu_sensors'],
    version='0.6.3',
    description="""
    A python framework for creating robotic and automation applications on raspberypi (and other platforms).
    UI is web based and generated on the fly based on configuration in python code.
    """,
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://github.com/kervi/kervi',
    download_url='https://github.com/kervi/kervi/archive/v1.0-alpha.tar.gz',
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
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3.5"
    ],
    install_requires=[
        'kervi-ui',
        'kervi-cli',
        'autobahn[asyncio]',
        'psutil'
    ],
)

