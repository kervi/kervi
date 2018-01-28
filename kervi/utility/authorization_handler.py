#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import uuid
import http.cookies as Cookie
from  kervi.spine import Spine
from kervi.config import Configuration
SESSIONS = {}

def active():
    return Configuration.authorization.enabled and len(Configuration.authorization.users)>0

def allow_anonymous():
    return "anonymous" in Configuration.authorization.users

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
    users = Configuration.authorization.users
    if active():
        if user_name == "anonymous" and user_name in users.keys:
            return _add_session(user_name, users[user_name])
        elif user_name in users.keys and users[user_name].password == password:
            return _add_session(user_name, users[user_name])
    return (None, None)

def remove_session(sessionid):
    global SESSIONS
    if sessionid in SESSIONS:
        del SESSIONS[sessionid]

spine=Spine()
spine.register_query_handler("authorizationActive", active)
spine.register_query_handler("validSessionHeader", is_session_valid)