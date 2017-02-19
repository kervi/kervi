# kervi
Kervi is a Python framework that makes it very easy to create robotic and automation projects with web-based dashboards.
It runs on all platforms that supports Python and optimized for Raspberry pi. 

Features of the framework are:
* Python classes for handling sensor readings and display on dashboards.
* Python classes for handling user interactions from controllers on dashboards.
* Integrated camera handling (Raspberry PI camera at the moment)
* Easy dashboard setup.
* Dashboard UI is responsive and scales from mobile phones to desktop.
* Multi process oriented by spreading over more than one core.
* Knowledge about web development is not required as all UI settings are handled in python.


[Read the full documentation](https://kervi.github.io/)

<img src="https://kervi.github.io/_images/dashboard_browser.png" width="500"> <img src="https://kervi.github.io/_images/dashboard_mobile.png" width="300">

<img src="https://kervi.github.io/_images/dashboard_cam.png" width="500"> <img src="https://kervi.github.io/_images/panel_cam.png" width="300">


Install Kervi via pip:

On Raspberry Pi

```
sudo pip3 install kervi[rpi]
```

On other systems like windows and linux:
```
pip3 install kervi
```

After Kervi is installed a commandline tool called *kervi* is available.
Via the commandline interface it is possible scaffold Kervi apps and
setup image and video handling on Raspberry PI.

Create you first app in an empty folder by executing:
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

