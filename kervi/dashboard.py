# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
""" Module for dashboard class """

from kervi.spine import Spine

class Dashboard(object):
    def __init__(self, dashboard_id, name, dashboard_type="dashboard", is_default=False):
        spine = Spine()
        spine.register_query_handler("getDashboardInfo", self.on_get_info)
        self.dashboard_id = dashboard_id
        self.name = name
        self.type = dashboard_type
        self.is_default = is_default

    def on_get_info(self):
        template = None
        import os.path
        import sys
        modulepath = os.path.dirname(sys.modules[self.__class__.__module__].__file__)
        cpath = os.path.join(modulepath, self.dashboard_id + ".tmpl.html")
        if os.path.isfile(cpath):
            template_file = open(cpath, 'r')
            template = template_file.read()

        return {
            "type":self.type,
            "name":self.name,
            "id":self.dashboard_id,
            "isDefault": self.is_default,
            "template" : template
        }
