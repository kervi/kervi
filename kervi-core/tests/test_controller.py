from kervi.controllers import Controller
from kervi.values import NumberValue
from mockup_spine import MockupSpine

class XController(Controller):
    def __init__(self):
        Controller.__init__(self, "test_controller", "Test controller", spine = MockupSpine())

        self.input_1 = self.inputs.add("controller_input_1", "input 1", NumberValue)
        self.input_2 = self.inputs.add("controller_input_2", "input 2", NumberValue)
        self.output = self.outputs.add("controller_output", "output", NumberValue)

        self.last_input = None

    def input_changed(self, changed_input):
        self.last_input = changed_input
        self.output.value = self.input_1.value + self.input_2.value


def test_controller():
    controller = XController()

    #simulate app ready event
    controller._on_app_ready(True)

    assert controller.controller_id == "test_controller"

    assert controller.input_1.value == 0
    assert controller.input_2.value == 0
    assert controller.output.value == 0

    controller.input_1.value = 1
    assert controller.last_input == controller.input_1
    assert controller.output.value == 1

    controller.input_2.value = 2
    assert controller.output.value == 3
