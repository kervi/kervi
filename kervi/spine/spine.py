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

""" 
This module bootstraps the cental messagegin system in Kervi.
Include this module in all modules where communication is needed.

Usage:
from kervi.spine import Spine

myValue=10
spine = Spine()
spine.sendCommand("SetMyValue",myValue)
"""

#from kervi.utility.bus import _CQRSBus

# class _KerviSpine(_CQRSBus):
#     def version(self):
#         return 1.0

S = None
# def _init_spine(spine_name="roboSys"):
#     global S
#     S = _KerviSpine()
#     S.set_log(spine_name)
#     S.reset()
#     S.start_queues()
from zmqbus import ZMQBus
import threading

class _KerviSpine(ZMQBus):
    def version(self):
        return 2.0

def _init_spine(process_id, spine_port, root_address = None, ip="127.0.0.1"):
    global S
    S = _KerviSpine()
    S.set_log(process_id)

    S.reset_bus(process_id, spine_port, ip, root_address)
    S.run()

    if root_address:
        S.wait_for_root(10)

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
