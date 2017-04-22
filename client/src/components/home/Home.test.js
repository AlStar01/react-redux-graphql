import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Home from './Home';

it('renders without crashing', () => {
    const wrapper = shallow(<Home />);
});

it('renders welcome heading', () => {
    const wrapper = shallow(<Home />);
    const heading = <h1>React Redux GraphQL</h1>;

    expect(wrapper).toContainReact(heading);
});