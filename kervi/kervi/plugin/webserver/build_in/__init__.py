#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

def init_plugin(config, manager):
    from kervi.plugin.webserver.build_in.web_server import KerviWebServerPlugin
    return KerviWebServerPlugin("KerviWebServer", config, manager)

def plugin_type():
    return "webserver"