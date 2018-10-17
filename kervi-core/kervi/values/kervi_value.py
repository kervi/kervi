#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

try:
    from datetime import datetime
except:
    from kervi.core.utility.udatetime import datetime

from kervi.core.utility.component import KerviComponent
from kervi.config import Configuration, Text
from kervi.actions import Actions
VALUE_COUNTER = 0
class KerviValue(KerviComponent):
    """
    Generic value that is use as base class for specialized  kervi values.
    """
    def __init__(self, name, value_type, **kwargs):
        global VALUE_COUNTER
        parent = kwargs.get("parent", None)
        input_id = kwargs.get("value_id", None)
        if input_id is None:
            VALUE_COUNTER += 1
            if parent:
                input_id = parent.component_id + ".VALUE_" + str(VALUE_COUNTER)
            else:
                input_id = "VALUE_" + str(VALUE_COUNTER)
        elif parent:
            input_id = parent.component_id + "." + input_id

        KerviComponent.__init__(self, input_id, value_type, name, **kwargs)
        #self.spine = Spine()
        self._default_value = None
        self._index = kwargs.get("index", None)
        self.is_input = kwargs.get("is_input", True)
        self._value = None
        self._display_value = None
        self._unit = ""
        self._display_unit = None
        
        self._sparkline = []
        self._observers = []
        self._value_event_handlers = []
        if parent:
            self._observers += [parent]
        self._spine_observers = {}
        self.command = self.component_id + ".setValue"
        self.spine.register_command_handler(self.command, self._set_value, groups=self.admin_groups)
        self.spine.register_query_handler("getKerviValue", self._query_value, groups=self.user_groups)

        self._ui_parameters = {
            "size": 0,
            "input_size": 0,
            "type": "unkonwn",
            "link_to_header": False,
            "label_icon": None,
            "label": self.name,
            "label_size":0,
            "flat": False,
            "inline": False,
            "is_input":self.is_input,
            "value_size":3,
            "width":0,
            "height":0

        }
        self._persist_value = kwargs.get("persist_value", False)
        self._log_values = kwargs.get("log_values", False)

    @property
    def index(self):
        """
        Index of the value relative to its parent (controller or sensor)
        """
        return self._index

    @property
    def value_id(self):
        return self.component_id

    @property
    def value(self):
        """Current value of the component"""
        return self._value

    @value.setter
    def value(self, new_value):
        """
        Updates the value.
        If the change exceeds the change delta observers and linked values are notified.  
        """
        self._set_value(new_value)

    @property
    def display_value(self):
        return self._value

    
    @property
    def unit(self):
        """
        Metric Unit of value.

        :type: ``str``
        """
        return self._unit

    @unit.setter
    def unit(self, value):
        self._unit = value
    
    @property
    def display_unit(self):
        if self._display_unit:
            return self._display_unit
        else:
            return self._unit
    
    @property
    def log_values(self):
        """
        Set to true if the values should be logged to DB.
        If false Kervi will hold a small cache in memory
        for the last reading to be used in sparklines and real time charts.
        """
        return self._log_values

    @log_values.setter
    def log_values(self, value):
        self._log_values = value

    @property
    def persist_value(self):
        """
        Set to true if the current value should be saved to db when the Kervi application or module exits.
        The value will be restored upon application or module start. 
        """
        return self._persist_value

    @persist_value.setter
    def persist_value(self, do_persist):
        if not self._persist_value and do_persist:
            self._persist_value = do_persist
            self._load_persisted()
        else:
            self._persist_value = do_persist

    def _query_value(self, id):
        if self.component_id == id:
            return self.value

    def _load_persisted(self):
        if self._persist_value:
            value = self.settings.retrieve_value("value", self._default_value)
            #print("v", value)
            self._set_value(value, False)

    def link_to(self, source, transformation=None):
        """
        Kervi values may be linked together. 
        A KerviValue is configured to be either an input or output.
        When an output value is linked to an input value the input will become
        an observer of the output. Every time the output value change it will notify the input 
        about the change.

        :param source:
            It is possible to make direct and indirect link.

            If the type of the source parameter is of type KerviValue a direct link is created.
            this is a fast link where the output can notify directly to input.
            This type of link is possible if both output and input resides in the same process.

            If the type of the source parameter is a string it is expected to hold the id of a another KerviValue.
            In this mode the input value will listen on the kervi spine for events from the output value.
            This mode is useful if the output and input does not exists in the same process.
            This type of link must be made by the input.

        :type source: ``str`` or ``KerviValue``

        :param transformation:
            A function or lambda expression that transform the value before the output is update.
            This is usefull if the input expects other ranges that the output produce
            or need to change the sign of the value.

        """
        if isinstance(source, KerviValue):
            if source.is_input and not self.is_input:
                self.add_observer(source, transformation)
            elif not source.is_input and self.is_input:
                source.add_observer(self, transformation)
            else:
                raise Exception("input/output mismatch in kervi value link:{0} - {1}".format(source.name, self.name))
        elif isinstance(source, str):
            if len(self._spine_observers) == 0:
                self.spine.register_event_handler("valueChanged", self._link_changed_event)

            self._spine_observers[source] = transformation

    def link_to_dashboard(self, dashboard_id=None, panel_id=None, **kwargs):
        r"""
        Links this value to a dashboard panel.

        :param dashboard_id:
            Id of the dashboard to link to.
        :type dashboard_id: str

        :param panel_id:
            Id of the panel on the dashboard to link to.
        :type panel_id: str
        
        :param \**kwargs:
            Use the kwargs below to override default values for ui parameters

        :Keyword Arguments:
            
            * *link_to_header* (``str``) -- Link this value to header of the panel.

            * *label_icon* (``str``) -- Icon that should be displayed together with label.

            * *label* (``str``) -- Label text, default value is the name of the value.

            * *flat* (``bool``) -- Flat look and feel.

            * *inline* (``bool``) -- Display value and label in its actual size
                If you set inline to true the size parameter is ignored.
                The value  will only occupy as much space as the label and input takes.

            * *input_size* (``int``) -- width of the slider as a percentage of the total container it sits in.

            * *value_size* (``int``) -- width of the value area as a percentage of the total container it sits in.
        """
        KerviComponent.link_to_dashboard(
            self,
            dashboard_id,
            panel_id,
            **kwargs
        )

    def add_observer(self, observer, transformation=None):
        """
        Adds an observer to this value.
        The observer must implement the function value_changed. 
        """
        self._observers += [(observer, transformation)]

    def _link_changed_event(self, id, source, old_value):
        if source["id"] in self._spine_observers.keys():
            transformation = self._spine_observers[source["id"]]
            if transformation:
                self.value = transformation(source["value"])
            else:
                self.value = source["value"]

    def _set_value(self, nvalue, allow_persist=True):
        if self._value != nvalue:
            self.spine.log.debug(
                "value change on input:{0} value:{1}",
                self.component_id,
                nvalue
            )

            old_value = self.value
            self._value = nvalue
            try:
                self.value_changed(nvalue, old_value)
            except Exception as Ex:
                print("Error in value changed", Ex)
            
            for observer in self._observers:
                try:
                    item, transformation = observer
                    if transformation:
                        item.kervi_value_changed(self, transformation(nvalue))
                    else:
                        item.kervi_value_changed(self, nvalue)
                except Exception:
                    print("error in value observer:")

            self._check_value_events(nvalue, old_value)

            if self._persist_value and allow_persist:
                self.settings.store_value("value", self.value)

            val = {
                "id":self.component_id,
                "value":nvalue,
                "timestamp":datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"),
                "display_value": self.display_value,
                "display_unit": self.display_unit
            }
            
            self.spine.trigger_event(
                "valueChanged",
                self.component_id,
                val,
                self._log_values,
                groups=self.user_groups
            )

    def kervi_value_changed(self, source, value):
        self._set_value(value, False)

    def value_changed(self, new_value, old_value):
        pass

    def add_value_event(self, event_value, func, event_type=None, parameters=None, **kwargs):
        """
        Add a function that is called when the value reach or pass the event_value.

        :param event_value:
            A single value or range specified as a tuple.

            If it is a range the function specified in func is called when the value enters the range.

        :type event_value: ``float``, ``string``, ``boolean`` or a tuple of these types.

        :param func:
            Function or lambda expression to be called.
            This function will receive the dynamcic value as a parameter.

        :param event_type:
            String with the value "warning" of "error" or None (default).
            If warning or error is specified the value or range are shown in UI.

        :type event_type: ``str``

        """
        self._value_event_handlers += [(event_value, func, event_type, parameters, kwargs)]


    def _handle_range_event(self, value, message, func, level, **kwargs):
        message_type = ""
        message_color = "#28a745"
        if level==1:
            message_type = "Error"
            message_color = "#dc3545"
        elif level==2:
            message_type = "Warning"
            message_color = "#ffc107"
        if message:
            from kervi.messaging import Messaging
            from kervi.core.utility.superformatter import SuperFormatter
            sf = SuperFormatter()
            
            body_template = Configuration.texts.messages.value_plain
            body = sf.format(
                body_template,
                message_color=message_color,
                message_type = message_type,
                source_name=self._name,
                message=message,
                value=self.display_value,
                sparkline=self._sparkline,
                user_name="{user_name}",
                unit=self._display_unit,
                level=level
            ) 

            html_template = Configuration.texts.messages.value_html
            html_body = sf.format(
                html_template,
                message_color=message_color,
                message_type = message_type,
                source_name=self._name,
                message=message,
                value=self.display_value,
                sparkline=self._sparkline,
                user_name="{user_name}",
                level=level,
                unit=self._display_unit
            ) 

            kwargs = dict(kwargs, source_id=self.component_id, source_name=self.name, user_groups = self._user_groups, level=level, body=body, body_html=html_body)
            Messaging.send_message(message, **kwargs)
            
        if func:
            func(self)

    def add_normal_range(self, value, message=None, func=None, **kwargs):
        self.add_value_event(value, self._handle_range_event, parameters=[message, func, 3], **kwargs)

    def add_warning_range(self, value, message=None, func=None, **kwargs):
        self.add_value_event(value, self._handle_range_event, event_type="warning", parameters=[message, func, 2], **kwargs)

    def add_error_range(self, value, message=None, func=None, **kwargs):
        self.add_value_event(value, self._handle_range_event, event_type="error", parameters=[message, func, 1], **kwargs)

    def _check_value_events(self, new_value, old_value):
        for event in self._value_event_handlers:
            value, func, event_type, parameters, kwargs = event
            if func:
                if isinstance(value, tuple):
                    value_start, value_end = value
                    if old_value < value_start and new_value >= value_start:
                        func(self, *parameters, **kwargs)
                    elif old_value > value_end and new_value <= value_end:
                        func(self, *parameters, **kwargs)
                else:
                    if old_value < value and new_value >= value:
                        func(self, *parameters, **kwargs)
                    elif old_value > value and new_value <= value:
                        func(self, *parameters, **kwargs)

    @property
    def _event_ranges(self):
        ranges = []
        for event in self._value_event_handlers:
            value, func, event_type, parameters, kwargs = event
            if isinstance(value, tuple):
                value_start, value_end = value
                ranges += [{"start":value_start, "end":value_end, "type":event_type}]
            elif event_type:
                ranges += [{"start":value, "end":None, "type":event_type}]
        return ranges

    
    def _get_ui_parameters(self, ui_parameters):
        ui_parameters["display_unit"] = self.display_unit
        return ui_parameters
    
    def _get_info(self, **kwargs):
        return {
            "value":self.value,
            "command":self.command,
            "ranges":self._event_ranges,
            "visible": self.visible,
        }

    def on_get_value(self):
        return self.value

    def _get_bus_routes(self):
        result = [] 
        for link in self._spine_observers.keys():
            result += [{
                "id": link,
                "direction": "in",
                "topic_type": "event",
                "topic": "valueChanged"
                }]
        return result