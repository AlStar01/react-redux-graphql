import React from 'react';

import PropTypes from 'prop-types';

import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const ContactForm = ({ contact, handleChange, handleSubmit, handleGenerateButtonClick }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>Manage Contact</h1>

            <br />

            {contact.id &&
                <div>
                    <Button bsStyle="warning" type="button" onClick={handleGenerateButtonClick}>Generate Contact</Button>
                    
                    <br />
                    <br />
                </div>
            }

            <FormGroup controlId="name">
                <ControlLabel>Name</ControlLabel>
                <FormControl 
                    name="name"
                    type="text"
                    value={contact.name}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="email">
                <ControlLabel>Email</ControlLabel>
                <FormControl 
                    name="email"
                    type="email"
                    value={contact.email}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="phone">
                <ControlLabel>Phone</ControlLabel>
                <FormControl 
                    name="phone"
                    type="text"
                    value={contact.phone}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="street">
                <ControlLabel>Street</ControlLabel>
                <FormControl 
                    name="street"
                    type="text"
                    value={contact.street}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="city">
                <ControlLabel>City</ControlLabel>
                <FormControl 
                    name="city"
                    type="text"
                    value={contact.city}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="state">
                <ControlLabel>State</ControlLabel>
                <FormControl 
                    componentClass="select" 
                    placeholder="select"
                    name="state"
                    value={contact.state}
                    onChange={handleChange}>
                    <option value="select">Select state...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </FormControl>
            </FormGroup>

            <FormGroup controlId="zip">
                <ControlLabel>Zip Code</ControlLabel>
                <FormControl 
                    name="zip"
                    type="text"
                    value={contact.zip}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="website">
                <ControlLabel>Website</ControlLabel>
                <FormControl 
                    name="website"
                    type="url"
                    value={contact.website}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="company">
                <ControlLabel>Company</ControlLabel>
                <FormControl 
                    name="company"
                    type="text"
                    value={contact.company}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="title">
                <ControlLabel>Title</ControlLabel>
                <FormControl 
                    name="title"
                    type="text"
                    value={contact.title}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="avatar">
                <ControlLabel>Avatar</ControlLabel>
                <FormControl 
                    name="avatar"
                    type="url"
                    value={contact.avatar}
                    onChange={handleChange} />
            </FormGroup>

            <FormGroup controlId="birthday">
                <ControlLabel>Birthday</ControlLabel>
                <FormControl 
                    name="birthday"
                    type="text"
                    value={contact.birthday}
                    onChange={handleChange} />
            </FormGroup>

            <Button 
                type="submit" 
                bsStyle="primary" 
                className="pull-right"
                onClick={handleSubmit}>
                Submit
            </Button>
        </form>
    );
};

ContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleGenerateButtonClick: PropTypes.func.isRequired
};

export default ContactForm;