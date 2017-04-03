import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

class EmployeeList extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h1>Employees</h1>
                </Col>
            </Row>
        );
    }
}

export default EmployeeList;