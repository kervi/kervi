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
from kervi.plugin.authentication.authentication_plugin import AuthenticationPlugin
from kervi.controllers import Controller
from kervi.actions import action

class AuthorizationManager(Controller):
    def __init__(self, log_queue):
        Controller.__init__(self, "authentication", "Authentication")
        #self._config = Configuration.authentication
        self._sessions = {}
        self._plugin_manager = PluginManager(Configuration, "authentication", [AuthenticationPlugin], log_queue=log_queue)
        self._plugin_manager.load_managed_plugins()
        self.spine.register_query_handler("authorizationActive", self._is_active)
        self.spine.register_query_handler("authorizationValidSessionHeader", self._is_session_valid)
        self.spine.register_query_handler("authorizationAllowAnonymousUser", self.allow_anonymous)
        self.spine.register_query_handler("authorizationGetUsers", self.get_users)
        self.spine.register_query_handler("authorizationAuthorizeUser", self.authorize)
        self.spine.register_command_handler("authorizationRemoveSession", self.remove_session)

    def _is_active(self):
        return len(self._plugin_manager.plugins)>0

    def allow_anonymous(self):
        for plugin in self._plugin_manager.plugins:
            if plugin.allow_anonymous():
                return True
        return False

    def _is_session_valid(self, header_cookies):
        if self._is_active():
            if header_cookies:
                cookie = Cookie.SimpleCookie()
                cookie.load(header_cookies)
                if 'kervisession' in cookie:
                    session = cookie['kervisession'].value
                    if session in self._sessions:
                        return self._sessions[session]
                return False
            else:
                return True
        else:
            return True

    def _add_session(self, user_name, user_info):
        session = uuid.uuid4().hex
        groups = user_info.groups
        self._sessions[session] = {"user_name":user_name, "groups":groups}
        return (session, self._sessions[session])

    def authorize(self, user_name, password):
        if self._is_active():
            for plugin in self._plugin_manager.plugins:
                user = plugin.authorize(user_name, password)
                if user:
                    return self._add_session(user_name, user)
        return (None, None)

    def get_users(self):
        result = []
        for plugin in self._plugin_manager.plugins:
            result += plugin.get_users()
        return result

    def remove_session(self, session_id):
        if session_id in self._sessions:
            del self._sessions[session_id]
