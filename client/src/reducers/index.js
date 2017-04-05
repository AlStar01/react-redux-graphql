import { combineReducers } from 'redux';

import contacts from './contact/contact-reducer';

const rootReducer = combineReducers({
    contacts
});

export default rootReducer;