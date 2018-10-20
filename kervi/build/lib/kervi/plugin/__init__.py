

class KerviPlugin(object):
    def __init__(self, name, config, manager):
        self._name = name
        self._config = config
        self._manager = manager

    @property
    def manager(self):
        return self._manager

    @property
    def config(self):
        return self._config

    @property
    def name(self):
        return self._name