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
   
    def simulate_app_start(self):
        for func in self.eventHandlers["appReady"]:
            func("test-app")
    
    def simulate_app_exit(self):
        for func in self.eventHandlers["processTerminating"]:
            func("test-app")
    
    def register_query_handler(self, query, func, **kwargs):
        self.queryHandlers[query] = func

    def register_command_handler(self, command, func, **kwargs):
        self.commandHandlers[command] = func

    def register_event_handler(self, event, func, **kwargs):
        if event in self.eventHandlers:
            self.eventHandlers[event] += [func]
        else:
            self.eventHandlers[event] = [func]

    def trigger_event(self, event, id, *args, **kwargs):
        self.events[event] = {"id":id, "args":args, "kwargs":kwargs}
