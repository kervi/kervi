import click

@click.group()
def io():
    """Manage kervi.io applications"""
    pass

# @io.command()
# @click.argument('user_name', "Kervi.io user name")
# @click.password_option(help="Your kervi.io user password. It is not stored on this device.", confirmation_prompt=False)
# def register(user_name, password):
#     """Register your kervi application at kervi.io"""
#     print(user_name, password)
