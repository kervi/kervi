# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" general DB handling in Kervi, store sensor values  """
import os
import time
from datetime import datetime
import json
import inspect
import sqlite3 as lite
import kervi.spine as spine
from kervi.utility.thread import KerviThread
0
SPINE = spine.Spine()
FILE_CON = None
MEMORY_CON = None



class MemoryCleanThread(KerviThread):
    def __init__(self):
        KerviThread.__init__(self)
        self.spine = spine.Spine()
        self.alive = False
        if self.spine:
            self.spine.register_command_handler("startThreads", self._start_command)
            self.spine.register_command_handler("stopThreads", self._stop_command)

    def _step(self):
        time.sleep(20)
        try:
            cursor = MEMORY_CON.cursor()
            cursor.execute("DELETE FROM sensorData WHERE id IN (SELECT id FROM sensorData ORDER BY id ASC LIMIT 1000);")
        except lite.Error as msg:
            SPINE.log.error("clean memory db, Command skipped: {0}, command{1}", msg)

    def _start_command(self):
        print("start mcl")
        if not self.alive:
            self.alive = True
            KerviThread.start(self)

    def _stop_command(self):
        if self.alive:
            self.alive = False
            self.stop()

    



DB_CREATE_SQL = """
        CREATE TABLE `log` (
            `id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `sourceId`	TEXT,
            `sourceName`	TEXT,
            `area`	TEXT,
            `data`	TEXT,
            `level`	INTEGER,
            `topic`	TEXT,
            `body`	TEXT,
            'ts'    `timeStamp`	REAL,
            `logType`	TEXT
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
        CREATE TABLE "cron" (
            `id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `job_id` TEXT,
            `component_id` TEXT
            `name`	TEXT,
            `job_parameters` TEXT
        );
        CREATE TABLE "cron_meta" (
            `id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `cron_id`	INTEGER,
            `repeat_start` REAL NOT NULL,
            `repeat_end` REAL NOT NULL,
            `repeat_interval` varchar(255) NOT NULL,
            `repeat_year` varchar(255) NOT NULL,
            `repeat_month` varchar(255) NOT NULL,
            `repeat_day` varchar(255) NOT NULL,
            `repeat_week` varchar(255) NOT NULL,
            `repeat_weekday` varchar(255) NOT NULL
        );
        """


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


def execute_sql(con, sql):
    sql_commands = sql.split(';')

    for command in sql_commands:
        try:
            con.execute(command)
        except lite.Error as msg:
            SPINE.log.error("create db, Command skipped: {0}, command{1}", msg, command)

def init_db():
    global FILE_CON, MEMORY_CON

    MEMORY_CON = lite.connect("kervi_mem.db", check_same_thread=False)
    FILE_CON = lite.connect('kervi.db', check_same_thread=False)

    for con in [FILE_CON, MEMORY_CON]:
        cursor = con.cursor()
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables_exists = False
        tables = cursor.fetchall()
        for table in tables:
            tables_exists = True
            break

        if not tables_exists:
            execute_sql(con, DB_CREATE_SQL)        

    MemoryCleanThread()

init_db()
TS_START = datetime.utcnow()

def store_sensor_reading(sensor_id, sensor_value, persist=False):
    global FILE_CON
    try:
        if not persist:
            cur = MEMORY_CON.cursor()
        else:
            cur = FILE_CON.cursor()

        cur.execute(
            "INSERT INTO sensorData ('sensor','value','timeStamp')  VALUES (?, ?, ?)",
            (sensor_value["sensor"], sensor_value["value"], sensor_value["timestamp"])
        )
        FILE_CON.commit()
    except lite.Error as er:
        SPINE.log.error('error store sensordata:{0}', er)


def store_setting(group, name, value):
    try:
        setting = retrieve_setting_db(group, name)
        json_value = json.dumps(value, cls=_ObjectEncoder, ensure_ascii=False).encode('utf8')
        if setting:
            cur = FILE_CON.cursor()
            cur.execute(
                "update settings set value=? where id=?",
                (json_value, setting["id"])
            )
            FILE_CON.commit()
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
    cur = FILE_CON.cursor()
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

def get_sensor_data(sensor, date_from=None, date_to=None, limit=60):
    SPINE.log.debug("getSensorData sensor:{0}, from {1} to {2}", sensor, date_from, date_to)
    if date_from is None:
        date_from = TS_START

    if date_to is None:
        date_to = datetime.utcnow()

    date_from_ts = (date_from - datetime(1970, 1, 1)).total_seconds()
    date_to_ts = (date_to - datetime(1970, 1, 1)).total_seconds()

    try:
        con_list = [MEMORY_CON, FILE_CON]
        result = []
        for con in con_list:
            cur = con.cursor()
            cur.execute(
                "select * from sensorData where sensor=? and timestamp > ? and timestamp < ? LIMIT ?",
                (sensor, date_from_ts, date_to_ts, limit)
            )

            all_rows = cur.fetchall()
            for row in all_rows:
                result += [
                    {
                        "value":row[2],
                        "ts": datetime.fromtimestamp(row[3]).strftime('%Y-%m-%dT%H:%M:%SZ')
                    }
                ]
            if len(result):
                break
        return result
    except lite.Error as er:
        SPINE.log.error('error get sensordata:{0}', er)

def store_log_item(id, item):
    try:
        if not item["persist"]:
            con = MEMORY_CON
        else:
            con = FILE_CON

        cur = con.cursor()
        cur.execute(
            "INSERT INTO log ('sourceId','sourceName','area', 'data', 'level', 'topic', 'body', 'ts', 'logType')  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (item["source_id"], item["source_name"], item["area"], item["data"], item["level"], item["topic"], item["body"], item["timestamp"], item["type"])
        )
        con.commit()
    except lite.Error as er:
        SPINE.log.error('error store log data:{0}', er)

def get_log_items(page, page_size, filters=None):
    print ("getLogItems")
    connections = [FILE_CON, MEMORY_CON]
    result = []
    for con in connections:
        cur = con.cursor()
        cur.execute(
            "select * from log orderby ts desc limit ?, ?",
            page_size,
            page_size*page
        )
        all_rows = cur.fetchall()
        for row in all_rows:
            result += [{
                "source_id": row[0],
                "source_name": row[1],
                "area": row[2],
                "data": row[3],
                "level": row[4],
                "topic": row[5],
                "body": row[6],
                "timestamp": row[7],
                "type": row[8]
                }
            ]
    
    return None


def create_cron_job(component_id, job_id, name, job_parameters, start, end, repeat_interval, year,month):
    pass

def delete_cron_job():
    pass

def query_cron_job():
    pass

if (SPINE):
    SPINE.register_query_handler("getSensorData", get_sensor_data)
    SPINE.register_command_handler("storeSetting", store_setting)
    SPINE.register_query_handler("retrieveSetting", retrieve_setting)
    SPINE.register_query_handler("getLogItems", get_log_items)
    SPINE.register_event_handler("NewSensorReading", store_sensor_reading)
    SPINE.register_event_handler("userLogMessage", store_log_item)
    SPINE.register_command_handler("createCronJob", create_cron_job)
    SPINE.register_command_handler("deleteCronJob", delete_cron_job)
    SPINE.register_query_handler("queryCronJob", query_cron_job)
