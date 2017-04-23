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
            filterText: ''
        };

        this.onFilterTextInput = this.onFilterTextInput.bind(this);
        this.goToAddContactPage = this.goToAddContactPage.bind(this);
    }

    onFilterTextInput(filterText) {
        console.debug(filterText);
        
        this.setState({
            filterText: filterText
        });
    }

    goToAddContactPage() {
        browserHistory.push('/add');
    }

    render() {
        const { contacts } = this.props;
        
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
                        <ContactList contacts={contacts} />
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