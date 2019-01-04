def init_plugin(config, manager):
    from kervi.storage.sqlite import SQLiteStoragePlugin
    return SQLiteStoragePlugin("SQLite", config, "persisted", manager)

def plugin_type():
    return "storage"