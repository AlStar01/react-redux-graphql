import React from 'react';

import PropTypes from 'prop-types';

import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

const ContactFilter = ({ filterText, onFilterTextInput, onClearButtonClick }) => {
    const handleFilterTextChange = (e) => {
        onFilterTextInput(e.target.value);
    };

    const handleClearButtonClick = (e) => {
        onClearButtonClick();
    };
    
    return (
        <Form inline>
            <FormGroup controlId="search">
                <ControlLabel srOnly>Search</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextChange} />
            </FormGroup>
            {' '}
            <Button bsStyle="default" type="button" onClick={handleClearButtonClick}>Clear</Button>
        </Form>
    );
};

ContactFilter.propTypes = {
    filterText: PropTypes.string.isRequired,
    onFilterTextInput: PropTypes.func.isRequired,
    onClearButtonClick: PropTypes.func.isRequired
};

export default ContactFilter;