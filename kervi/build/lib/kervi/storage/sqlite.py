

import os
import time
from datetime import datetime
import threading
import sqlite3 as lite
from kervi.core.utility.thread import KerviThread
from kervi.plugin.storage.storage_plugin import StoragePlugin

_DB_CREATE_SQL = """
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
        CREATE TABLE "dynamicData" (
            `id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `dynamicValue`	TEXT,
            `value`	TEXT,
            `timeStamp`	TEXT
        );
        CREATE INDEX `sensorindex` ON `dynamicData` (`dynamicValue` ,`timeStamp` );
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


class SQLiteStoragePlugin(StoragePlugin):
    def __init__(self, name, config, storage_type, manager):
        StoragePlugin.__init__(self, name, config, manager)
        self._storage_type = storage_type
        if self._storage_type == "memory":
            self._connection = lite.connect(self.manager.config.application.id + "_mem.db", check_same_thread=False)
        else:
            self._connection = lite.connect(self.manager.config.application.id + ".db", check_same_thread=False)
        self._init_db()
        self._db_lock = threading.Lock()
        self._ts_start = datetime.utcnow()
        
    
    def _init_db(self):
        cursor = self._connection.cursor()
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables_exists = False
        tables = cursor.fetchall()
        for table in tables:
            tables_exists = True
            break

        if not tables_exists:
            self._execute_sql(_DB_CREATE_SQL)        
            

    def _execute_sql(self, sql):
        sql_commands = sql.split(';')

        for command in sql_commands:
            try:
                self._connection.execute(command)
            except lite.Error as msg:
                self.log_error("create db, Command skipped: {0}, command{1}", msg, command)
    
    @property
    def storage_type(self):
        return self._storage_type
    
    def store_value(self, value_id, value, persist=False):
        self._db_lock.acquire()
        try:
            cursor = self._connection.cursor()
            cursor.execute(
                "INSERT INTO dynamicData ('dynamicValue','value','timeStamp')  VALUES (?, ?, ?)",
                (value["id"], self.to_json(value["value"]) , value["timestamp"])
            )
            self._connection.commit()
        except lite.Error as er:
            self.log_error('error store dynamic data, persist{0} error:{1}', persist, er)
        finally:
            self._db_lock.release()

    def get_value_data(self, value, date_from, date_to, limit):
        
        result = []
        if date_from is None:
            date_from = self._ts_start
        elif isinstance(date_from, str):
            date_from = datetime.strptime(date_from,'%Y-%m-%dT%H:%M:%S.%fZ')

        if date_to is None:
            date_to = datetime.utcnow()
        elif isinstance(date_to, str):
            date_to = datetime.strptime(date_to,'%Y-%m-%dT%H:%M:%S.%fZ')

        self._db_lock.acquire()
        try:
            cur = self._connection.cursor()
            cur.execute(
                "select * from dynamicData where dynamicValue=? and timestamp >= Datetime(?) and timestamp < Datetime(?)",
                (value, date_from, date_to)
            )

            all_rows = cur.fetchall()
            for row in all_rows:
                result += [
                    {
                        "value":self.to_json(row[2]),
                        "ts": row[3]
                    }
                ]
        
        except lite.Error as er:
            self.log_error('error get dynamic data:{0}', er)
        finally:
                self._db_lock.release()
                
        return result

    def store_setting(self, group, name, value):
        setting = self._retrieve_setting_db(group, name)
        self._db_lock.acquire()
        try:
            json_value = self.to_json(value)
            cur = self._connection.cursor()
        
            if setting:
                cur.execute(
                    "update settings set value=? where id=?",
                    (json_value, setting["id"])
                )
            else:
                cur.execute(
                    "INSERT INTO settings ('setting_group','name','value')  VALUES (?, ?, ?)",
                    (group, name, json_value)
                )
            self._connection.commit()
        except lite.Error as er:
            self.log_error('error store settings data:{0}', er)
            print("error store setting", er)
        except Exception as er:
            print("error store setting", er)
        finally:
            self._db_lock.release()

    def retrieve_setting(self, group, name):
        setting = self._retrieve_setting_db(group, name)
        
        if setting:
            return setting["value"]

    def _retrieve_setting_db(self, group, name):
        self._db_lock.acquire()
        try:
            cur = self._connection.cursor()
            cur.execute(
                "select * from settings where setting_group=? and name=?",
                (group, name)
            )

            all_rows = cur.fetchall()
            if len(all_rows) > 0:
                value = None
                try:
                    value = self.from_json(all_rows[0][3])
                except Exception as ex:
                    #print("d", ex)
                    pass

                return {
                    "id": all_rows[0][0],
                    "group": all_rows[0][1],
                    "name": all_rows[0][2],
                    "value": value
                }
        finally:
            self._db_lock.release()

        return None
    
    def store_message(self, source_id, message_item):
        raise NotImplementedError

    def get_messages(self):
        raise NotImplementedError    

