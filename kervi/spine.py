# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT


""" 
This module bootstraps the cental messagegin system in Kervi.
Include this module in all modules where communication is needed.

Usage:
from kervi.spine import Spine

myValue=10
spine = Spine()
spine.sendCommand("SetMyValue",myValue)
"""

from kervi.utility.bus import _CQRSBus

class _KerviSpine(_CQRSBus):
    def version(self):
        return 1.0

S = None
def _init_spine(spine_name="roboSys"):
    global S
    S = _KerviSpine()
    S.set_log(spine_name)
    S.reset()
    S.start_queues()

def Spine():
    """
    Return instance of core communication class in Kervi, ready to use.
    Use this when communication is needed between Kervi sensors, controller
    and other code parts Include this module in all modules where communication is needed.

    Usage:

    myValue=10
    spine = Spine()
    spine.sendCommand("SetMyValue",myValue)
    """
    return S
