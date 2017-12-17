from  kervi.spine import Spine

def active():
    spine = Spine()
    res = spine.send_query("authorizationActive")
    return res 

def is_session_valid(headers):
    spine = Spine()
    json_header = {}
    for header in headers:
        json_header[header] = headers[header]
    res = spine.send_query("validSessionHeader", json_header)
    return res