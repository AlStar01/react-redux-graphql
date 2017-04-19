import * as types from '../../actions/contact/contact-action-types';

export default function contactReducer(state = [], action) {
    switch(action.type) {
        case types.ADD_CONTACT:
            return [...state, Object.assign({}, action.contact)];
        case types.LOAD_CONTACTS_SUCCESS:
            return action.contacts;
        default:
            return state;
    }
}
