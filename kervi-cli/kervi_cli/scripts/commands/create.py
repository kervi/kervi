"""" Cli module that creates application and modules """
import os
import uuid
from shutil import copyfile
import kervi.utility.nethelper as nethelper

import click
from kervi_cli.scripts.template_engine import SuperFormatter
import kervi_cli
#import pip

def _create_cam(template_path):
    #template_engine = SuperFormatter()

    with open('cams/__init__.py', 'a') as file:
        file.writelines('\nfrom . import cam1')

    # if os.path.exists("dashboards"):
    #     with open('dashboards/__init__.py', 'a') as file:
    #         file.writelines('CAM = Camboard("cam", "Cam 1", "cam1", is_default=True)\n')
    #         file.writelines('CAM.add_panel(DashboardPanel("section1"))\n')

    if not os.path.exists("cams/cam1.py"):
        copyfile(template_path+"cam_tmpl.py", "cams/cam1.py")

def create_full_layout(template_path):

    if not os.path.exists("web_assets"):
        os.makedirs("web_assets")

    #dashboards
    if not os.path.exists("dashboards"):
        os.makedirs("dashboards")
    if not os.path.exists("dashboards/__init__.py"):
        copyfile(template_path+"dashboard_init_tmpl.py", "dashboards/__init__.py")

    #cam
    if not os.path.exists("cams"):
        os.makedirs("cams")

    if not os.path.exists("cams/__init__.py"):
        copyfile(template_path+"cams_init_tmpl.py", "cams/__init__.py")

    #controllers
    if not os.path.exists("controllers"):
        os.makedirs("controllers")

    if not os.path.exists("controllers/__init__.py"):
        copyfile(template_path+"controllers_init_tmpl.py", "controllers/__init__.py")

    if not os.path.exists("controllers/my_controller.py"):
        copyfile(template_path+"controller_tmpl.py", "controllers/my_controller.py")

    if not os.path.exists("controllers/system_controller.py"):
        copyfile(template_path+"system_controller_tmpl.py", "controllers/system_controller.py")

    #sensors
    if not os.path.exists("sensors"):
        os.makedirs("sensors")

    if not os.path.exists("sensors/my_sensor.py"):
        copyfile(template_path+"sensor_tmpl.py", "sensors/my_sensor.py")
        copyfile(template_path+"system_sensors_tmpl.py", "sensors/system_sensors.py")

    if not os.path.exists("sensors/__init__.py"):
        copyfile(template_path+"sensors_init_tmpl.py", "sensors/__init__.py")



@click.group()
def create():
    """Create and scaffold application, module"""
    pass

