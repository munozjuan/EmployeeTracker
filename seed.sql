USE employee_managerDB;

INSERT INTO department(name)
VALUES ("Sales"),("IT"),("Finance"),("Legal"),("Communication");


INSERT INTO role(title,salary,department_id)
VALUES 
("Sales Coordinator",40000.00,1),
("Sales Lead",65000.00,1),
("Sales Manager",80000.00,1),
("Helpdesk Agent",40000.00,2),
("Senior Engineer",85000.00,2),
("Lead Engineer",110000.00,2),
("Accounts Coordinator",55000.00,3),
("Accounts Manager",80000.00,3),
("Associate Counsel",80000.00,4),
("Lead Counsel",180000.00,4),
("Human Resource Specialist",50000.00,5),
("Media Planner",90000.00,5);

SELECT * FROM role;

SELECT 
	department.id,
	department.name,
    role.id ,
    role.title,
    role.salary
FROM department 
	INNER JOIN role on role.department_id = department.id
ORDER BY department.id, role.salary ASC;

INSERT INTO employee(first_name, last_name,role_id)
VALUES
("John","Wick",1),
("Charlie","Kelly",2),
("Homer","Simpson",3),
("Dwight","Schrute",4),
("Sandy","Cheeks",4),
("Nikola","Tesla",5),
("Anne","Hathaway",6),
("Hard","Blastcheese",7),
("Tex","Avery",8),
("JoAnn","Fabric",8),
("Holly", "Golightly",9);

SELECT * FROM employee;