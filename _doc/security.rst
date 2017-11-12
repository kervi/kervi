========
Security
========

.. topic:: Notice

    The security features of the Kervi framework has not been reviewed by any external experts and
    use is at own risk. 
    
    Exposing your Kervi application directly on the internet by routing traffic from internet router to the Kervi web server 
    is strongly adviced against at the moment.

    At this moment of development passwords and user names are send in clear text between browser and Kervi web server
    unless you enable TLS encryption.

It is possible to secure your Kervi application with user authentication and encrypted communication between browser 
and the kervi web server.

Users
=====

When a kervi application starts it looks for at file named users.py with the following format:

.. code:: python

    settings = {
        "tim":{
            "password":"1234",
            "groups":["admin", "group1"]
        },
        "test":{
            "password":"4321",
            "groups":["group2"]
        }
    }

As seen above each user is defined whit the user name as key in the settings dictionary and
the password and groups as parameters for each user.

You can use the groups in your python code to define who has access to panels and dynamcic values.

I the snippet below the cpu sensor is only visible for users who belongs to the admin group

.. code:: python

    CPU_SENSOR = Sensor("CPULoadSensor","CPU", CPULoadSensorDeviceDriver(), user_groups=["admin"])

In the same way dashboards and panels may be restricted to certain groups as shown below.

.. code:: python

    Dashboard(
        "system",
        "System",
        [
            DashboardPanel("power", title="Power", user_groups=["admins"])
        ],
        user_groups=["admins", "users"]
    )

In the snippet above users that is member of the groups admins or users have access to the system dashboard 
but it is only members in the admins groups that can see the power panel.

Anonymous access
----------------

If no anonymous user is defined in the users.py file the web user will be prompted with a log in screen when accessing the UI.
To enable anonymous access a the anonymous user to the users.py file

 .. code: python
 
    settings = {
        "anonymous":{
            "groups":["anon-group"]
        },
        "tim":{
            "password":"1234",
            "groups":["admin", "group1"]
        },
        "test":{
            "password":"4321",
            "groups":["group2"]
        }
    }

Now the web ui will try to login as anonymous user when the users go to the UI web page. 
All components that does not have the property user_groups set will be visible to the anonymous user.
In addition components that belongs to any user groups specified for the anonymous user will be visible too.  

.. topic:: Notice

    Authentication only apply to the web users. 
    Internal communication in the kervi applications python code is not affected by user authentication.
    All components can query and command each other plus receive events. 


Encryption
==========

To encrypt communication between browser and Kervi web server a certificate is needed. 
The Kervi web server looks for the file encryption.py upon start up.
If the file is present the settings in file is used to secure the communication between browser and kervi server.

.. code:: python

    settings={
        "useSSL": False, # enables or disables encryption
        "certFile": "kervi.cert",
        "keyFile": "kervi.key"
    }