@create.command()
@click.argument('app-id', nargs=1)#, "app_id, id of application, used in code to identify app")
@click.argument('app-name', nargs=1)#, 'Name of app, used as title in UI')
@click.option('--single-file-app', is_flag=True, default=False, help='Create the kervi application in one file')
@click.option('--add-camera', is_flag=True, default=False, help='Adds camera code (Raspberry pi only)')
def application(app_id, app_name, single_file_app, add_camera):
    """Scaffolds a kervi application."""
    #app_id = appid
    #app_name = appname
    #single_file_app = singlefileapp
    #add_camera = addcamera
    template_engine = SuperFormatter()

    cli_path = os.path.dirname(kervi_cli.__file__)
    template_path = os.path.join(cli_path, "templates/")

    if single_file_app:
        if not os.path.exists(app_id+".py"):
            copyfile(template_path + "app_simple_tmpl.py", app_id+".py")

        app_config_template = open(template_path+"app_config_tmpl.py", 'r').read()
        app_config_content = template_engine.format(
            app_config_template,
            id=app_id,
            name=app_name,
            log=app_id,
            base_port=nethelper.get_free_port([9500, 9510]),
            websocket_port=nethelper.get_free_port([9000]),
            ui_port=nethelper.get_free_port([80, 8080, 8081]),
            secret=uuid.uuid4(),
            modules = """[]"""
        )

        if not os.path.exists(app_id+".config.json"):
            app_file = open(app_id+".config.json", "w")
            app_file.write(app_config_content)
            app_file.close()
    
    else:
        app_template = open(template_path+"app_tmpl.py", 'r').read()
        app_config_template = open(template_path+"app_config_tmpl.py", 'r').read()

        app_file_content = template_engine.format(
            app_template,
            id=app_id,
            name=app_name,
            log=app_id,
            base_port=nethelper.get_free_port([9500, 9510]),
            websocket_port=nethelper.get_free_port([9000]),
            ui_port=nethelper.get_free_port([80, 8080, 8081]),
            secret=uuid.uuid4(),
            modules = """["sensors", "controllers", "cams"]"""
        )

        app_config_content = template_engine.format(
            app_config_template,
            id=app_id,
            name=app_name,
            log=app_id,
            base_port=nethelper.get_free_port([9500, 9510]),
            websocket_port=nethelper.get_free_port([9000]),
            ui_port=nethelper.get_free_port([80, 8080, 8081]),
            secret=uuid.uuid4(),
            modules = """["sensors", "controllers", "cams"]"""
        )

        if not os.path.exists(app_id+".py"):
            app_file = open(app_id+".py", "w")
            app_file.write(app_file_content)
            app_file.close()

        if not os.path.exists(app_id+".config.json"):
            app_file = open(app_id+".config.json", "w")
            app_file.write(app_config_content)
            app_file.close()

    if not single_file_app:
        create_full_layout(template_path)


    if add_camera and not single_file_app:
        _create_cam(template_path)

    click.echo('Your app is ready')
    click.echo("start it with 'python "+app_id+".py'")

# @create.command()
# def camera():
#     cli_path = os.path.dirname(kervi_cli.__file__)
#     template_path = os.path.join(cli_path, "templates/")
#     _create_cam(template_path)

@create.command()
@click.argument('module-id', nargs=1)#, "Id of module, used in code to identify the module")
@click.argument('module-name', nargs=1)#, 'Name of module, used as title in UI')
@click.argument('app_id', nargs=1)#, 'Id of the kervi app that this module should connect to')
@click.option('--single_file_module', is_flag=True, help='Create the kervi module in one file')
@click.option('--add_camera', default=False, help='adds a camera')
def module(module_name, module_id, app_id, single_file_module, add_camera):
    """Scafolds a kervi application module """
    template_engine = SuperFormatter()

    cli_path = os.path.dirname(kervi_cli.__file__)
    template_path = os.path.join(cli_path, "templates/")

    module_template = open(template_path+"module_simple_tmpl.py", 'r').read()
    module_config_template = open(template_path+"module_config_tmpl.py", 'r').read()


    module_file_content = template_engine.format(
        module_template,
        id=module_id,
        app_id=app_id,
        name=module_name,
        log=module_id,
        base_port=nethelper.get_free_port([9500, 9510]),
        secret=uuid.uuid4(),
        app_ip=nethelper.get_ip_address(),
        module_ip=nethelper.get_ip_address(),
        modules = """[]"""
    )

    module_config_content = template_engine.format(
        module_config_template,
        id=module_id,
        name=module_name,
        app_id=app_id,
        log=module_id,
        base_port=nethelper.get_free_port([9500, 9510]),
        secret=uuid.uuid4(),
        app_ip=nethelper.get_ip_address(),
        module_ip=nethelper.get_ip_address(),
        modules = """[]"""
    )

    if not os.path.exists(module_id+".py"):
        module_file = open(module_id+".py", "w")
        module_file.write(module_file_content)
        module_file.close()

    if not os.path.exists(module_id+".config.json"):
        module_file = open(module_id+".config.json", "w")
        module_file.write(module_config_content)
        module_file.close()

    #if not single_file_module:
    #    create_full_layout(template_path)


    #if add_camera:
    #    _create_cam(template_path)

    click.echo('Your module is ready')
    click.echo("start it with python3 " + module_id + ".py")

