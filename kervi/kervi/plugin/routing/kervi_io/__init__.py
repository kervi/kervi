#Copyright 2017 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

def init_plugin(config, manager):
    from kervi.plugin.routing.kervi_io.mq_router import KerviIORouterPlugin
    return KerviIORouterPlugin(config, manager)

def plugin_type():
    return "routing"