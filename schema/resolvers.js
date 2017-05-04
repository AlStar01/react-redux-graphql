let contactService = require('../api/contacts/contacts.service');

function resolveContacts(rootValue, { name }) {
    if(name) {
        return contactService.getContactsByName(name);
    }
    return contactService.getContacts();
}

function resolveAddContact(rootValue, { contact }) {
    return contactService.addContact(contact);
}

function resolveUpdateContact(rootValue, { contact }) {
    return contactService.updateContact(contact);
}

module.exports = { resolveContacts, resolveAddContact };