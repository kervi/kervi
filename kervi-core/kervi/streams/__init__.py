

def stream_data(stream_id, event, data):
    from kervi.spine import Spine
    Spine().stream_data(stream_id,event, data)

def stream_images(stream_id, image_data, event="IMAGE_FRAME"):
    from kervi.spine import Spine
    Spine().stream_data(stream_id, event, image_data)

from kervi.streams.stream_observer import StreamObserver
from kervi.streams._stream_observers import stream_observers
import inspect


def _is_method(func):
    spec = inspect.signature(func)
    if len(spec.parameters) > 0:
        if list(spec.parameters.keys())[0] == 'self':
            return True
    return False


def stream_observer(method=None, **kwargs) -> StreamObserver:
    """
        Decorator that turns a function or controller method into an kervi stream observer.
        
        @stream_observer
        def my_observer(stream_id, stream_event, stream_data)
            ...

        :Keyword Arguments:

            * *observer_id* (``str``) -- 
                By default the decorator takes the name of function but you can override it with observer_id.

            * *name* (``str``) -- Name to show in UI if the observer is linked to a panel.
            
    """

    def stream_wrap(f):
        stream_id = kwargs.pop("stream_id", None)
        stream_event = kwargs.pop("stream_event", None)
        observer_id = kwargs.pop("observer_id", f.__name__)
        name = kwargs.pop("name", observer_id)
        if not _is_method(f): # not "." in f.__qualname__:
            observer = StreamObserver(stream_id, stream_event, observer_id, f, name, **kwargs)
            stream_observers.add(observer)
            return observer
        else:
            qual_name = getattr(f, "__qualname__", None)
            owner_class = kwargs.get("controller_class", None)
            if owner_class:
                qual_name = owner_class + "." + f.__name__

            if qual_name:    
                stream_observers.add_unbound(qual_name, observer_id, name, stream_id, stream_event, StreamObserver, kwargs)
            else:
                import logging
                logging.getLogger().error("using upython? if yes you need to pass the name of the controller class via the controller_class parameter.")
            return f

    if method:
        return stream_wrap(method)
    else:
        return stream_wrap
