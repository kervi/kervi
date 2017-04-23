# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
"""
A dashboard is the main ui component in a kervi application.

"""

from kervi.utility.component import KerviComponent
import kervi.spine as spine

class DashboardPanel(object):
    r"""
        Create a dashboard panel.

        :param panel_id:
            id of the panel.
            This id is used in other components to reference this panel.
        :type panel_id: str

        :param \**kwargs:
            See below

        :Keyword Arguments:
            * *title* (``str``) -- Title of the panel.
            * *columns* (``int``) -- Number of columns in this panel, default is 1.
            * *rows* (``int``) -- Number of rows in this panel, default is 1.
            * *add_user_log* (``bool``) -- This panel shows user log messages.
            * *collapsed* (``bool``) -- If true the body of the panel is collapsed.

        """
    def __init__(self, panel_id, **kwargs):
        #KerviComponent.__init__(self, panel_id, "Dashboard-panel", name)
        self.spine = spine.Spine()
        self.panel_id = panel_id
        self.ui_parameters = {
            "title":kwargs.get("title", ""),
            "columns":kwargs.get("columns", 1),
            "rows":kwargs.get("rows", 1),
            "userLog":kwargs.get("user_log", False)
        }
        self.dashboard = None
        self.panel_id = panel_id

    def _get_panel_components(self, components):
        result = []
        if hasattr(components, "__len__") and not isinstance(components, dict):
            for component in components:
                result += self._get_panel_components(component)
        else:
            result += [components]

        return result

    def _get_info(self):
        self.spine.log.debug("Query dashboard components:{0} - {1}", self.dashboard.dashboard_id, self.panel_id)
        components = self.spine.send_query(
            "getDashboardComponents",
            self.dashboard.dashboard_id,
            self.panel_id
        )
        panel_components = self._get_panel_components(components)
        return {
            "id": self.panel_id,
            "uiParameters": self.ui_parameters,
            "dashboard": self.dashboard.get_reference(),
            "components": panel_components
        }

class Dashboard(KerviComponent):
    r"""
    Create a UI dashboard. The dashboard will show up in the dashboard menu in the UI.

    A dashboard contains one or more panels. Kervi components like *sensors*,
    *controllers* and *controller components* links to a panel on a dashboard.

    All dashboard have the following panels:
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
                If true this dashboard will show up as the active dashboard when web dashboards loads.

    """
    def __init__(self, dashboard_id, name, **kwargs):
        KerviComponent.__init__(self, dashboard_id, "dashboard", name)
        self.dashboard_id = dashboard_id
        self.is_default = kwargs.get("is_default", False)
        self.unit_size = kwargs.get("unit_size", 150)
        self.panels = []
        self.add_panel(DashboardPanel("header_right"))
        self.add_panel(DashboardPanel("header_center"))
        self.add_panel(DashboardPanel("footer_center"))
        self.add_panel(DashboardPanel("footer_left"))
        self.add_panel(DashboardPanel("footer_right"))
        self.add_panel(DashboardPanel("background"))
        self.add_panel(DashboardPanel("left_pad_x"))
        self.add_panel(DashboardPanel("left_pad_y"))
        self.add_panel(DashboardPanel("right_pad_x"))
        self.add_panel(DashboardPanel("right_pad_y"))

        self.background = {}
        #camera_id = kwargs.get("camera", "")
        #if camera_id:
        #    self.background = {"type": "camera", "cameraId": camera_id}

    def add_panel(self, panel):
        """
        Add a dashboard panel to the dashboard

        :param panel: A DashboardPanel to add to this dashboard.
        :type panel: ``DashboardPanel``
        """
        panel.dashboard = self
        self.panels += [panel]

    def _get_info(self):
        self.spine.log.debug("get dashboard info:{0}", self.dashboard_id)
        template = None
        import os.path
        import sys
        modulepath = os.path.dirname(sys.modules[self.__class__.__module__].__file__)
        cpath = os.path.join(modulepath, self.dashboard_id + ".tmpl.html")
        if os.path.isfile(cpath):
            template_file = open(cpath, 'r')
            template = template_file.read()

        panels = []
        for panel in self.panels:
            panels += [panel._get_info()]

        self.spine.log.debug("get dashboard info done:{0}", self.dashboard_id)
        
        return {
            "isDefault": self.is_default,
            "template" : template,
            "sections" : panels,
            #"background": self.background,
            "unitSize": self.unit_size
        }
