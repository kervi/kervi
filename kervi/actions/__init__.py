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


class _SetInterupt():
    def __init__(self, action_id):
        self._action_id = action_id

    def __call__(self, f):
        Actions.add_unbound_interupt(f.__qualname__, self._action_id)
        return f

#from kervi.actions.action_list import _Actions
def action(method=None, **kwargs)  -> Action:
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
        if not "." in f.__qualname__:
            action = Action(f, action_id, name)
            Actions.add(action)
            return action
        else:
            Actions.add_unbound(f.__qualname__, action_id, name)
            setattr(f, "set_interupt", _SetInterupt(action_id))
            return f

    if method:
        return action_wrap(method)
    else:
        return action_wrap
