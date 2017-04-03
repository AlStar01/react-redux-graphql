import * as types from '../../actions/employee/employee-action-types';

export default function employeeReducer(state = [], action) {
    switch(types.ADD_EMPLOYEE) {
        case 'ADD_EMPLOYEE':
            return [...state, Object.assign({}, action.employee)];

        default:
            return state;
    }
}