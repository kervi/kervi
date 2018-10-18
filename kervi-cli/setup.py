import distutils
from setuptools import setup
import sys

try:
    distutils.dir_util.remove_tree("dist")
except:
    pass

try:
    from kervi_cli.version import VERSION
except:
    VERSION="0.0.0"

setup(
    name='kervi-cli',
    version=VERSION,
    packages=[
        "kervi_cli",
        "kervi_cli/scripts",
        "kervi_cli/templates",
        "kervi_cli/scripts/commands"
    ],
    include_package_data=True,
    install_requires=[
        'Click',
        'psutil'
    ],
    entry_points='''
        [console_scripts]
        kervi=kervi_cli.scripts.kervi:cli
    ''',
)