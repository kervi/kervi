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


class ValueList(object):
    """
    List that holds kervi values

    :param parent: Parent component that holds this list. 

    :param is_input: True if the list holds input values.
    """
    def __init__(self, parent, is_input):
        
        self._items = {}
        self.is_input = is_input
        self.controller = parent
        self.count = 0
        #self._inject = inject_in_controller

    def add(self, value_id, name, value_class):
        """
        Factory function that creates a value.

        :param value_id: id of the value, used to reference the value within this list.BaseException

        :param value_class: The class of the value that should be created with this function.
        """
        item = value_class(
            name,
            value_id=self.controller.component_id + "." + value_id,
            is_input=self.is_input,
            index=self.count,
            spine = self.controller.spine
        )

        #if self._inject and self.controller:
        #    setattr(self.controller, value_id, item)
        #setattr(self, value_id, item)

        self.count += 1
        self._items[value_id] = item
        if self.is_input and self.controller:
            item.add_observer(self.controller)
        return item

    def _add_internal(self, value_id, item):
        self._items[value_id] = item
        item._component_id = self.controller.component_id + "." + value_id
        item._index = self.count
        self.count += 1

        if self.is_input and self.controller:
            item.add_observer(self.controller)

    @property
    def keys(self):
        return self._items.keys()

    def __getitem__(self, item_id):
        return self._items[item_id]
