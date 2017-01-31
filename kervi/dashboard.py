# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
"""
A dashboard is the main ui component in a kervi application.
An application may define one or more dashboards if it is a home automation application
A dashboard could be a room or a floor.

Each dashbord contains one or more sections where it is possible to link
sensors, controllers and camera output.

A dashboard section is divided in columns and rows where the cell size is 150x150 pixels.
When a component is linked to a section it is specified how many cells
the component occupies in that section.
"""

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
            * *title* (``str``) -- Title of the section.
            * *columns* (``int``) -- Number of columns in this section, default is 1.
            * *rows* (``int``) -- Number of rows in this section, default is 1.
            * *add_user_log* (``bool``) -- This section shows user log messages.

        """
    def __init__(self, section_id, **kwargs):
        #KerviComponent.__init__(self, section_id, "Dashboard-Section", name)
        self.spine = spine.Spine()
        self.section_id = section_id
        self.ui_parameters = {
            "title":kwargs.get("title", ""),
            "columns":kwargs.get("columns", 1),
            "rows":kwargs.get("rows", 1),
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
    r"""
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
    :type dashboard_id: ``str``

    :param name:
        Name of the dahsboard. Used when this dashboard is listed in the dashboard menu in the UI.
    :type name: ``str``

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

        :param section: A dashboardSection to add to this dashboard.
        :type section: ``DashboardSection``
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
    A Camboard is a specialized dashboard that has a video feed as background
    and controllers for pan/tilt.

    :param dashboard_id: Unique id of the dashboard. Used when referencing this dashboard.
    :type dashboard_id: ``str``

    :param name: Name of the dahsboard used in dashboard menu in UI.
    :type name: ``str``

    :param camera_id: Id of a camera to use as background.
    :type camera_id: ``str``

    :param is_default: If true this dashboard will show up as the active dashboard when UI loads.
    :type is_default: ``bool``
    """
    def __init__(self, dashboard_id, name, camera_id, is_default=False):
        Dashboard.__init__(self, dashboard_id, name, is_default=is_default, camera=camera_id)
