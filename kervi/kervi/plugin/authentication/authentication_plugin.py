class _UserAddresses:
    def __init__(self, addresses):
        self._addresses = addresses

    def get(self, address_type, default_value):
        
        if self._addresses and address_type in self._addresses.keys:
            return self._addresses[address_type]
        return default_value

class KerviUser(object):
    def __init__(self, user_name, name, groups, addresses):
        self.user_name = user_name
        if name:
            self.name = name
        else:
            self.name = user_name
        self.groups = groups
        self._addresses = _UserAddresses(addresses)
        
    @property
    def addresses(self):
        return self._addresses

from kervi.plugin import KerviPlugin
class AuthenticationPlugin(KerviPlugin):
    def __init__(self, name, configuration, manager):
        KerviPlugin.__init__(self, name, configuration, manager)

    def authorize(self, user_name, password):
        raise NotImplementedError

    def get_users(self):
        raise NotImplementedError
