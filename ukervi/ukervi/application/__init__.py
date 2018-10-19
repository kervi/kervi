#Copyright 2018 Tim Wentlau.
#Distributed under the MIT License. See LICENSE in root of project.

import os
import sys
from .default_config import get_default_config


class Application(object):
    def __init__(self, user_config = None):

        print("Starting kervi (u)application")
        #import inspect
        import getopt
        
        config_files = []

        opts, args = getopt.getopt(sys.argv[1:], "c", ["config_file=", "as-service", "install-service", "uninstall-service", "start-service", "stop-service", "restart-service", "status-service", "detect-devices"])
        for opt, arg in opts:
            if opt in ("-c", "--config_file"):
                if os.path.isfile(arg):
                    config_files += [arg]
                else:
                    print("Specified config file not found:", arg)
        #script_path = os.path.abspath(inspect.stack()[1][1])
        #script_name = os.path.basename(script_path)
        #script_name, script_ext = os.path.splitext(script_name)
        
        #config_files += [script_name +".config.json"]
        #config_files += ["kervi.config.json"]

        selected_config_file = None
        for config_file in config_files:
            if os.path.isfile(config_file):
                selected_config_file = config_file
                break
        
        from kervi.config import load
        self.config = load(
            config_file=selected_config_file,
            config_user=user_config,
            config_base=get_default_config()
        )

        import kervi.hal as hal
        hal_driver = hal._load(self.config.platform.driver)
        if hal_driver:
            print("platform driver:", hal_driver)

