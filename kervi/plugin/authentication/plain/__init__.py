from kervi.plugin.authentication.authentication_handler import AuthenticationHandler


class PlainAuthenticationHandler(AuthenticationHandler):
    def __init__(self, configuration):
        AuthenticationHandler.__init__(self, "plain", configuration)

    def allow_anonymous(self):
        if "anonymous" in self.configuration.authentication_plain.users.keys:
            return self.configuration.authentication_plain.users.anonymous.enabled
        return False
    
    def authorize(self, user_name, password):
        print("au", user_name)
        users = self.configuration.authentication_plain.users
        user = users.get(user_name, None)
        if user:
            if user_name == "anonymous":
                if self.allow_anonymous():
                    return user
            else:
                user_password = user.get("password", None)
                enabled = user.get("enabled", False)
                if user_password and enabled and user_password == password:
                    return user
                elif not user_password and not password:
                    return user
        return None

def init_plugin(config):
    return PlainAuthenticationHandler(config)