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

""" Handles multiprocessing functionality in Kervi """

from multiprocessing import Process #, Array, Value, Manager, freeze_support
import time
import kervi.spine as spine
from kervi.utility.process_spine import _ProcessSpine
#import sys
import kervi.utility.kervi_logging as k_logging

MAIN_SPINE = None
def _start_root_spine(settings, reset_log=False):
    global MAIN_SPINE
    k_logging.init_process_logging("kervi-main", settings["log"])
    k_logging.KerviLog("kervi main")
    spine._init_spine("kervi-main", settings["network"]["IPCRootPort"], None, settings["network"]["IPRootAddress"])
    #spine.run()
    #MAIN_SPINE = _ProcessSpine(settings["network"]["IPCRootPort"], settings, is_root=True)

def _stop_root_spine():
    #MAIN_SPINE.close_all_connections()
    pass

class _KerviProcess(object):
    def __init__(self, scope, name, settings, ipcPort, root_close, **kwargs):
        process_id = groups = kwargs.get("process_id", name)
        self.name = name
        self._do_terminate = False
        self.port = ipcPort
        self.settings = settings
        spine._init_spine(name, ipcPort, "tcp://" + settings["network"]["IPRootAddress"] + ":" + str(settings["network"]["IPCRootPort"]))
        self.spine = spine.Spine()
        #self.process_spine = _ProcessSpine(ipcPort, settings)
        #self.spine.send_command("startThreads", scope="process")
        #time.sleep(1)
        self.spine.register_command_handler("terminateProcess", self.terminate, scope=scope)
        self.spine.register_query_handler("getProcessInfo", self.get_process_info)
        self.init_process()
        #self.spine.run()
        self.spine.send_command("startThreads", scope="process")

    def __del__(self):
        print("pd", self.name)

    def get_process_info(self):
        return {"id": self.name}

    @property
    def do_terminate(self):
        return self.spine.root_gone or self._do_terminate

    def terminate(self):
        print("terminate process", self.name)
        self.spine.log.debug("do terminate:{0}", self.port)
        #print("terminate:", self.port)
        self._do_terminate = True

    def init_process(self):
        self.spine.log.error("abstract init_process called in KerviProcess")

    def _terminate_process(self):
        self.terminate_process()
        self.spine.trigger_event("processTerminating", None, scope="process")
        #time.sleep(5)
        #self.process_spine.close_all_connections()
        self.spine.log.info("process terminated:{0}", self.port)
        self.spine.stop()

    def terminate_process(self):
        pass

    def process_step(self):
        pass

def _launch(scope, name, process_class, settings, ipc_port, root_close, **kwargs):
    k_logging.init_process_logging(name, settings["log"])
    log = k_logging.KerviLog(name)
    log.info('create process:{0} ipc port:{1}:', process_class.__name__, ipc_port)
    process = process_class(scope, name, settings, ipc_port, root_close, **kwargs)
    try:
        while not process.do_terminate:
            process.process_step()

    except KeyboardInterrupt:
        pass
    except:
        log.exception("error in process loop")
        pass
    print("leave process", name, spine.Spine().root_gone)
    process._terminate_process()


def _start_process(scope, name, settings, port_idx, process_class, root_close=True, **kwargs):
    process = Process(target=_launch, args=(scope, name, process_class, settings, port_idx, root_close), kwargs=kwargs)
    process.start()
    return process

def _stop_processes(scope):
    spine.Spine().send_command("terminateProcess", scope=scope)
