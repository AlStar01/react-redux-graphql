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
            <Nav pullRight>
                <LinkContainer to="/about">
                    <NavItem eventKey={1}>About</NavItem>
                </LinkContainer>
                <LinkContainer to="/employees">
                    <NavItem eventKey={2}>Employees</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}

export default Navigation;