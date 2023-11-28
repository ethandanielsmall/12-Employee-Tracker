const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "employeeTrackerDB"
});

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

function viewEmployees() {
    connection.query(`SELECT e.id, e.first_name, e.last_name, d.name AS department, r.title, r.salary`, (err, res) => {
      if (err) throw err;
      figlet('Employees', (err, result) => {
        console.log(err || result);
      });
      printTable(res);
      start();
    });
  };

function viewDepartments() {
    connection.query(`SELECT * FROM department`, (err, res) => {
      if (err) throw err;
      figlet('Departments', (err, result) => {
        console.log(err || result);
      });
      printTable(res);
      start();
    });
  };