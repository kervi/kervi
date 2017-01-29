# kervi
Kervi is a Python framework that makes it very easy to create robotic and automation projects with web based dashboards.
It runs on all platforms that supports Python and is optimized for Raspberry pi. 

Features of the framework are:
* Python classes for handling sensor readings and display on dashboards.
* Python classes for handlinge user interactions from controllers on dashboards.
* Integrated camera handling (Raspberry PI camera at the moment)
* Easy dahsboard setup.
* Dashboard UI is responsive and scales from mobile phones to desktop.
* Multi process oriented by spreading over more than one core.
* No need for knowing anything about web tecknologies dashboard layout and settings are done in python. 

Install Kervi via pip:
```
pip install kervi
```

After kervi is installed a commandline tool *kervi* is available that helps with scaffolding Kervi apps.
Kreate you first app in an empty folder by executing:
```
kervi create application myapp "My first app"
```

Start your new app by executing: 
```
python myapp.py
```

The following output shuld be displayed:
(example)
```
Starting kervi application, please wait
load sensors
load controllers
load cameras
init IPC
Your Kervi application is ready at http://192.168.0.120:8080
```

