import inspect
from kervi.config.configuration import _KerviConfig
import kervi.core.utility.process as process
#from kervi.zmq_spine import _ZMQSpine
from kervi.utility.discovery import KerviAppDiscovery
import kervi.utility.nethelper as nethelper

# "plugin_types":{
#                 "default": {
#                     "managed": False,
#                     "own_process": True
#                 },
#                 "messaging": {
#                     "own_process": False,
#                     "managed": True  
#                 },
#                 "webserver": {
#                     "own_process": True,
#                     "managed": False
#                 }
#             }
class _KerviPluginProcess(process._KerviProcess):
    """ Private class that starts a separate process for plugins """

    def init_process(self, **kwargs):
        plugin_module = kwargs.pop("plugin_module", None)
        plugin_config = kwargs.pop("plugin_config", {})
        #print("load plugins in: ", plugin_section)
        self.plugin = _PluginInfo(plugin_module, plugin_config, None, None, None)
        self.plugin.load()
        self.spine.trigger_event(
            "moduleLoaded",
            self.name,
        )

    def load_spine(self, process_id, spine_port, root_address = None, ip="127.0.0.1"):
        from kervi.plugin.message_bus.bus_manager import BusManager
        self._bus_manager = BusManager()
        self._bus_manager.load(process_id, spine_port, root_address, ip)
        return self._bus_manager.bus

    def process_step(self):
        self.plugin.process_step()
 
    def terminate_process(self):
        self.plugin.terminate_process()

class _PluginInfo:
    def __init__(self, plugin_module, config, plugin_type, load_config, manager=None):
        self._config = config
        self._plugin_module = plugin_module
        self._plugin_type = plugin_type
        self._load_config = load_config
        self.instance = None
        self._manager = manager
        self._first_process_step = True

    def _start_plugin_process(self, module_port):
        #print(plugin_section)
        process._start_process(
            "plugin-" + self._manager._config.application.id + "." + self._plugin_module,
            "plugin_" + self._plugin_module,
            self._manager._config,
            nethelper.get_free_port([module_port]),
            _KerviPluginProcess,
            plugin_module=self._plugin_module,
            plugin_config=self._config
        )
    
    def _create_instance(self):
        try:
            if (self._manager and not self._manager._load_silent) and True:
                print("load plugin:", self._plugin_module)
            module = __import__(self._plugin_module, fromlist=[''])
            self.instance = module.init_plugin(self._config, self._manager)
            
            is_valid = True
            if self._manager and self._manager._plugin_classes:
                #plugin_bases = inspect.getmro(type(plugin))
                valid = False
                for plugin_class in self._manager._plugin_classes:
                    if isinstance(self.instance, plugin_class):
                        valid = True
                        break
                if not valid:
                    print("Invalid plugin class:", self.instance, "expected: ", self._manager._plugin_classes)
                    self.instance = None
        except ModuleNotFoundError:
            print("Could not load plugin, module not found: ", self._plugin_module)

    def load(self, module_port=None):
        if self.own_process:
            self._start_plugin_process(module_port)
        else:
            self._create_instance()

    def process_step(self):
        if self.instance:
            if self._first_process_step:
                self.instance.first_process_step()
            else:
                self.instance.process_step()
    
    def terminate_process(self):
        if self.instance:
            self.instance.terminate_process()

    @property
    def plugin_module(self):
        return self._plugin_module
    
    @property
    def own_process(self):
        if self._config:
            return self._config.get("own_process", self._load_config.own_process)
        elif self._load_config:
            return self._load_config.own_process
        else:
            return False

    @property
    def managed(self):
        if self._config:
            return self._config.get("managed", self._load_config.managed)
        elif self._load_config:
            return self._load_config.managed
        else:
            return False

class PluginManager:
    def __init__(self, config, section="general", plugin_classes=None, load_silent=False):
        self._config = config
        self._section = section
        self._load_silent = load_silent
        self._plugins = []
        self._plugin_classes = plugin_classes

        self._manager_config = self._config.plugin_manager

        for plugin in config.plugins.keys:
            plugin_config = None
            if isinstance(config.plugins[plugin], _KerviConfig):
                enabled = config.plugins[plugin]["enabled"]
                plugin_config = config.plugins[plugin]
            else:
                enabled = config.plugins[plugin]

            plugin_types = self._manager_config.plugin_types.keys
            if enabled:
                plugin_type = "default"
                name_sections = plugin.split(".")
                for section in name_sections:
                    if section in plugin_types:
                        plugin_type = section
                        break

                #print("x", plugin_type, plugin, name_sections, self._manager_config.plugin_types[plugin_type].own_process)
                self._plugins.append(_PluginInfo(
                    plugin,
                    plugin_config, 
                    plugin_type, 
                    self._manager_config.plugin_types[plugin_type],
                    self
                ))

    @property
    def config(self):
        return self._config
    
    @property
    def plugins(self):
        result = []
        for plugin in self._plugins:
            if plugin.instance:
                result.append(plugin.instance)
        return result

    def prepare_load(self):
        result = []
        for plugin in self._plugins:
            if not plugin.managed and plugin.own_process:
                result.append("plugin_" + plugin.plugin_module)
                #"plugin_" + self._plugin_module,
        return result

    def load_plugins(self, module_port):
        for plugin in self._plugins:
            if not plugin.managed and plugin.own_process:
                module_port += 1
                plugin.load(module_port)
        return module_port

    def load_managed_plugins(self):
        for plugin in self._plugins:
            if plugin.managed and plugin._plugin_type == self._section:
                plugin.load()
    