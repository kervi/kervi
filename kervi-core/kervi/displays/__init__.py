#Copyright 2018 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

"""
The display module holds classes for handling displays.
"""
import os
import threading
import time
from kervi.controllers import Controller
from kervi.values import *
from kervi.sensors import Sensor
from kervi.values.value_list import ValueList
from kervi.actions import action 
from PIL import Image, ImageDraw


class _PageTimer(threading.Thread):
    def __init__(self, display):
        threading.Thread.__init__(self, name="pageTimer")
        self.deamon = True
        self._display = display
        self._terminated = False

    def stop(self):
        self._terminated = True
    
    def run(self):
        while not self._terminated:
            self._display.activate_page("next")
            time.sleep(self._display.page_change_speed)

class Display(Controller):
    r"""
    The display class manage a display device.



    :param display_id:
            Id of the display. This id is never displayed it is used to reference the display in code.
    :type display_id: ``str``

    :param name:
            Name of the display.
    :type name: ``str``

    :param device:
        The display device that should be used. Could be one of the displays from the kervi device library
        or a display device driver that inherits from kervi.hal.DisplayDeviceDriver
    :type device: ``DisplayDeviceDriver``

    """
    def __init__(self, display_id, name, device_driver):
        Controller.__init__(self, display_id, name)
        self._device = device_driver
        self.text = self.inputs.add("text", "Text", StringValue)
        self._bitmap = None
        self._display_active = False
        self._line_height = 0
        self._font = None
        self._background_color=(0)
        self._text_color = (255)
        self._pages = {}
        self._active_page = None
        self._page_change_speed = 5
        self._page_timer = None
        self._bitmap_lock = threading.Lock()
    
    def add_page(self, page, default = True):
        r"""
        Add a display page to the display.

        :param page:  Page to be added
        :type display_id: ``DisplayPage``

        :param default: True if this page should be shown upon initialization.
            
        :type name: ``bool``
        """
        self._pages[page.page_id] = page
        page._add_display(self)
        if default or not self._active_page:
            self._active_page = page
    
    @property
    def page_change_speed(self):
        return self._page_change_speed

    @page_change_speed.setter
    def page_change_speed(self, value):
        self._page_change_speed = value
    
    @property
    def display_pages(self):
        r"""
        Returns the display pages added to this display 
        """
        return self._pages

    @property
    def active_page(self):
        r"""
        The current active display page or None if no pages are added.
        """
        return self._active_page

    @action
    def activate_page(self, page_id):
        r"""
        Activates a display page. Content of the active page is shown in the display.

        :param page_id:  Id of page to activate
        :type page_id: ``str``

        """
        if page_id == "next":
            page_keys = list(self._pages.keys())
            key_count = len(page_keys)
            if key_count > 0:
                idx = page_keys.index(self._active_page.page_id)
                if idx >= key_count-1:
                    idx = 0
                else:
                    idx += 1
                self._active_page = self._pages[page_keys[idx]]
                self._active_page._render()
                self._page_changed(self._active_page)

        elif page_id in self._pages:
            self._active_page = self._pages[page_id]
            self._page_changed(self._active_page)
        else:
            raise ValueError("Page with {page_id} not found in page list".format(page_id = page_id))

    @property
    def bitmap(self):
        return self._bitmap

    @bitmap.setter
    def bitmap(self, value):
        self._bitmap = value

    @property
    def line_height(self):
        return self._line_height

    @line_height.setter
    def line_height(self, value):
        self._line_height = value

    @property
    def font(self):
        if not self._font:
            self._font = self._get_font()
        return self._font
    
    @action
    def display_active(self, state=True):
        self._display_active = state
        self._device.enable_display(self._display_active)

    @display_active.set_interrupt
    def display_active_interupt(self):
        self._display_active = False
        self._device.enable_display(self._display_active)

    @action
    def activate_page_scroll(self):
        if not self._page_timer:
            self._page_timer = _PageTimer(self)
            self._page_timer.start()

    @activate_page_scroll.set_interrupt
    def activate_page_scroll_interrupt(self):
        if self._page_timer:
            self._page_timer.stop()
            self._page_timer.join()
            self._page_timer = None

    @action
    def scroll_v(self):
        pass

    @action
    def scroll_h(self):
        pass

    def _get_font(self, size=8, name="PressStart2P.ttf"):
        """
        Returns a font that can be used by pil image functions.
        This default font is "SourceSansVariable-Roman" that is available on all platforms.
        """
        import kervi.vision as vision
        from PIL import ImageFont
        vision_path = os.path.dirname(vision.__file__)
        fontpath = os.path.join(vision_path, "fonts", name)
        font = ImageFont.truetype(fontpath, size)
        return font
    
    def _page_changed(self, changed_page):
        if self._active_page == changed_page:
            self.text.value = changed_page.text
    
    def input_changed(self, changed_input):
        if changed_input == self.text:
            if self._device.display_type == "char":
                self._device.message(self.text.value)
            else:
                line_count = len(self.text.value.split("\n"))
                line_height = self._line_height
                if line_height == 0:
                    line_height = int(self._device.height / line_count )
                    if line_height < 16:
                        line_height = 8
                #print("l", line_height, line_count, self._device.height)
                if line_height == 8:
                    font = self._get_font(line_height, "PixelOperatorMono8-Bold.ttf")
                else:
                    font = self._get_font(line_height, "PixelOperatorMono-Bold.ttf")
                image = Image.new('1', size=(self._device.width, self._device.height), color=self._background_color)
                draw = ImageDraw.Draw(image)
                #draw.text((0, 0), self.text.value, font=self.font, fill=self._text_color)
                draw.multiline_text((0, 0), self.text.value, font=font, fill=self._text_color, spacing=2)
                self._bitmap_lock.acquire()
                try:
                    self._device.image(image)
                    self._device.display()
                finally:
                    self._bitmap_lock.release()
                
    def controller_start(self):
        if self._active_page:
            self._active_page._render()

    def controller_exit(self):
        if self._page_timer:
            self._page_timer.stop()


