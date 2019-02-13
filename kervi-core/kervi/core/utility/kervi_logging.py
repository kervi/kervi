#Copyright 2016 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

"""
Module that holds log functionality.
In general you dont need to include this in your kervi code as the spine class holds a reference
to a fully configured log.
"""

import logging
import logging.handlers
import os

VERBOSE = 15

logging.addLevelName(VERBOSE, "VERBOSE")

class BraceMessage(object):
    def __init__(self, fmt, *args):
        self.fmt = fmt
        self.args = args

    def __str__(self):
        try:
            if '{' in self.fmt:
                return self.fmt.format(*self.args)
            else:
                return self.fmt % self.args
        except:
            return self.fmt

class KerviLog(object):
    def __init__(self, name):
        
        self.logger = logging.getLogger(name)
        

    def info(self, message, *args):
        self.logger.info(BraceMessage(message, *args))

    def verbose(self, message, *args, **kwargs):
        if args:
            self.logger._log(VERBOSE, str(BraceMessage(message, *args)), None)
        else:
            self.logger._log(VERBOSE, message, *args)
    
    def warn(self, message, *args):
        self.logger.warn(BraceMessage(message, *args))

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

def init_process_logging(process_name, config, log_queue=None):
    logger = logging.getLogger(process_name)
    
    if config.level == "verbose":
        logger.setLevel(VERBOSE)
    elif config.level == "info":
        logger.setLevel(logging.INFO)
    elif config.level == "warning":
        logger.setLevel(logging.WARNING)
    elif config.level == "debug":
        logger.setLevel(logging.DEBUG)    
        

    if log_queue:
        queue_handler = logging.handlers.QueueHandler(log_queue)
        logger.addHandler(queue_handler)
    else:
        if config.resetLog:
            try:
                os.remove(config.file)
            except:
                pass

        file_handler = logging.FileHandler(config.file)
        file_handler.setLevel(logging.DEBUG)
        stream_handler = logging.StreamHandler()
        stream_handler.setLevel(logging.ERROR)
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        file_handler.setFormatter(formatter)
        stream_handler.setFormatter(formatter)
        logger.addHandler(file_handler)
        logger.addHandler(stream_handler)
