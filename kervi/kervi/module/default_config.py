import kervi.utility.nethelper as nethelper

def get_default_config():
    return  {
        "application": {
            "id": "kervi"
        },
        "module" : {
            "name": "Kervi module",
            "id": "kervi_module",
            "app_connection_local": True
        },
         "discovery":{
            "enabled": True,
            "challenge": "kervi",
            "port": 9434
        },
        "modules":[],
        "network" : {
            "ip": nethelper.get_ip_address(),
            "ipc_module_port": nethelper.get_free_port([9800]),
            "ipc_root_port": 9500,
            "ipc_root_address": None
        },
        "encryption" :{
            "ipc_secret":"",
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
        },
        "routing": {
            "kervi_io":{
                "enabled": False,
                "address": "127.0.0.1",
                "port": None,
                "api_key": None
            }
        }
    }
