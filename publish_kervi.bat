set pythonbin="python.exe"

echo %pythonbin%

echo VERSION = %version% > kervi-core/kervi/core/version/__init__.py
echo VERSION = %version% > kervi/kervi/version/__init__.py
echo VERSION = %version% > kervi-ui/kervi/ui/version.py
echo VERSION = %version% > kervi-cli/kervi_cli/version.py
echo VERSION = %version% > kervi-devices/kervi/devices/version.py
echo VERSION = %version% > kervi-hal-generic/kervi/platforms/generic/version.py
echo VERSION = %version% > kervi-hal-rpi/kervi/platforms/raspberry/version.py
echo VERSION = %version% > kervi-hal-win/kervi/platforms/windows/version.py
echo VERSION = %version% > ukervi/ukervi/platforms/upython/version.py

@ECHO ON
cd kervi-core
call %pythonbin% setup.py  sdist 
cd ..
cd kervi
call %pythonbin% setup.py  sdist
cd ..
cd kervi-ui
cd kervi/ui/web
call ng build
cd ..
cd ..
cd ..
call %pythonbin% setup.py  sdist
cd ..
cd kervi-cli
call %pythonbin% setup.py  sdist
cd ..
cd kervi-devices
call %pythonbin% setup.py  sdist
cd ..
cd kervi-hal-generic
call %pythonbin% setup.py  sdist
cd ..
cd kervi-hal-rpi
call %pythonbin% setup.py  sdist
cd ..
cd kervi-hal-win
call %pythonbin% setup.py  sdist
cd ..
cd ukervi
call %pythonbin% setup.py  sdist
cd ..


pause

twine upload kervi-core/dist/* -u %twine_user% -p %twine_password%
twine upload kervi-ui/dist/* -u %twine_user% -p %twine_password%
twine upload kervi-cli/dist/* -u %twine_user% -p %twine_password%
twine upload kervi-devices/dist/* -u %twine_user% -p %twine_password%
twine upload kervi-hal-generic/dist/* -u %twine_user% -p %twine_password%
twine upload kervi-hal-rpi/dist/* -u %twine_user% -p %twine_password%
twine upload kervi-hal-win/dist/* -u %twine_user% -p %twine_password%
twine upload ukervi/dist/* -u %twine_user% -p %twine_password%
twine upload kervi/dist/* -u %twine_user% -p %twine_password%

pause

