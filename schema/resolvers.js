let db = require('../db');

function resolveContacts(rootValue) {
    return db.select().from('contact');
}

module.exports = resolveContacts;