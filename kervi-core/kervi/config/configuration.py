#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

import importlib
import json
import collections
import os

def _deep_update(d, u):
    """Update a nested dictionary or similar mapping.
    Modify ``source`` in place.
    """

    for k, v in u.items():
        if isinstance(v, collections.Mapping):
            r = _deep_update(d.get(k, {}), v)
            d[k] = r
        else:
            d[k] = u[k]
    return d

class _KerviConfig:
    def __init__(self):
        self._keys = []

    def __getitem__(self, i):
        if type(i) is int:
            attr = self._keys[i]
            return getattr(self, attr)
        else:
            return getattr(self, i)


    def __len__(self):
        return len(self._keys)

    def get(self, name, default_value=None):
            if not name:
                return default_value
            elif hasattr(self, name):
                return getattr(self, name)
            else:
                return default_value
    def as_dict(self):
        d = dict()
        for key in self._keys:
            v = getattr(self, key)
            if isinstance(v, _KerviConfig):
                d[key] = v.as_dict()
            else:
                d[key] = getattr(self, key)

        return d
        
    def to_json(self):
        return json.dumps(self.as_dict())

    @property
    def keys(self):
        return self._keys

class _Configuration:
    instance = None
    class __ConfigClass(_KerviConfig):
        def __init__(self):
            super()
            self._keys = []
            self._config_path = None
            self._json_data = None
            self._user_config = None
            self._config = None
            self._config_base = None
            self._is_loaded = False

        def _load(self, **kwargs):
            self._config_path = kwargs.get("config_file", None)
            self._json_data = kwargs.get("json_data", None)
            self._user_data = kwargs.get("config_user", {})
            self._config_base = kwargs.get("config_base", {})

            if self._json_data:
                self._user_config = json.loads(self._json_data)
            elif not self._user_config and self._config_path:
                try:
                    if os.path.isfile(self._config_path):
                        print("use config:", self._config_path)
                        config_data = ""

                        with open(self._config_path, "r") as config_file:
                            for line in config_file:
                                line_trim = line.lstrip()
                                if not line_trim.startswith("#"):
                                    config_data += line
                                else:
                                    config_data += "\n"
                        if config_data:
                            self._user_config = json.loads(config_data)
                        #print(self._user_config)
                except Exception as ex:
                    print("error in config file", ex)
                    pass

            self._config = self._config_base
            if self._user_config:
                self._config = _deep_update(self._config, self._user_config)
            if self._user_data:
                self._config = _deep_update(self._config, self._user_data)

            #self.__dict__.update(config)
            self._load_dict(self._config, top=self)
            self._is_loaded = True

        def _validate(self):
            return True

        def to_json(self):
            #print("c", self._config)
            return json.dumps(self._config)

        def get(self, name, default_value=None):
            if hasattr(self, name):
                return getattr(self, name)
            else:
                return default_value

        @property
        def is_loaded(self):
            return self._is_loaded

        def _load_dict(self, d, **kwargs):
            top = kwargs.get("top", _KerviConfig())
            seqs = tuple, list, set, frozenset
            for i, j in d.items():
                top._keys += [i]
                if isinstance(j, dict):
                    item = self._load_dict(j)
                    setattr(top, i, item )
                elif isinstance(j, seqs):
                    item = type(j)(self._load_dict(sj) if isinstance(sj, dict) else sj for sj in j)
                    setattr(
                        top,
                        i,
                        item
                    )
                else:
                    setattr(top, i, j)
            #setattr(top, "keys", keys)

            return top

        def list(self):
            print("cl", dir(self))


    
    def __new__(cls): # __new__ always a classmethod
        if not _Configuration.instance:
            _Configuration.instance = _Configuration.__ConfigClass()
        return _Configuration.instance

    def __getattr__(self, name):
        if name == "instance":
            return _Configuration.instance
        return getattr(_Configuration.instance, name)

    def __setattr__(self, name, value):
        return setattr(_Configuration.instance, name, value)
