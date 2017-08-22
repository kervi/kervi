import uuid
import http.cookies as Cookie
from  kervi.spine import Spine

try:
    from user import users
    USERS = users
except ImportError:
    USERS ={}

SESSIONS = {}

def active():
    return len(USERS.keys())>0

def is_session_valid(headers):
    if active():
        cookie = Cookie.SimpleCookie()
        cookie.load(headers["Cookie"])
        session = cookie['kervisession'].value
        if session in SESSIONS:
            return SESSIONS[session]
        return False
    else:
        return True

def _add_session(user_name):
    global SESSIONS
    session = uuid.uuid4().hex
    SESSIONS[session]={"user_name": user_name}
    return session

def authorize(user_name, password):
    if active():
        if user_name in USERS and USERS[user_name]["password"] == password:
            return _add_session(user_name)
        return None
    return "x"

def remove_session(sessionid):
    global SESSIONS
    if sessionid in SESSIONS:
        del SESSIONS[sessionid]

spine=Spine()
spine.register_query_handler("authorizationActive", active)
spine.register_query_handler("validSessionHeader", is_session_valid)