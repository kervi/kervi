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

"""
Module that holds classes that asists in vision handling in kervi.
Based on your vision analasis you may present POI on screen or let other parts of your app
respond to your code.
"""

class RegionOfInterest:
    def __init__(self, region_id, caption, position, size, focus_point, text, stream_id, poi_manager_id):
        self.region_id = region_id
        self.caption = caption
        self.position = position
        self.size = size
        self.focus_point = focus_point
        self.text = text
        self.stream_id = stream_id
        self.poi_manager_id = poi_manager_id

class _RegionOfInterestManager:
    def __init__(self, roi_manager_id, spine):
        self.stream_id = None
        self.roi_manager_id = roi_manager_id
        self._regions = {}
        self.spine = spine
        
        self.spine.register_query_handler("getRegionsOfInterest", self._get_region_list)

    def __getitem__(self, region_id):
        return self._regions[region_id]
    
    def add(self, region_id, caption, position, size, focus_point, text):
        if self.stream_id:
            region = RegionOfInterest(region_id, caption, position, size, focus_point, text, self.stream_id, self.roi_manager_id)
            self._add_region(region)
            return region

    def _get_region_list(self, stream_id):
        result = []
        if self.stream_id == stream_id:
            for region in self._regions:
                result.append(region)
        return result

    def clear(self):
        self.roi_list = {}
        self.spine.trigger_event(
            "regionOfInterestChange",
            self.stream_id,
            {"action":"clear"},
            self.roi_manager_id
        )

    def _add_region(self, region):
        self._regions[region.id]= region
        self.spine.trigger_event(
            "regionOfInterestChange",
            self.stream_id,
            {"action":"add", "region":region},
            self.roi_manager_id
        )

    def remove(self, region_id):
        try:
            del self._regions[region_id]
            self.spine.trigger_event(
                "regionOfInterestChange",
                self.stream_id,
                {"action":"delete", "pointOfInterest":region_id},
                self.roi_manager_id
            )
                
        except:
            self.spine.log.exception("test")

    def update(self, region):
        self.spine.trigger_event(
            "regionOfInterestChange",
            self.stream_id,
            {"action":"update", "region":region},
            self.roi_manager_id
        )
