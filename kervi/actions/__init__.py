import inspect
import sys

from kervi.actions.action import Action, _LinkedAction
#from kervi.actions.action_list import _Actions
_modules_before = [str(m) for m in sys.modules]
class Actions(object):
    __actions = {}
    __unbound_actions = []
    def __init__(self):
        #self._actions = {}
        pass

    def add(self, action):
        Actions.__actions[action.action_id] = action

    
    def add_unbound(self, handler_name):
        Actions.__unbound_actions += [handler_name]

    def is_unbound(self, handler_name):
        return handler_name in Actions.__unbound_actions

    def __getitem__(self, action_id):
        if action_id in Actions.__actions:
            return Actions.__actions[action_id]
        else:
            linked_action = _LinkedAction(action_id)
            Actions.__actions[action_id] = linked_action
            return linked_action

def action(f):
    """Turn function into an action"""
    from functools import wraps
    @wraps(f)
    def wrapper(*args, **kw):
        return f(*args, **kw)

    if not "." in f.__qualname__:
        Actions().add(Action(wrapper))
    else:
        Actions().add_unbound(f.__qualname__)

    return f
