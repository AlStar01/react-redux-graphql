import React from 'react';
import { IndexLink } from 'react-router';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <IndexLink to="/">App</IndexLink>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer to="/">
                    <NavItem eventKey={1}>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem eventKey={2}>About</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}

export default Navigation;