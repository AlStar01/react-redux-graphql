import React, { Component, PropTypes } from 'react';
import './App.css';

import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        {this.props.children}
      </Grid>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;
