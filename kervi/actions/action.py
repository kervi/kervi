
import inspect
import threading
from kervi.spine import Spine

ACTION_STOPPED = "stopped"
ACTION_RUNNING = "running"
ACTION_SUCCESS = "success"
ACTION_FAILED = "failed"
ACTION_PENDING = "pending"

class _LinkedAction(object):
    def __init__(self, action_id):
        self._action_id = action_id
        self.spine = Spine()
        self.spine.register_event_handler("actionDone", self._action_done, action_id)
        self.spine.register_event_handler("actionStarted", self._action_started, action_id)
        self._state = ACTION_STOPPED
        self._action_event = None
        self._action_lock = threading.Lock()
        self._process_locked = False

    def _action_done(self, state):
        if self._state == ACTION_RUNNING:
            self._state = state

        if self._action_event:
            self._action_event.set()

        if self._process_locked:
            self._process_locked = False
            self._action_lock.release()

    def _action_started(self):
        self._state = ACTION_RUNNING
        if self._action_lock.acquire(False):
            self._process_locked = True

    @property
    def state(self):
        """Returns the running state of the action."""
        return self._state

    def execute(self, *args, **kwargs):
        """Executes the action."""
        timeout = kwargs.get("timeout", -1)

        if self._action_lock.acquire(False):
            self._state = ACTION_PENDING
            self._action_event = threading.Event()
            self.spine.send_command("kervi_action_" + self._action_id, *args, **kwargs)
            if self._action_event.wait(timeout):
                self._state = ACTION_FAILED
            self._action_event = None
        else:
            if not self._action_lock.acquire(True, timeout):
                return False
            self._action_lock.release()
            return False

class _ActionThread(threading.Thread):
    def __init__(self, action, args, kwargs):
        super().__init__()
        self._action = action
        self.deamon = True
        self._args = args
        self._kwargs = kwargs

    def run(self):
        self._action._execute(*self._args, **self._kwargs)

class Action(object):
    def __init__(self, handler):
        self.action_id = handler.__name__
        self._handler = handler
        argspec = inspect.getargspec(self._handler)
        self._keywords = argspec.keywords != None
        self.spine = Spine()
        self.spine.register_command_handler("kervi_action_" + handler.__name__, self._handle_command)
        self._state = ACTION_STOPPED
        self._action_lock = threading.Lock()

    def _execute(self, *args, **kwargs):
        self._state = ACTION_RUNNING
        try:
            if self._keywords:
                self._handler(*args, **kwargs)
            else:
                self._handler(*args)
            self._state = ACTION_SUCCESS

        except Exception as e:
            print("action failed:", self.action_id, e)
            self._state = ACTION_FAILED
        self.spine.trigger_event("actionDone", self.action_id, self._state)


    def _handle_command(self, *args, **kwargs):
        if self._action_lock.acquire(False):
            self.spine.trigger_event("actionStarted", self.action_id)
            thread = _ActionThread(self, args, kwargs)
            thread.start()

    def execute(self, *args, **kwargs):
        timeout = kwargs.get("timeout", -1)
        if self._action_lock.acquire(False):
            try:
                self.spine.trigger_event("actionStarted", self.action_id)
                if timeout == -1:
                    self._execute(*args, **kwargs)
                else:
                    thread = _ActionThread(self, args, kwargs)
                    thread.start()
                    thread.join(timeout)
                    if thread.is_alive():
                        return False
                return True
            finally:
                self._action_lock.release()
        else:
            if not self._action_lock.acquire(True, timeout):
                return False
            self._action_lock.release()
            return False

    @property
    def state(self):
        return self._state
