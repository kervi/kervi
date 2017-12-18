# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Module that holds a general kervi application module threading class"""

from kervi.utility.thread import KerviThread
from kervi.spine import Spine

class ModuleThread(KerviThread):
    def __init__(self):
        KerviThread.__init__(self)
        self.spine = Spine()
        self.spine.register_command_handler("startThreads", self._startCommand)

    def _step(self):
        self.moduleStep()

    def _startCommand(self):
        if not self.isAlive():
            super(KerviThread, self).start()

    def _stopCommand(self):
        self.stop()
