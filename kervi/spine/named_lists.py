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

""" Named lists are lists that are located by name """

class NamedLists(object):
    def __init__(self):
        self.data = {}

    def add(self, list_name, object):
        if list_name in self.data:
            self.data[list_name] += [object]
        else:
            self.data[list_name] = [object]

    def get_list_names(self):
        result = []
        for key in self.data:
            result += [key]
        return result

    def get_list_data(self, list_name):
        if list_name in self.data:
            return self.data[list_name]
        return None

    def get_list_data_with_partial_key(self, list_name):
        items = any(key.startswith(list_name) for key in self.data)
        result = {}
        for item in items:
            result[item] = self.data[item]

        return result
		