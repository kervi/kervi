
from kervi.plugin.messaging.message_plugin import MessagePlugin
from kervi.config import Configuration
import kervi.spine as spine

class UserLogPlugin(MessagePlugin):
    def __init__(self, config, manager):
        MessagePlugin.__init__(self, "user_log", config, manager)
        #self._config = Configuration.messaging.channels.user_log
        self.spine = spine.Spine()

    @property
    def message_type(self):
        return "user_log"

    @property
    def address_based(self):
        return False

    def create_address(self, user):
        pass

    def send_message(self, addresses, subject, **kwargs):
        """"
        Adds a message to the user log.
        """
        persist = kwargs.get("persist", False)
        body = kwargs.get("body", None)
        data = kwargs.get("data", None)
        area = kwargs.get("area", None)
        source_id = kwargs.get("source_id", None)
        source_name = kwargs.get("source_name", None)
        log_type = kwargs.get("log_type", "information")
        level = kwargs.get("level", 3)
        timestamp = kwargs.get("timestamp", 0)
        self.spine.trigger_event("userLogMessage", None, {
            "source_id": source_id,
            "source_name": source_name,
            "area": area,
            "data": data,
            "level": level,
            "topic": subject,
            "body": body,
            "timestamp": timestamp,
            "type": log_type,
            "persist": persist
        })


def init_plugin(config, manager):
    return UserLogPlugin(config, manager)

def plugin_type():
    return "messaging"