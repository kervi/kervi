# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" general DB handling in Kervi, store sensor values  """
import os
from datetime import datetime
import json
import inspect
import sqlite3 as lite
import kervi.spine as spine

SPINE = spine.Spine()


class _ObjectEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, "to_json"):
            return self.default(obj.to_json())
        elif hasattr(obj, "__dict__"):
            data = dict(
                (key, value)
                for key, value in inspect.getmembers(obj)
                if not key.startswith("__")
                and not inspect.isabstract(value)
                and not inspect.isbuiltin(value)
                and not inspect.isfunction(value)
                and not inspect.isgenerator(value)
                and not inspect.isgeneratorfunction(value)
                and not inspect.ismethod(value)
                and not inspect.ismethoddescriptor(value)
                and not inspect.isroutine(value)
            )
            return self.default(data)
        return obj


def init_db():
    con = lite.connect('kervi.db')
    cursor = con.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables_exists = False
    tables = cursor.fetchall()
    for table in tables:
        tables_exists = True
        break

    if not tables_exists:
        sql_file = """
        CREATE TABLE `log` (
            `id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `ts`	TEXT,
            `message`	TEXT,
            `area`	TEXT,
            `level`	INTEGER
        );
        CREATE TABLE "sensorData" (
            `id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `sensor`	TEXT,
            `value`	TEXT,
            `timeStamp`	REAL
        );
        CREATE INDEX `sensorindex` ON `sensorData` (`sensor` ,`timeStamp` );
        CREATE TABLE "settings" (
            `id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `setting_group`	TEXT,
            `name`	TEXT,
            `value`	TEXT
        );
        CREATE INDEX `settingsindex` ON `settings` (`setting_group` ,`name` );
        """

        sql_commands = sql_file.split(';')

        for command in sql_commands:
            try:
                con.execute(command)
            except lite.Error as msg:
                SPINE.log.error("create db, Command skipped: {0}, command{1}", msg, command)

init_db()
TS_START = datetime.utcnow()

def store_sensor_reading(sensor_id, sensor_value):
    try:
        if not sensor_value["sensor"] == "AliveSensor":
            con = lite.connect('kervi.db')
            cur = con.cursor()
            cur.execute(
                "INSERT INTO sensorData ('sensor','value','timeStamp')  VALUES (?, ?, ?)",
                (sensor_value["sensor"], sensor_value["value"], sensor_value["timestamp"])
            )
            con.commit()
    except lite.Error as er:
        SPINE.log.error('error store sensordata:{0}', er)


def store_setting(group, name, value):
    try:
        setting = retrieve_setting_db(group, name)
        json_value = json.dumps(value, cls=_ObjectEncoder, ensure_ascii=False).encode('utf8')
        if setting:
            con = lite.connect('kervi.db')
            cur = con.cursor()
            cur.execute(
                "update settings set value=? where id=?",
                (json_value, setting["id"])
            )
            con.commit()
        else:
            con = lite.connect('kervi.db')
            cur = con.cursor()
            cur.execute(
                "INSERT INTO settings ('setting_group','name','value')  VALUES (?, ?, ?)",
                (group, name, json_value)
            )
            con.commit()

    except lite.Error as er:
        SPINE.log.error('error store settings data:{0}', er)

def retrieve_setting_db(group, name):
    con = lite.connect('kervi.db')
    cur = con.cursor()
    cur.execute(
        "select * from settings where setting_group=? and name=?",
        (group, name)
    )

    all_rows = cur.fetchall()
    if len(all_rows) > 0:
        return {
            "id": all_rows[0][0],
            "group": all_rows[0][1],
            "name": all_rows[0][2],
            "value": json.loads(all_rows[0][3])
        }
    return None

def retrieve_setting(group, name):
    setting = retrieve_setting_db(group, name)
    if setting:
        return setting["value"]

def get_sensor_data(sensor, date_from=None, date_to=None):
    SPINE.log.debug("getSensorData sensor:{0}, from {1} to {2}", sensor, date_from, date_to)
    if date_from is None:
        date_from = TS_START

    if date_to is None:
        date_to = datetime.utcnow()

    date_from_ts = (date_from - datetime(1970, 1, 1)).total_seconds()
    date_to_ts = (date_to - datetime(1970, 1, 1)).total_seconds()

    try:
        con = lite.connect('kervi.db')
        cur = con.cursor()
        cur.execute(
            "select * from sensorData where sensor=? and timestamp > ? and timestamp < ?",
            (sensor, date_from_ts, date_to_ts)
        )

        all_rows = cur.fetchall()
        result = []
        for row in all_rows:
            result += [
                {
                    "value":row[2],
                    "ts": datetime.fromtimestamp(row[3]).strftime('%Y-%m-%dT%H:%M:%SZ')
                }
            ]
        return result
    except lite.Error as er:
        SPINE.log.error('error get sensordata:{0}', er)

def store_log_item(id, log_item):
    print ("store log entry")

def get_log_items(date_from, date_to):
    print ("getLogItems")

if (SPINE):
    SPINE.register_query_handler("getSensorData", get_sensor_data)
    SPINE.register_command_handler("storeSetting", store_setting)
    SPINE.register_query_handler("retrieveSetting", retrieve_setting)
    SPINE.register_query_handler("getLogItems", get_log_items)
    SPINE.register_event_handler("NewSensorReading", store_sensor_reading)
    SPINE.register_event_handler("newLogItem", store_log_item)
