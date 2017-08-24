from  kervi.spine import Spine

def active():
    spine = Spine()
    res = spine.send_query("authorizationActive")
    return res 

def is_session_valid(headers):
    spine = Spine()
    res = spine.send_query("validSessionHeader", headers)
    return res