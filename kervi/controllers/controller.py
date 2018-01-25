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
"""
A Kervi controller is a class that acts upon input from users or events or the underlaying os.
"""
#import inspect
#from kervi.spine import Spine
#from kervi.utility.thread import KerviThread
from kervi.utility.component import KerviComponent
#from kervi.hal import GPIO
from kervi.values.dynamic_value_list import DynamicValueList
from kervi.values.dynamic_value import DynamicValue
from kervi.values import DynamicNumber
from kervi.actions import Actions
from kervi.actions.action import Action 

class Controller(KerviComponent):
    """
    A Kervi controller is a class that acts upon input from users, hardware events or the underlaying os.

    Examples for controllers are motor control, servo control, output to IO.

    A controller my define one or more dynamic values as input and output.

    """
    def __init__(self, controller_id, name, **kwargs):
        KerviComponent.__init__(self, controller_id, "controller", name, **kwargs)
        self.inputs = DynamicValueList(self, True)
        self.outputs = DynamicValueList(self, False)
        self._active = False
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
        self.spine.register_event_handler("appReady",self._on_app_ready)
        self.spine.register_event_handler("moduleStarted",self._on_app_ready)
        self.actions = {}

        method_list = [func for func in dir(self)] # if hasattr(self, func) and callable(getattr(self, func)) and not func.startswith("__") and not func.startswith("_")]
        for method_name in method_list:
            try:
                if hasattr(self, method_name):
                    method = getattr(self, method_name)
                    #print("c", method_name, method.__qualname__, Actions().is_unbound(method.__qualname__))
                    if hasattr(method, "__qualname__") and Actions.is_unbound(method.__qualname__):
                        action_id, name = Actions.get_unbound(method.__qualname__)
                        #print("b", method_name, method.__qualname__, action_id)
                        setattr(self, "kervi_action_"+ method.__name__, method)
                        copy_method = getattr(self, "kervi_action_"+ method.__name__)
                        action = Action(copy_method, self.controller_id + "." + action_id, name)
                        Actions.add(action)
                        self.actions[action_id] = action
                        setattr(self, method.__name__, action)
            except KeyError:
                pass

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

    def _on_app_ready(self, id):
        self._active = True
        self.on_start()

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

    def on_start(self):
        """
        Abstract method that is called when the entire application is loaded.
        """
    
    def dynamic_value_changed(self, dynamic_value, value):
        if self._active:
            self.input_changed(dynamic_value)

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

    def _get_info(self, **kwargs):
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
