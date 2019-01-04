
from kervi.spine import Spine

import json
import inspect

class _ObjectEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, "to_json"):
            return self.default(obj.to_json())
        elif hasattr(obj, "__dict__"):
            data = dict(
                (key, value)
                for key, value in inspect.getmembers(obj)
                if not key.startswith("__")
                and not inspect.isabstract(value)
                and not inspect.isbuiltin(value)
                and not inspect.isfunction(value)
                and not inspect.isgenerator(value)
                and not inspect.isgeneratorfunction(value)
                and not inspect.ismethod(value)
                and not inspect.ismethoddescriptor(value)
                and not inspect.isroutine(value)
            )
            return self.default(data)
        return obj

from kervi.plugin import KerviPlugin
class StoragePlugin(KerviPlugin):
    def __init__(self, name, config, manager):
        KerviPlugin.__init__(self, name, config, manager)
        self._spine = Spine()
    
    @property
    def storage_type(self):
        return "persisted"
    
    def store_value(self, value_id, value, persist=False):
        raise NotImplementedError

    def get_value_data(self, date_from, date_to, limit):
        raise NotImplementedError

    def store_setting(self, group, name, value):
        raise NotImplementedError

    def retrieve_setting(self, group, name):
        raise NotImplementedError

    def store_message(self, source_id, message_item):
        raise NotImplementedError

    def get_messages(self):
        raise NotImplementedError    

    def log_error(self, message, *args):
        self._spine.log.error(message, *args)
        print("storage error", "".format(message, *args))

    def to_json(self, data):
        return json.dumps(data, cls=_ObjectEncoder, ensure_ascii=False).encode('utf8')

    def from_json(self, json_data):
        return json.loads(json_data.decode('utf8'))    