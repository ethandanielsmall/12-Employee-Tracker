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