from datetime import datetime
#from kervi.messaging.email import EmailHandler
from kervi.messaging.user_log import UserLogPlugin
from kervi.config import Configuration
from kervi.controllers import Controller
from kervi.actions import action
from kervi.plugin.plugin_manager import PluginManager
from kervi.plugin.messaging.message_plugin import MessagePlugin
from kervi.core.authentication import Authorization 

class MessageManager(Controller):
    def __init__(self):
        Controller.__init__(self, "message_manager", "Message handler")
        self.spine.register_command_handler("messageManagerSend", self.send_message)
        self._channels = {}
        self._authorization = Authorization()
        self._plugin_manager = PluginManager(Configuration, "messaging", [MessagePlugin])
        self._plugin_manager.load_managed_plugins()
        self._users = self._authorization.get_users()
        self.load()

    def load(self):

        for plugin in self._plugin_manager.plugins:
            print("mp", plugin.message_type)
            self._channels[plugin.message_type] = plugin

        self._config = Configuration.messaging
        self._levels = Configuration.log.levels

    def add_channel(self, channel_id, handler):
        self._channels[channel_id] = handler

    #@action
    def send_message(self, subject, **kwargs):
        message_channels = kwargs.pop("channels", self._config.default_channels)
        groups = kwargs.pop("user_groups", [])
        timestamp = (datetime.utcnow() - datetime(1970, 1, 1)).total_seconds()
        time = datetime.utcnow()
        kwargs = dict(kwargs, time=time, timestamp=timestamp)
        if not groups:
            users = self._users
        else:
            users = []
            for user in self._users:
                ingroup = any(i in groups for i in user.groups)
                if ingroup:
                    users += [user]
        #print("u", users, message_channels, self._channels.keys())
        if users:
            for message_channel in message_channels:
                
                if message_channel in self._channels.keys():
                    channel = self._channels[message_channel]
                    channel_users = []
                    if channel.address_based:
                        for user in users:
                            if user.addresses.get(message_channel, None):
                                channel_users.append(user)
                        
                        if channel_users:
                            channel.send_message(channel_users, subject, **kwargs)
                    else:
                        channel.send_message([], subject, **kwargs)
