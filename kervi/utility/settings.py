#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

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