class _DisplayLink:
    def __init__(self, transform, value_id, link_id, x=0, y=0, size=0):
        self.transform = transform
        self.link_id = link_id
        self.value_id = value_id
        self.x= x
        self.y = y
        self.size = size
        self.value = ""
        self.unit = ""

    def _set_value(self, value, unit):
        if self.transform:
            self.value = self.transform(value)
        else:
            self.value = value

        self.unit = unit

class DisplayPage(Controller):
    def __init__(self, page_id, name = None):
        Controller.__init__(self, page_id, name)
        self.spine.register_event_handler("valueChanged", self._link_changed_event)
        self._template = ""
        self._links = {}
        self._displays = []
        self._text = None
        self._lines = 1

    def _link_changed_event(self, source_id, value, x):
        #print("lc", source_id, value)
        if source_id in self._links.keys():
            link = self._links[source_id]
            link._set_value(value["display_value"], value["display_unit"])
            self._render()

    def _add_display(self, display):
        self._displays.append(display)
    
    @property
    def line_count(self):
        return self._lines

    @property
    def text(self):
        return self._text
   
    @property
    def page_id(self):
        return self.component_id 

    @property
    def template(self):
        return self._template

    @template.setter
    def template(self, value):
        self._template = value
        self._lines = len(self._template.split("\n"))
    
    def _render(self):
        kwargs = {}
        for link_id in self._links:
            link = self._links[link_id]
            kwargs[link.link_id] = link.value
            kwargs[link.link_id + "_unit"] = link.unit
        self._text = self.template.format(self._template, **kwargs)
        for display in self._displays:
            display._page_changed(self) 
    
    def _transform(self, v, value_format):
        if value_format:
            return str.format("{:" + value_format + "}", v)
        else:
            return str(v)
    
    def input_changed(self, value):
        self._render()


    def link_value(self, source, format=None):
        id = None
        value_id = None
        if isinstance(source, Sensor):
            id = source.sensor_id
            value_id = source._sensor_value.value_id
        elif isinstance(source, KerviValue):
            id = source.value_id
            value_id = id
        elif isinstance(source, str):
            id = source
            value_id = id
        if id:
            self.spine.register_event_handler("valueChanged", self._link_changed_event, value_id)
            self._links[value_id] = _DisplayLink(lambda x: self._transform(x, format), value_id, id)
        else:
            raise ValueError("Source must be a KerviValue, Sensor or string")