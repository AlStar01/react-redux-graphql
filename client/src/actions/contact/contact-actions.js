import * as types from './contact-action-types';

export function addContact(contact) {
    return { type: types.ADD_CONTACT, contact };
}