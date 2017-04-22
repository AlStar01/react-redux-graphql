import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Home from './Home';

it('renders without crashing', () => {
    const wrapper = shallow(<Home />);
});

it('renders welcome message', () => {
    const wrapper = shallow(<Home />);
    const message = <h1>React Redux GraphQL</h1>;

    expect(wrapper).toContainReact(message);
});