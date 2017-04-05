let path = require('path');

let contactsPath = path.resolve(__dirname, 'contacts.sqlite');

var db = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: contactsPath
  },
  useNullAsDefault: true
});

modeule.exports = db;