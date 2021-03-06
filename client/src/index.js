import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { loadContacts } from './actions/contact/contact-actions';

import configureStore from './store/configureStore';

import './index.css';

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

const store = configureStore();
store.dispatch(loadContacts());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
