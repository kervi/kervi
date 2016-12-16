# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
""" Module for dashboard class """

from kervi.spine import Spine

class DashboardSection(object):
    def __init__(self, section_id, name):
        self.section_id = section_id
        self.name = name

    def get_info(self):
        return {
            "id": self.section_id,
            "name" : self.name
        }

class Dashboard(object):
    def __init__(self, dashboard_id, name, dashboard_type="dashboard", is_default=False):
        spine = Spine()
        spine.register_query_handler("getDashboardInfo", self.on_get_info)
        self.dashboard_id = dashboard_id
        self.name = name
        self.type = dashboard_type
        self.is_default = is_default
        self.sections = [
            DashboardSection(dashboard_id+".header", ""),
            DashboardSection(dashboard_id+".footer", ""),
            DashboardSection(dashboard_id+".0_0", "")
        ]

    def add_section(self, section):
        self.sections += [section]

    def on_get_info(self):
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
            sections += [section.get_info]

        return {
            "type":self.type,
            "name":self.name,
            "id":self.dashboard_id,
            "isDefault": self.is_default,
            "template" : template,
            "sections" : sections
        }

class Camboard(Dashboard):
    def __init__(self, dashboard_id, name, is_default=False):
        Dashboard.__init__(self, dashboard_id, name, "camboard", is_default)
        self.sections += [
            DashboardSection(dashboard_id+".0_1", ""),
            DashboardSection(dashboard_id+".0_2", ""),
            DashboardSection(dashboard_id+".1_0", ""),
            DashboardSection(dashboard_id+".1_1", ""),
            DashboardSection(dashboard_id+".1_2", ""),
            DashboardSection(dashboard_id+".2_0", ""),
            DashboardSection(dashboard_id+".2_1", ""),
            DashboardSection(dashboard_id+".2_2", ""),
        ]
