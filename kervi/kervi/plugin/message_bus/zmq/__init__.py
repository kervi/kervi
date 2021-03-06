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

""" 
This module bootstraps the cental messagegin system in Kervi.
Include this module in all modules where communication is needed.
"""


from kervi.plugin.message_bus.kervi_bus_plugin import KerviBusPlugin
class ZMQPlugin(KerviBusPlugin):
    def __init__(self, config, manager):
        KerviBusPlugin.__init__(self, "ZMQBus", config, manager)

    def load(self, process_id, spine_port, root_address = None, ip=None):
        from kervi.plugin.message_bus.zmq.zmqbus import ZMQBus
        self._bus = ZMQBus()
        self._bus.set_log(process_id)
        self._bus.reset_bus(process_id, spine_port, ip, root_address)
        self._bus.run()
        #if root_address:
        #    self._bus.wait_for_root()
        return self



def init_plugin(config, manager):
    return ZMQPlugin(config, manager)
