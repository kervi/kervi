


import smtplib
from email.headerregistry import Address
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from kervi.plugin.messaging.message_plugin import MessagePlugin
from kervi.core.utility.superformatter import SuperFormatter
import datetime
from email.utils import formatdate

class EmailPlugin(MessagePlugin):
    def __init__(self, config, manager):
        MessagePlugin.__init__(self, "email", config, manager)

    @property
    def message_type(self):
        return "email"

    @property
    def address_based(self):
        return True
    
    def send_message(self, recipients, topic, **kwargs):
        body = kwargs.get("body", None)
        body_html = kwargs.get("body_html", None)
        source_name = kwargs.get("source_name", None)
        message_type = kwargs.get("message_type", None)

        recipients_addresses = []
        for recipient in recipients:
            email = recipient.addresses.get("email", None)
            if email:
                recipients_addresses.append(email)

        subject = ""
        if message_type:
            subject += "[" + message_type + "] "

        if source_name:
            subject += source_name + ": "

        subject += topic


        for recipient in recipients:
            email = recipient.addresses.get("email", None)
            msg = MIMEMultipart('alternative')
            msg['Subject'] = subject
            msg['Date'] = formatdate(localtime=True)
            msg['From'] = self.plugin_config.smtp.sender_name + "<" + self.plugin_config.smtp.sender_address + ">"
            msg['To'] = recipient.name + "<" + email + ">"

            if body:
                sf = SuperFormatter()
                body_text = sf.format(body, user_name=recipient.name)
                part1 = MIMEText(body_text, 'plain')
                msg.attach(part1)
            if body_html:
                part2 = MIMEText(body_html, 'html')
                msg.attach(part2)

            
            with smtplib.SMTP(self.plugin_config.smtp.server, self.plugin_config.smtp.port) as smtp:
                if self.plugin_config.smtp.tls:
                    smtp.starttls()

                if self.plugin_config.smtp.user and self.plugin_config.smtp.password:
                    smtp.login(self.plugin_config.smtp.user, self.plugin_config.smtp.password)

                smtp.send_message(msg)
    def get_default_config(self):
        return {
            "smtp": {
                "sender_name": "Kervi",
                "sender_address": "kervi@example.com",
                "server": "localhost",
                "port": "25",
                "user": "",
                "password": "",
                "tls": False
            }
        }      

def init_plugin(config, manager):
    return EmailPlugin(config, manager)

def plugin_type():
    return "messaging"