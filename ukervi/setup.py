""" Setup module for kervi generating setup package used with pip """
from setuptools import setup
import distutils
try:
    from ukervi.platforms.upython.version import VERSION
except:
    VERSION = "0.0.0"

try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

setup(
    name='ukervi',
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://kervi.org',
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
    This is a upython version of the Kervi framework.
    """,
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
