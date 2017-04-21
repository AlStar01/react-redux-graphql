import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './App.css';

import Navigation from './layout/navigation/Navigation';

import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;
