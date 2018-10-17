{{
    "module" : {{
        "name": "{name}",
        "id": "{id}",
        "app_id": "{app_id}"
    }},
    "modules": {modules},
    "network" : {{
        #"ip": "127.0.0.1",
        #"ipc_module_port": 9600,
        
        #enter the same address as the app's config.network.ip
        #"ipc_root_address": "127.0.0.1"
        
        #enter the same port as the app's config.network.ipc_root_port
        #"ipc_root_port": 9500
    }},
    "encryption" :{{
        #enter the same ipc_secret as the app's config.encryption.ipc_secret 
        #"ipc_secret":""
    }}
}}