

class PluginManager:
    def __init__(self, config, section, callback):
        #print("load plugins in: ", section)
        for plugin in config.plugins[section].keys:
            module = __import__(plugin, fromlist=[''])
            print("load plugin:", module.__name__)
            callback(module.init_plugin(config))

            
