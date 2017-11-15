#import time
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
        "modules":["app_module"]            
    })

    app.spine.register_event_handler("appReady", app_ready)
    app.spine.register_command_handler("signalModuleLoad", module_loaded)
    assert app.settings["info"]["id"] == "kervi_app"
    assert app.settings["modules"] == ["app_module"]
    assert app.settings["network"]["IPAddress"] ==  nethelper.get_ip_address()

    #app._xrun()

    process_info = app.spine.send_query("getProcessInfo")
    
    #app.stop()
 
    assert APP_READY
    assert MODULE_LOADED == "test_x"
    assert len(process_info) == 3
    assert process_info[0]["id"] == "application"
    assert process_info[1]["id"] == "app_module"
    assert process_info[2]["id"] == "IPC"
    
