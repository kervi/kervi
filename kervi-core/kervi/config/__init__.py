#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

import sys
from kervi.config.configuration import _Configuration

this = sys.modules[__name__]

this.Configuration = _Configuration()
this.Text = _Configuration()

def load(**kwargs):
    this.Configuration._load(**kwargs)
    this.Text._load(config_base = this.Configuration.texts.as_dict())
    return this.Configuration
