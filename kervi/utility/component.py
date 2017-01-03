import kervi.spine as spine

class KerviComponent(object):
    def __init__(self, component_id, component_type, name):
        self.spine = spine.Spine()
        self.component_id = component_id
        self.component_type = component_type
        self.name = name
        self.visible = True
        self.dashboards = []
        if self.spine:
            self.spine.register_query_handler(
                "getDashboardComponents",
                self._get_dashboard_components
            )
            self.spine.register_query_handler("getComponentInfo", self._get_component_info)

    def add_to_dashboard(self, dashboard_id, section_id, parameters):
        self.dashboards += [{
            "dashboardId":dashboard_id,
            "sectionId":section_id,
            "parameters": parameters
        }]

    def get_reference(self):
        return {
            "id": self.component_id,
            "component_type": self.component_type
        }

    def _get_info(self):
        """Abstract method that must return properties for the component as a dictionary
        .. document private functions
        """
        self.spine.log.debug(
            "abstract get_info reached:{0}",
            self.component_id,
        )
        return {}

    def _get_component_info(self):
        info = self._get_info()
        info["componentType"] = self.component_type
        info["id"] = self.component_id
        info["visible"] = self.visible
        #info["dashboards"] = self.dashboards
        info["name"] = self.name
        return info

    def _get_dashboard_components(self, dashboard_id, section_id):
        for dashboard in self.dashboards:
            if (dashboard["dashboardId"] == "*" or dashboard["dashboardId"] == dashboard_id) and dashboard["sectionId"] == section_id:
                return {
                    "componentId":self.component_id,
                    "parameters":dashboard["parameters"]
                }
