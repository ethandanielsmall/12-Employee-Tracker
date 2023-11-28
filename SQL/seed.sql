USE employeeTrackerDB;

INSERT INTO department (name)
VALUES ("Command");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Medical");

INSERT INTO employee (first_name, last_name, department_id)
VALUES ("Jean-Luc", "Picard", 3);
INSERT INTO employee (first_name, last_name, department_id)
VALUES ("William", "Riker", 2, 1);
INSERT INTO employee (first_name, last_name, department_id)
VALUES ("Deanna", "Troi", 3, null);
INSERT INTO employee (first_name, last_name, department_id)
VALUES ("Data", "Soong", 4, 3);
INSERT INTO employee (first_name, last_name, department_id)
VALUES ("Geordi", "LaForge", 5, null);
INSERT INTO employee (first_name, last_name, department_id)
VALUES ("Beverly", "Crusher", 2, null);
INSERT INTO employee (first_name, last_name, department_id)
VALUES ("Wesley", "Crusher", 4, 7);
INSERT INTO employee (first_name, last_name, department_id)
VALUES ("Worf", "Lazarenko", 1, 2);