import kervi.utility.nethelper as nethelper

def get_default_config():
    return  {
        "application" : {
            "name": "Kervi",
            "id": "kervi"
        },
        "platform":{
            "driver": "auto"
        },
        "discovery":{
            "enabled": True,
            "challenge": "kervi",
            "port": nethelper.get_free_port([9434, 9435, 9436])
        },
        "log" : {
            "levels":["fatal", "error", "warning", "information", "debug"],
            "level":"verbose",
            "console_level":"verbose",
            "file": "kervi.log",
            "max_file_size": 1000000,
            "resetLog": False
        },
        "modules":[],
        "network" : {
            "ip": nethelper.get_ip_address(),
            "http_port": nethelper.get_free_port([80, 8080, 8000]),
            "ws_port": nethelper.get_free_port([9000, 9001, 9002]),
            "ipc_root_port": nethelper.get_free_port([9500]),
            "ipc_root_address": nethelper.get_ip_address()
        },
        "plugin_manager":{
            "plugin_types":{
                "default": {
                    "managed": False,
                    "own_process": True
                },
                "messaging": {
                    "own_process": False,
                    "managed": True  
                },
                "ui": {
                    "own_process": True,
                    "managed": False
                },
                "storage": {
                    "own_process": False,
                    "managed": True
                },
                "authentication": {
                    "own_process": False,
                    "managed": True
                },
                "message_bus": {
                    "own_process": False,
                    "managed": True
                }
            }
        },
        "plugins":{
            "kervi.plugin.message_bus.zmq": True,
            "kervi.plugin.authentication.plain": False,
            "kervi.plugin.storage.sqlite_temp": True,
            "kervi.plugin.storage.sqlite": True,
            "kervi.plugin.messaging.email": False,
            "kervi.plugin.messaging.user_log": True,
            "kervi.plugin.routing.kervi_io": False,
            "kervi.plugin.ui.web": True,
            "kervi.plugin.ipc.websocket": True
        },
        "plain_users": {
            "anonymous":{
                "enabled": True,
                "groups":[]
            },
            "admin":{
                "enabled": True,
                "password":"",
                "groups":["admin"],
                "name": "Administrator",
                "addresses": {
                    "email": "admin@example.com",
                    "phone": ""
                }
            }
        },
        "messaging": {
            "default_channels": ["user_log"]
        },
        "encryption" :{
            "ipc_secret":"",
            "use_ssl": False,
            "cert_file": "kervi.cert",
            "key_file": "kervi.key"
        },
        "media":{
            "folders":{
                "images":"images",
                "videos":"videos"
            }
        },
        "unit_system": "metric",
        "display":{
            "unit_systems":{
                "systems":{
                    "metric":{
                        "length": "m",
                        "temperature": "C",
                        "speed": "m/s",
                        "volumne": "l",
                        "weight": "g",
                        "datetime" :{
                            "time": "HH:mm:ss",
                            "date": "dd-MM-yyyy",
                            "datetime": "HH:mm dd-MM-yyyy",
                            "chart":{
                                "millisecond": "h:mm:ss.SSS",
                                "second": "h:mm:ss",
                                "minute": "h:mm",
                                "hour":   "h",
                                "day":    "MMM D",
                                "week":   "ll",
                                "month":  "MMM YYYY",
                                "quarter":"[Q]Q - YYYY",
                                "year":   "YYYY",
                            }
                        }
                    },
                    "uk-imperial":{
                        "length": "ft",
                        "temperature": "F",
                        "speed": "m/h",
                        "volumne": "gl",
                        "weight": "g",
                        "datetime" :{
                            "time": "HH:mm",
                            "date": "DD-MM-YYYY",
                            "datetime": "HH:mm DD-MM-YYYY",
                            "chart":{
                                "millisecond": "h:mm:ss.SSS",
                                "second": "h:mm:ss",
                                "minute": "h:mm",
                                "hour":   "h",
                                "day":    "MMM D",
                                "week":   "ll",
                                "month":  "MMM YYYY",
                                "quarter":"[Q]Q - YYYY",
                                "year":   "YYYY",
                            }
                        }
                    },
                    "us-imperial":{
                        "length": "ft",
                        "temperature": "F",
                        "speed": "m/h",
                        "volumne": "gl",
                        "weight": "g",
                        "datetime" :{
                            "time": "HH:mm",
                            "date": "DD-MM-YYYY",
                            "datetime": "HH:mm DD-MM-YYYY",
                            "chart":{
                                "millisecond": "h:mm:ss.SSS",
                                "second": "h:mm:ss",
                                "minute": "h:mm",
                                "hour":   "h",
                                "day":    "MMM D",
                                "week":   "ll",
                                "month":  "MMM YYYY",
                                "quarter":"[Q]Q - YYYY",
                                "year":   "YYYY",
                            }
                        }
                    },
                }
            }
        },
        "texts":{
            "messages":{
                "value_plain":'''
{source_name} {value} {unit}
{message_type}
{message}
             ''',
                "value_html":'''
                <p>
                <b><span style="font-size:80%;color:{message_color}">⬤</span>&nbsp;{source_name}: {value} {unit}</b><br/>
                <span>{message}</span>
                <p>
                ''',
                "action_subject": "{action_name} {state}",
                "action_plain":'''
Action {action_name} {state}
{message}
                ''',
                "action_html":'''
                <span style='font-size:80%;color:{message_color}'>⬤</span>&nbsp;<b>Action {action_name} {state}</b><br/>
                {message}
                '''
            },
            "ui":{
                "kervi": "Kervi",
                "yes": "yes",
                "no": "no",
                "warning": "warning",
                "error": "error",
                "user_name": "User name",
                "password": "password",
                "login_fail": "Login failed invalid user name or password",
                "login": "Login",
                "log_on": "Log on",
                "dashboard": "Dashboard",
                "dashboards": "Dashboards",
                "empty_app": "No dashboards, sensors, controllers or other components are found in this application!",
                "hello_world": "Hello world",
                "toggle_screen": "Toggle full screen",
                "source": "Source",
                "time": "Time",
                "message": "Message",
                "connecting": "Connecting, please wait",
                "pan": "pan",
                "tilt": "tilt",
                "take_picture": "Take picture",
                "record": "Record video",
                "media_folder": "Media folder"
            }
        },
        "development":{
            "debug_threads": False
        }
    }
