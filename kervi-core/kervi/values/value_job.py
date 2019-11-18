from kervi.core.utility.schedule import Job

class ValueJob(Job):
    """
    A periodic job as used by :class:`Scheduler`.
    :param interval: A quantity of a certain time unit
    :param scheduler: The :class:`Scheduler <Scheduler>` instance that
                      this job will register itself with once it has
                      been fully configured in :meth:`Job.do()`.
    Every job runs at a given fixed time interval that is defined by:
    * a :meth:`time unit <Job.second>`
    * a quantity of `time units` defined by `interval`
    A job is usually created and returned by :meth:`Scheduler.every`
    method, which also defines its `interval`.
    """
    def __init__(self, interval, scheduler, job_func):
        Job.__init__(self, interval, scheduler, job_func)
    
    def set(self, value):
        self.do(value) 

        