

class KerviPlugin(object):
    def __init__(self, name, config, manager):
        from kervi.config.configuration import _Configuration
        self._config = _Configuration()
        from kervi.config import Configuration
        self._global_config = Configuration
        plugin_config = {}
        if config:
            plugin_config = config.as_dict()
        self._config._load(config_user=plugin_config, config_base=self.get_default_config())
        
        self._name = name
        self._manager = manager

        from kervi.spine import Spine
        self.spine = Spine()

        from kervi.core.utility.bind_decorators import bind_decorators_to_class

        bind_decorators_to_class(self)
    
    @property
    def manager(self):
        return self._manager

    @property
    def plugin_config(self):
        return self._config

    @property
    def global_config(self):
        return self._global_config

    @property
    def name(self):
        return self._name

    def first_process_step(self):
        pass
    
    def process_step(self):
        pass

    def terminate_process(self):
        pass

    def get_default_config(self):
        return {}