import os
import base64
from io import BytesIO
from kervi.plugin.kervi_plugin import KerviPlugin

class FilesPlugin(KerviPlugin):
    def __init__(self, name, configuration, manager):
        KerviPlugin.__init__(self, name, configuration, manager)
        self._root = self.plugin_config.root
        self.spine.register_query_handler("files_get_dir", self.get_dir)
        self.spine.register_query_handler("files_get_file", self.get_file)
        self.spine.register_command_handler("files_save_file", self.save_file)
        self.spine.register_query_handler("files_get_thumbnail", self.get_thumbnail)
    
    def get_default_config(self):
        return {
            "root": "media",
            "folders": {
                "images": "images",
                "video": "video"
            }
        }
    
    def get_dir(self, path):
        result = []
        with os.scandir(self._root + path) as it:
            for entry in it:
                stat = entry.stat()
                file_info = {
                    "name": entry.name,
                    "is_file": entry.is_file(),
                    "file_size": stat.st_size,
                    "m_time": stat.st_mtime
                }
                result.append(file_info)
               
        return result

    def get_file(self, file_path):
        with open(self._root + file_path, 'rb') as f:
            return f.read()

    def get_thumbnail(self, file_path):
        from PIL import Image
 
        im = Image.open( self._root + file_path)
        im.thumbnail((128, 128), Image.ANTIALIAS)
        buf = BytesIO()
        im.save(buf, format='png')
        data = buf.getvalue()
        return data
    
    def save_file(self, source, file_type, file_name, meta_data=None, b64_data=None):
        file_path = os.path.join(self._root, file_type, source, file_name)
        dir_path = os.path.dirname(file_path)
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)

        data = base64.b64decode(b64_data)
        with open(file_path, 'wb') as f:
            f.write(data)

        self.spine.trigger_event("FilesFileSaved", file_type, source, file_name)

def init_plugin(config, manager):
    return FilesPlugin("Files", config, manager)

def plugin_type():
    return "io"