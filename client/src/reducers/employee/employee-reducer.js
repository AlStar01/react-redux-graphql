export default function employeeReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_EMPLOYEE':
            return [...state, Object.assign({}, action.employee)];

        default:
            return state;
    }
}