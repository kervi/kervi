class MockupSpineLog(object):
    def debug(self, message, *args):
        pass

class MockupSpine(object):
    def __init__(self):
        self.queryHandlers = {}
        self.log = MockupSpineLog()

    def register_query_handler(self, query, func, **kwargs):
        self.queryHandlers[query] = func
