""" Setup module for kervi generating setup package used with pip """
from distutils.core import setup
import distutils
try:
    from ukervi.platforms.upython.version import VERSION
except:
    VERSION = "0.0"

try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

setup(
    name='ukervi',
    packages=[
        'ukervi',
        'ukervi/application',
        #'kervi/messaging',
        #'kervi/module',
        #'kervi/plugin',
        #'kervi/plugin/authentication',
        #'kervi/plugin/authentication/plain',
        #'kervi/plugin/messaging',
        #'kervi/plugin/messaging/email',
        #'kervi/plugin/storage',
        #'kervi/plugin/storage/sqlite',
        #'kervi/plugin/storage/sqlite_temp',
        #'kervi/routing',
        #'kervi/storage',
        #'kervi/zmq_spine',
        #'kervi/utility',
        'ukervi/platforms/upython',
        #'kervi/vision',
    ],
    version=VERSION,
    description="""
    A python framework for creating robotic and automation applications on Raspbery pi (and other platforms).
    UI is web based and generated on the fly based on configuration in python code.
    This package 
    """,
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://github.com/kervi/kervi',
    download_url='https://github.com/kervi/kervi/archive/v1.0-alpha.tar.gz',
    keywords=['upython', 'micropython', 'robotic', 'automation'],
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
        "Programming Language :: Python :: 3.4"
    ],
    install_requires=[
        'kervi-core'
    ],
    extras_require={
        
    },
    include_package_data=True,
    package_data={
        
    }
)
