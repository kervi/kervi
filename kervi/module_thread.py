# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Module that holds a general kervi application module threading class"""

from kervi.utility.thread import KerviThread
from kervi.spine import Spine

class ModuleThread(KerviThread):
    def __init__(self):
        KerviThread.__init__(self)
        self.spine = Spine()
        self.spine.registerCommandHandler("startThreads", self.startCommand)

    def step(self):
        self.moduleStep()

    def startCommand(self):
        if not self.isAlive():
            super(KerviThread, self).start()

    def stopCommand(self):
        self.stop()
