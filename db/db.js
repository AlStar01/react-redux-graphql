let path = require('path');

let employeesPath = path.resolve(__dirname, 'employees.sqlite');

var db = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./employees.sqlite"
  }
});

modeule.exports = db;