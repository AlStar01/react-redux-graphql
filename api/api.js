let express = require('express');
let app = express();

let employees = require('./employees/employees');

app.use('/api/employees', employees);

module.exports = app;