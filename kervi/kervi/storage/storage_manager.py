from kervi.config import Configuration
from kervi.controllers import Controller
from kervi.actions import action
from kervi.plugin.plugin_manager import PluginManager
from kervi.plugin.storage.storage_plugin import StoragePlugin
from kervi.core.authentication import Authorization 
from kervi.spine import Spine

class StorageManager(Controller):
    def __init__(self):

        Controller.__init__(self, "storage_manager", "Storage manager")
        
        self._spine = Spine()
        self._spine.register_event_handler("valueChanged", self._store_value)
        self._spine.register_query_handler("getValueData", self._get_value_data)
        
        self._spine.register_command_handler("storeSetting", self._store_setting)
        self._spine.register_query_handler("retrieveSetting", self._retrieve_setting)
        
        self._spine.register_query_handler("getMessageItems", self._get_messages)
        self._spine.register_event_handler("newMessage", self._store_message)
        
        #SPINE.register_command_handler("createCronJob", create_cron_job)
        #SPINE.register_command_handler("deleteCronJob", delete_cron_job)
        #SPINE.register_query_handler("queryCronJob", query_cron_job)
        
        self._plugin_manager = None
        self._plugin_manager = PluginManager(Configuration, "storage", [StoragePlugin])
        self._plugin_manager.load_managed_plugins()        

    def _store_value(self, value_id, value, persist=False):
        for plugin in self._plugin_manager.plugins:
            try:
                if persist and plugin.storage_type == "persisted":
                    plugin.store_value(value_id, value, persist)
                elif not persist and not plugin.storage_type == "persisted":
                    plugin.store_value(value_id, value, persist)
            except NotImplementedError:
                pass
        
    def _get_value_data(self, value, date_from=None, date_to=None, limit=60):
        for plugin in self._plugin_manager.plugins:
            try:
                plugin.get_value_data(value, date_from, date_to, limit)
            except NotImplementedError:
                pass

    def _store_setting(self, group, name, value):
        for plugin in self._plugin_manager.plugins:
            try:
                if plugin.storage_type == "persisted":
                    plugin.store_setting(group, name, value)
            except NotImplementedError:
                pass

    def _retrieve_setting(self, group, name):
        for plugin in self._plugin_manager.plugins:
            try:
                if plugin.storage_type == "persisted":
                    return plugin.retrieve_setting(group, name)
            except NotImplementedError:
                pass

    def _store_message(self, source_id, item):
        for plugin in self._plugin_manager.plugins:
            try:
                plugin.store_message(source_id, item)
            except NotImplementedError:
                pass

    def _get_messages(self, page, page_size, filters=None):
        for plugin in self._plugin_manager.plugins:
            try:
                plugin.get_messages(self, page, page_size, filters)
            except NotImplementedError:
                pass