import random
from datetime import datetime
import kervi.spine as spine


class DasboardSectionLink(object):
    def __init__(self,dashboard_id, section_id, param, component):
        self.link_id = random.getrandbits(64)
        self.dashboard_id = dashboard_id
        self.section_id = section_id
        self.parameters = param
        self.component = component

    def set_parameter(self, name, value):
        self.parameters[name] = value
        self.component.spine.triggerEvent("dashboardLinkChanged", self.link_id, self.parameters)

class KerviComponent(object):
    def __init__(self, component_id, component_type, name):
        self.spine = spine.Spine()
        self.component_id = component_id
        self.component_type = component_type
        self.name = name
        self.icon = None
        self.visible = True
        self.dashboard_links = []
        self.ui_parameters = {}
        if self.spine:
            self.spine.register_query_handler(
                "getDashboardComponents",
                self._get_dashboard_components
            )
            self.spine.register_query_handler("getComponentInfo", self._get_component_info)

    def user_log_message(self, topic, body=None, type="information"):
        """"
        Adds a message to the user log. 
        """
        timestamp = (datetime.utcnow() - datetime(1970, 1, 1)).total_seconds()
        self.spine.trigger_event("userLogMessage", None, {
            "topic": topic,
            "body": body,
            "timestamp": timestamp,
            "type": type
        })

    def set_name(self, name):
        self.name = name
        self.spine.trigger_event("componentChangeName", self.component_id, name)

    def set_icon(self, icon):
        self.icon = icon
        self.spine.trigger_event("componentChangeIcon", self.component_id, icon)

    def add_to_dashboard(self, dashboard_id, section_id, parameters):
        param = parameters
        if not  "addToHeader" in param:
            param["addToHeader"] = False

        if not  "ui_icon" in param:
            param["ui_icon"] = None

        link = DasboardSectionLink(dashboard_id, section_id, param, self)
        self.dashboard_links += [link]
        return link

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
        info["name"] = self.name
        return info

    def _get_dashboard_components(self, dashboard_id, section_id):
        result = []
        for link in self.dashboard_links:
            if (link.dashboard_id == "*" or link.dashboard_id == dashboard_id) and link.section_id == section_id:
                result += [{
                    "linkId": link.link_id,
                    "componentId":self.component_id,
                    "parameters":link.parameters
                }]
        return result
