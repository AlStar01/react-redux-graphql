class ContactService {
    static getContacts() {
        return fetch('api/contacts');
    }
}

export default ContactService;