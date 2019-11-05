
                

def bind_decorators_to_class(obj):
    
    obj.actions = {}
    obj.stream_observers = {}
    obj.region_observers = {}

    method_list = [func for func in dir(obj)]
    for method_name in method_list:
        try:
            if hasattr(obj, method_name):
                method = getattr(obj, method_name)
                method_qual_name = getattr(method, "__qualname__", None)
                if not method_qual_name:
                    method_qual_name = obj.__class__.__name__ + "." + method_name
                
                from kervi.actions import Actions, Action
                if Actions.is_unbound(method_qual_name):
                    action_id, name, ukwargs = Actions.get_unbound(method_qual_name)
                    setattr(obj, "kervi_action_"+ method.__name__, method)
                    copy_method = getattr(obj, "kervi_action_"+ method.__name__)
                    action = Action(copy_method, obj.controller_id + "." + action_id, name, **ukwargs)
                    Actions.add(action)
                    obj.actions[action_id] = action
                    setattr(obj, method.__name__, action)

                from kervi.streams._stream_observers import stream_observers
                from kervi.streams.stream_observer import StreamObserver
                if stream_observers.is_unbound(method_qual_name):
                    observer_id, name, stream_id, stream_event, observer_class, ukwargs = stream_observers.get_unbound(method_qual_name)
                    setattr(obj, "kervi_stream_observer_"+ method.__name__, method)
                    copy_method = getattr(obj, "kervi_stream_observer_"+ method.__name__)
                    observer = observer_class(stream_id, stream_event, obj.controller_id + "." + observer_id, copy_method, name, **ukwargs)
                    obj.stream_observers[observer_id] = observer
                    setattr(obj, method.__name__, observer)

                from kervi.vision._region_observers import region_observers
                from kervi.vision.region_observer import RegionObserver
                if region_observers.is_unbound(method_qual_name):
                    observer_id, name, stream_id, region_group, ukwargs = stream_observers.get_unbound(method_qual_name)
                    setattr(obj, "kervi_region_observer_"+ method.__name__, method)
                    copy_method = getattr(obj, "kervi_region_observer_"+ method.__name__)
                    observer = RegionObserver(stream_id, stream_event, obj.controller_id + "." + observer_id, copy_method, name, **ukwargs)
                    obj.region_observers[observer_id] = observer
                    setattr(obj, method.__name__, observer)
        except KeyError:
            pass
    
    for method_name in method_list:
        try:
            if hasattr(obj, method_name):
                method = getattr(obj, method_name)
                method_qual_name = getattr(method, "__qualname__", None)
                if not method_qual_name:
                    method_qual_name = obj.__class__.__name__ + "." + method_name
                if Actions.is_unbound_interrupt(method_qual_name):
                    action_id = Actions.get_unbound_interrupt(method_qual_name)
                    action = obj.actions[action_id]
                    action._interrupt = _ActionInterrupt(method)
                    action.set_ui_parameter("interrupt_enabled", True)
        except KeyError:
            pass