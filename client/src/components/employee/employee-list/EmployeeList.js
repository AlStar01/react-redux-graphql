import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as employeeActions from '../../../actions/employee/employee-actions';

import { Row, Col, Button } from 'react-bootstrap';

class EmployeeList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            employee: {
                name: ''
            }
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        const employee = this.state.employee;
        employee.name = e.target.value;
        this.setState({ employee: employee });
    }

    handleClick(e) {
        e.preventDefault();
        this.props.addEmployee(this.state.employee);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <h1>Employees</h1>
                        {this.props.employees.map((employee, index) => {
                            return (<div key={index}>{employee.name}</div>);
                        })}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={12}>
                        <h2>Add Employee</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" 
                                    name="name" 
                                    className="form-control" 
                                    onChange={this.handleNameChange}
                                    value={this.state.employee.name} />
                            </div>
                            <Button bsStyle="primary" type="submit" onClick={this.handleClick}>Save</Button>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

EmployeeList.propTypes = {
    employees: PropTypes.array.isRequired,
    addEmployee: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
    console.log(ownProps);

    return {
        employees: state.employees
    }
}

// otherwise connect() is adding dispatch property to component props
function mapDispatchToProps(dispatch) {
    return {
        addEmployee: employee => dispatch(employeeActions.addEmployee(employee))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);