import React, { Component } from 'react';

import PropTypes from 'prop-types';

import * as contactActions from '../../../actions/contact/contact-actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContactForm from '../contact-form/ContactForm';

class ContactManagePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: Object.assign({}, this.props.contact)
        };

        this.onFormInputChange = this.onFormInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormInputChange() {

    }

    onFormSubmit() {

    }

    render() {
        return (
            <div>
                <ContactForm contact={this.state.contact} />
            </div>
        );
    }
} 

ContactManagePage.propTypes = {
    actions: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.debug(ownProps);

    let contact = {
        id: null, 
        name: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        website: '',
        company: '',
        title: '',
        avatar: '',
        birthday: ''
    }

    return {
        contact: contact
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactManagePage);