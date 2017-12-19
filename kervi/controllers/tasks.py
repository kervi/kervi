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

from kervi.controllers.controller import Controller
from kervi.spine import Spine
#import inspect


def run_task_async(task_name, *args):
    spine = Spine()
    spine.send_command(task_name + "_task_command", args)

def run_task(task_name, *args):
    spine = Spine()
    spine.send_query(task_name + "_task_query", *args)


class TaskHandler(Controller):
    def __init__(self, handler_id, name):
        Controller.__init__(self, handler_id, name)

    def task(self, method, command=None):

        print("mark as task:", method, method.__name__)
        if not command:
            command = method.__name__
        spine = Spine()

        spine.register_command_handler(command + "_task_command", method)
        spine.register_query_handler(command + "_task_query", method)
        #def wrapper(*args):
        #    print("wrap task")
        #    return method(*args)
        return method

    @property
    def handler_id(self):
        return self.component_id

