

class MessageHandler:
    def __init__(self, name, configuration):
        self._name = name
        self._configuration = configuration

    @property
    def message_type(self):
        raise NotImplementedError
    
    def send_message(self, addresses, subject, **kwargs):
        raise NotImplementedError
