
from kervi.plugin.kervi_plugin import KerviPlugin
class WebSocketIPCPlugin(KerviPlugin):
    def __init__(self, config, manager):
        KerviPlugin.__init__(self, "WSIPC", config, manager)
        from kervi.plugin.ipc.websocket.socket_spine import SocketSpine
        self._socket_spine = SocketSpine(self.global_config)
        self.spine.register_command_handler("startWebSocket", self._start_socket)
        self.spine.trigger_event(
            "websocketReady", 
            None,
            {
            
            }
        )
        
    def _start_socket(self):
        print("sc")
        self._socket_spine.start_socket()

    def process_step(self):
        self._socket_spine.step()

    def terminate_process(self):
        pass

def init_plugin(config, manager):
    return WebSocketIPCPlugin(config, manager)
