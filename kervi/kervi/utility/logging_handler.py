import logging
import logging.config
import logging.handlers
import threading
from multiprocessing import Queue
_console_log = 15

class LogLevelFilter(logging.Filter):
    def __init__(self, param=None):
        self._level = param

    def filter(self, record):
        return record.levelno in self._level and record.levelno >= _console_log

class LogInfoLevelFilter(logging.Filter):
    def __init__(self, param=None):
        self._level = param

    def filter(self, record):
        if self._level == 25 and record.levelno == 25:
            return True

        if self._level == 25 and record.levelno == 10:
            return True
        
        if self._level == 10 and record.levelno ==10 :
            return True

        return False


def logger_thread(q):
    while True:
        record = q.get()
        if record is None:
            break
        logger = logging.getLogger(record.name)
        logger.handle(record)

class KerviLogHandler:
    def __init__(self, config):
        import platform
        
        log_level = config.log.level
            
        if log_level == "debug":
            log_level = logging.DEBUG
        
        if log_level == "verbose":
            log_level = 15

        if log_level == "info":
            log_level = logging.INFO
        
        if log_level == "warning":
            log_level = logging.WARNING

        if log_level == "error":
            log_level = logging.ERROR

        console_level = config.log.console_level
        
        if console_level == "debug":
            _console_log = logging.DEBUG
        
        if console_level == "verbose":
            _console_log = 15

        if console_level == "info":
            _console_log = logging.INFO
        
        if log_level == "warning":
            _console_log = logging.WARNING

        if log_level == "error":
            _console_log = logging.ERROR

        log_config = {
            'version': 1,
            'filters':{
                'info':{
                    '()': LogLevelFilter,
                    'param': [logging.INFO]
                },
                'verbose':{
                    '()': LogLevelFilter,
                    'param': [15]
                },
                'warning':{
                    '()': LogLevelFilter,
                    'param': [logging.WARNING]
                },
                'error':{
                    '()': LogLevelFilter,
                    'param': [logging.ERROR]
                }
            },
            'formatters': {
                'detailed': {
                    'class': 'logging.Formatter',
                    'format': '%(asctime)s %(name)-15s %(levelname)-8s %(processName)-10s %(message)s'
                },
                'console': {
                    'class': 'logging.Formatter',
                    'format': '\033[92m%(message)s \033[0m',
                },
                'console-verbose': {
                    'class': 'logging.Formatter',
                    'format': '\33[90m   %(message)s \33[0m',
                },
                'console-warning': {
                    'class': 'logging.Formatter',
                    'format': '\33[93m%(message)s \33[0m',
                },
                'console-error': {
                    'class': 'logging.Formatter',
                    'format': '\033[91m%(levelname)-8s %(processName)-10s %(message)s \033[0m',
                },
            },
            'handlers': {
                'console': {
                    'class': 'logging.StreamHandler',
                    'level': 'INFO',
                    'formatter': 'console',
                    'filters': ['info']
                },
                'console-verbose': {
                    'class': 'logging.StreamHandler',
                    'level': 15,
                    'formatter': 'console-verbose',
                    'filters': ['verbose']
                },
                'console-warning': {
                    'class': 'logging.StreamHandler',
                    'level': 'WARNING',
                    'formatter': 'console-warning',
                    'filters': ['warning']
                },
                'console-error': {
                    'class': 'logging.StreamHandler',
                    'level': 'ERROR',
                    'formatter': 'console-error',
                    'filters': ['error']
                },
                'file': {
                    'class': 'logging.handlers.RotatingFileHandler',
                    'filename': config.log.file,
                    'mode': 'w',
                    'backupCount': 3,
                    'maxBytes': config.log.max_file_size,
                    'formatter': 'detailed',
                },
            },
            'loggers':{
                'kervi':{
                    'handlers': ['console', 'file']
                }
            },
            'root': {
                'level': log_level,
                'handlers': ['console', 'console-verbose', 'console-warning', 'console-error', 'file']
            },
        }
        logging.config.dictConfig(log_config)
        self._log_queue = Queue()
        self._logging_thread = threading.Thread(target=logger_thread, args=(self._log_queue,))
        self._logging_thread.deamon = True
        if platform.system() == "Windows":
            self._logging_thread.start()
        #return KerviLog("application")

    def stop(self):
        self._log_queue.put_nowait(None)