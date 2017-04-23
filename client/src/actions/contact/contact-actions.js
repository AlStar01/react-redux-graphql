import * as types from './contact-action-types';

import ContactService from '../../service/contact.service';

export function loadContactsSuccess(contacts) {
    return {
        type: types.LOAD_CONTACTS_SUCCESS,
        contacts
    };
}

export function createContactSuccess(contact) {
    return {
        type: types.CREATE_CONTACT_SUCCESS,
        contact
    };
}

export function updateContactSuccess(contact) {
    return {
        type: types.UPDATE_CONTACT_SUCCESS,
        contact
    };
}

export function loadContacts(dispatch) {
    return function (dispatch) {
        return ContactService.getContacts()
            .then(response => response.json())
            .then(contacts => dispatch(loadContactsSuccess(contacts)))
            .catch(err => console.error(err));
    }
}

export function saveContact(contact) {
    return function (dispatch) {
        return ContactService.saveContact(contact)
            .then(response => response.json())
            .then(savedContact => {
                if (contact.id) {
                    dispatch(updateContactSuccess(savedContact))
                } else {
                    dispatch(createContactSuccess(savedContact))
                }
            })
            .catch(err => console.error(err));
    }
}