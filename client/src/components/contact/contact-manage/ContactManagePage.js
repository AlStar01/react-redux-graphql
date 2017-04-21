import React, { Component } from 'react';

import PropTypes from 'prop-types';

import * as contactActions from '../../../actions/contact/contact-actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ContactManagePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>foo</div>
        );
    }
} 

ContactManagePage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.debug(ownProps);

    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactManagePage);