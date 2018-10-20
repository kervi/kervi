
def init_plugin(config, manager):
    from kervi.storage.sqlite import SQLiteStoragePlugin
    return SQLiteStoragePlugin("SQLiteMemory", config, "memory", manager)