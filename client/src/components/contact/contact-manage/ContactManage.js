import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ContactManagePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (<div></div>);
    }
} 

ContactManagePage.propTypes = { };

function mapStateToProps(state, ownProps) {
    console.debug(ownProps);

    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(someActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactManagePage);