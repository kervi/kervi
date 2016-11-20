from kervi.moduleThread import  ModuleThread

class VisionModule(ModuleThread):
    def __init__(self,visionId, name):
        ModuleThread.__init__(self)
        self.ROIList = []
        self.cameraInfo = None

        self.moduleId = visionId

        self.name = name

        self.spine.registerQueryHandler("visionGetRegionsOfInterest", self.getROIList)
        self.spine.registerQueryHandler("visionInfo", self.getVisionInfo)
        self.spine.registerQueryHandler("getVisionsLinkedToCam", self.getVisionsLinkedToCam)
        self.spine.registerCommandHandler("linkVisionToCam", self.linkToCameraCommand)

    def createPointOfInterest(self, POIId, caption, position, size, focusPoint, text):
        if self.cameraInfo:
            return {"id":POIId, "caption":caption, "position":position, "size":size, "focusPoint": focusPoint, "text":text, "cameraId":self.cameraInfo["id"], "visionId": self.moduleId}
        print "no cam info"

    def getVisionsLinkedToCam(self, cameraId):
        if self.cameraInfo["id"] == cameraId:
            return self.moduleId

    def getVisionInfo(self):
        camId = None
        if self.cameraInfo:
            camId = self.cameraInfo["id"]

        return {"id":self.moduleId, "camera":camId, "name":self.name}

    def linkToCameraCommand(self,cameraId,visionId):
        if visionId == self.moduleId:
            self.linkToCamera(cameraId)
    
    def linkToCamera(self,cameraId):
        print cameraId
        cam = self.spine.sendQuery("getObjectInfo", cameraId)
        if cam:
            self.cameraInfo = cam
            self.cameraChanged()
            self.spine.triggerEvent("visionLinkedToCamera", self.moduleId, cameraId)

    def initVision(self):
        print "abstract iniVision reached"

    def cameraChanged(self):
        print "abstract cameraChanged reached"

    def moduleStep(self):
        self.visionStep()
    
    def visionStep(self):
        print "abstract visionStep reached"
        
    def getROIList(self, cameraId):
        if self.cameraInfo and cameraId == self.cameraInfo["id"]:
            return self.ROIList
    
    def clearRegionsOfInterest(self):
        camId = None
        if self.cameraInfo:
            camId = self.cameraInfo["id"]
        self.spine.triggerEvent("pointOfInterestChange", self.moduleId, {"action":"clear", "visionId":self.moduleId, "cameraId":camId})

    def addRegionOfInterest(self, region):
        self.ROIList += [region]
        self.spine.triggerEvent("pointOfInterestChange", self.moduleId, {"action":"add", "pointOfInterest":region},self.moduleId)

    def removeRegionOfInterest(self, regionId):
        try:
            for r in self.ROIList:
                if r["id"] == regionId:
                    self.spine.triggerEvent("pointOfInterestChange", self.moduleId, {"action":"delete", "pointOfInterest":r},self.moduleId)
                    self.ROIList.remove(r)
        except:
            self.spine.log.exception("test")
            pass

    def updateRegionOfInterest(self, region):
        for i,r in enumerate(self.ROIList):
            if r["id"] == region["id"]:
                self.ROIList[i]=region
                self.spine.triggerEvent("pointOfInterestChange",self.moduleId, {"action":"update", "pointOfInterest":self.ROIList[i]})
                break
