import * as types from '../../actions/contact/contact-action-types';
import initialState from '../initialState';

export default function contactReducer(state = initialState.contacts, action) {
    switch(action.type) {
        case types.ADD_CONTACT:
            return [...state, Object.assign({}, action.contact)];
        case types.LOAD_CONTACTS_SUCCESS:
            return action.contacts;
        default:
            return state;
    }
}
