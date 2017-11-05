=================================
Contribute
=================================

The kervi project is build on several github projects all under the github.com/kervi name space.
Most of the project are clean python projects except from the web interface project that is implemented as an Angular 4 application. 

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

.. note:: It is important to clone all github projects before installing the packages.  

-------------------------------------
Application (demo, integration tests)
-------------------------------------

https://github.com/kervi/kervi-test.git

This projects is used for integration test and demonstrates how the framework is used.

-----------
Kervi core
-----------

The core part of the framework::

    git clone https://github.com/kervi/kervi.git

---------------------
Kervi platform driver
---------------------

There is a project for each supported platform.
A platform driver exposes the platforms hardware like gpio, i2c, cameras.
For hardware platforms that are not supported a generic driver is used. 

::

    git clone https://github.com/kervi/kervi-hal-rpi.git

    git clone https://github.com/kervi/kervi-hal-generic.git
  

--------------------------
Kervi device library
--------------------------

This project holds drivers for specific hardware and dummy drivers for test.

::
    
    git clone https://github.com/kervi/kervi-devices.git 

-------------------------
Kervi UI (Web dashboards)
-------------------------
This project contains the python kervi web server and Angular dashboard application.

::

    git clone https://github.com/kervi/kervi-ui.git 

The angular project is located in kervi_ui/web and is a Angular 4+ application.
You have to update the npm packages in the web folder by calling::

    npm update

Next you have to install the angular cli tool::

    npm install -g @angular/cli

You should now be ready to start web ui development enviroment via::

    ng serve

This starts a web server that runs the Kervi angular app directly from source.

The development version listen on local host and you need to set that address in your kervi app settings.
Below is a sample app settings that show how to set the settings IPAddress and IPRootAddress to localhost.

.. code:: python

    from kervi.bootstrap import Application
    import kervi.utility.nethelper as nethelper

    if __name__ == '__main__':
        APP = Application({
            "info":{
                "id":"app",
                "name":"Test multi file app",
                "appKey":"",
            },
            "modules":["sensors", "controllers", "cams"],
            "network":{
                "IPAddress": "localhost",
                "IPRootAddress": "localhost",
                "IPCRootPort":9500,
                "WebSocketPort":9000,
                "WebPort": 8080,
                "IPCSecret":b"fd9969b3-9748-46b6-a69d-119ec2773352",
                
            },
        })

        APP.run()

If you want to test your changes in the Kervi web server you need to build the ui app via.

::

    ng build

 

Install packages
================

The cloned git projects above should be installed as python development packages.
Execute the commands below the order is important::

    pip install -e ./kervi-devices
    pip install -e ./kervi-ui
    pip install -e ./kervi-hal-generic
    pip install -e ./kervi

Documentation
=============

If you want to help with the documentation you need to clone the kervi project (see above).
Source files for the documentation are located in the _doc folder as a sphinx project.

Run these commands to install sphinx ::

    pip install sphinx
    pip install sphinx_rtd_theme

Run the command below in the _doc folder::

    make html

This will create a kervi-doc folder at the same level as the kervi project.
Open kervi-doc/html/index.html in a browser and you should see the finished documentation.

When you are ready to submit your work create a pull request on github.


