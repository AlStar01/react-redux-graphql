import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { browserHistory } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contactActions from '../../actions/contact/contact-actions';

import ContactFilter from './contact-filter/ContactFilter';
import ContactList from './contact-list/ContactList';

import { Row, Col, Button } from 'react-bootstrap';

class ContactsPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            filterText: '',
            contacts: props.contacts,
            filteredContacts: props.contacts
        };

        this.onFilterTextInput = this.onFilterTextInput.bind(this);
        this.goToAddContactPage = this.goToAddContactPage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            filteredContacts: Object.assign([], nextProps.contacts),
            contacts: Object.assign([], nextProps.contacts)
        });
    }

    onFilterTextInput(filterText) {
        const props = ['name', 'email', 'phone', 'company', 'title'];
        
        const filteredContacts = this.state.contacts.filter(contact => {
            let match = false;

            for(let prop of props) {
                if(contact[prop].toLowerCase().indexOf(filterText.toLowerCase()) > -1) {
                    match = true;
                    break;
                }
            }

            return match;
        });

        this.setState({
            filterText: filterText,
            filteredContacts: filteredContacts
        });
    }

    goToAddContactPage() {
        browserHistory.push('/add');
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <h1>Contacts</h1>
                    </Col>
                </Row>

                <br />

                <Button type="button" bsStyle="primary" onClick={this.goToAddContactPage}>Add Contact</Button>

                <br />
                <br />

                <Row>
                    <Col sm={12}>
                        <ContactFilter filterText={this.state.filterText} onFilterTextInput={this.onFilterTextInput} />
                        <br/>
                        <ContactList contacts={this.state.filteredContacts} />
                    </Col>
                </Row>
            </div>
        );
    }
}

ContactsPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);