USE EnterpriseTrackerDB;

INSERT INTO department (name)
VALUES ("Command");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Medical");

INSERT INTO officer (first_name, last_name, department_id)
VALUES ("Jean-Luc", "Picard", 1);
INSERT INTO officer (first_name, last_name, department_id)
VALUES ("William", "Riker", 1);
INSERT INTO officer (first_name, last_name, department_id)
VALUES ("Deanna", "Troi", 3);
INSERT INTO officer (first_name, last_name, department_id)
VALUES ("Data", "Soong", 2);
INSERT INTO officer (first_name, last_name, department_id)
VALUES ("Geordi", "LaForge", 2);
INSERT INTO officer (first_name, last_name, department_id)
VALUES ("Beverly", "Crusher", 3);
INSERT INTO officer (first_name, last_name, department_id)
VALUES ("Wesley", "Crusher", 1);
INSERT INTO officer (first_name, last_name, department_id)
VALUES ("Worf", "Lazarenko", 1);