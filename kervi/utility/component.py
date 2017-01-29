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
        self._ui_parameters = {}
        if self.spine:
            self.spine.register_query_handler(
                "getDashboardComponents",
                self._get_dashboard_components
            )
            self.spine.register_query_handler("getComponentInfo", self._get_component_info)

    def set_ui_parameter(self, name, value):
        if name in self._ui_parameters:
            self._ui_parameters[name] = value
        else:
            raise ValueError("invalud ui parameter name:" + name)

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

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        ui_param = {}
        for key, value in self._ui_parameters.items():
            ui_param[key] = value

        for key, value in kwargs.items():
            if key in ui_param:
                ui_param[key] = value
            else:
                raise ValueError("illigal ui parameter name:" + key)

        if not  "link_to_header" in ui_param:
            ui_param["link_to_header"] = False

        if not  "icon" in ui_param:
            ui_param["icon"] = None
        link = DasboardSectionLink(dashboard_id, section_id, ui_param, self)
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
        info["ui"] = self._ui_parameters
        return info

    def _underscore_to_camelcase(self, value):
        def camelcase(): 
            yield str.lower
            while True:
                yield str.capitalize

        c = camelcase()
        return "".join(next(c)(x) if x else '_' for x in value.split("_"))


    def _camelCaseParameters(self, parameters):
        result = {}
        for key in parameters:
            result[self._underscore_to_camelcase(key)] = parameters[key]
        return result

    def _get_dashboard_components(self, dashboard_id, section_id):
        result = []
        for link in self.dashboard_links:
            if (link.dashboard_id == "*" or link.dashboard_id == dashboard_id) and link.section_id == section_id:
                param = self._camelCaseParameters(link.parameters)
                #print("pmr", link.dashboard_id, dashboard_id, section_id, self.component_id, param)
                result += [{
                    "linkId": link.link_id,
                    "componentId":self.component_id,
                    "parameters":param
                }]
        return result
