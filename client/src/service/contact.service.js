class ContactService {
    static getContacts() {
        return fetch('api/contacts').then(contacts => console.debug(contacts));
    }
}

export default ContactService;