# kervi
Kervi is a Python/web framework that makes it very easy to create robotic and automation projects in Python with a web based UI.
It is written primarly for Raspberry PI, but it runs on all platforms that supports Python. 


Install Kervi via pip:
```
pip install kervi
```

After kervi is installed at commandline tool *kervi* is available that helps with scaffolding kervi apps.
Kreate you first app in an empty folder:
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

