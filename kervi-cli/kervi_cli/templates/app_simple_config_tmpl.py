{{
    "application" : {{
        "name": "{name}",
        "id": "{id}"
    }},
    "log" : {{
        "level":"warning",
        "file":"{id}.log",
        "resetLog": false
    }},
    "modules":{modules},
    "network" : {{
        #"ip": "127.0.0.1",
        #"http_port": 80,
        #"ws_port": 9000,
        #"ipc_root_port": 9500,
        #"ipc_root_address": "127.0.0.1"
    }},

    "authorization": {{
        "enabled": false,
        "users" : {{
            "anonymous":{{
                "groups":[]
            }},
            "admin":{{
                "password":"",
                "groups":["admin"]
            }}
        }}
    }},

    "encryption" :{{
        "ipc_secret":"{secret}"
        #"useSSL": false,
        #"certFile": "kervi.cert",
        #"keyFile": "kervi.key"
    }}
}}