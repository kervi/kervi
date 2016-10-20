import threading
import logging


class KerviThread(threading.Thread):
    def __init__(self ):
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
                l=logging.getLogger()
                l.exception("kervi thread")       
                

    def step(self):
        return
