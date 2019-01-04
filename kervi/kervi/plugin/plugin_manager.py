import inspect
from kervi.config.configuration import _KerviConfig
class PluginManager:
    def __init__(self, config, section="general", plugin_classes=None):
        self._config = config
        self._plugins = []
        self._plugin_classes = plugin_classes
        for plugin in config.plugins.keys:
            plugin_config = config
            if isinstance(config.plugins[plugin], _KerviConfig):
                enabled = config.plugins[plugin]["enabled"]
                plugin_config = config.plugins[plugin]
            else:
                enabled = config.plugins[plugin]

            if enabled:
                module = __import__(plugin, fromlist=[''])
                plugin_type = module.plugin_type()
                if plugin_type == section:
                    plugin = module.init_plugin(plugin_config, self)
                    if self.add_plugin(plugin):
                        print("loaded plugin:", module.__name__)
                    else:
                        print("Invalid plugin class:", type(plugin))

    @property
    def config(self):
        return self._config
    
    def add_plugin(self, plugin):
        is_valid = True
        if self._plugin_classes:
            #plugin_bases = inspect.getmro(type(plugin))
            is_valid = False
            for plugin_class in self._plugin_classes:
                if isinstance(plugin, plugin_class):
                    is_valid = True
                    break
        if is_valid:
            self._plugins.append(plugin)
            return True
        else:
            return False

    @property
    def plugins(self):
        return self._plugins

    def process_step(self):
        for plugin in self.plugins:
            plugin.process_step()

    def terminate_process(self):
        for plugin in self.plugins:
            plugin.terminate_process()