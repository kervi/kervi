=============
Configuration
=============

Your kervi application is configured via an configuration file.
Kervi uses the following naming convention for configuration files *[script name].config.json*.
If your kervi application is located in my_app.py it will look for configuration in *my_app.configuration.json*.


Below you see an example of a configuration file created via cli .
Lines that starts with # are ignored and default values used.

.. code:: javascript

    {
        "application" : {
            "name": "My application",
            "id": "my_app"
        },
        "log" : {
            "level":"warning",
            "file":"my_app.log",
            "resetLog": false
        },
        "modules":[],
        "network" : {
            #"ip": "127.0.0.1",
            #"http_port": 80,
            #"ws_port": 9000,
            #"ipc_root_port": 9500,
            #"ipc_root_address": "127.0.0.1"
        },

        "authorization": {
            "enabled": true,
            "users" : {
                "anonymous":{
                    "groups":[]
                },
                "admin":{
                    "password":"",
                    "groups":["admin"],
                    "name": "",
                    "email": "",
                    "phone": ""
                }
            }
        },

        "encryption" :{
            "ipc_secret":"1f9dbc2e-10b1-4255-a12e-41d98886fae8"
            #"use_ssl": false,
            #"cert_file": "kervi.cert",
            #"key_file": "kervi.key"
        },

        "messaging": {
            "default_channels": ["user_log"],
            "channels":{
                "user_log":{

                },
                "email": {
                    "enabled": false,
                    "smtp": {
                        "sender_name": "Kervi",
                        "sender_address": "kervi@example.com",
                        #"server": "localhost",
                        #"port": "25",
                        #"user": "",
                        #"password": "",
                        #"tls": false
                    }
                }
            }
        }
    }

Default values are used if out commented or omitted from the file.
You do not have to specify all values in a config file you just specify the ones that matters

.. code:: javascript

    {
        "messaging": {
            "channels":{
                "email": {
                    "enabled": true,
                    "smtp": {
                        "tls": true
                    }
                }
            }
        }
    }


Besides from config files you can specify config values when you instantiate your Application class.

.. code:: python
    
    from kervi.application import Application
    APP = Application({
        "network":{
            "ip": "127.0.0.1"
        }
    })


You are free to enter your own settings in the config file.

.. code:: javascript

    {
        "my_config":{
            "parameter_1": 1,
            "a_value": "value"
        }
    }

Accessing config values in code
-------------------------------

You are able to access configuration values after you have instantiated your application.

.. code:: python

    from kervi.application import Application
    APP = Application()

    from kervi.config import Configuration
    
    #get config value directly exception raised if not found
    print("application name", Configuration.application.name)

    print("parameter_1", Configuration.my_config.parameter_1)

    #get a value if set or return a default value
    print("b_value", Configuration.my_config.get("b_value", "my default value")

    #traverse 
    for key in Configuration.my_config.keys:
        print(key, Configuration.my_config[key])
