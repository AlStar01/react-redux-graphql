import React, { PropTypes } from 'react';

const ContactListRow = ({ contact }) => {
    return (
        <tr>
            <td><img src={contact.avatar} alt={contact.name} height="50px" width="50px" /></td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.company}</td>
            <td>{new Date(contact.birthday).toDateString()}</td>
        </tr>
    );
};

ContactListRow.propTypes = {
    contact: PropTypes.node.isRequired
};

export default ContactListRow;