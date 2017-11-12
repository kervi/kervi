from kervi.application import Application
import kervi.utility.nethelper as nethelper
import time


def module_loaded(module_name):
    print(module_name)


def test_application():
    app = Application()

    app.spine.register_event_handler("moduleLoaded", module_loaded)

    assert app.settings["info"]["id"] == "kervi_app"
    assert app.settings["modules"] == []
    assert app.settings["network"]["IPAddress"] ==  nethelper.get_ip_address()

    app._xrun()

    time.sleep(10)

    app.stop()

    time.sleep(10)

