import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import About from './About';

it('renders without crashing', () => {
    const wrapper = shallow(<About />);
});

it('renders about heading', () => {
    const wrapper = shallow(<About />);
    const heading = <h1>About</h1>;

    expect(wrapper).toContainReact(heading);
});

it('renders list of technologies', () => {
    const wrapper = shallow(<About />);
    const ul = wrapper.find('ul');

    const technologies = ['React', 'Bootstrap', 'Redux', 'GraphQL'];

    technologies.forEach((technology) => expect(ul).toIncludeText(technology));
});