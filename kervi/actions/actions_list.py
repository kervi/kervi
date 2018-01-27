from kervi.actions.action import _LinkedAction

class Actions(object):
    
    __actions = {}
    __unbound_actions = {}
    __unbound_interupts = {}
    def __init__(self):
        pass

    def add(self, action):
        Actions.__actions[action.action_id] = action

    def add_unbound(self, handler_name, action_id, name):
        Actions.__unbound_actions[handler_name] = (action_id, name)

    def add_unbound_interupt(self, interupt_name, action_id):
        Actions.__unbound_interupts[interupt_name] = (action_id)

    def is_unbound(self, handler_name):
        return handler_name in Actions.__unbound_actions

    def is_unbound_interupt(self, interupt_name):
        return interupt_name in Actions.__unbound_interupts

    def get_unbound(self, handler_name):
        return Actions.__unbound_actions[handler_name]

    def get_unbound_interupt(self, interupt_name):
        return Actions.__unbound_interupts[interupt_name]

    def __getitem__(self, action_id):
        if action_id in Actions.__actions:
            return Actions.__actions[action_id]
        else:
            linked_action = _LinkedAction(action_id)
            Actions.__actions[action_id] = linked_action
            return linked_action

