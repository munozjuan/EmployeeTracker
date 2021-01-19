const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const env = require("dotenv").config();


const connection = mysql.createConnection({
    host: process.env.DB_Host,
    port: 3306,
    user: process.env.DB_User,
    password: process.env.DB_Pass,
    database: "employee_managerDB"
});


const connection = mysql.createConnection({
    host: process.env.DB_Host,
    port: 3306,
    user: process.env.DB_User,
    password: process.env.DB_Pass,
    database: "employee_managerDB"
});

connection.connect(function(err) {
    if (err) throw err;
    runQuestions();
});

function runQuestions() {
    inquirer
      .prompt({
          name: "action",
          type: "rawlist",
          message: "What would you like to do?",
          choices: [
              "View employees",
              "View departments",
              "View roles",
              "Add employee",
              "Add department",
              "Add role",
              "Update employee role",
              "Exit"
            ],
      })
      .then(function(answer) {
        switch (answer.action) {
            case "View employees":
                viewEmployee();
                break;

            case "View departments":
                viewDepartments();
                break;

            case "View roles":
                viewRoles();
                break;

            case "Add employee":
                addEmployee();
                break;

            case "Add department":
                addDepartment();
                break;

            case "Add role":
                addRole();
                break;

            case "Update employee role":
                updateRole();
                break;

            case "Exit":
                connection.end();
                break;
        }
    });
}

function addEmployee() {
    connection.query("SELECT title FROM employee_managerDB.role;", function(err, res) {
        if (err) throw err;
        let roleArr = [];
        inquirer
          .prompt([
              {
                  name: "role",
                  type: "rawlist",
                  choices: function() {
                      for (let i = 0; i < res.length; i++) {
                          roleArr.push(res[i].title);
                      }
                      return roleArr;
                  },
                  message: "What is the employee's role?"
              },
              {
                  name: "firstname",
                  type: "input",
                  message: "What is the employee's first name?",
              },
              {
                  name: "lastname",
                  type: "input",
                  message: "What is the employee's last name?"
              },
              {
                  name: "manager",
                  type: "number",
                  message: "What is the employee's manager's ID#?"
              }
          ])
          .then(function(answer) {
              connection.query("INSERT INTO employee SET ?",
              {
                  first_name: answer.firstname,
                  last_name: answer.lastname,
                  role_id: roleArr.indexOf(answer.role)+1,
                  manager_id: answer.manager
              });
              runQuestions();
          });
    });
}
