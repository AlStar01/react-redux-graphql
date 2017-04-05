let db = require('../../db/db');

class ContactsService {
    constructor() {
        this.db = db;

        this.getContacts = this.getEmployees.bind(this);
    }

    getEmployees() {
        return db.select().from('contact');
    }
}

module.exports = new EmployeesService();