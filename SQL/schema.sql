DROP DATABASE IF EXISTS employeeTrackerDB;

CREATE DATABASE employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NULL,
  last_name VARCHAR(50) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);