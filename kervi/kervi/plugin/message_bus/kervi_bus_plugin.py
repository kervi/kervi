from kervi.plugin.kervi_plugin import KerviPlugin 

class KerviBusPlugin(KerviPlugin):
    def __init__(self, name, config, manager):
        KerviPlugin.__init__(self, name, config, manager)
        self._bus = None

    def load(self, process_id, spine_port, root_address = None, ip="127.0.0.1"):
        raise NotImplementedError

    @property
    def bus(self):
        return self._bus