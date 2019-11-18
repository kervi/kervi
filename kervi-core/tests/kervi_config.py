
def get_default_config():
    return  {
        "application" : {
            "name": "Kervi",
            "id": "kervi"
        },
        "platform":{
            "driver": "auto"
        },
        "log" : {
            "levels":["fatal", "error", "warning", "information", "debug"],
            "level":"verbose",
            "console_level":"verbose",
            "file": "kervi.log",
            "max_file_size": 1000000,
            "resetLog": False
        },
        "modules":[],
        "network" : {
            "ip": '127.0.0.1',
            "http_port": 8080,
            "ws_port": 9000,
            "ipc_root_port": 9500,
            "ipc_root_address": '127.0.0.1'
        },
        
        "unit_system": "metric",
        "display":{
            "unit_systems":{
                "systems":{
                    "metric":{
                        "length": "m",
                        "temperature": "C",
                        "speed": "m/s",
                        "volumne": "l",
                        "weight": "g",
                        "datetime" :{
                            "time": "HH:mm",
                            "date": "DD-MM-YYYY",
                            "datetime": "HH:mm DD-MM-YYYY",
                            "chart":{
                                "millisecond": "h:mm:ss.SSS",
                                "second": "h:mm:ss",
                                "minute": "h:mm",
                                "hour":   "h",
                                "day":    "MMM D",
                                "week":   "ll",
                                "month":  "MMM YYYY",
                                "quarter":"[Q]Q - YYYY",
                                "year":   "YYYY",
                            }
                        }
                    },
                    "uk-imperial":{
                        "length": "ft",
                        "temperature": "F",
                        "speed": "m/h",
                        "volumne": "gl",
                        "weight": "g",
                        "datetime" :{
                            "time": "HH:mm",
                            "date": "DD-MM-YYYY",
                            "datetime": "HH:mm DD-MM-YYYY",
                            "chart":{
                                "millisecond": "h:mm:ss.SSS",
                                "second": "h:mm:ss",
                                "minute": "h:mm",
                                "hour":   "h",
                                "day":    "MMM D",
                                "week":   "ll",
                                "month":  "MMM YYYY",
                                "quarter":"[Q]Q - YYYY",
                                "year":   "YYYY",
                            }
                        }
                    },
                    "us-imperial":{
                        "length": "ft",
                        "temperature": "F",
                        "speed": "m/h",
                        "volumne": "gl",
                        "weight": "g",
                        "datetime" :{
                            "time": "HH:mm",
                            "date": "DD-MM-YYYY",
                            "datetime": "HH:mm DD-MM-YYYY",
                            "chart":{
                                "millisecond": "h:mm:ss.SSS",
                                "second": "h:mm:ss",
                                "minute": "h:mm",
                                "hour":   "h",
                                "day":    "MMM D",
                                "week":   "ll",
                                "month":  "MMM YYYY",
                                "quarter":"[Q]Q - YYYY",
                                "year":   "YYYY",
                            }
                        }
                    },
                }
            }
        },
        "texts":{
            "messages":{
                "value_plain":'''
{source_name} {value} {unit}
{message_type}
{message}
             ''',
                "value_html":'''
                <p>
                <b><span style="font-size:80%;color:{message_color}">⬤</span>&nbsp;{source_name}: {value} {unit}</b><br/>
                <span>{message}</span>
                <p>
                ''',
                "action_subject": "{action_name} {state}",
                "action_plain":'''
Action {action_name} {state}
{message}
                ''',
                "action_html":'''
                <span style='font-size:80%;color:{message_color}'>⬤</span>&nbsp;<b>Action {action_name} {state}</b><br/>
                {message}
                '''
            },
            "ui":{
                "kervi": "Kervi",
                "yes": "yes",
                "no": "no",
                "warning": "warning",
                "error": "error",
                "user_name": "User name",
                "password": "password",
                "login_fail": "Login failed invalid user name or password",
                "login": "Login",
                "log_on": "Log on",
                "dashboard": "Dashboard",
                "dashboards": "Dashboards",
                "empty_app": "No dashboards, sensors, controllers or other components are found in this application!",
                "hello_world": "Hello world",
                "toggle_screen": "Toggle full screen",
                "source": "Source",
                "time": "Time",
                "message": "Message",
                "connecting": "Connecting, please wait",
                "pan": "pan",
                "tilt": "tilt",
                "take_picture": "Take picture",
                "record": "Record video",
                "media_folder": "Media folder"
            }
        }
    }



def get_test_config(user_config=None):
    from kervi.config import load
    return load(
        config_user=user_config,
        config_base=get_default_config()
    )