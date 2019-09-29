
import time
from kervi.controllers import Controller
from kervi.values import NumberValue

class RegionObserver(Controller):
    def __init__(self, stream_id, region_group, observer_id, handler=None, name="stream", observer_type="stream_observer"):
        Controller.__init__(self, observer_id, name)
        self.type = observer_type
        self.observer_id = observer_id
        self.stream_id = stream_id
        self.region_group = region_group
        self._epc_start_time = time.time()
        self._epc_counter = 0
        self._handler = handler

        self.streamed_eps = self.outputs.add("source_eps", "Events per second", NumberValue)

        self.spine.register_event_handler("visionRegionChange",self._on_event, stream_id)

    def __call__(self, *args, **kwargs):
        return self._handler(*args, **kwargs)

    def _on_event(self, region_id, region_data):
        #print("oev",region_id, region_data, data)
        self._epc_counter += 1
        seconds = time.time() - self._epc_start_time 
        if (seconds) > 1 :
            epc = self._epc_counter / seconds
            #print("FPS: ", self.fpc_counter, seconds, fpc)
            self._epc_counter = 0
            self._epc_start_time = time.time()
            self.streamed_eps.value = epc
        self.on_event(region_data["action"], region_data["region"])

    
    def on_event(self, stream_event, data):
        if self._handler:
            self._handler(stream_event, data)

    def link_to_dashboard(self, dashboard_id=None, panel_id=None, **kwargs):
        r"""
        Links this observer to a dashboard section or to the background of a dashboard.

        :param dashboard_id:
            id of the dashboard to link to.
        :type section_id: str

        :param section_id:
            id of the section.
        :type section_id: str

        :param \**kwargs:
            Use the kwargs below to override default values set in ui_parameters

        :Keyword Arguments:
            * *ui_size* (``int``) -- Size of the component in dashboard unit size.
                In order to make the sections and components align correct a dashboard unit is defined.
                Default the dashboard unit is a square that is 150 x 150 pixels.
                The width of the camera picture is ui_size * dashboard unit size.

            
        """
        Controller.link_to_dashboard(
            self,
            dashboard_id,
            panel_id,
            **kwargs
        )