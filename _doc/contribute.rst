=================================
Contribute
=================================

The kervi project is build on several github projects all under the github.com/kervi name space.
Most of the project are clean python projects except from the web interface project that is implemented as an Angular (2) application. 

Development enviroment
======================

`GIT <https://git-scm.com/downloads>`_ is used to handle all soruce code via github.com.
If you want to paticipate install GIT and create an account on github.com 

`Visual Studio Code <https://code.visualstudio.com/download>`_ is used for all projects and VS code settings for each project are stored in the github projects.
For python programming the VS Code Python extension by Don Jayamanne is used for lintning and debuggin. 

`NPM <https://docs.npmjs.com/>`_ is used to handle packages for the web interface if you want to contribute to the web part you need to install NPM.

Github projects
===============

The framework is multi layered and there exists one or more github projects for each layer.

+--------------------------------------+
| application                          |         
+-------------------------+------------+
| Kervi core              | UI         |
+-------------------------+------------+
| Kervi platform driver                |
+--------------------------------------+
| devices                              |
+--------------------------------------+


-------------------------------------
Application (demo, integration tests)
-------------------------------------

https://github.com/kervi/kervi-test.git

This projects is used for integration test and demonstrates how the framework is used.

-----------
Kervi core
-----------

https://github.com/kervi/kervi.git

The core part of the framework.

---------------------
Kervi platform driver
---------------------

There is a project for each supported platform.
A platform driver exposes the platforms hardware like gpio, i2c, cameras.
For hardware platforms that are not supported a generic driver is used. 

https://github.com/kervi/kervi-hal-rpi.git

https://github.com/kervi/kervi-hal-generic.git
  

--------------------------
Kervi device library
--------------------------

https://github.com/kervi/kervi-devices.git 

This project holds drivers for specific hardware.

-------------------------
Kervi UI (Web dashboards)
-------------------------

https://github.com/kervi/kervi-ui.git 

This project contains the web server and Angular dashboard application.