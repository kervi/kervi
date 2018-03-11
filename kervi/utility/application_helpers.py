#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import collections
import kervi.core.utility.process as process
from kervi.zmq_spine import _ZMQSpine


def _deep_update(d, u):
    """Update a nested dictionary or similar mapping.

    Modify ``source`` in place.
    """

    for k, v in u.items():
        if isinstance(v, collections.Mapping):
            r = _deep_update(d.get(k, {}), v)
            d[k] = r
        else:
            d[k] = u[k]
    return d


class _KerviModuleLoader(process._KerviProcess):
    """ Private class that starts a seperate process that loads a module in the Kervi application """
    def init_process(self):
        print("load:", self.name)
        #import kervi.core_sensors.cpu_sensors
        try:
            import kervi.hal as hal
            hal._load()
            __import__(self.name, fromlist=[''])

        except ImportError:
            self.spine.log.exception("load module:{0}", self.name)
        #import kervi.utility.storage
        self.spine.send_command("startThreads", scope="process")
        self.spine.trigger_event(
            "moduleLoaded",
            self.name,
        )

    def terminate_process(self):
        pass

    def load_spine(self, process_id, spine_port, root_address = None, ip="127.0.0.1"):
        spine = _ZMQSpine()
        spine._init_spine(process_id, spine_port, root_address, ip)
        return spine

class _KerviSocketIPC(process._KerviProcess):
    """ Private class that starts a seperate process for IPC communication in the Kervi application """

    def init_process(self):
        print("load interprocess communication")
        from kervi.utility.socket_spine import SocketSpine
        self._socket_spine = SocketSpine(self.config)
        self.spine.send_command("startThreads", scope="process")
        self.spine.register_command_handler("startWebSocket", self._start_socket)

    def load_spine(self, process_id, spine_port, root_address = None, ip="127.0.0.1"):
        spine = _ZMQSpine()
        spine._init_spine(process_id, spine_port, root_address, ip)

        return spine
    
    def _start_socket(self):
        #print("start socket")
        self._socket_spine.start_socket()

    def process_step(self):
        self._socket_spine.step()

    def terminate_process(self):
        pass


class _KerviIORouterProcess(process._KerviProcess):
    """ Private class that starts a seperate process for IPC communication in the Kervi application """

    def init_process(self):
        print("load kervi io ipc")
        from kervi.routing.kervi_io.io_router import KerviIORouter
        self._router = KerviIORouter(self.config)
        self.spine.send_command("startThreads", scope="process")
        self.spine.register_command_handler("startRouter", self._start_router)

    def load_spine(self, process_id, spine_port, root_address = None, ip="127.0.0.1"):
        spine = _ZMQSpine()
        spine._init_spine(process_id, spine_port, root_address, ip)
        return spine
    
    def _start_router(self):
        #print("start socket")
        self._router.start_router()

    def process_step(self):
        if self._is_connected and self._router._route_table_ready:
            self._router.start_router()

    def terminate_process(self):
        pass
