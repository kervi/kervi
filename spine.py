from kervi.utility.cqrsBus import CQRSBus


class SpineX(CQRSBus): 
    def version(self):
        return 1.0 

s=None
def initSpine(spineName="roboSys"):
    global s
    print "init spine:"+spineName
    s=SpineX()
    s.setLog(spineName)
    s.reset()
    s.startQueues()

def Spine():
    global s
    return s