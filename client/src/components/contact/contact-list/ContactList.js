import React, { PropTypes } from 'react';

import ContactListRow from './ContactListRow';

import { Table } from 'react-bootstrap';

const ContactList = ({ contacts }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => <ContactListRow key={contact.id} contact={contact} />)}
            </tbody>    
        </Table>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default ContactList;