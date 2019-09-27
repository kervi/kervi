
class _StreamObservers(object):
    
    __observers = {}
    __unbound_observers = {}
    def __init__(self):
        pass

    def add(self, observer):
        _StreamObservers.__observers[observer.observer_id] = observer

    def add_unbound(self, handler_name, observer_id, name, stream_id, stream_event, kwargs):
        _StreamObservers.__unbound_observers[handler_name] = (observer_id, name, stream_id, stream_event, kwargs)

    def is_unbound(self, handler_name):
        return handler_name in _StreamObservers.__unbound_observers

    def get_unbound(self, handler_name):
        return _StreamObservers.__unbound_observers[handler_name]

    def __getitem__(self, observer_id):
        if observer_id in _StreamObservers.__observers:
            return _StreamObservers.__observers[observer_id]

stream_observers = None

if not stream_observers:
    stream_observers = _StreamObservers()

