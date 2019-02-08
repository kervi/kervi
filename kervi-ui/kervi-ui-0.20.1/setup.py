from setuptools import setup
import distutils

import sys

try:
    from kervi.plugin.ui.web.version import VERSION
except:
    VERSION="0.0.0"

try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

setup(
    name='kervi-ui',
    packages=['kervi/plugin/ui/web'],
    version=VERSION,
    description='UI plugin for the kervi framework. It is included as dependency when kervi in installed.',
    author='Tim Wentzlau',
    author_email='tim.wentzlau@gmail.com',
    url='https://github.com/kervi/kervi-ui',
    download_url='https://github.com/wentzlau/kervi-ui/archive/v1.0-alpha.tar.gz',
    keywords=['ui', 'robotic', 'automation'],
    classifiers=[],
    include_package_data=True
    
)
