
import threading
from kervi.controllers import Controller
from kervi.values import NumberValue, StringValue
import kervi.hal as hal

class _InputThread(threading.Thread):
    def __init__(self, controller, device):
        super().__init__(Name="InputThread")
        self._controller = controller
        self.deamon = True
        self._terminate = False
        self._device = device
        

    def run(self):
        while not self._terminate:
            try:
                events = self._device.read()
                if events:
                    for event in events:
                        self._controller.on_input(event, self)
            except EOFError:
                self._terminate = True
            except BrokenPipeError:
                self._terminate = True
    
    def terminate(self):
        self._device._pipe.close()
        self._terminate = True
        


class UserInput(Controller):
    def __init__(self, input_id="user_input", name="User input", device=None, **kwargs):
        Controller.__init__(self, input_id, name)
        listen_to_keyboard = kwargs.pop("listen_to_keyboard", False)
        listen_to_mouse = kwargs.pop("listen_to_mouse", False)
        listen_to_gamepad = kwargs.pop("listen_to_gamepad", True)
        self._devices = hal.get_user_inputs()
        self._keyboard_thread = None
        self._mouse_thread = None
        self._gamepad_thread = None
        if listen_to_keyboard:
            if len(self._devices.keyboards):
                self._keyboard_thread = _InputThread(self, self._devices.keyboards[0])
            else:
                print("no keyboards found")
        if listen_to_mouse:
            if len(self._devices.mice):
                self._mouse_thread = _InputThread(self, self._devices.mice[0])
            else:
                print("no mouse found")
        if listen_to_gamepad:
            if len(self._devices.gamepads):
                self._gamepad_thread = _InputThread(self, self._devices.gamepads[0])
            else:
                print("no gamepads found")
        self.key = self.outputs.add("key", "Key", StringValue)
        self.mouse_x = self.outputs.add("mouse_x", "Mouse x", NumberValue)
        self.mouse_y = self.outputs.add("mouse_y", "Mouse y", NumberValue)
        self.mouse_wheel = self.outputs.add("mouse_wheel", "Mouse wheel", NumberValue)

        self._key_map = {}

        self._ctrl_keys = ["KEY_LEFTCTRL", "KEY_LEFTMETA", "KEY_LEFTSHIFT", "KEY_RIGHTCTRL", "KEY_RIGNTMETA", "KEY_RIGHTSHIFT"]

    def _get_key(self, key):
        if key in self._key_map.keys():
            return True
        return False

    def _get_ctrl_keys(self, value):
        res = []
        for key in self._ctrl_keys:
            if key != value and self._get_key(key):
                res.append(key)
        return res 

    def _is_ctrl_key(self, key):
        return self._ctrl_keys.index(key) >=0

    def controller_start(self):
        if self._keyboard_thread:
            self._keyboard_thread.start()
        
        if self._mouse_thread:
            self._mouse_thread.start()

        if self._gamepad_thread:
            self._gamepad_thread.start()

    def controller_exit(self):
        if self._keyboard_thread:
            self._keyboard_thread.terminate()
        if self._mouse_thread:
            self._mouse_thread.terminate()

        if self._gamepad_thread:
            self._gamepad_thread.terminate()
        #self._keyboard_thread.join()

    def on_input(self, event, thread):
        if event.ev_type == "Sync":
            return
        if event.ev_type == "Misc":
            return
        #print("event", event.code, event.state, event.timestamp, event.ev_type)
        if event.ev_type == "Relative":
            if event.code == "REL_WHEEL":
                self.mouse_wheel.value += event.state
        if event.ev_type == "Absolute":
            if event.code == "ABS_X":
                self.mouse_x.value = event.state
            if event.code == "ABS_Y":
                self.mouse_y.value = event.state
        
        if event.ev_type == "Key":
            
            if event.state:
                self._key_map[event.code] = True
                value = event.code +":" + str(event.state)
            else:
                if event.code in self._key_map.keys():
                    del self._key_map[event.code]
                value = event.code +":" + str(event.state)
            ctrl_keys = self._get_ctrl_keys(event.code)
            
            if len(ctrl_keys):
                value = str.join('+',ctrl_keys) +":" + value
            if value != self.key.value:
                self.key.value = value
