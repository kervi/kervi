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

def initProcessLogging(processName,resetLog=False):
    logger = logging.getLogger()
    logger.setLevel(logging.DEBUG)
    if resetLog:
        try:
            os.remove('kervi.log')
        except:
            pass
    fh = logging.FileHandler('kervi.log')
    fh.setLevel(logging.DEBUG)
    ch = logging.StreamHandler()
    ch.setLevel(logging.ERROR)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    fh.setFormatter(formatter)
    ch.setFormatter(formatter)
    logger.addHandler(fh)
    logger.addHandler(ch)
