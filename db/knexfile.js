let path = require('path');
let contactsPath = path.resolve(__dirname, 'contacts.sqlite');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: contactsPath
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
};
