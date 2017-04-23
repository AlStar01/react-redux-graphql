let db = require('../../db/db');

class ContactsService {
    constructor() {
        this.db = db;

        this.getContacts = this.getContacts.bind(this);
        this.getContact = this.getContact.bind(this);
    }

    getContacts() {
        return this.db.select().from('contact').orderBy('name');
    }

    getContact(contactId) {
        return this.db.select().from('contact').where('id', contactId).first();
    }

    addContact(contact) {
        
        return this.db
            .returning(['id']).insert(contact).into('contact')
                .then((contactId) => {
                    return this.db.select().from('contact').where('id', contactId[0]).first();
                });
    }
}

module.exports = new ContactsService();