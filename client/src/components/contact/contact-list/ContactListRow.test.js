import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ContactListRow from './ContactListRow';

describe('ContactListRow', () => {
    let contact;

    beforeEach(() => {
        contact = {
            id: 123, 
            name: 'John',
            email: 'Smith',
            phone: '555-123-4567',
            street: '1234 Main St.',
            city: 'Somewhere',
            state: 'CA',
            zip: '12345',
            website: 'https://some.website.io',
            company: 'Acme Inc.',
            title: 'CTO',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/grrr_nl/128.jpg',
            birthday: new Date(1993, 6, 28)
        };
    })
    
    it('renders without crashing', () => {
        const wrapper = shallow(<ContactListRow contact={contact} />);
    });

    it('renders date as formatted date string', () => {
        const wrapper = shallow(<ContactListRow contact={contact} />);

        const expected = new Date(1993, 6, 28).toDateString();

        expect(wrapper).toIncludeText(expected);
    });
});