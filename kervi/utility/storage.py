# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" general DB handling in Kervi, store sensor values  """
import os
from datetime import datetime
import sqlite3 as lite
import kervi.spine as spine

SPINE = spine.Spine()

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
        """

        sql_commands = sql_file.split(';')

        for command in sql_commands:
            try:
                con.execute(command)
            except OperationalError, msg:
                SPINE.log.error("Command skipped: {0}", msg)

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
        SPINE.log.error('error store sensordata:{0}', er.message)

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
        SPINE.log.error('error get sensordata:{0}', er.message)

def store_log_item(id, log_item):
    print ("store log entry")

def get_log_items(date_from, date_to):
    print ("getLogItems")

if (SPINE):
    SPINE.register_query_handler("getSensorData", get_sensor_data)
    SPINE.register_query_handler("getLogItems", get_log_items)
    SPINE.register_event_handler("NewSensorReading", store_sensor_reading)
    SPINE.register_event_handler("newLogItem", store_log_item)
