
# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

"""
Module that holds classes that asists in vision handling in kervi.
Based on your vision analasis you may present POI on screen or let other parts of your app
respond to your code.
"""

from kervi.module_thread import  ModuleThread

class VisionModule(ModuleThread):
    def __init__(self, vision_id, name):
        ModuleThread.__init__(self)
        self.roi_list = []
        self.camera_info = None

        self.module_id = vision_id

        self.name = name

        self.spine.register_query_handler("visionGetRegionsOfInterest", self.get_roi_list)
        self.spine.register_query_handler("visionInfo", self.get_vision_info)
        self.spine.register_query_handler("getVisionsLinkedToCam", self.get_visions_linked_to_cam)
        self.spine.register_command_handler("linkVisionToCam", self.link_to_camera_command)

    def create_point_of_interest(self, poi_id, caption, position, size, focus_point, text):
        if self.camera_info:
            return {
                "id":poi_id,
                "caption":caption,
                "position":position,
                "size":size,
                "focusPoint": focus_point,
                "text":text,
                "cameraId":self.camera_info["id"],
                "visionId": self.module_id
            }

    def get_visions_linked_to_cam(self, camera_id):
        if self.camera_info["id"] == camera_id:
            return self.module_id

    def get_vision_info(self):
        cam_id = None
        if self.camera_info:
            cam_id = self.camera_info["id"]

        return {"id":self.module_id, "camera":cam_id, "name":self.name}

    def link_to_camera_command(self, camera_id, vision_id):
        if vision_id == self.module_id:
            self.link_to_camera(camera_id)

    def link_to_camera(self, camera_id):
        self.spine.log.debug(
            "Link to camera in vision module:{0} cam:{1}",
            self.module_id,
            self.camera_id,
        )

        cam = self.spine.send_query("getObjectInfo", camera_id)
        if cam:
            self.camera_info = cam
            self.camera_changed()
            self.spine.trigger_event("visionLinkedToCamera", self.module_id, camera_id)

        self.spine.log.warning(
            "Link to camera failed in vision module:{0} cam:{1}",
            self.moduleId,
            self.cameraId,
        )

    def init_vision(self):
        self.spine.log.error(
            "abstract initVision reached in module:{0}",
            self.module_id
        )

    def camera_changed(self):
        self.spine.log.error(
            "abstract cameraChanged reached in module:{0}",
            self.module_id
        )

    def module_step(self):
        self.vision_step()

    def vision_step(self):
        self.spine.log.error(
            "abstract visionStep reached in module:{0}",
            self.module_id
        )

    def get_roi_list(self, camera_id):
        if self.camera_info and camera_id == self.camera_info["id"]:
            return self.roi_list

    def clear_regions_of_interest(self):
        cam_id = None
        if self.camera_info:
            cam_id = self.camera_info["id"]
        self.spine.trigger_event(
            "pointOfInterestChange",
            self.module_id,
            {"action":"clear", "visionId":self.module_id, "cameraId":cam_id}
        )

    def add_region_of_interest(self, region):
        self.roi_list += [region]
        self.spine.trigger_event(
            "pointOfInterestChange",
            self.module_id,
            {"action":"add", "pointOfInterest":region},
            self.module_id
        )

    def remove_region_of_interest(self, region_id):
        try:
            for r in self.roi_list:
                if r["id"] == region_id:
                    self.spine.trigger_event(
                        "pointOfInterestChange",
                        self.module_id,
                        {"action":"delete", "pointOfInterest":r},
                        self.module_id
                    )
                    self.roiList.remove(r)
        except:
            self.spine.log.exception("test")

    def update_region_of_interest(self, region):
        for i, r in enumerate(self.roi_list):
            if r["id"] == region["id"]:
                self.roiList[i] = region
                self.spine.trigger_event(
                    "pointOfInterestChange",
                    self.moduleId,
                    {"action":"update", "pointOfInterest":self.roi_list[i]}
                )
                break
