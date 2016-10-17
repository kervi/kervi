from kervi.utility.kerviThread import KerviThread
from kervi.spine import Spine

class ModuleThread(KerviThread):
    def __init__(self):
        KerviThread.__init__(self)
        self.spine = Spine()
        self.spine.registerCommandHandler("startThreads", self.startCommand)

    def step(self):
        self.moduleStep()

    def startCommand(self, *args, **kwargs):
        if not self.isAlive():
            super(KerviThread, self).start()
        
    def stopCommand(self):
        self.stop()