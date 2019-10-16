from kervi.plugin.kervi_plugin import KerviPlugin 

class KerviBusPlugin(KerviPlugin):
    def __init__(self, name, config, manager):
        KerviPlugin.__init__(self, name, config, manager)
        self._bus = None

    def load(self, process_id, spine_port, root_address = None, ip=None):
        raise NotImplementedError

    @property
    def bus(self):
        return self._bus