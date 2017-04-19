import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contactActions from '../../../actions/contact/contact-actions';

import { Row, Col } from 'react-bootstrap';

class ContactList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        fetch('api/contacts').then(response => response.json()).then(contacts => console.debug(contacts));
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <h1>Contacts</h1>
                        {this.props.contacts.map((contact, index) => {
                            return (<div key={index}>{contact.name}</div>);
                        })}
                    </Col>
                </Row>
            </div>
        );
    }
}

ContactList.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);