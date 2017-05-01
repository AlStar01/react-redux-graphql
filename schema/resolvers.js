let db = require('../db');

function resolveContacts(rootValue, { name }) {
    if(name) {
        return db.select().from('contact').where('name', 'like', `%${name}%`);
    }

    return db.select().from('contact');
}

module.exports = resolveContacts;