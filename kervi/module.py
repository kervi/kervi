# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
"""Module that holds classes for creating / bootstraping a Kervi application or a Kervi module.
"""
import time
try:
    import thread
except ImportError:
    import _thread as thread

import kervi.utility.process as process
import kervi.spine as spine
from kervi.utility.process_spine import _ProcessSpine
import kervi.kervi_logging as logging
from kervi.application import _deep_update
import kervi.utility.nethelper as nethelper

class Module(object):
    """
    Kervi application module that is used to start a module that connects to at running instance of
    a Kervi application. Settings for amodule is a dictionary on the following form:

    MODULE=Module(
        "info":{
                "id":"kervi_module",
                "name":"Kervi module",
                "appKey":"",
            },
            "log" : {
                "level":"debug",
                "file":"kervi.log",
                "resetLog":False
            },
            "modules":[],
            "network":{
                "IPRootAddress": nethelper.get_ip_address(),
                "IPCRootPort":9500,
                "IPAddress": nethelper.get_ip_address(),
                "IPCPort":nethelper.get_free_port([9600]),
                "IPCSecret":b"12345"
            }
    )

    """
    def __init__(self, settings=None):
        self.settings = {
            "info":{
                "id":"kervi_module",
                "name":"Kervi module",
                "appKey":"",
            },
            "log" : {
                "level":"debug",
                "file":"kervi.log",
                "resetLog":False
            },
            "modules":[],
            "network":{
                "IPRootAddress": nethelper.get_ip_address(),
                "IPCRootPort":9500,
                "IPAddress": nethelper.get_ip_address(),
                "IPCPort":nethelper.get_free_port([9600]),
                "IPCSecret":b"12345"
            }
        }

        print("Starting kervi module, please wait")
        if settings:
            self.settings = _deep_update(self.settings, settings)
        #self._validateSettings()
        self.started = False
        #logging.init_process_logging("kervi-main", self.settings["log"])
        #logging.KerviLog("kervi main")
        spine._init_spine("kervi-main")
        self.process_spine = _ProcessSpine(self.settings["network"]["IPCPort"], self.settings)
        self.spine = spine.Spine()
        import kervi.hal as hal
        hal_driver = hal._load()
        if hal_driver:
            print("Using HAL driver:", hal_driver)

    def _start(self):
        self.started = True
        self.spine.send_command("startThreads", scope="process")
        try:
            import dashboards
        except ImportError:
            pass

        time.sleep(2)
        self.spine.trigger_event("moduleStarted", self.settings["info"]["id"])
        time.sleep(2)
        print("Module started")

    def _input_thread(self, list):
        try:
            raw_input()
            list.append(None)
        except:
            pass

    def run(self):

        if not self.started:
            self._start()
        try:
            char_list = []
            thread.start_new_thread(self._input_thread, (char_list,))
            while not char_list:
                time.sleep(1)

        except KeyboardInterrupt:
            pass


        print("stopping module")

        self.spine.trigger_event("moduleStopped", self.settings["info"]["id"])
        time.sleep(1)
        self.process_spine.close_all_connections()
        process._stop_processes()
        time.sleep(1)
