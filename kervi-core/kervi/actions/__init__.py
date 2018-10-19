#Copyright 2018 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

"""
        Actions is a global list of actions in the kervi application.
        You dont use it directly but access it via:

        from kervi.actions import Actions

        You call actions in the following way

        Actions["my_action"]("10")

"""
import inspect
import sys

from kervi.actions.action import Action
from kervi.actions.actions_list import Actions as _Actions

Actions = None

if not Actions:
    Actions = _Actions()

def _is_method(func):
    spec = inspect.signature(func)
    if len(spec.parameters) > 0:
        if list(spec.parameters.keys())[0] == 'self':
            return True
    return False

class _SetInterrupt():
    def __init__(self, action_id):
        self._action_id = action_id

    def __call__(self, f):
        Actions.add_unbound_interrupt(f.__qualname__, self._action_id)
        return f

#from kervi.actions.action_list import _Actions
def action(method=None, **kwargs):
    """
        Decorator that turns a function or controller method into an kervi action.
        it is possible to call the action in other kervi processes or modules.

        @action
        def my_action(p)
            ...

        call it via Actions["my_action"](10)

        @action(action_id="action_1", name="This is my action")
        def my_action(p)
            ...
        
        call it via Actions["action_1"](10)

        :Keyword Arguments:

            * *action_id* (``str``) -- 
                The action_id is the id you use when you call the action.
                By default the action takes the name of function but you can override it with action_id.

            * *name* (``str``) -- Name to show in UI if the action is linked to a panel.
            
    """
    
    def action_wrap(f): 
        action_id = kwargs.get("action_id", f.__name__)
        name = kwargs.get("name", action_id)
        if not _is_method(f): # not "." in f.__qualname__:
            action = Action(f, action_id, name)
            Actions.add(action)
            return action
        else:
            qual_name = getattr(f, "__qualname__", None)
            owner_class = kwargs.get("controller_class", None)
            if owner_class:
                qual_name = owner_class + "." + f.__name__

            if qual_name:    
                Actions.add_unbound(qual_name, action_id, name)
                setattr(f, "set_interrupt", _SetInterrupt(action_id))
            else:
                print("using upython? if yes you need to pass the name of the controller class via the controller_class parameter.")
            return f

    if method:
        return action_wrap(method)
    else:
        return action_wrap
    