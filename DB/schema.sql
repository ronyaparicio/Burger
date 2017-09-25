CREATE DATABASE burgers_DB;
USE burgers_DB;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    created DATETIME NOT NULL,
	PRIMARY KEY (id)
);