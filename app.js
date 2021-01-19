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
