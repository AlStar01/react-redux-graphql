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
            filteredContacts: props.contacts
        };

        this.onFilterTextInput = this.onFilterTextInput.bind(this);
        this.onClearButtonClick = this.onClearButtonClick.bind(this);

        this.goToAddContactPage = this.goToAddContactPage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.contacts.length !== nextProps.contacts.length) {
            this.setState({ 
                filteredContacts: Object.assign([], nextProps.contacts)
            });
        }
    }

    onFilterTextInput(e) {
        const filterText = e.target.value.toLowerCase();
        
        const props = ['name', 'email', 'phone', 'company', 'title'];
        
        const filteredContacts = this.props.contacts.filter(contact => {
            let match = false;

            for(let prop of props) {
                if(contact[prop].toLowerCase().indexOf(filterText) > -1) {
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

    onClearButtonClick() {
        this.setState({ 
            filterText: '',
            filteredContacts: this.props.contacts
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
                        <ContactFilter 
                            filterText={this.state.filterText} 
                            onFilterTextInput={this.onFilterTextInput}
                            onClearButtonClick={this.onClearButtonClick} />
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