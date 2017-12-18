# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

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
		