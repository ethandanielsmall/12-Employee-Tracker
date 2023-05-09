// const mysql = require("mysql");
const inquirer = require("inquirer");

// main menu with options

function mainMenu() {
    console.log("you have reached the main menu!")
        inquirer
          .prompt({
            type: "list",
            name: "task",
            message: "Would you like to do?",
            choices: [
              "View Employees",
              "Add Employee",
              "Remove Employee",
              "View Roles",
              "Update Employee Role",
              "Add Role",
              "View Departments",
              "Add Department",
              "Remove Department",
              "End"]
          })
          .then(function ({ task }) {
            switch (task) {
                case "View Employees":
                    viewEmployees();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "View Roles":
                    viewRoles();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "View Departments":
                    viewDepartments();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Remove Department":
                    removeDepartment();
                    break;
              case "End":
                connection.end();
                break;
            }
          });
      };

mainMenu();

// ------------------------------------------ VIEW EMPLOYEES
function viewEmployees() {
    var query =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  LEFT JOIN role r
	ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id
  LEFT JOIN employee m
	ON m.id = e.manager_id`


// employee ids, first names, last names, job titles, departments, salaries,
// and managers that the employees report to
}

// ------------------------------------------ ADD EMPLOYEES

// ------------------------------------------ REMOVE EMPLOYEE

// ------------------------------------------ VIEW ROLES

// ------------------------------------------ UPDATE EMPLOYEE ROLE

// ------------------------------------------ ADD ROLE

// ------------------------------------------ VIEW DEPARTMENTS

// ------------------------------------------ ADD DEPARTMENT

// ------------------------------------------ REMOVE DEPARTMENT