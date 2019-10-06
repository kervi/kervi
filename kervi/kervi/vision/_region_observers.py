
class _RegionObservers(object):
    __observers = {}
    __unbound_observers = {}

    def __init__(self):
        pass

    def add(self, observer):
        _RegionObservers.__observers[observer.observer_id] = observer

    def add_unbound(self, handler_name, observer_id, name, stream_id, region_group, kwargs):
        _RegionObservers.__unbound_observers[handler_name] = (observer_id, name, region_group, kwargs)

    def is_unbound(self, handler_name):
        return handler_name in _RegionObservers.__unbound_observers

    def get_unbound(self, handler_name):
        return _RegionObservers.__unbound_observers[handler_name]

    def __getitem__(self, observer_id):
        if observer_id in _RegionObservers.__observers:
            return _RegionObservers.__observers[observer_id]

region_observers = None

if not region_observers:
    region_observers = _RegionObservers()
