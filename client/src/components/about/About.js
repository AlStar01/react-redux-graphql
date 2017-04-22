import React, { Component } from 'react';
import { Link } from 'react-router';

import { Row, Col } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum rerum, explicabo omnis eaque nam adipisci ratione magni, inventore deserunt mollitia consequatur quam sit officia deleniti? Minus porro, expedita eveniet fugit?</p>

                    <br/>

                    <h2>Technologies</h2>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>GraphQL</li>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
            </Row>
        );
    }
}

export default About;
