import kervi.utility.nethelper as nethelper

def get_default_config():
    return  {
        "application" : {
            "name": "Kervi",
            "id": "kervi"
        },
        "discovery":{
            "enabled": True,
            "challenge": "kervi",
            "port": nethelper.get_free_port([9434])
        },
        "log" : {
            "levels":["fatal", "error", "warning", "information", "debug"],
            "level":"debug",
            "file":"kervi.log",
            "resetLog": False
        },
        "modules":[],
        "network" : {
            "ip": nethelper.get_ip_address(),
            "http_port": nethelper.get_free_port([80, 8080, 8081]),
            "ws_port": nethelper.get_free_port([9000]),
            "ipc_root_port": nethelper.get_free_port([9500]),
            "ipc_root_address": nethelper.get_ip_address()
        },
        "plugins":{
            "authentication": {
                "kervi.plugin.authentication.plain": False
            },
            "messaging":{
                "kervi.plugin.messaging.email": {
                    "enabled": False,
                    "smtp": {
                        "sender_name": "Kervi",
                        "sender_address": "kervi@example.com",
                        "server": "localhost",
                        "port": "25",
                        "user": "",
                        "password": "",
                        "tls": False
                    }
                }
            }
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
                "name": "",
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
        "display":{
            "unit_systems":{
                "default": "metric",
                "systems":{
                    "metric":{
                        "length": "m",
                        "temperature": "C",
                        "speed": "m/s",
                        "volumne": "l",
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
        }
    }
