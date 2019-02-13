
from kervi.plugin.kervi_plugin import KerviPlugin
class MessagePlugin(KerviPlugin):
    def __init__(self, name, configuration, manager):
        KerviPlugin.__init__(self, name, configuration, manager)

    @property
    def message_type(self):
        raise NotImplementedError
    
    def send_message(self, addresses, subject, **kwargs):
        raise NotImplementedError
