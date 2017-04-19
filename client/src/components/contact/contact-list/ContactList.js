import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contactActions from '../../../actions/contact/contact-actions';

import { Row, Col, Button } from 'react-bootstrap';

class ContactList extends Component {
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

    componentDidMount() {
        fetch('api/contacts').then(response => console.debug(response.json()));
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
            <div>
                <Row>
                    <Col sm={12}>
                        <h1>Contacts</h1>
                        {this.props.contacts.map((contact, index) => {
                            return (<div key={index}>{contact.name}</div>);
                        })}
                    </Col>
                </Row>
                <br />
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
            </div>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    console.debug(ownProps);

    return {
        contacts: state.contacts
    }
}

// otherwise connect() is adding dispatch property to component props
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);