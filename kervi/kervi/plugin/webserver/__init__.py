from kervi.plugin.kervi_plugin import KerviPlugin

class WebServerPlugin(KerviPlugin):
    def __init__(self, name, config, manager):
        KerviPlugin.__init__(self, name, config, manager)

    def server_ready(self, use_ssl, ip, port):
        self.spine.trigger_event(
            "WebAppReady", 
            None,
            {
                "ip": ip,
                "port": port, 
                "ssl": use_ssl
            }
        )
    
    def start(self):
        pass

    def stop(self):
        pass