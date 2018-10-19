#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

import random
try:
    from datetime import datetime
except:
    from kervi.core.utility.udatetime import datetime
import kervi.spine as spine
from kervi.core.utility.settings import Settings

class DasboardSectionLink(object):
    def __init__(self, dashboard_id, section_id, section_caption, param, component):
        self.link_id = random.getrandbits(64)
        self.dashboard_id = dashboard_id
        self.section_id = section_id
        self.parameters = param
        self.component = component
        self.section_caption = section_caption

    def set_parameter(self, name, value):
        self.parameters[name] = value
        self.component.spine.triggerEvent("dashboardLinkChanged", self.link_id, self.parameters)

    

class KerviComponent(object):
    def __init__(self, component_id, component_type, name, **kwargs):
        self.spine = kwargs.get("spine", spine.Spine())
        self._component_id = component_id
        self._component_type = component_type
        self._admin_groups = kwargs.get("admin_groups", [])
        self._user_groups = kwargs.get("user_groups", [])
        self._user_groups += self.admin_groups
        self._name = name
        self._icon = None
        self._visible = True
        self._dashboard_links = []
        self._ui_parameters = {}
        self._settings = Settings(self.component_type + "_" + self.component_id)
        if self.spine:
            self.spine.log.debug("component created:{0}", self.component_id)
            self.spine.register_query_handler(
                "getDashboardComponents",
                self._get_dashboard_components,
                groups=self.user_groups
            )
            self.spine.register_query_handler("getComponentInfo", self._get_component_info, groups=self.user_groups)
            self.spine.register_query_handler("getComponentRoutes", self._get_component_bus_routes)

    @property
    def component_id(self):
        return self._component_id

    @property
    def component_type(self):
        return self._component_type

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value
        self.spine.trigger_event("componentChangeName", self.component_id, value)

    @property
    def icon(self):
        return self._icon

    @icon.setter
    def icon(self, value):
        self._icon = value
        self.spine.trigger_event("componentChangeIcon", self.component_id, value)

    @property
    def visible(self):
        return self._visible

    @visible.setter
    def visible(self, value):
        self._visible = value

    @property
    def user_groups(self):
        return self._user_groups

    @user_groups.setter
    def user_groups(self, value):
        self._user_groups.clear()
        self._user_groups += value
        self._user_groups += self.admin_groups

    @property
    def admin_groups(self):
        return self._admin_groups

    @admin_groups.setter
    def admin_groups(self, value):
        self._admin_groups.clear()
        self._admin_groups += value
        self._user_groups += self.admin_groups

    @property
    def ui_groups(self):
        resulting_list = list(self.user_groups)
        resulting_list.extend(x for x in self.admin_groups if x not in resulting_list)
        return resulting_list

    @property
    def settings(self):
        """
        You can persist settings to the kervi database via the settings property.

        .. code:: python
            myComponent.settings.store_value("nameOfValue", value)

        And retrieve it again via.

        .. code:: python
            value = myComponent.settings.retrieve_value("nameOfValue)


        """
        return self._settings

    def set_ui_parameter(self, name, value):
        if name in self._ui_parameters:
            self._ui_parameters[name] = value
        else:
            raise ValueError("invalid ui parameter name:" + name)

    def link_to_dashboard(self, dashboard_id=None, section_id=None, **kwargs):
        section_caption = None
        if not dashboard_id:
            dashboard_id="**default**"

        section_id = kwargs.get("panel_id", section_id)
        
        if not section_id:
            section_id = self.component_id
            section_caption =  self.name

        ui_param = {}
        for key, value in self._ui_parameters.items():
            ui_param[key] = value

        for key, value in kwargs.items():
            if key in ui_param:
                ui_param[key] = value
            else:
                raise ValueError("illigal ui parameter name:" + key)

        if "link_to_header" not in ui_param:
            ui_param["link_to_header"] = False

        if "icon" not in ui_param:
            ui_param["icon"] = None
        link = DasboardSectionLink(dashboard_id, section_id, section_caption, ui_param, self)
        self._dashboard_links += [link]
        return link

    def get_reference(self):
        """Returns a reference for this component"""
        return {
            "id": self.component_id,
            "component_type": self.component_type
        }

    def _get_info(self, **kwargs):
        """Abstract method that must return properties for the component as a dictionary
        .. document private functions
        """
        self.spine.log.debug(
            "abstract get_info reached:{0}",
            self.component_id,
        )
        return {}

    def _get_ui_parameters(self, ui_parameters):
        return ui_parameters

    def _get_component_info(self, component_id=None, **kwargs):
        if  component_id is None or component_id == self.component_id:
            session = kwargs.get("session", None)
            authorized = True
            if session and len(self.user_groups) > 0:
                for group in self.user_groups:
                    if group in session["groups"]:
                        break
                else:
                    authorized = False
                
            if authorized:
                #try:
                info = self._get_info(**kwargs)
                #except Exception as ex:
                #    print("ex", self.component_id, ex)
                #    info = {}
                ui_parameters = self._get_ui_parameters(self._ui_parameters)
                info["componentType"] = self.component_type
                info["id"] = self.component_id
                info["visible"] = self.visible
                info["name"] = self.name
                info["ui"] = self._camel_case_parameters(ui_parameters)
                dashboard_links = []
                for link in self._dashboard_links:
                    param = self._camel_case_parameters(link.parameters)
                    #print("pmr", link.dashboard_id, dashboard_id, section_id, self.component_id, param)
                    dashboard_links += [{
                        "linkId": link.link_id,
                        "dashboardId": link.dashboard_id,
                        "sectionId": link.section_id,
                        "sectionName": link.section_caption,
                        "parameters":param
                    }]

                info["dashboardLinks"] = dashboard_links
                return info


    def _underscore_to_camelcase(self, value):
        def _camelcase():
            yield str.lower
            while True:
                yield str.capitalize

        camelcase = _camelcase()
        return "".join(next(camelcase)(x) if x else '_' for x in value.split("_"))

    def _camel_case_parameters(self, parameters):
        result = {}
        for key in parameters:
            result[self._underscore_to_camelcase(key)] = parameters[key]
        return result

    def _get_dashboard_components(self, dashboard_id, section_id):
        result = []
        #print("gdc", self._component_id, dashboard_id, section_id)
        for link in self._dashboard_links:
            if ((link.dashboard_id == "*" or link.dashboard_id == dashboard_id)
                    and link.section_id == section_id):
                param = self._camel_case_parameters(link.parameters)
                #print("pmr", link.dashboard_id, dashboard_id, section_id, self.component_id, param)
                result += [{
                    "linkId": link.link_id,
                    "componentId":self.component_id,
                    "parameters":param
                }]
        
        return result

    def _get_component_bus_routes(self):
        result = self._get_bus_routes()
        return {
            "id": self._component_id,
            "routes": result,
        }

    def _get_bus_routes(self):
        result = [] 
        for link in self._dashboard_links:
            result += [{
                "id": link.link_id,
                "direction": "out",
                "topic_type": "event",
                "topic": "valueChanged"
                }]
        return result