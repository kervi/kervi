#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

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


    def add_number(self, number_id, name=None, min=None, max=None, unit=None, value=None, persist_value=False):
        from kervi.values import NumberValue
        number_name = name
        if not number_name:
            number_name = number_id
        number = self.add(number_id, number_name, NumberValue)
        if unit:
            number.unit = unit
        if min:
            number.min = min
        if max:
            number.max = max
        if value:
            number.value = value
        if persist_value:
            number.persist_value = persist_value

        return number

    @property
    def keys(self):
        return self._items.keys()

    def __getitem__(self, item_id):
        return self._items[item_id]
