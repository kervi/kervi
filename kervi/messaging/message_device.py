

class MessageDevice:
    def __init__(self):
        pass

    @property
    def message_type(self):
        raise NotImplementedError

    def create_address(self, user):
        raise NotImplementedError

    def send_message(self, addresses, subject, **kwargs):
        raise NotImplementedError
