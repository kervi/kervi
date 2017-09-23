import uuid
import http.cookies as Cookie
from  kervi.spine import Spine

try:
    from users import settings
    USERS = settings
except ImportError:
    USERS ={}

SESSIONS = {}

def active():
    return len(USERS.keys())>0

def allow_anonymous():
    return "anonymous" in USERS

def is_session_valid(headers):
    if active():
        if headers and headers["Cookie"]:
            cookie = Cookie.SimpleCookie()
            cookie.load(headers["Cookie"])
            if 'kervisession' in cookie:
                session = cookie['kervisession'].value
                if session in SESSIONS:
                    return SESSIONS[session]
            return False
        return False
    else:
        return True

def _add_session(user_name, user_info):
    global SESSIONS
    session = uuid.uuid4().hex
    SESSIONS[session]={"user_name": user_name, "groups":user_info["groups"]}
    return (session, SESSIONS[session])

def authorize(user_name, password):
    if active():
        if user_name == "anonymous" and user_name in USERS:
            return _add_session(user_name, USERS[user_name])
        elif user_name in USERS and USERS[user_name]["password"] == password:
            return _add_session(user_name, USERS[user_name])
    return (None, None)

def remove_session(sessionid):
    global SESSIONS
    if sessionid in SESSIONS:
        del SESSIONS[sessionid]

spine=Spine()
spine.register_query_handler("authorizationActive", active)
spine.register_query_handler("validSessionHeader", is_session_valid)