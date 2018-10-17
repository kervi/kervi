import click

@click.group()
def users():
    """Manage kervi users"""
    pass

# @users.command()
# @click.argument('user_name', "user name")
# @click.password_option(help="user password")
# @click.option('--name',  help='name of user')
# @click.option('--groups',  help='groups the')
# def add(name, user_name, password, groups):
#     """Add a user to the application"""
#     print(name, user_name, groups, password)