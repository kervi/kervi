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

"""  """

import threading
import logging

class KerviThread(threading.Thread):
    """
    Thread class that runs until stop is called.
    Fill in the abstract method _step that handles one cycle of your thread code.
    """
    def __init__(self):
        """
        Initialize the thread as daemon.
        .. document private functions
        .. automethod:: _step
        """
        threading.Thread.__init__(self)
        self.daemon = True
        self.terminate = False

    def stop(self):
        """Terminate the thread"""
        self.terminate = True

    def run(self):
        """Private method do not call it directly or override it."""
        while not self.terminate:
            try:
                self._step()
            except:
                log = logging.getLogger()
                log.exception("kervi thread:" + self.__class__.__name__)

    def _step(self):
        """
        Abstract method that handles one cycle in the thread.
        """
