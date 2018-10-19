#Copyright 2016 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

""" 
This module bootstraps the central messagegin system in Kervi.
Include this module in all modules where communication is needed.

Usage:
from kervi.spine import Spine

myValue=10
spine = Spine()
spine.sendCommand("SetMyValue",myValue)
"""

import importlib

S = None
_SPINE_CLASS = None

def set_spine(spine):
    global S
    S = spine

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
