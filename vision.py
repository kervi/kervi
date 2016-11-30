
# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

"""
Module that holds classes that asists in vision handling in kervi.
Based on your vision analasis you may present POI on screen or let other parts of your app
respond to your code.
"""

from kervi.moduleThread import  ModuleThread

class VisionModule(ModuleThread):
    def __init__(self, visionId, name):
        ModuleThread.__init__(self)
        self.roiList = []
        self.cameraInfo = None

        self.moduleId = visionId

        self.name = name

        self.spine.registerQueryHandler("visionGetRegionsOfInterest", self.getROIList)
        self.spine.registerQueryHandler("visionInfo", self.getVisionInfo)
        self.spine.registerQueryHandler("getVisionsLinkedToCam", self.getVisionsLinkedToCam)
        self.spine.registerCommandHandler("linkVisionToCam", self.linkToCameraCommand)

    def createPointOfInterest(self, POIId, caption, position, size, focusPoint, text):
        if self.cameraInfo:
            return {
                "id":POIId,
                "caption":caption,
                "position":position,
                "size":size,
                "focusPoint": focusPoint,
                "text":text,
                "cameraId":self.cameraInfo["id"],
                "visionId": self.moduleId
            }

    def getVisionsLinkedToCam(self, cameraId):
        if self.cameraInfo["id"] == cameraId:
            return self.moduleId

    def getVisionInfo(self):
        camId = None
        if self.cameraInfo:
            camId = self.cameraInfo["id"]

        return {"id":self.moduleId, "camera":camId, "name":self.name}

    def linkToCameraCommand(self, cameraId, visionId):
        if visionId == self.moduleId:
            self.linkToCamera(cameraId)

    def linkToCamera(self,cameraId):
        self.spine.log.debug(
            "Link to camera in vision module:{0} cam:{1}",
            self.moduleId,
            self.cameraId,
        )

        cam = self.spine.sendQuery("getObjectInfo", cameraId)
        if cam:
            self.cameraInfo = cam
            self.cameraChanged()
            self.spine.triggerEvent("visionLinkedToCamera", self.moduleId, cameraId)

        self.spine.log.warning(
            "Link to camera failed in vision module:{0} cam:{1}",
            self.moduleId,
            self.cameraId,
        )

    def initVision(self):
        self.spine.log.error(
            "abstract initVision reached in module:{0}",
            self.moduleId
        )

    def cameraChanged(self):
        self.spine.log.error(
            "abstract cameraChanged reached in module:{0}",
            self.moduleId
        )

    def moduleStep(self):
        self.visionStep()

    def visionStep(self):
        self.spine.log.error(
            "abstract visionStep reached in module:{0}",
            self.moduleId
        )

    def getROIList(self, cameraId):
        if self.cameraInfo and cameraId == self.cameraInfo["id"]:
            return self.roiList

    def clearRegionsOfInterest(self):
        camId = None
        if self.cameraInfo:
            camId = self.cameraInfo["id"]
        self.spine.triggerEvent(
            "pointOfInterestChange",
            self.moduleId,
            {"action":"clear", "visionId":self.moduleId, "cameraId":camId}
        )

    def addRegionOfInterest(self, region):
        self.roiList += [region]
        self.spine.triggerEvent(
            "pointOfInterestChange",
            self.moduleId,
            {"action":"add", "pointOfInterest":region},
            self.moduleId
        )

    def removeRegionOfInterest(self, regionId):
        try:
            for r in self.roiList:
                if r["id"] == regionId:
                    self.spine.triggerEvent(
                        "pointOfInterestChange",
                        self.moduleId,
                        {"action":"delete", "pointOfInterest":r},
                        self.moduleId
                    )
                    self.roiList.remove(r)
        except:
            self.spine.log.exception("test")

    def updateRegionOfInterest(self, region):
        for i, r in enumerate(self.roiList):
            if r["id"] == region["id"]:
                self.roiList[i] = region
                self.spine.triggerEvent(
                    "pointOfInterestChange",
                    self.moduleId,
                    {"action":"update", "pointOfInterest":self.roiList[i]}
                )
                break
