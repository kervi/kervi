# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

"""
Module that holds log functionality.
In general you dont need to include this in your kervi code as the spine class holds a refference
to a fully configured log.
"""

import logging
import os

class BraceMessage(object):
    def __init__(self, fmt, *args):
        self.fmt = fmt
        self.args = args

    def __str__(self):
        return self.fmt.format(*self.args)

class KerviLog(object):
    def __init__(self, name):
        self.logger = logging.getLogger(name)

    def info(self, message, *args):
        self.logger.debug(BraceMessage(message, *args))

    def debug(self, message, *args):
        if args:
            self.logger.debug(BraceMessage(message, *args))
        else:
            self.logger.debug(message)

    def error(self, message, *args):
        self.logger.error(BraceMessage(message, *args))

    def exception(self, message, *args):
        self.logger.exception(BraceMessage(message, *args))

    def fatal(self, message, *args):
        self.logger.fatal(BraceMessage(message, *args))

def init_process_logging(process_name, settings):
    logger = logging.getLogger(process_name)
    if settings["level"] == "warning":
        logger.setLevel(logging.WARNING)
    elif settings["level"] == "debug":
        logger.setLevel(logging.DEBUG)

    if settings["resetLog"]:
        try:
            os.remove(settings["file"])
        except:
            pass
    file_handler = logging.FileHandler(settings["file"])
    file_handler.setLevel(logging.DEBUG)
    stream_handler = logging.StreamHandler()
    stream_handler.setLevel(logging.ERROR)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(formatter)
    stream_handler.setFormatter(formatter)
    logger.addHandler(file_handler)
    logger.addHandler(stream_handler)
