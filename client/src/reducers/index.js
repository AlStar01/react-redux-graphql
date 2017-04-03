import { combineReducers } from 'redux';

import employees from './employee/employee-reducer';

const rootReducer = combineReducers({
    employees
});

export default rootReducer;