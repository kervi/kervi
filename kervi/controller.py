# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT
"""
A Kervi controller is a class that acts upon input from users or events or the underlaying os.
"""
import inspect
from kervi.spine import Spine
from kervi.utility.thread import KerviThread
from kervi.utility.component import KerviComponent
from kervi.hal import GPIO
from kervi.values import DynamicValueList, DynamicValue
from kervi.values import DynamicNumber

class Controller(KerviComponent):
    """
    A Kervi controller is a class that acts upon input from users, hardware events or the underlaying os.

    Examples for controllers are motor control, servo control, output to IO.

    A controller my define one or more dynamic values as input and output.

    """
    def __init__(self, controller_id, name):
        KerviComponent.__init__(self, controller_id, "controller", name)
        self.inputs = DynamicValueList(self, True)
        self.outputs = DynamicValueList(self, False)
        self._active = True
        self.type = "unknown"
        self.parameters = {}
        self._ui_parameters = {
            "size": 0,
            "type": "normal",
            "link_to_header": False,
            "icon": None,
            "flat": False,
            "inline": False
        }
        self.spine.register_event_handler("processTerminating",self._on_terminate)

    @property
    def controller_id(self):
        return self.component_id

    def link_to_dashboard(self, dashboard_id, section_id, **kwargs):
        r"""
        Links this component to a dashboard section all input are displayed.

        :param dashboard_id:
            id of the dashboard to link to.
        :type section_id: str

        :param section_id:
            id of the section.
        :type section_id: str

        :param \**kwargs:
            Use the kwargs below to override default values set in ui_parameters

        :Keyword Arguments:
            * *ui_size* (``int``) -- Size of the component in dashboard unit size.
                In order to make the sections and components align correct a dashboard unit is defined.
                Default the dashboard unit is a square that is 150 x 150 pixels.
                The width of the select box is ui_size * dashboard unit size.

            * *type* (``str``) -- Type of select box, dropdown or list.
            * *link_to_header* (``str``) -- Add this component to header of section.
            * *icon* (``str``) -- Icon that should be displayed together with label.
            * *flat* (``bool``) -- Flat look and feel.

        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            section_id,
            *kwargs
            )

    def _on_terminate(self, id):
        if self._active:
            self._active = False
            try:
                self.spine.log("exit controller:{0}", self.component_id)
            except:
                pass
            finally:
                self.exit()

    def exit(self):
        """
        Abstract method that is called when the kervi application stops.
        """
        pass

    def dynamic_value_changed(self, dynamic_value, value):
        self.input_changed(dynamic_value)
        pass

    def input_changed(self, input_id):
        """
        Abstract method that is called by when one of the controller inputs change.

        You can implement this method if your controller logic needs to respond
        changes in multiple inputs.

        :param changed_input:
            Input that has changed. You can read the value of the changed input
            via the inputs value property.

        :type changed_input: DynamicValue
        """
        pass

    def _get_info(self):
        inputs = []
        for key in self.inputs.keys:
            if self.inputs[key]:
                inputs += [self.inputs[key].get_reference()]

        outputs = []
        for key in self.outputs.keys:
            if self.outputs[key]:
                outputs += [self.outputs[key].get_reference()]

        template = None
        try:
            import os.path
            import sys
            modulepath = os.path.dirname(sys.modules[self.__class__.__module__].__file__)
            class_name = self.__class__.__name__
            cpath = os.path.join(modulepath, class_name + ".tmpl.html")
            if os.path.isfile(cpath):
                template_file = open(cpath, 'r')
                template = template_file.read()
        except:
            pass

        return {
            "inputs":inputs,
            "outputs":outputs,
            "template" : template,
            "type": self.type
        }


    @staticmethod
    def create(controller_id, name):
        """Turn class into a kervi controller"""
        def _decorator(cls):
            class _ControllerClass(cls, Controller):
                def __init__(self):
                    Controller.__init__(self, controller_id, name)
                    for key in cls.__dict__.keys():
                        prop = cls.__dict__[key]
                        if isinstance(prop, DynamicValue):
                            if prop.is_input:
                                self.inputs._add_internal(key, prop)
                            else:
                                self.outputs._add_internal(key, prop)
                    cls.__init__(self)
            return _ControllerClass
        return _decorator

    @staticmethod
    def input(input_id, name, value_class=DynamicNumber):
        """Add input to controller"""
        def _init():
            return value_class(
                name,
                input_id=input_id,
                is_input=True,
                index=-1
            )
        def _decorator(cls):
            setattr(cls, input_id, _init())
            return cls
        return _decorator

    @staticmethod
    def output(output_id, name, value_class=DynamicNumber):
        """Add output to controller"""
        def _init():
            return value_class(
                name,
                input_id=output_id,
                is_input=False,
                index=-1
            )
        def _decorator(cls):
            setattr(cls, output_id, _init())
            return cls
        return _decorator
