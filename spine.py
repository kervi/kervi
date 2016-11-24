from kervi.utility.cqrsBus import CQRSBus

class SpineX(CQRSBus): 
    def version(self):
        return 1.0

S = None
def initSpine(spineName="roboSys"):
    global S
    S = SpineX()
    S.setLog(spineName)
    S.reset()
    S.startQueues()

def Spine():
    return S
