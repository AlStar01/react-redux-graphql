let db = require('../../db/db');

class ContactsService {
    constructor() {
        this.db = db;

        this.getContacts = this.getContacts.bind(this);
    }

    getContacts() {
        return db.select().from('contact').orderBy('name');
    }
}

module.exports = new ContactsService();