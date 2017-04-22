import * as types from '../../actions/contact/contact-action-types';
import initialState from '../initialState';

export default function contactReducer(state = initialState.contacts, action) {
    switch(action.type) {
        case types.LOAD_CONTACTS_SUCCESS:
            return action.contacts;

        case types.CREATE_CONTACT_SUCCESS:
            return [...state, Object.assign({}, action.contact)];

        case types.UPDATE_CONTACT_SUCCESS:
            return [
                ...state.filter(contact => contact.id !== action.contact.id),
                Object.assign({}, action.contact)
            ];

        default:
            return state;
    }
}
