try:
    from encryption import settings
    SETTINGS = settings
except ImportError:
    SETTINGS = {
        "useSSL": False,
        "certFile": None,
        "keyFile" : None
    }

def enabled():
    return SETTINGS["useSSL"]

def get_cert():
    return (SETTINGS["certFile"], SETTINGS["keyFile"])

