# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
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


    def retrieve_value(self, name):
        """Retrieve a value from DB"""
        return self.spine.send_query("retrieveSetting", self.group, name)
