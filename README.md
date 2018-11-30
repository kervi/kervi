# kervi
Easy Python framework for robotic and automation projects.
The framework runs on all platforms that supports Python and have hardware support for Raspberry pi.
Wire up sensors, controllers and other devices to your Raspberry PI and link them to web based dashboards
and internal application logic.

Knowledge about web servers, html or web programming is not needed.
UI configuration is done in python code and the framework creates the web ui.

Features of the framework are:
* Python classes for handling sensors, displays, motors, gpio and other hardware.
* Python classes for handling user interactions from controllers on dashboards.
* Integrated camera handling (Raspberry PI camera at the moment)
* Device driver library for common devices 
* Very easy dashboard setup.
* Dashboard UI is responsive and scales from mobile phones to desktop.
* Multi process oriented by spreading over more than one core.
* Multi device oriented by connecting multiple Raspberry Pi's in one large application. 
* No web development knowledge is required as dashboard layout is handled in python. 


[Read the full documentation](https://kervi.org/)

<img src="https://kervi.github.io/_images/dashboard_browser.png" width="500"> <img src="https://kervi.github.io/_images/dashboard_mobile.png" width="300">

<img src="https://kervi.github.io/_images/dashboard_cam.png" width="500"> <img src="https://kervi.github.io/_images/panel_cam.png" width="300">


Install Kervi via pip:

On Raspberry Pi

```
sudo pip3 install kervi
```

On other systems like windows and linux:
```
pip3 install kervi
```

After Kervi is installed, a commandline tool called *kervi* is available.
Via the commandline interface it is possible scaffold Kervi apps and
setup image and video handling on Raspberry PI.

Create your  first app in an empty folder by executing:
```
kervi create application myapp "My first app"
```

Start your new app by executing: 
```
python myapp.py
```

The following output should be displayed:
(example)
```
Starting kervi application, please wait
load sensors
load controllers
load cameras
init IPC
Your Kervi application is ready at http://192.168.0.120:8080
```

Goto the url specified

