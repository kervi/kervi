from kervi.spine import Spine

class Dashboard(object):
    def __init__(self, dashboardId, name, dashboardType="dashboard", isDefault=False):
        spine = Spine()
        spine.registerQueryHandler("getDashboardInfo", self.onGetInfo)
        self.dashboardId = dashboardId
        self.name = name
        self.type = dashboardType
        self.isDefault = isDefault

    def onGetInfo(self):
        template = None
        import os.path
        import sys
        modulepath = os.path.dirname(sys.modules[self.__class__.__module__].__file__)
        cpath = os.path.join(modulepath, self.dashboardId + ".tmpl.html")
        if os.path.isfile(cpath):
            template_file = open(cpath, 'r')
            template = template_file.read()

        return {
            "type":self.type,
            "name":self.name,
            "id":self.dashboardId,
            "isDefault": self.isDefault,
            "template" : template
        }
