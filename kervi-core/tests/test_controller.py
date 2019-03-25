from kervi.controllers import Controller
from kervi.values import NumberValue
from mockup_spine import MockupSpine
from kervi_config import get_test_config
class XController(Controller):
    def __init__(self, **kwargs):
        Controller.__init__(self, "test_controller", "Test controller", **kwargs)

        self.input_1 = self.inputs.add("controller_input_1", "input 1", NumberValue)
        self.input_2 = self.inputs.add("controller_input_2", "input 2", NumberValue)
        self.output = self.outputs.add("controller_output", "output", NumberValue)

        self.last_input = None
        self.start_event = False
        self.exit_event = False
    
    def input_changed(self, changed_input):
        self.last_input = changed_input
        self.output.value = self.input_1.value + self.input_2.value

    def controller_exit(self):
        self.exit_event = True

    def controller_start(self):
        self.start_event = True


def test_controller_creation():

    spine = MockupSpine()
    configuration = get_test_config()
    controller = XController(spine=spine, configuration=configuration)
   
    assert controller.controller_id == "test_controller"

    assert controller.input_1.value == 0
    assert controller.input_2.value == 0
    assert controller.output.value == 0

    

def test_controller_start_event():
    spine = MockupSpine()
    configuration = get_test_config()
    controller = XController(spine=spine, configuration=configuration)
   
    assert not controller.start_event
    
    spine.simulate_app_start()

    assert controller.start_event


def test_controller_exit_event_no_start():
    spine = MockupSpine()
    configuration = get_test_config()
    controller = XController(spine=spine, configuration=configuration)
   
    assert not controller.exit_event
    
    spine.simulate_app_exit()

    assert not controller.exit_event

def test_controller_exit_event():
    spine = MockupSpine()
    configuration = get_test_config()
    controller = XController(spine=spine, configuration=configuration)
   
    spine.simulate_app_start()
    
    assert not controller.exit_event
    
    spine.simulate_app_exit()

    assert controller.exit_event


def test_value_change():
    spine = MockupSpine()
    configuration = get_test_config()
    controller = XController(spine=spine, configuration=configuration)
    
    spine.simulate_app_start()
    controller.input_1.value = 1
    assert controller.last_input == controller.input_1
    assert controller.output.value == 1

    controller.input_2.value = 2
    assert controller.output.value == 3


