import time
import pytest
from kervi.application import Application
import kervi.utility.nethelper as nethelper

APP_READY = False
MODULE_LOADED = None

def app_ready(module_name):
    global APP_READY
    APP_READY = True

def module_loaded(value):
    global MODULE_LOADED
    MODULE_LOADED = value

@pytest.mark.slow
def test_application():
    app = Application(
    {
        "modules":["app_module"],
        "network":{
            "ip": "127.0.0.1"
        }
    })

    app.spine.register_event_handler("appReady", app_ready)
    app.spine.register_command_handler("signalModuleLoad", module_loaded)
    assert app.config.application.id == "kervi"
    assert app.config.modules == ["app_module"]
    assert app.config.network.ip ==  "127.0.0.1"

    app._xrun()

    process_info = app.spine.send_query("getProcessInfo")
    

    time.sleep(5)

    app.stop(False)
    assert APP_READY
    assert MODULE_LOADED == "test_x"
    assert len(process_info) == 4
    
    processes = ["application", "plugin_kervi.plugin.ipc.websocket", "plugin_kervi.plugin.ui.web", "app_module"]
    
    for process in process_info:
        assert process["id"] in processes
    
    
