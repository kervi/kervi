from distutils.core import setup
from distutils import dir_util
from distutils import sysconfig
import os

setup(
    name='kervi',
    packages=['kervi', 'kervi/utility', 'kervi/coreSensors', 'kervi/coreSensors/cpuSensors'],
    version='0.5.4',
    description='A python framework for creating robotic and automation applications on raspberypi (and other platforms).',
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://github.com/wentzlau/kervi',
    download_url='https://github.com/wentzlau/kervi/archive/v1.0-alpha.tar.gz',
    keywords=['raspberry pi', 'robotic', 'automation'],
    classifiers=[],
    include_package_data=True,
    package_data={
        'kervi': [
            'kervi-ui/dist/*.html',
            'kervi-ui/dist/*.js',
            'kervi-ui/dist/*.css',
            'kervi-ui/dist/*.map',
            'kervi-ui/dist/*.ico',
            'kervi-ui/dist/*.eot',
            'kervi-ui/dist/*.svg',
            'kervi-ui/dist/*.woff',
            'kervi-ui/dist/*.woff2',
            'kervi-ui/dist/*.ttf'
            ],
    },
)

