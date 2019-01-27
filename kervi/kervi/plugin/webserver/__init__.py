from kervi.plugin import KerviPlugin

class WebServerPlugin(KerviPlugin):
    def __init__(self, name, config, manager):
        KerviPlugin.__init__(self, name, config, manager)

    def start(self):
        pass

    def stop(self):
        pass