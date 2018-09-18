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
from kervi.plugin.plugin_manager import PluginManager
SESSIONS = {}

_PLUGINS = []

def _load_plugin(plugin):
    global _PLUGINS
    _PLUGINS.append(plugin)

def active():
    result = Configuration.authentication.enabled and len(Configuration.authentication.users) > 0
    return result

if active():
    PluginManager(Configuration, "authentication", _load_plugin)

def allow_anonymous():
    if "anonymous" in Configuration.authentication.users.keys:
        return Configuration.authentication.users.anonymous.enabled
    return False

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
    groups = user_info.get("groups", [])
    SESSIONS[session] = {"user_name":user_name, "groups":groups}
    return (session, SESSIONS[session])


def authorize(user_name, password):
    if active():
        for plugin in _PLUGINS:
            user = plugin.authorize(user_name, password)
            if user:
                return _add_session(user_name, user)

    return (None, None)

def authorizex(user_name, password):
    if active():
        users = Configuration.authentication.users
        user = users.get(user_name, None)
        if user:
            if user_name == "anonymous":
                if allow_anonymous():
                    return _add_session(user_name, user)
            else:
                user_password = user.get("password", None)
                enabled = user.get("enabled", False)
                if user_password and enabled and user_password == password:
                    return _add_session(user_name, user)
                elif not user_password and not password:
                    return _add_session(user_name, user)
    return (None, None)

def remove_session(sessionid):
    global SESSIONS
    if sessionid in SESSIONS:
        del SESSIONS[sessionid]

spine=Spine()
spine.register_query_handler("authorizationActive", active)
spine.register_query_handler("validSessionHeader", is_session_valid)