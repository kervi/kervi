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
        "modules":[],
        "network" : {
            "ip": nethelper.get_ip_address(),
            "ipc_module_port": nethelper.get_free_port([9800]),
            "ipc_root_port": 9500,
            "ipc_root_address": nethelper.get_ip_address()
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
                        "weight": "g"
                    },
                    "uk-imperial":{
                        "length": "ft",
                        "temperature": "F",
                        "speed": "m/h",
                        "volumne": "gl",
                        "weight": "g"
                    },
                    "us-imperial":{
                        "length": "ft",
                        "temperature": "F",
                        "speed": "m/h",
                        "volumne": "gl",
                        "weight": "g"
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
