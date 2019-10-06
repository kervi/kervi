import uuid

def save_file(source, file_type, file_name, data_io, metadata=None):
    from kervi.spine import Spine
    spine = Spine()
    
    spine.send_command("files_save_file", source, file_type, file_name, metadata, data_io.getvalue())
    