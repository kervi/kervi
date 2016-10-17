import sqlite3 as lite
import kervi.spine as spine
from datetime import datetime, timedelta
import traceback
import os

s=spine.Spine()

def initDB():
    global s
    con = lite.connect('kervi.db')
    cursor = con.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tablesExists=False
    tables = cursor.fetchall()
    for tbl in tables:
        tablesExists=True
        break

    if (not tablesExists):
        sqlFile=os.path.join(os.path.dirname(__file__), 'db.sql')
        fd = open(sqlFile, 'r')
        sqlFile = fd.read()
        fd.close()

        sqlCommands = sqlFile.split(';')

        for command in sqlCommands:
            try:
                con.execute(command)
            except OperationalError, msg:
                s.log.error("Command skipped: {0}", msg)

initDB()
TSStart=datetime.utcnow()

def storeSensorReading(id, sensorValue, **kwargs):
    global s
    try:
        if not sensorValue["sensor"] == "AliveSensor":
            con = lite.connect('kervi.db')
            cur = con.cursor()
            cur.execute("INSERT INTO sensorData ('sensor','value','timeStamp')  VALUES (?, ?, ?)", (sensorValue["sensor"],sensorValue["value"],sensorValue["timestamp"]))
            con.commit()
    except lite.Error as er:
        s.log.error('error store sensordata:{0}', er.message)

def getSensorData(sensor, dateFrom=None, dateTo=None, **kwargs):
    global s
    s.log.debug("getSensorData sensor:{0}, from {1} to {2}",sensor,dateFrom, dateTo)
    if dateFrom is None:
        dateFrom= TSStart

    if dateTo is None:
        dateTo= datetime.utcnow()
	
    dateFromTS=(dateFrom - datetime(1970, 1, 1)).total_seconds()
    dateToTS=(dateTo - datetime(1970, 1, 1)).total_seconds()

    try:
        con = lite.connect('kervi.db')
        cur = con.cursor()
        cur.execute("select * from sensorData where sensor=? and timestamp > ? and timestamp < ?", (sensor,dateFromTS,dateToTS))
	
        all_rows = cur.fetchall()
        result=[]
        for row in all_rows:
            print row

        result+=[{"value":row[2],"ts": datetime.fromtimestamp(row[3]).strftime('%Y-%m-%dT%H:%M:%SZ')  }]
        print "gsd:",result
        return result
    except lite.Error as er:
        s.log.error('error get sensordata:{0}', er.message)

def storeLogItem(id,logItem,**kwargs):
    print "store log entry"

def getLogItems(dateFrom,dateTo,**kwargs):
    print "getLogItems"

s.registerQueryHandler("getSensorData", getSensorData)
s.registerQueryHandler("getLogItems", getLogItems)
s.registerEventHandler("NewSensorReading", storeSensorReading)
s.registerEventHandler("newLogItem", storeLogItem)