def init_plugin(config, manager):
    from kervi.plugin.routing.kervi_io.mq_router import KerviIORouterPlugin
    print("init kervi_io")
    return KerviIORouterPlugin(config, manager)

def plugin_type():
    return "routing"