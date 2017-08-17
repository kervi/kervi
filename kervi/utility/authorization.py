import http.cookies as Cookie

try:
    from user import users
    USERS = users
except ImportError:
    USERS ={}

SESSIONS = {}

def active():
    return len(USERS.keys())>0

def is_cookie_valid(cookie_header):
    if active():
        cookie = Cookie.SimpleCookie()
        cookie.load(cookie_header)
        session = cookie['kervisession'].value

        return session == "xyz123"
    else:
        return True

def _add_session(user_name):
    global SESSIONS
    session = "xyz123"
    SESSIONS[session]={"user_name": user_name}
    return session

def authorize(user_name, password):
    if active():
        if user_name in USERS and USERS[user_name]["password"] == password:
            return _add_session(user_name)
        return None
    return "123456"