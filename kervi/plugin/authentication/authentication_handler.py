

class AuthenticationHandler:
    def __init__(self, name, configuration):
        self._name = name
        self._configuration = configuration

    @property
    def name(self):
        return self._name

    @property
    def configuration(self):
        return self._configuration