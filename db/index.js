let config = require('./knexfile');
let db = require('knex')(config.development);

module.exports = db;