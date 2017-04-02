import React, { Component } from 'react';
import { Link } from 'react-router';

import { Row, Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum rerum, explicabo omnis eaque nam adipisci ratione magni, inventore deserunt mollitia consequatur quam sit officia deleniti? Minus porro, expedita eveniet fugit?</p>

                    <br/>

                    <Link to="about" className="btn btn-primary">Learn more</Link>
                </Col>
            </Row>
        );
    }
}