from kervi.config import Configuration
from kervi.controllers import Controller
from kervi.actions import action
from kervi.plugin.plugin_manager import PluginManager
from kervi.plugin.routing.routing_plugin import RoutingPlugin
from kervi.core.authentication import Authorization 
from kervi.spine import Spine

class RoutingManager:
    def __init__(self):
        self._plugin_manager = None
        self._plugin_manager = PluginManager(Configuration, "routing", [RoutingPlugin])
        