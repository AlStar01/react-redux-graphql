import React, { Component } from 'react';

import PropTypes from 'prop-types';

import * as contactActions from '../../../actions/contact/contact-actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import faker from 'faker';

import ContactForm from '../contact-form/ContactForm';

class ContactManagePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: Object.assign({}, props.contact)
        };

        this.onFormInputChange = this.onFormInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onGenerateButtonClick = this.onGenerateButtonClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.contact.id !== nextProps.contact.id) {
            this.setState({ contact: Object.assign({}, nextProps.contact) });
        }
    }

    onFormInputChange(e) {
        let contact = this.state.contact;
        
        const field = e.target.name;
        contact[field] = e.target.value;

        this.setState({ contact: contact });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.actions.saveContact(this.state.contact);
        this.context.router.push('/contacts');
    }

    onGenerateButtonClick() {
        const fakerContact = faker.helpers.contextualCard();
        
        const newContact = {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: fakerContact.email,
            phone: fakerContact.phone,
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode(),
            website: fakerContact.website,
            company: fakerContact.company.name,
            title: faker.name.jobTitle(),
            avatar: fakerContact.avatar,
            birthday: faker.date.between('1950-01-01', '2000-01-01')
        };
        
        this.setState({
            contact: Object.assign({}, newContact)
        })
    }

    render() {
        return (
            <div>
                <ContactForm 
                    contact={this.state.contact}
                    handleChange={this.onFormInputChange}
                    handleSubmit={this.onFormSubmit}
                    handleGenerateButtonClick={this.onGenerateButtonClick} />
            </div>
        );
    }
} 

ContactManagePage.propTypes = {
    actions: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired
};

ContactManagePage.contextTypes = {
    router: PropTypes.object
};

function getContactById(contacts, contactId) {
    const contact = contacts.filter(contact => contact.id == contactId);
    if(contact) return contact[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    console.debug(ownProps);
    debugger;


    const contactId = ownProps.params.id;

    let contact = {
        id: undefined, 
        name: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: 'select',
        zip: '',
        website: '',
        company: '',
        title: '',
        avatar: '',
        birthday: ''
    };

    if(contactId && state.contacts.length) {
        contact = getContactById(state.contacts, contactId);
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