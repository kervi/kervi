import click
from .commands.create import create
from .commands.users import users
from .commands.io import io
from .commands.detect import detect

@click.group()
def cli():
    pass

cli.add_command(create)
cli.add_command(detect)
#cli.add_command(users)
#cli.add_command(io)
