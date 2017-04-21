import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router';

const ContactListRow = ({ contact }) => {
    return (
        <tr>
            <td><img src={contact.avatar} alt={contact.name} height="50px" width="50px" /></td>
            <td><Link to={'/contacts/' + contact.id}>{contact.name}</Link></td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.company}</td>
            <td>{new Date(contact.birthday).toDateString()}</td>
        </tr>
    );
};

ContactListRow.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactListRow;