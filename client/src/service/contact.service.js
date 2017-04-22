class ContactService {
    static getContacts() {
        return fetch('/api/contacts');
    }

    static getContact(contactId) {
        return fetch(`/api/contacts/${contactId}`);
    }
    
    static saveContact(contact) {
        if(contact.id) {
            return fetch('/api/contacts', { method: 'POST', body: contact });
        }
        else {
            return fetch(`/api/contacts/${contact.id}`, { method: 'PUT', body: contact });
        }
    }
}

export default ContactService;