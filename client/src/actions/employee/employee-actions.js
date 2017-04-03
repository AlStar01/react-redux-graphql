import * as types from './employee-action-types';

export function addEmployee(employee) {
    return { type: types.ADD_EMPLOYEE, employee };
}