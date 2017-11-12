from kervi.controller import Controller
from kervi.values import DynamicNumber
from mockup_spine import MockupSpine

class XController(Controller):
    def __init__(self):
        Controller.__init__(self, "test_controller", "Test controller", spine = MockupSpine())

        self.input_1 = self.inputs.add("controller_input_1", "input 1", DynamicNumber)
        self.input_2 = self.inputs.add("controller_input_2", "input 2", DynamicNumber)
        self.output = self.outputs.add("controller_output", "output", DynamicNumber)


    def input_changed(self, changed_input):
        self.output.value = self.input_1.value + self.input_2.value


def test_controller():
    controller = XController()

    assert controller.controller_id == "test_controller"

    assert controller.input_1.value == 0
    assert controller.input_2.value == 0
    assert controller.output.value == 0

    controller.input_1.value = 1
    assert controller.output.value == 1

    controller.input_2.value = 2
    assert controller.output.value == 3