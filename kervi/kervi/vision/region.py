#MIT License
#Copyright (c) 2017 Tim Wentzlau

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import uuid
from kervi.spine import Spine

class _Regions:
    def __init__(self):
        self._regions = {}
        self.spine = Spine()
        self.spine.register_query_handler("getRegionsOfInterest", self._get_region_list)

    def __getitem__(self, region_id):
        return self._regions[region_id]
    
    def _get_region_list(self, stream_id):
        result = []
        for region in self._regions:
            result.append(region)
        return result

    def add(self, region):
        self._regions[region.region_id] = region

    def clear(self, region_group=None, stream_id=None):
        for region in self._regions:
            invalidate = False
            if not region_group and not stream_id:
                invalidate = True
            elif region_group and region.region_group == region_group:
                invalidate = True
            elif stream_id and region.stream_id == stream_id:
                invalidate = True

            if invalidate:    
                region.invalidate()

    def remove(self, region):
            del self._regions[region.region_id]

Regions = _Regions()

class Region:
    def __init__(self, region_group, stream_id, position_x, position_y, caption=None, width=0, height=0, focus_x=None, focus_y=None, text=None, region_id=None):
        if region_id:
            self.region_id = region_id
        else:
            self.region_id = uuid.uuid4().hex
        self.region_group = region_group
        self.stream_id = stream_id
        self.x = position_x
        self.y = position_y
        self.caption = caption
        self.width = width
        self.height = height
        self.focus_x = focus_x
        self.focus_y = focus_y
        self.text = text
        self.visible = True
        self.spine = Spine()

        Regions.add(self)

        self.spine.trigger_event(
            "visionRegionChange",
            self.stream_id,
            {"action":"add", "region":self._region_info()}
        )
    
    def _region_info(self):
        return {
            "region_id": self.region_id,
            "group": self.region_group,
            "stream_id": self.stream_id,
            "x": self.x,
            "y": self.y,
            "caption": self.caption,
            "width": self.width,
            "height": self.height,
            "focus_x": self.focus_x,
            "focus_y": self.focus_y,
            "text": self.text,
            "visible": self.visible
        }

    def update(self):
        self.spine.trigger_event(
            "visionRegionChange",
            self.stream_id,
            {"action":"update", "region":self._region_info()}
        )

    def invalidate(self):
        Regions.remove(self)
        self.spine.trigger_event(
            "visionRegionChange",
            self.stream_id,
            {"action":"invalidate", "region":self._region_info()}
        )


from kervi.vision.region_observer import RegionObserver
from kervi.vision._region_observers import region_observers
import inspect

def _is_method(func):
    spec = inspect.signature(func)
    if len(spec.parameters) > 0:
        if list(spec.parameters.keys())[0] == 'self':
            return True
    return False

def region_observer(method=None, **kwargs) -> RegionObserver:
    """
        Decorator that turns a function or controller method into an kervi vision region observer.
        
        @region_observer(stream_id="cam1")
        def my_observer(action, region)
            ...

        :Keyword Arguments:

            * *observer_id* (``str``) -- 
                By default the decorator takes the name of function but you can override it with observer_id.

            * *name* (``str``) -- Name to show in UI if the observer is linked to a panel.
            
    """

    def stream_wrap(f):
        stream_id = kwargs.pop("stream_id", None)
        region_group = kwargs.pop("region_group", None)
        observer_id = kwargs.pop("observer_id", f.__name__)
        name = kwargs.pop("name", observer_id)
        if not _is_method(f): # not "." in f.__qualname__:
            observer = RegionObserver(stream_id, region_group, observer_id, f, name, **kwargs)
            region_observers.add(observer)
            return observer
        else:
            qual_name = getattr(f, "__qualname__", None)
            owner_class = kwargs.get("controller_class", None)
            if owner_class:
                qual_name = owner_class + "." + f.__name__

            if qual_name:
                region_observers.add_unbound(qual_name, observer_id, name, stream_id, region_group, kwargs)
            else:
                import logging
                logging.getLogger().error("using upython? if yes you need to pass the name of the controller class via the controller_class parameter.")
            return f

    if method:
        return stream_wrap(method)
    else:
        return stream_wrap
