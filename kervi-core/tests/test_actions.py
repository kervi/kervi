from kervi.controllers import Controller
from kervi.values import NumberValue
from mockup_spine import MockupSpine
from kervi_config import get_test_config
from kervi.actions import action, Actions
from kervi.spine import set_spine
import threading
import time
P1 = None
P2 = None
K1 = None
event = threading.Event()


def test_function_action():
    spine = MockupSpine()
    set_spine(spine)

    configuration = get_test_config()
    
    @action
    def action_func(p1, p2, **kwargs):
        global P1, P2, K1
        P1 = p1
        P2 = p2
        K1 = kwargs.get("k1", None)

    Actions["action_func"]("a", "b", k1="k")

    assert P1 == "a"
    assert P2 == "b"
    assert K1 == "k"

def test_function_action_direct():
    spine = MockupSpine()
    set_spine(spine)

    configuration = get_test_config()
    
    @action
    def action_func(p1, p2, **kwargs):
        global P1, P2, K1
        P1 = p1
        P2 = p2
        K1 = kwargs.get("k1", None)

    action_func("a", "b", k1="k")

    assert P1 == "a"
    assert P2 == "b"
    assert K1 == "k"



def test_function_action_alternative_id():
    spine = MockupSpine()
    set_spine(spine)

    configuration = get_test_config()
    
    @action(action_id="action_func_x")
    def action_func(p1, p2):
        global P1, P2
        P1 = p1
        P2 = p2

    Actions["action_func_x"]("a1", "b1")

    assert P1=="a1"
    assert P2=="b1"


def test_action_messages():
    spine = MockupSpine()
    set_spine(spine)

    configuration = get_test_config()
    
    @action
    def action_func(p1, p2, **kwargs):
        global P1, P2, K1
        P1 = p1
        P2 = p2
        K1 = kwargs.get("k1", None)

    
    spine.clear()
    Actions["action_func"]("ax", "bx", k1="kx")

    commands = spine.get_send_commands("messageManagerSend")
    assert P1 == "ax"
    assert P2 == "bx"
    assert K1 == "kx"
    assert len(commands) == 2

def test_action_async():
    global P1, P2, K1 
    spine = MockupSpine()
    set_spine(spine)

    configuration = get_test_config()
    P1="a"
    P2="b"
    K1="c"
    @action
    def action_func_async(p1, p2, **kwargs):
        global P1, P2, K1, event
        time.sleep(2)
        P1 = p1
        P2 = p2
        K1 = kwargs.get("k1", None)
        event.set()
        
    
    spine.clear()
    Actions["action_func_async"]("axa", "bxa", k1="kxa", run_async=True)
    assert P1=="a"
    assert P2=="b"
    assert K1=="c"
    event.wait(5)

    assert P1 == "axa"
    assert P2 == "bxa"
    assert K1 == "kxa"
    

# def test_action_interrupt():
#     global P1, P2, K1 
#     spine = MockupSpine()
#     set_spine(spine)

#     configuration = get_test_config()
#     P1="a"
#     P2="b"
#     K1="c"

#     I1=
#     @action
#     def action_func_async(p1, p2, **kwargs):
#         global P1, P2, K1, event
#         time.sleep(2)
#         P1 = p1
#         P2 = p2
#         K1 = kwargs.get("k1", None)
#         event.set()
    
#     @action_func_async.set_interrupt
#     def action_func_interrupt(i1, i2, **kwargs):
        
    
#     spine.clear()
#     Actions["action_func_async"]("axa", "bxa", k1="kxa", run_async=True)
#     assert P1=="a"
#     assert P2=="b"
#     assert K1=="c"
#     event.wait(5)

#     assert P1 == "axa"
#     assert P2 == "bxa"
#     assert K1 == "kxa"



def test_controller_action():
    spine = MockupSpine()
    set_spine(spine)

    configuration = get_test_config()

    class TestController(Controller):
        def __init__(self):
            Controller.__init__(self, "test_controller", "Test controller")

            self.p1=None
            self.p2=None

        @action
        def action1(self, p1, p2):
            self.p1 = p1
            self.p2 = p2

    tc=TestController()

    Actions["test_controller.action1"]("ca", "cb")

    assert tc.p1 == "ca"
    assert tc.p2 == "cb"


def test_controller_action_alt_id():
    spine = MockupSpine()
    set_spine(spine)

    configuration = get_test_config()

    class TestController(Controller):
        def __init__(self):
            Controller.__init__(self, "test_controller2", "Test controller")

            self.p1=None
            self.p2=None

        @action(action_id="actionx")
        def action1(self, p1, p2):
            self.p1 = p1
            self.p2 = p2

    tc=TestController()

    Actions["test_controller2.actionx"]("cax", "cbx")

    assert tc.p1 == "cax"
    assert tc.p2 == "cbx"


def test_controller_action_direct():
    spine = MockupSpine()
    set_spine(spine)

    configuration = get_test_config()

    class TestController(Controller):
        def __init__(self):
            Controller.__init__(self, "test_controller3", "Test controller")

            self.p1=None
            self.p2=None

        @action(action_id="actionx")
        def action1(self, p1, p2):
            self.p1 = p1
            self.p2 = p2

    tc=TestController()

    tc.action1("cax", "cbx")

    assert tc.p1 == "cax"
    assert tc.p2 == "cbx"
