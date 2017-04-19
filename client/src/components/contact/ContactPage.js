import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contactActions from '../../actions/contact/contact-actions';

import ContactList from './contact-list/ContactList';

import { Row, Col } from 'react-bootstrap';

class ContactPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { contacts } = this.props;
        
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <h1>Contacts</h1>
                        <br/>
                        <ContactList contacts={contacts} />
                    </Col>
                </Row>
            </div>
        );
    }
}

ContactPage.propTypes = {
    contacts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    console.debug(ownProps);

    return {
        contacts: state.contacts
    }
}

// otherwise connect() is adding dispatch property to component props
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);