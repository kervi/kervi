import os
import base64
from io import BytesIO
from kervi.plugin.kervi_plugin import KerviPlugin
from kervi.streams.stream_observer import StreamObserver

#stream_id, stream_event, observer_id, handler=None, name="stream", observer_type="stream_observer"
class _FileChunkObserver(StreamObserver):
    def __init__(self, plugin, file_id, file):
        StreamObserver.__init__(self, file_id, None,file_id + ".observer")
        self._plugin = plugin
        self._file_id = file_id
        self._file = file

    def on_event(self, stream_event, data=None):
        #print("x", stream_event)
        if stream_event == "FILE_CHUNK":
            self._file.write(data)
        if stream_event == "FILE_CLOSE":
            self._plugin.close_file(self._file_id)

class FilesPlugin(KerviPlugin):
    def __init__(self, name, configuration, manager):
        KerviPlugin.__init__(self, name, configuration, manager)
        self._root = self.plugin_config.root
        self.spine.register_query_handler("files_get_dir", self.get_dir)
        self.spine.register_query_handler("files_get_file", self.get_file)
        self.spine.register_command_handler("files_save_file", self.save_file)
        self.spine.register_query_handler("files_get_thumbnail", self.get_thumbnail)
        self.spine.register_command_handler("files_open_file", self.open_file)
        #self.spine.register_command_handler("files_write_file", self.write_file)
        #self.spine.register_command_handler("files_close_file", self.close_file)

        self._open_files = {}
    
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
        im.save(buf, format='jpg')
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

    def open_file(self, file_id, source, file_type, file_name, meta_data=None, b64_data=None):
        file_path = os.path.join(self._root, file_type, source, file_name)
        dir_path = os.path.dirname(file_path)
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)

        f = open(file_path, 'wb')
        if b64_data:
            f.write(base64.b64decode(b64_data))
        
        self._open_files[file_id] = _FileChunkObserver(self, file_id, f)

    def close_file(self, file_id):
        self._open_files[file_id]._file.close()
        del self._open_files[file_id]

def init_plugin(config, manager):
    return FilesPlugin("Files", config, manager)

def plugin_type():
    return "io"
