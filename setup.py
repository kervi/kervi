from distutils.core import setup
from distutils import dir_util
from distutils import sysconfig
import os

setup(
    name='kervi',
    packages=['.', 'utility', 'coreSensors', 'coreSensors/cpuSensors','kervi-ui/dist'],
    version='0.1',
    description='A python framework for creating robotic and automation applications on raspberypi (and other platforms).',
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://github.com/wentzlau/kervi',
    download_url='https://github.com/wentzlau/kervi/archive/v1.0-alpha.tar.gz',
    keywords=['raspberry pi', 'robotic', 'automation'],
    classifiers=[],
    include_package_data=True,
    package_data={
        '': ['*.html', '*.js', '*.css', '*.map', '*.ico', '*.eot', '*.svg', '*.woff', '*.woff2', '*.ttf'],
    },
)

