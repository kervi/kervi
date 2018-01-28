


import smtplib
from email.headerregistry import Address
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from kervi.messaging.message_device import MessageDevice
from kervi.config import Configuration

class EmailHandler(MessageDevice):
    def __init__(self):
        super()
        self._config = Configuration.messaging.channels.email.smtp

    @property
    def message_type(self):
        return "email"

    def create_address(self, user):
        if "email" in user:
            name = None
            if "name" in user:
                name = user.name
            return Address(name, user.email)

        return None

    def send_message(self, addresses, topic, **kwargs):

        body = kwargs.get("body", None)
        body_html = kwargs.get("body_html", None)
        source_name = kwargs.get("source_name", None)
        message_type = kwargs.get("message_type", None)

        subject = ""
        if message_type:
            subject += "[" + message_type + "] "

        if source_name:
            subject += source_name + ": "

        subject += topic

        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = Address(self._config.sender, self._config.sender_address)
        msg['Bcc'] = addresses

        if body:
            part1 = MIMEText(body, 'plain')
            msg.attach(part1)
        if body_html:
            part2 = MIMEText(body_html, 'html')
            msg.attach(part2)

        with smtplib.SMTP(self._config.server, self._config.port) as smtp:
            if self._config.tls:
                smtp.starttls()

            smtp.login(self._config.user, self._config.password)
            smtp.send_message(msg)
