### Run Python scripts as a service example (ryrobes.com)
### Usage : python aservice.py install (or / then start, stop, remove)

import win32service
import win32serviceutil
import win32api
import win32con
import win32event
import win32evtlogutil
import os, sys, string, time
import winerror

class aservice(win32serviceutil.ServiceFramework):
   
    _svc_name_ = "MyServiceShortName"
    _svc_display_name_ = "My Serivce Long Fancy Name!"
    _svc_description_ = ""
    _svc_script_ = ""
                
    def __init__(self, args):
        win32serviceutil.ServiceFramework.__init__(self, args)
        self.hWaitStop = win32event.CreateEvent(None, 0, 0, None)
        self.stop_requested = False        

    @classmethod
    def set_info(cls, app_name, app_id, script_path):
        cls._svc_name_ = app_id
        cls._svc_display_name_ = "kervi script:" + app_name
        cls._svc_description_ = app_name
        cls._svc_script_ = script_path

    def SvcStop(self):
        self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
        win32event.SetEvent(self.hWaitStop)
        self.stop_requested = True                
 
    def SvcDoRun(self):
        import servicemanager      
        servicemanager.LogMsg(servicemanager.EVENTLOG_INFORMATION_TYPE,servicemanager.PYS_SERVICE_STARTED,(self._svc_name_, '')) 
      
        self.timeout = 120000     #120 seconds / 2 minutes

        while 1:
            if self.stop_requested:
                # Stop signal encountered
                servicemanager.LogInfoMsg("SomeShortNameVersion - STOPPED!")  #For Event Log
                break
            else:
                try:
                    intepreter = sys.executable
                    file_path = intepreter + " " + aservice._svc_script_
                    exec(file_path)
                except:
                    
                    pass

def ctrlHandler(ctrlType):
    return True


