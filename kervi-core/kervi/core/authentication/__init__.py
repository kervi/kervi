#Copyright 2018 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.


from kervi.spine import Spine

class Authorization:
    def __init__(self):
        self._spine = Spine()
        self._active = None

    @property
    def active(self):
        if self._active == None:
            self._active = self._spine.send_query("authorizationActive")
        return self._active

    def authorize(self, user_name, password):
        user = self._spine.send_query("authorizationAuthorizeUser", user_name, password)
        return user

    def allow_anonymous(self):
        return self._spine.send_query("authorizationAllowAnonymousUser")

    def valid_session_header(self, headers):
        return self._spine.send_query("authorizationValidSessionHeader", headers)

    def remove_session(self, session_id):
        return self._spine.send_command("authorizationRemoveSession", session_id)
    
    def get_users(self):
        return self._spine.send_query("authorizationGetUsers")

    
