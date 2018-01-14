import inspect
import sys

from kervi.actions.action import Action
from kervi.actions.actions_list import Actions as _Actions

Actions = None

if not Actions:
    Actions = _Actions()

#from kervi.actions.action_list import _Actions
def action(method=None, **kwargs):
    """Turn function into an action"""
    
    def action_wrap(f):
        from functools import wraps
        @wraps(f)
        def wrapper(*args, **kw):
            return f(*args, **kw)
        action_id = kwargs.get("action_id", f.__name__)
        name = kwargs.get("name", action_id)
        #print("w", action_id, f)
        if not "." in f.__qualname__:
            action = Action(f, action_id, name)
            Actions.add(action)
            return action
        else:
            Actions.add_unbound(f.__qualname__, action_id, name)
            return f
    
    if method:
        return action_wrap(method)
    else:
        return action_wrap
