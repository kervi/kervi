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

