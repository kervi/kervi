from kervi.plugin.authentication.authentication_plugin import AuthenticationPlugin, KerviUser

class PlainAuthenticationPlugin(AuthenticationPlugin):
    def __init__(self, configuration, manager):
        AuthenticationPlugin.__init__(self, "plain", configuration, manager)
        self._users = manager.config.plain_users
    def allow_anonymous(self):
        if "anonymous" in self._users.keys:
            return self._users.anonymous.enabled
        return False
    
    def _get_user(self, user_name, config_user):
        
        return KerviUser(
            user_name,
            config_user.get("name", user_name),
            config_user.get("groups", None),
            config_user.get("addresses", {})
        )

    def authorize(self, user_name, password):
        users = self._users
        user = users.get(user_name, None)
        if user:
            if user_name == "anonymous":
                if self.allow_anonymous():
                    return self._get_user(user_name, user)
            else:
                user_password = user.get("password", None)
                enabled = user.get("enabled", False)
                if user_password and enabled and user_password == password:
                    return self._get_user(user_name, user)
                elif not user_password and not password:
                    return self._get_user(user_name, user)
        return None

    def get_users(self):
        result=[]
        users = self._users
        for user_name in users.keys:
            user = users[user_name]
            result.append(self._get_user(user_name, user))
        return result

def init_plugin(config, manager):
    return PlainAuthenticationPlugin(config, manager)

def plugin_type():
    return "authentication"