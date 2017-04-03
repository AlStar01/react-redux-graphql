import React, { Component } from 'react';
import { Link } from 'react-router';

import { Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h1>React Redux GraphQL</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate incidunt, excepturi pariatur corporis quam voluptas reiciendis. Ipsam eligendi beatae, eos soluta enim earum aspernatur, officiis recusandae! Sapiente illum fuga quis!</p>

                    <br/>

                    <Link to="about" className="btn btn-primary">Learn more</Link>
                </Col>    
            </Row>
        );
    }
}

export default Home;
