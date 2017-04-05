let express = require('express');
let app = express();

let contacts = require('./contacts/contacts');

app.use('/api/contacts', contacts);

module.exports = app;