import React from 'react';

import PropTypes from 'prop-types';

import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const ContactFilter = ({ filterText, onFilterTextInput }) => {
    const handleFilterTextChange = (e) => {
        onFilterTextInput(e.target.value);
    };
    
    return (
        <Form inline>
            <FormGroup controlId="search">
                <ControlLabel srOnly>Search</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextChange} />
            </FormGroup>
        </Form>
    );
};

ContactFilter.propTypes = {
    filterText: PropTypes.string.isRequired,
    onFilterTextInput: PropTypes.func.isRequired
};

export default ContactFilter;