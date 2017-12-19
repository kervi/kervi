class MockupSpineLog(object):
    def debug(self, message, *args):
        pass

class MockupSpine(object):
    def __init__(self):
        self.queryHandlers = {}
        self.commandHandlers = {}
        self.eventHandlers = {}
        self.events={}
        self.log = MockupSpineLog()

    def register_query_handler(self, query, func, **kwargs):
        self.queryHandlers[query] = func

    def register_command_handler(self, query, func, **kwargs):
        self.commandHandlers[query] = func

    def register_event_handler(self, query, func, **kwargs):
        self.eventHandlers[query] = func

    def trigger_event(self, event, id, *args, **kwargs):
        self.events[event] = {"id":id, "args":args, "kwargs":kwargs}
