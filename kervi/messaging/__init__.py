

from kervi.config import Configuration
from kervi.actions import Actions

class _Messaging(object):
    def __init__(self):
        pass

    def send_message(self, subject, **kwargs):
        kwargs = dict(kwargs, run_async=True)
        Actions["message_handler.send_message"](subject, **kwargs)

Messaging = _Messaging()