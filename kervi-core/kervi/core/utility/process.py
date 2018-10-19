#Copyright 2016 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

""" Handles multiprocessing functionality in Kervi """
import json
from multiprocessing import Process #, Array, Value, Manager, freeze_support
import time
import kervi.spine as spine
#from kervi.utility.process_spine import _ProcessSpine
#import sys
import kervi.core.utility.kervi_logging as k_logging

class _KerviProcess(object):
    def __init__(self, scope, name, config, ipcPort, root_close, **kwargs):
        #print("process", scope, name)
        #process_id = groups = kwargs.get("process_id", name)
        self.name = name
        self._do_terminate = False
        self._is_connected = False
        self.port = ipcPort
        self.config = config
        self.spine = self.load_spine(name, ipcPort, "tcp://" + config.network.ipc_root_address + ":" + str(config.network.ipc_root_port), config.network.ip)
        spine.set_spine(self.spine)
        self.spine.register_command_handler("terminateProcess", self.terminate, scopes=[scope])
        self.spine.register_query_handler("getProcessInfo", self.get_process_info)
        self.init_process(**kwargs)
        self.spine.send_command("startThreads", local_only=True)

    def __del__(self):
        #print("pd", self.name)
        pass

    def load_spine(self, process_id, spine_port, root_address = None, ip="127.0.0.1"):
        raise NotImplementedError

    def get_process_info(self):
        return {"id": self.name}

    @property
    def do_terminate(self):
        return self.spine.root_gone or self._do_terminate

    def terminate(self):
        #print("terminate process", self.name)
        self.spine.log.debug("do terminate:{0}", self.port)
        self._do_terminate = True

    def init_process(self, **kwargs):
        self.spine.log.error("abstract init_process called in KerviProcess")

    def _terminate_process(self):
        self.terminate_process()
        self.spine.trigger_event("processTerminating", None, local_only=True)
        #time.sleep(5)
        #self.process_spine.close_all_connections()
        self.spine.log.info("process terminated:{0}", self.port)
        self.spine.stop()

    def terminate_process(self):
        pass

    def process_step(self):
        time.sleep(0.01)
        pass

def _launch(scope, name, process_class, config_data, ipc_port, root_close, **kwargs):
    from kervi.config import Configuration
    Configuration._load(json_data=config_data)
    process_config = Configuration
    if "log" in process_config:
        k_logging.init_process_logging(name, process_config.log)
    log = k_logging.KerviLog(name)
    log.info('create process:{0} ipc port:{1}:', process_class.__name__, ipc_port)
    process = process_class(scope, name, process_config, ipc_port, root_close, **kwargs)
    try:
        while not process.do_terminate:
            if not process._is_connected and process.spine.is_connected:
                process._is_connected = True
                process.spine.trigger_event("processReady", scope, name)
            process.process_step()

    except KeyboardInterrupt:
        pass
    except:
        log.exception("error in process loop")
        pass
    #print("leave process", name, spine.Spine().root_gone)
    process._terminate_process()

def _start_process(scope, name, config, port_idx, process_class, root_close=True, **kwargs):
    config_data = config.to_json()
    process = Process(target=_launch, args=(scope, name, process_class, config_data, port_idx, root_close), kwargs=kwargs)
    process.start()
    return process

def _stop_processes(scope):
    spine.Spine().send_command("terminateProcess", scope=[scope])
