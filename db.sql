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
