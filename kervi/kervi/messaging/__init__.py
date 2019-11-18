

from kervi.config import Configuration
#from kervi.actions import Actions
from kervi.spine import Spine
class _Messaging(object):
    def __init__(self, **kwargs):
        self.spine = kwargs.get("spine", Spine())

    def send_message(self, subject, **kwargs):
        #kwargs = dict(kwargs, run_async=True)
        #Actions["message_manager.send_message"](subject, **kwargs)
        self.spine.send_command("messageManagerSend", subject, **kwargs)

Messaging = _Messaging()