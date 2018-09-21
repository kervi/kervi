import inspect
from kervi.config.configuration import _KerviConfig
class PluginManager:
    def __init__(self, config, section, plugin_classes=None):
        self._plugins = []
        self._plugin_classes = plugin_classes
        for plugin in config.plugins[section].keys:
            plugin_config = config
            if isinstance(config.plugins[section][plugin], _KerviConfig):
                enabled = config.plugins[section][plugin]["enabled"]
                plugin_config = config.plugins[section][plugin]
            else:
                enabled = config.plugins[section][plugin]

            if enabled:
                module = __import__(plugin, fromlist=[''])
                plugin = module.init_plugin(plugin_config)
                if self.add_plugin(plugin):
                    print("loaded plugin:", module.__name__)
                else:
                    print("Invalid plugin class:", type(plugin))

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
