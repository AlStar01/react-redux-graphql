import React, { Component, PropTypes } from 'react';

import { Row, Col, Button } from 'react-bootstrap';

class ContactAdd extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: {
                name: ''
            }
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        const contact = this.state.contact;
        contact.name = e.target.value;
        this.setState({ contact: contact });
    }

    handleClick(e) {
        e.preventDefault();
        this.props.actions.addContact(this.state.contact);
    }
    
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h2>Add Contact</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                                name="name" 
                                className="form-control" 
                                onChange={this.handleNameChange}
                                value={this.state.contact.name} />
                        </div>
                        <Button bsStyle="primary" type="submit" onClick={this.handleClick}>Save</Button>
                    </form>
                </Col>
            </Row>
        );
    }
}

export default ContactAdd;