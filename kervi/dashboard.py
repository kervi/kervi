# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
""" Module for dashboard handling in Kervi """

from kervi.utility.component import KerviComponent
import kervi.spine as spine

class DashboardSection(object):
    r"""
        Create a dashboard section.

        :param section_id:
            id of the section.
            This id is used in other components to reference this section.
        :type section_id: str

        :param \**kwargs:
            See below

        :Keyword Arguments:
            * *ui_title* (``str``) -- Title of the section.
            * *ui_columns* (``int``) -- Number of columns in this section, default is 1.
            * *ui_rows* (``int``) -- Number of rows in this section, default is 1.
            * *add_user_log* (``bool``) -- This section shows user log messages.

        """
    def __init__(self, section_id, **kwargs):
        #KerviComponent.__init__(self, section_id, "Dashboard-Section", name)
        self.spine = spine.Spine()
        self.section_id = section_id
        self.ui_parameters = {
            "title":kwargs.get("ui_title", ""),
            "columns":kwargs.get("ui_columns", 1),
            "rows":kwargs.get("ui_rows", 1),
            "userLog":kwargs.get("user_log", False)
        }
        self.dashboard = None
        self.section_id = section_id

    def _get_section_components(self, components):
        result = []
        if hasattr(components, "__len__") and not isinstance(components, dict):
            for component in components:
                result += self._get_section_components(component)
        else:
            result += [components]

        return result

    def _get_info(self):
        components = self.spine.send_query(
            "getDashboardComponents",
            self.dashboard.dashboard_id,
            self.section_id
        )
        section_components = self._get_section_components(components)
        return {
            "id": self.section_id,
            "uiParameters": self.ui_parameters,
            "dashboard": self.dashboard.get_reference(),
            "components": section_components
        }

class Dashboard(KerviComponent):
    """
    Create a UI dashboard. The dashboard will show up in the dashboard menu in the UI.

    A dashboard contains one or more sections. Kervi components like *sensors*,
    *controllers* and *controller components* all have a dashboard property where it is
    possible to link a kervi component to a dasboard and section.

    All dashboard have the following sections:
     * sys-header - for system info like cpu load
     * header - for showing sensors and controllers in the top header
     * footer - for showing sensors and controllers in the footer of the UI.

    :param dashboard_id:
        Unique id of the dashboard. Used when referencing this dashboard.
    :type dashboard_id: str

    :param name:
        Name of the dahsboard. Used when this dashboard is listed in the dashboard menu in the UI.
    :type name: str

    :param \**kwargs:
            See below

    :Keyword Arguments:
            * *is_default* (``bool``) --
                If true this dashboard will show up as the active dashboard when UI loads.

    """
    def __init__(self, dashboard_id, name, **kwargs):
        KerviComponent.__init__(self, dashboard_id, "dashboard", name)
        self.dashboard_id = dashboard_id
        self.is_default = kwargs.get("is_default", False)
        self.unit_size = kwargs.get("unit_size", 150)
        self.sections = []
        self.add_section(DashboardSection("sys-header"))
        self.add_section(DashboardSection("header"))
        self.add_section(DashboardSection("footer"))

        self.background = {}
        camera_id = kwargs.get("camera", "")
        if camera_id:
            self.background = {"type": "camera", "cameraId": camera_id}

    def add_section(self, section):
        """
        Add a dashboard section to the dashboard

        :param section: DashboardSection
            A dashboardSection to add to this dashboard.
        """
        section.dashboard = self
        self.sections += [section]

    def _get_info(self):
        template = None
        import os.path
        import sys
        modulepath = os.path.dirname(sys.modules[self.__class__.__module__].__file__)
        cpath = os.path.join(modulepath, self.dashboard_id + ".tmpl.html")
        if os.path.isfile(cpath):
            template_file = open(cpath, 'r')
            template = template_file.read()

        sections = []
        for section in self.sections:
            sections += [section._get_info()]

        return {
            "isDefault": self.is_default,
            "template" : template,
            "sections" : sections,
            "background": self.background,
            "unitSize": self.unit_size
        }

class Camboard(Dashboard):
    """
    A Camboard is a specialized dashboard that has 3*3 DashboardSections
    and a video feed as background.

    :param dashboard_id:
        Unique id of the dashboard. Used when referencing this dashboard.

    :param name:
        Name of the dahsboard used in dashboard menu in UI.

    :param camera_id:
        Id of a camera to use as background.

    :param is_default:
        If true this dashboard will show up as the active dashboard when UI loads.
    """
    def __init__(self, dashboard_id, name, camera_id, is_default=False):
        Dashboard.__init__(self, dashboard_id, name, is_default=is_default, camera=camera_id)
