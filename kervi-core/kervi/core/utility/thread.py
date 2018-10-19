#Copyright 2016 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

"""  """

import threading
#import logging

class KerviThread(threading.Thread):
    """
    Thread class that runs until stop is called.
    Fill in the abstract method _step that handles one cycle of your thread code.
    """
    def __init__(self):
        """
        Initialize the thread as daemon.
        .. document private functions
        .. automethod:: _step
        """
        threading.Thread.__init__(self, name="KerviThread")
        self.daemon = True
        self.terminate = False

    def stop(self):
        """Terminate the thread"""
        self.terminate = True

    def run(self):
        """Private method do not call it directly or override it."""
        while not self.terminate:
            try:
                self._step()
            except:
                pass
                #log = logging.getLogger()
                #log.exception("kervi thread:" + self.__class__.__name__)

    def _step(self):
        """
        Abstract method that handles one cycle in the thread.
        """
