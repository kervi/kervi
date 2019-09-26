
import time
from kervi.controllers import Controller
from kervi.vision._roi_manager import _RegionOfInterestManager
from kervi.values import *

class ImageStream(Controller):
    def __init__(self, processor_id, name="Image stream"):
        Controller.__init__(self, processor_id, name)
        self.type = "image_stream"
        self.processor_id = processor_id
        self.stream_id = None
        self.stream_event = None
        self._fpc_start_time = time.time()
        self._fpc_counter = 0

        self.streamed_fps = self.outputs.add("source_fps", "Source fps", NumberValue)

        self.source_regions = _RegionOfInterestManager(processor_id, self.spine)
        self.output_regions = _RegionOfInterestManager(processor_id, self.spine)
    
    def _on_frame(self, stream_id, stream_event, data):
        self._fpc_counter += 1
        seconds = time.time() - self._fpc_start_time 
        if (seconds) > 1 :
            fpc = self._fpc_counter / seconds
            #print("FPS: ", self.fpc_counter, seconds, fpc)
            self._fpc_counter = 0
            self._fpc_start_time = time.time()
            self.streamed_fps.value = fpc
        self.on_new_image(data)

    def stream_to_output(self, image_data):
        self.spine.stream_data(self.component_id,"IMAGE_FRAME", image_data)
    
    def on_new_image(self, image_data):
        pass

    def link_to_stream(self, stream_id, stream_event="IMAGE_FRAME", show_poi=True):
        self.stream_id = stream_id
        self.stream_event = stream_event
        if show_poi:
            self.source_regions.stream_id = stream_id

        self.spine.register_stream_handler(stream_id, self._on_frame, stream_event)

    def link_to_dashboard(self, dashboard_id=None, panel_id=None, **kwargs):
        r"""
        Links this camera to a dashboard section or to the background of a dashboard.

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
        if panel_id is None:
            panel_id = "background"

        Controller.link_to_dashboard(
            self,
            dashboard_id,
            panel_id,
            **kwargs
        )

    