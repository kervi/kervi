import os

def init_plugin(config, manager):
    from kervi.plugin.webserver.build_in.web_server import KerviWebServerPlugin
    import kervi.plugin.ui.web
    kervipath = os.path.dirname(kervi.plugin.ui.web.__file__)
    doc_path = os.path.join(kervipath, "http_docs")
    return KerviWebServerPlugin("KerviWebServer", config, manager, doc_path)

def plugin_type():
    return "webserver"