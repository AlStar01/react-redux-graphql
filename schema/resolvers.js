let db = require('../db');

function resolveContacts(rootValue, { name }) {
    if(name) {
        return db.select().from('contact').where('name', 'like', `%${name}%`);
    }

    return db.select().from('contact');
}

function resolveAddContact(rootValue, { contact }) {
    return Promise.resolve(true);
}

function resolveUpdateContact(rootValue, { contact }) {
    return Promise.resolve(true);
}

module.exports = { resolveContacts, resolveAddContact };