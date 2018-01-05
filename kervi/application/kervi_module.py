import time
from kervi.spine import Spine

class KerviModule:
    def __init__(self, module_id):
        self.module_id = module_id
        self._last_ping = time.time()
        self.connected = True

    def ping(self):
        self._last_ping = time.time()
        self.connected = True

    @property
    def is_alive(self):
        return time.time() - self._last_ping < 3
