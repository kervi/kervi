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

"""Module that holds classes for creating / bootstraping a Kervi application or a Kervi module.
"""
import time
#import threading
try:
    import thread
except ImportError:
    import _thread as thread

#import sys
#import uuid
import kervi.utility.process as process
import kervi.spine as spine
#from kervi.utility.process_spine import _ProcessSpine
#import kervi.kervi_logging as logging
import kervi_ui.webserver as webserver
import kervi.utility.nethelper as nethelper
import kervi.utility.encryption as encryption
import kervi.utility.application_helpers as app_helpers

class Module(object):
    """ Kervi application class that starts a kervi application and loads all needed modules.
        This class should be used by it self like:

    ```python
    MODULE=Module({
        "modules":["sensors","controllers"],
        "network":{
            "IPAddress": "ip address of device",
            "IPRootAddress": nethelper.get_ip_address(),
            "IPCRootPort": 9500),
            "IPCSecret":b"The secret"
        }
    })
    MODULE.run()
    ```

    """
    def __init__(self, settings = None):
        """ Settings is a dictionary with the following content
        """
        self.settings = {
            "info":{
                "id":"module",
                "name": "Module"
            },
            "log" : {
                "level":"debug",
                "file":"kervi.log",
                "resetLog":False
            },
            "modules":[],
            "network":{
                "IPAddress": nethelper.get_ip_address(),
                "ModulePort": nethelper.get_free_port([9600]),
                "IPRootAddress": nethelper.get_ip_address(),
                "IPCRootPort":nethelper.get_free_port([9500]),
                "IPCSecret":b"12345",
            }
        }

        print("Starting kervi module, please wait")
        if settings:
            self.settings = app_helpers._deep_update(self.settings, settings)
        self._validateSettings()
        self.started = False
        self._root_address = "tcp://" + settings["network"]["IPRootAddress"] + ":" + str(settings["network"]["IPCRootPort"])
        spine._init_spine(settings["info"]["id"], settings["network"]["ModulePort"], self._root_address, settings["network"]["IPAddress"])
        
        self.spine = spine.Spine()
        
        self._module_processes = []
        
        import kervi.hal as hal
        hal_driver = hal._load()
        if hal_driver:
            print("Using HAL driver:", hal_driver)

    def _validateSettings(self):
        pass

    def get_process_info(self):
        return {"id": "application"}

    def _start(self):
        self.started = True

        try:
            import dashboards
        except ImportError:
            pass

        #self.spine.run()
        self.spine.send_command("startThreads", scope="process")
        time.sleep(.5)

        module_port = self.settings["network"]["ModulePort"]

        for module in self.settings["modules"]:
            module_port += 1
            self._module_processes += [
                process._start_process(
                    "module-" + self.settings["info"]["id"]
                    module,
                    self.settings,
                    module_port,
                    app_helpers._KerviModuleLoader,
                    process_id=self.settings["info"]["id"] + "-"+module
                )
            ]
            #time.sleep(1)

        time.sleep(2*len(self._module_processes))
        #http_address = (self.settings["network"]["IPAddress"], self.settings["network"]["WebPort"])
        print("module connected to application at:", self._root_address)
        print("Press ctrl + c to stop your module")
        self.spine.trigger_event(
            "moduleReady",
            self.settings["info"]["id"]
        )
        

    def _input_thread(self, list):
        try:
            raw_input()
            list.append(None)
        except KeyboardInterrupt:
            pass
        except:
            pass

    def run(self):
        """Run the application loop. The application will continue until termination with ctrl-c"""

        if not self.started:
            self._start()
        try:
            char_list = []
            thread.start_new_thread(self._input_thread, (char_list,))
            while not char_list:
                time.sleep(1)

        except KeyboardInterrupt:
            pass

        self.stop()

    def _xrun(self):
        """Used in tests"""

        if not self.started:
            self._start()

    def stop(self):
        print("stopping processes")
        process._stop_processes("module-" + self.settings["info"]["id"])
        time.sleep(1)
        spine.Spine().stop()
        #for thread in threading.enumerate():
        #    print("running thread",thread.name)
        print("module stopped")
