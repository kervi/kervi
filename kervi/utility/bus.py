# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" CQRS handles in process communication """
#import sys
#import traceback
#import time
import threading
import inspect
from kervi.utility.named_lists import NamedLists
from kervi.utility.thread import KerviThread

try:
    import Queue
except ImportError:
    import queue as Queue
from  kervi.kervi_logging import KerviLog

class _QueryThread(threading.Thread):
    def __init__(self, handler, query, args, spine, **kwargs):
        threading.Thread.__init__(self)
        injected = kwargs.get("injected", "")
        scope = kwargs.get("scope", "global")
        
        self.daemon = True
        self.handler = handler
        self.query = query
        self.args = args
        self.result = []
        self.injected = injected
        self.scope = scope

        
        import traceback
        #spine.log.debug("qtx:{0}, handler:{1}", self.query, self.handler)
        #for line in traceback.format_stack():
        #    spine.log.debug(line.strip())
        
    def run(self):
        self.result = self.handler(self.query, self.args, injected=self.injected, scope=self.scope)

class _CQRSQueue(KerviThread):
    def __init__(self, name):
        KerviThread.__init__(self)
        self.queues = [Queue.Queue(), Queue.Queue(), Queue.Queue()]
        self.name = name

    def get_info(self):
        queueSize = []
        for queue in self.queues:
            queueSize += [len(queue)]

        info = {"queueSize":queueSize}
        return info

    def set_queue_handler(self, handler):
        self.queue_handler = handler
        super(KerviThread, self).start()

    def add(self, item, priorty=0):
        self.queues[0].put_nowait(item)

    def _step(self):
        item = self.queues[0].get()
        self.queue_handler(item)

