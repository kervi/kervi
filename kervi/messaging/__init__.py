

from kervi.messaging.message_handler import MessageHandler
from kervi.config import Configuration
class _Messaging(object):
    instance = None
    def __new__(cls): # __new__ always a classmethod
        if not _Messaging.instance:
            _Messaging.instance = MessageHandler()
        return _Messaging.instance

    def __getattr__(self, name):
        return getattr(self.instance, name)

    def __setattr__(self, name, value):
        return setattr(self.instance, name, value)

Messaging = _Messaging()