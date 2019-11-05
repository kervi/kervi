import uuid

def save_file(source, file_type, file_name, data_io, metadata=None):
    from kervi.spine import Spine
    spine = Spine()
    
    spine.send_command("files_save_file", source, file_type, file_name, metadata, data_io)
    
def open_file(source, file_type, file_name, metadata=None):
    from kervi.spine import Spine
    spine = Spine()
    file_id = str(uuid.uuid4()) 
    spine.send_command("files_open_file", file_id, source, file_type, file_name, metadata)
    return file_id

def write_file(source, file_id, data_io, metadata=None):
    from kervi.spine import Spine
    spine = Spine()
    
    spine.stream_data(file_id,"FILE_CHUNK", data_io)

def close_file(file_id):
    from kervi.spine import Spine
    spine = Spine()
    
    spine.stream_data(file_id,"FILE_CLOSE", b"")

    
