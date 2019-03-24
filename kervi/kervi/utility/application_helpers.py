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

import kervi.core.utility.process as process


class _KerviModuleLoader(process._KerviProcess):
    """ Private class that starts a separate process that loads a module in the Kervi application """
    def init_process(self, **kwargs):
        self.spine.log.verbose("load: %s", self.name)

        try:
            import kervi.hal as hal
            hal._load()
            __import__(self.name, fromlist=[''])
       
        except ImportError:
            self.spine.log.exception("load module:{0}", self.name)
        except:
            self.spine.log.exception("error load module:{0}", self.name)

        self.spine.send_command("startThreads", local_only=True)
        self.spine.trigger_event(
            "moduleLoaded",
            self.name,
        )

    def terminate_process(self):
        pass

    def load_spine(self, process_id, spine_port, root_address = None, ip="127.0.0.1"):
        from kervi.plugin.message_bus.bus_manager import BusManager
        self._bus_manager = BusManager()
        self._bus_manager.load(process_id, spine_port, root_address, ip)
        return self._bus_manager.bus

