-- Drop and create burgers_db
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- Use burgers_db
USE burgers_db;

-- Create table
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);