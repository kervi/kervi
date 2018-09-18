

class PluginManager:
    def __init__(self, config, section):
        #print("load plugins in: ", section)
        self._plugins = []
        for plugin in config.plugins[section].keys:
            if config.plugins[section][plugin]:
                module = __import__(plugin, fromlist=[''])
                print("load plugin:", module.__name__)
                self._plugins.append(module.init_plugin(config))

    @property
    def plugins(self):
        return self._plugins

            
