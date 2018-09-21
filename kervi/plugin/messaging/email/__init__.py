


import smtplib
from email.headerregistry import Address
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from kervi.plugin.messaging.message_handler import MessageHandler
from kervi.config import Configuration
from kervi.core.utility.superformatter import SuperFormatter


class EmailHandler(MessageHandler):
    def __init__(self, config):
        MessageHandler.__init__(self, "email", config)

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

        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = self._configuration.smtp.sender_address
        msg['Bcc'] = "".join(recipients_addresses)

        if body:
            part1 = MIMEText(body, 'plain')
            #sf = SuperFormatter()
            #part1 = sf.format(part1, user_name)
            msg.attach(part1)
        if body_html:
            part2 = MIMEText(body_html, 'html')
            msg.attach(part2)

        with smtplib.SMTP(self._configuration.smtp.server, self._configuration.smtp.port) as smtp:
            if self._configuration.smtp.tls:
                smtp.starttls()

            if self._configuration.smtp.user and self._configuration.smtp.password:
                smtp.login(self._configuration.smtp.user, self._configuration.smtp.password)

            smtp.send_message(msg)
       
def init_plugin(config):
    return EmailHandler(config)