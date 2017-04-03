let db = require('../../db/db');

class EmployeesService {
    constructor() {
        this.db = db;

        this.getEmployees = this.getEmployees.bind(this);
    }

    getEmployees() {
        return db.select().from('employee');
    }
}

module.exports = new EmployeesService();