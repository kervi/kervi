class MockupSpineLog(object):
    def debug(self, message, *args):
        pass

    def exception(self, message, *args):
        print("MockupError", message, *args)
        pass

class MockupSpine(object):
    commands = []
    def __init__(self):
        self.queryHandlers = {}
        self.commandHandlers = {}
        self.eventHandlers = {}
        self.events={}
        
        self.log = MockupSpineLog()
   
    def clear(self):
        self.commands.clear()
    
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

    def register_event_handler(self, event, func, component_id=None, **kwargs):
        if event in self.eventHandlers:
            self.eventHandlers[event] += [func]
        else:
            self.eventHandlers[event] = [func]

    def trigger_event(self, event, id, *args, **kwargs):
        self.events[event] = {"id":id, "args":args, "kwargs":kwargs}

    def send_command(self, command, *args, **kwargs):
        self.commands.append({"command": command, "args":args, "kwargs": kwargs})

    def get_send_commands(self, command):
        result = []
        for send_command in self.commands:
            if send_command["command"] == command:
                result.append(send_command)
        return result