

from kervi.messaging.email import EmailHandler
from kervi.messaging.user_log import UserLogHandler
from kervi.config import Configuration



class MessageHandler(object):

    def __init__(self):
        self._channels = {}

    def load(self):

        self.add_channel("user_log", UserLogHandler())
        self.add_channel("email", EmailHandler())
        self._users = Configuration.authentication.users
        self._config = Configuration.messaging
        self._levels = Configuration.log.levels

    def add_channel(self, channel_id, handler):
        self._channels[channel_id] = handler

    def send_message(self, subject, **kwargs):
        message_channels = kwargs.pop("channels", self._config.default_channels)
        groups = kwargs.pop("user_groups", [])

        if not groups:
            users = self._users
        else:
            users = []
            for user in self._users:
                ingroup = any(i in groups for i in user.groups)
                if ingroup:
                    users += [user]

        if users:
            for message_channel in message_channels:
                if message_channel in self._channels.keys():
                    channel = self._channels[message_channel]
                    addresses = []
                    for user in users:
                        address = channel.create_address(user)
                        if address:
                            addresses += [address]
                    if addresses:
                        channel.send_message(addresses, subject, **kwargs)
