# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Class for basic thread functionality """

import threading
import logging

class KerviThread(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
        self.daemon = True
        self.terminate = False

    def stop(self):
        self.terminate = True

    def run(self):
        while not self.terminate:
            try:
                self.step()
            except:
                log = logging.getLogger()
                log.exception("kervi thread")

    def step(self):
        return
