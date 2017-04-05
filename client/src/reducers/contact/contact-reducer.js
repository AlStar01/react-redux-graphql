import * as types from '../../actions/contact/contact-action-types';

export default function contactReducer(state = [], action) {
    switch(types.ADD_CONTACT) {
        case 'ADD_CONTACT':
            return [...state, Object.assign({}, action.contact)];

        default:
            return state;
    }
}