Get started
=================================


Install Kervi via pip::

    pip install kervi


After kervi is installed a commandline tool *kervi* is available that helps with scaffolding Kervi apps.
Create you first app in an empty folder by executing::

    kervi create application myapp "My first app"


Start your new app by executing:: 


    python myapp.py


The following output shuld be displayed (example)::

    Starting kervi application, please wait
    load sensors
    load controllers
    load cameras
    init IPC
    Your Kervi application is ready at http://192.168.0.120:8080

If you enter the url into at browser you should see something like this

.. image:: images/dashboard.png