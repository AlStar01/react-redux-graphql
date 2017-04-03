import React from 'react';
import { IndexLink } from 'react-router';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <IndexLink to="/">App</IndexLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <IndexLinkContainer to="/">
                        <NavItem eventKey={1}>Home</NavItem>
                    </IndexLinkContainer>
                    <LinkContainer to="/about">
                        <NavItem eventKey={2}>About</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/employees">
                        <NavItem eventKey={3}>Employees</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;