def HandleCommandLine(cls, command, customInstallOptions = "", customOptionHandler = None):
    """Utility function allowing services to process the command line.
    Allows standard commands such as 'start', 'stop', 'debug', 'install' etc.
    Install supports 'standard' command line options prefixed with '--', such as
    --username, --password, etc.  In addition,
    the function allows custom command line options to be handled by the calling function.
    """
    err = 0

    
    serviceName = cls._svc_name_
    serviceDisplayName = cls._svc_display_name_
    serviceClassString = "aservice"

    # Pull apart the command line
    import getopt
    opts = []
    args = []
    
    userName = None
    password = None
    perfMonIni = perfMonDll = None
    startup = None
    delayedstart = None
    interactive = None
    waitSecs = 0
    for opt, val in opts:
        if opt=='--username':
            userName = val
        elif opt=='--password':
            password = val
        elif opt=='--perfmonini':
            perfMonIni = val
        elif opt=='--perfmondll':
            perfMonDll = val
        elif opt=='--interactive':
            interactive = 1
        elif opt=='--startup':
            map = {"manual": win32service.SERVICE_DEMAND_START,
                   "auto" : win32service.SERVICE_AUTO_START,
                   "delayed": win32service.SERVICE_AUTO_START, ## ChangeServiceConfig2 called later
                   "disabled": win32service.SERVICE_DISABLED}
            try:
                startup = map[val.lower()]
            except KeyError:
                print("'%s' is not a valid startup option" % val)
            if val.lower() == "delayed":
                delayedstart = True
            elif val.lower() == "auto":
                delayedstart = False
            ## else no change
        elif opt=='--wait':
            try:
                waitSecs = int(val)
            except ValueError:
                print("--wait must specify an integer number of seconds.")
                

    arg=command
    knownArg = 0
    # First we process all arguments which pass additional args on
    if arg=="start":
        knownArg = 1
        print("Starting service %s" % (serviceName))
        try:
            win32serviceutil.StartService(serviceName, args[1:])
            if waitSecs:
                WaitForServiceStatus(serviceName, win32service.SERVICE_RUNNING, waitSecs)
        except Exception as ex:
            print("Error starting service:", ex)
            

    elif arg=="restart":
        knownArg = 1
        print("Restarting service %s" % (serviceName))
        RestartService(serviceName, args[1:])
        if waitSecs:
            WaitForServiceStatus(serviceName, win32service.SERVICE_RUNNING, waitSecs)

    elif arg=="debug":
        knownArg = 1
        if not hasattr(sys, "frozen"):
            # non-frozen services use pythonservice.exe which handles a
            # -debug option
            svcArgs = " ".join(args[1:])
            try:
                exeName = LocateSpecificServiceExe(serviceName)
            except Exception as ex:
                    print("The service does not appear to be installed.")
                    print("Please install the service before debugging it.")
                    sys.exit(1)
            try:
                os.system("%s -debug %s %s" % (exeName, serviceName, svcArgs))
            # ^C is used to kill the debug service.  Sometimes Python also gets
            # interrupted - ignore it...
            except KeyboardInterrupt:
                pass
        else:
            # py2exe services don't use pythonservice - so we simulate
            # debugging here.
            DebugService(cls, args)

    #if not knownArg and len(args)!=1:
    #    usage() # the rest of the cmds don't take addn args

    if arg=="install":
        knownArg = 1
        try:
            serviceDeps = cls._svc_deps_
        except AttributeError:
            serviceDeps = None
        try:
            exeName = cls._exe_name_
        except AttributeError:
            exeName = None # Default to PythonService.exe
        try:
            exeArgs = cls._exe_args_
        except AttributeError:
            exeArgs = None
        try:
            description = cls._svc_description_
        except AttributeError:
            description = None
        print("Installing service %s" % (serviceName,))
        # Note that we install the service before calling the custom option
        # handler, so if the custom handler fails, we have an installed service (from NT's POV)
        # but is unlikely to work, as the Python code controlling it failed.  Therefore
        # we remove the service if the first bit works, but the second doesnt!
        try:
            win32serviceutil.InstallService(serviceClassString, serviceName, serviceDisplayName, serviceDeps = serviceDeps, startType=startup, bRunInteractive=interactive, userName=userName,password=password, exeName=exeName, perfMonIni=perfMonIni,perfMonDll=perfMonDll,exeArgs=exeArgs,
                           description=description, delayedstart=delayedstart)
            if customOptionHandler:
                customOptionHandler(*(opts,))
            print("Service installed")
        except win32service.error as exc:
            if exc.winerror==winerror.ERROR_SERVICE_EXISTS:
                arg = "update" # Fall through to the "update" param!
            else:
                print("Error installing service: %s (%d)" % (exc.strerror, exc.winerror))
                err = exc.winerror
        except ValueError as ex: # Can be raised by custom option handler.
            print("Error installing service: ", ex.message)
            err = -1
            # xxx - maybe I should remove after _any_ failed install - however,
            # xxx - it may be useful to help debug to leave the service as it failed.
            # xxx - We really _must_ remove as per the comments above...
            # As we failed here, remove the service, so the next installation
            # attempt works.
            try:
                RemoveService(serviceName)
            except win32api.error:
                print("Warning - could not remove the partially installed service.")

    if arg == "update":
        knownArg = 1
        try:
            serviceDeps = cls._svc_deps_
        except AttributeError:
            serviceDeps = None
        try:
            exeName = cls._exe_name_
        except AttributeError:
            exeName = None # Default to PythonService.exe
        try:
            exeArgs = cls._exe_args_
        except AttributeError:
            exeArgs = None
        try:
            description=cls._svc_description_
        except AttributeError:
            description=None
        print("Changing service configuration")
        try:
            win32serviceutil.ChangeServiceConfig(serviceClassString, serviceName, serviceDeps = serviceDeps, startType=startup, bRunInteractive=interactive, userName=userName,password=password, exeName=exeName, displayName = serviceDisplayName, perfMonIni=perfMonIni,perfMonDll=perfMonDll,exeArgs=exeArgs,
                                description=description, delayedstart=delayedstart)
            if customOptionHandler:
                customOptionHandler(*(opts,))
            print("Service updated")
        except win32service.error as exc:
            print("Error changing service configuration: %s (%d)" % (exc.strerror,exc.winerror))
            err = exc.winerror

    elif arg=="remove":
        knownArg = 1
        print("Removing service %s" % (serviceName))
        try:
            RemoveService(serviceName)
            print("Service removed")
        except win32service.error as exc:
            print("Error removing service: %s (%d)" % (exc.strerror,exc.winerror))
            err = exc.winerror
    elif arg=="stop":
        knownArg = 1
        print("Stopping service %s" % (serviceName))
        try:
            if waitSecs:
                StopServiceWithDeps(serviceName, waitSecs = waitSecs)
            else:
                StopService(serviceName)
        except win32service.error as exc:
            print("Error stopping service: %s (%d)" % (exc.strerror,exc.winerror))
            err = exc.winerror
    if not knownArg:
        err = -1
        print("Unknown command - '%s'" % arg)
        #usage()
    return err



def handle_command(commands, app_name, app_id, script_path): 
    win32api.SetConsoleCtrlHandler(ctrlHandler, True)   
    service_command = None
    if commands:

        aservice.set_info(app_name, app_id, script_path)
        print("x", commands)
        
        service_commands = commands
        service_commands += ["dummy"]
        HandleCommandLine(aservice, commands[0])

