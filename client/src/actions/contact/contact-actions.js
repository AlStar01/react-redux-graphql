import * as types from './contact-action-types';

import ContactService from '../../service/contact.service';

export function addContact(contact) {
    return { type: types.ADD_CONTACT, contact };
}

export function loadContactsSuccess(contacts) {
    return { type: types.LOAD_CONTACTS_SUCCESS, contacts};
}

export function loadContacts() {
    return function(dispatch) {
        return ContactService
            .getContacts()
            .then(response => response.json())
            .then(contacts => dispatch(loadContactsSuccess(contacts)))
            .catch(err => console.error(err));
    }
}