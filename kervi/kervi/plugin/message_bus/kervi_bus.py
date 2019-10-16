

class KerviBus:

    def __init__(self, config):
        pass

    @property
    def is_connected(self):
        raise NotImplementedError
    
    
    def reset(self, process_id, signal_port, ip=None, root_address=None, event_port=None):
        raise NotImplementedError

    def stop(self):
         raise NotImplementedError

    def send_command(self, command, *args, **kwargs):
        raise NotImplementedError

    def register_command_handler(self, command, func, **kwargs):
        raise NotImplementedError

    def unregister_command_handler(self, command, func, **kwargs):
        raise NotImplementedError

    def trigger_event(self, event, id, *args, **kwargs):
        raise NotImplementedError

    def register_event_handler(self, event, func, component_id=None, **kwargs):
        raise NotImplementedError
    
    def send_query(self, query, *args, **kwargs):
        raise NotImplementedError
    
    def register_query_handler(self, query, func, **kwargs):
        raise NotImplementedError

    def unregister_query_handler(self, query, func, **kwargs):
        raise NotImplementedError