class _CQRSBus(object):
    applicationId = ""
    cmd_handlers = NamedLists()
    event_handlers = NamedLists()
    query_handlers = NamedLists()

    cmd_queue = _CQRSQueue("cmd")
    query_queue = _CQRSQueue("query")
    event_queue = None #CQRSQueue("event")

    linked_spines = []
    log = None


    def __init__(self):
        return

    def stop(self):
        self.cmd_queue.stop()
        self.query_queue.stop()
        self.event_queue.stop()

    def reset(self):
        self.cmd_handlers = NamedLists()
        self.event_handlers = NamedLists()
        self.query_handlers = NamedLists()
        self.cmd_queue.stop()
        self.query_queue.stop()
        #self.eventQueue.stop()

        self.cmd_queue = _CQRSQueue("cmd")
        self.query_queue = _CQRSQueue("query")
        self.event_queue = _CQRSQueue("event")

        self.linked_spines = []

    def set_log(self, logName):
        self.log = KerviLog(logName)

    def add_linked_spine(self, linkedspine):
        self.linked_spines += [linkedspine]

    def get_queue_info(self):
        info = {
            "cmd":self.cmd_queue.get_info(),
            "queryQueue":self.query_queue.get_info(),
            "event":self.event_queue.get_info()
        }
        return info

    def start_queues(self):
        self.cmd_queue.set_queue_handler(self.command_queue_handler)
        self.event_queue.set_queue_handler(self.event_queue_handler)

    def register_command_handler(self, name, func, **kwargs):
        injected = kwargs.get("injected", "")
        self.log.debug("register command handler, command:{0} injected:{1}", name, injected)
        self.cmd_handlers.add(name, func)
        for linked_spine in self.linked_spines:
            linked_spine.add_linked_command_handler(name, injected=injected)

    def register_event_handler(self, name, func, id=None, **kwargs):
        injected = kwargs.get("injected", "")
        self.log.debug("register event handler event:{0} id:{1} injected:{2}", name, id, injected)
        if id:
            self.event_handlers.add(name+"/"+id, func)
        else:
            self.event_handlers.add(name, func)

        for linkedspine in self.linked_spines:
            linkedspine.add_linked_event_handler(name, id, injected=injected)

        return func

    def register_query_handler(self, name, func, **kwargs):
        injected = kwargs.get("injected", "")
        self.log.debug("register query handler query:{0} injected:{1}", name, injected)
        self.query_handlers.add(name, func)
        for linked_spine in self.linked_spines:
            linked_spine.add_linked_query_handler(name, injected=injected)

    def send_command(self, command, *args, **kwargs):
        injected = kwargs.get("injected", "")
        scope = kwargs.get("scope", "global")
        self.log.debug("sendcommand:{0} injected:{1} scope:{2}", command, injected, scope)
        self.cmd_queue.add(
            {"command":command, "args":args, "injected":injected, "scope":scope}, kwargs.get("priority", 2)
        )

    def command_queue_handler(self, queue_item):
        func_list = self.cmd_handlers.get_list_data(queue_item['command'])
        if func_list:
            for func_handler in func_list:
                try:
                    argspec = inspect.getargspec(func_handler)
                    if not argspec.keywords:
                        func_handler(*queue_item['args'])
                    else:
                        func_handler(*queue_item['args'], injected=queue_item["injected"], scope=queue_item["scope"])
                except:
                    self.log.exception("commandQueueHandler error:"+queue_item['command'])

    def send_query(self, query, *args, **kwargs):
        injected = kwargs.get("injected", "")
        scope = kwargs.get("scope", "global")
        self.log.debug("sendQuery:{0} injected:{1} scope:{2}", query, injected, scope)
        if query == "getQueueInfo":
            return self.get_queue_info()
        query_thread = _QueryThread(self.query_handler, query, args, self, injected=injected, scope=scope)
        self.log.debug("sendQuery thread start:{0}", query_thread)

        query_thread.start()
        query_thread.join(3)
        if not query_thread.isAlive():
            self.log.debug("sendQuery thread done:{0}", query_thread)
            return query_thread.result
        else:
            self.log.debug("sendQuery thread timeout, query:{0}", query)
            return []

    def query_handler(self, query, args, **kwargs):
        injected = kwargs.get("injected", "")
        scope = kwargs.get("scope", "global")

        #self.log.debug("query handler called:{0} injected:{1}", query, injected)
        func_list = self.query_handlers.get_list_data(query)
        self.log.debug("query handler called:{0} injected:{1}, func:{2}", query, injected, func_list)
        result = []
        try:
            if func_list:
                for func in func_list:
                    argspec = inspect.getargspec(func)
                    if not argspec.keywords:
                        sub_result = func(*args)
                        if sub_result:
                            result += [sub_result]
                    else:
                        sub_result = func(*args, injected=injected, scope=scope)
                        if sub_result:
                            result += [sub_result]
            if len(result) == 1:
                return result[0]
        except:
            self.log.exception("Exception in query")

        return result

    def trigger_event(self, event, id, *args, **kwargs):
        injected = kwargs.get("injected", "")
        scope = kwargs.get("scope", "global")
        self.log.debug("triggerEvent:{0}, id:{1} injected:{2}, scope:{3}", event, id, injected, scope)
        self.event_queue.add(
            {'event':event, 'id':id, 'args':args, "injected":injected, "scope":scope},
            kwargs.get("priority", 2)
        )

    def event_queue_handler(self, queue_item):
        func_list = self.event_handlers.get_list_data(queue_item['event'])
        try:
            if func_list:
                for func in func_list:
                    argspec = inspect.getargspec(func)
                    if not argspec.keywords:
                        func(None, *queue_item['args'])
                    else:
                        func(None, *queue_item['args'], injected=queue_item["injected"], scope=queue_item["scope"])
            if queue_item["id"]:
                func_list = self.event_handlers.get_list_data(queue_item['event']+"/"+queue_item['id'])
                if func_list:
                    for func in func_list:
                        argspec = inspect.getargspec(func)
                        if not argspec.keywords:
                            func(queue_item["id"], *queue_item['args'])
                        else:
                            func(queue_item["id"], *queue_item['args'], injected=queue_item["injected"], scope=queue_item["scope"])
        except:
            self.log.exception("Exception in query")
    
    def get_commands(self):
        return self.cmd_handlers.get_list_names()

    def get_queries(self):
        return self.query_handlers.get_list_names()

    def get_events(self):
        return self.event_handlers.get_list_names()

    def get_query_handlers(self, query):
        return self.query_handlers.get_list_data(query)

    def get_command_handlers(self, command):
        return self.cmd_handlers.get_list_data(command)

    def get_event_handlers(self, event, id=None):
        func_list = self.event_handlers.get_list_data(event)
        if id:
            func_list += self.event_handlers.get_list_data(event+"/"+id)
        return func_list

