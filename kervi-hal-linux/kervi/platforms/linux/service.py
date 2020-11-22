import os
import sys
import subprocess
            
from kervi.core.utility.superformatter import SuperFormatter

_service_file_template = """
[Unit]
Description=Kervi python application: {app_name}
After=multi-user.target

[Service]
Type=idle
WorkingDirectory={script_path}
ExecStart={python_path} {script_file} --as-service

[Install]
WantedBy=multi-user.target
"""

_install_path = "/etc/systemd/system/"


def service_manager(commands, app_name, app_id, script_file):
    
    service_name = "kervi_service_" + app_id
    service_file_path = _install_path + "kervi_service_" + app_id + ".service"

    parts = os.path.split(script_file)
    script_path = parts[0]

    for command in commands:
        if command=="start":
            print("Starting service %s" % (service_name))
            try:
                print("start service:", service_name)
                subprocess.check_call(["systemctl", "start", service_name], stderr=sys.stderr, stdout=sys.stdout)
            except Exception as ex:
                print("Error starting service:", ex)

        elif command=="stop":
            print("Stopping service %s" % (service_name))
            subprocess.check_call(["systemctl", "stop", service_name])
        
        elif command=="restart":
            print("Restarting service %s" % (service_name))
            subprocess.check_call(["systemctl", "restart", service_name])
        
        elif command == "status":
            print("get status for service", service_name)
            subprocess.check_call(["systemctl", "status", service_name], stderr=sys.stderr, stdout=sys.stdout)

        elif command=="install":
            print("Installing kervi application as service %s" % (service_name))
            if os.path.isfile(service_file_path):
                print("service installed, please uninstall first")
                return
            sf = SuperFormatter()
            service_file_text = sf.format(
                _service_file_template,
                python_path = sys.executable,
                script_file= script_file,
				script_path= script_path,
                app_name=app_name
            )

            with open(service_file_path, "w") as text_file:
                text_file.write(service_file_text)
            subprocess.run(["systemctl", "daemon-reload"], stderr=sys.stderr)
            subprocess.run(["systemctl", "enable", service_name], stderr=sys.stderr)

        elif command=="uninstall":
            print("uninstall service %s" % (service_name))
            subprocess.run(["systemctl", "stop", service_name], stderr=sys.stderr)
            subprocess.run(["systemctl", "disable", service_name], stderr=sys.stderr)
            os.remove(service_file_path)
            subprocess.run(["systemctl", "daemon-reload"], stderr=sys.stderr)

            
            
        else:
            print("Unknown command - '%s'" % command)
        
