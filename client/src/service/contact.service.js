class ContactService {
    static getContacts() {
        return fetch('/api/contacts');
    }

    static getContact(contactId) {
        return fetch(`/api/contacts/${contactId}`);
    }

    static saveContact(contact) {
        if (contact.id) {
            return fetch(`/api/contacts/${contact.id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'PATCH',
                body: JSON.stringify(contact)
            });
        } else {
            return fetch('/api/contacts', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(contact)
            });
        }
    }
}

export default ContactService;