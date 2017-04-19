import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import ContactsPage from './components/contact/ContactsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="contacts" component={ContactsPage} />
    </Route>
);