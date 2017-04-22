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
        const columns = [
            'id',
            'name',
            'email',
            'phone',
            'street',
            'city',
            'state',
            'zip',
            'website',
            'company',
            'title',
            'avatar',
            'birthday',
            'created_on',
            'modified_on'
        ]
        
        return this.db
            .returning(columns)
            .insert(contact)
            .into('contact');
    }
}

module.exports = new ContactsService();