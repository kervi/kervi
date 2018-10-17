#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.


from kervi.spine import Spine

class Settings(object):
    """
    Class that persists settings to the Kervi database.

    :param group:
            To avoid name clash with other settings in the Kervi application
             enter name to group your settings under.

    :type group: ``str``

    """
    def __init__(self, settings_group=None):
        self.group = settings_group
        self.spine = Spine()

    def store_value(self, name, value):
        """Store a value to DB"""
        self.spine.send_command("storeSetting", self.group, name, value)


    def retrieve_value(self, name, default_value=None):
        """Retrieve a value from DB"""
        value = self.spine.send_query("retrieveSetting", self.group, name, processes=["kervi-main"])
        if value is None:
            return default_value
        elif isinstance(value, list) and len(value) == 0:
            return default_value
        elif isinstance(default_value, int):
            return int(value)
        elif isinstance(default_value, float):
            return float(value)
        else:
            return value
