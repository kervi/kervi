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
import importlib
import json
import collections
import os
from kervi.utility import nethelper

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
            if hasattr(self, name):
                return getattr(self, name)
            else:
                return default_value

    @property
    def keys(self):
        return self._keys

class _Configuration:
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


    instance = None
    def __new__(cls): # __new__ always a classmethod
        if not _Configuration.instance:
            _Configuration.instance = _Configuration.__ConfigClass()
        return _Configuration.instance

    def __getattr__(self, name):
        return getattr(self.instance, name)

    def __setattr__(self, name, value):
        return setattr(self.instance, name, value)
