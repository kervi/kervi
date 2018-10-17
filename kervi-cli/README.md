# kervi-ui
The commandline module for Kervi. The commandline interface it use to scafold kervi application. Kervi is a Python/web framework that makes it very easy to create robotic and automation projects in Python with a web based UI.
It is written primarly for Raspberry PI, but it runs on all platforms that supports Python. 

This kervi module is included via dependency when you install kervi via pip:

```
pip install kervi
```

To create a new Kervi application write:
```
kervi create application MyKerviApp 
```

To create an application on a raspberry pi
```
kervi create application MyKerviRPIApp --platform rpi 
```

for more information take a look on http://github.com/kervi/kervi