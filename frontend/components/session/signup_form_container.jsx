import {connect} from 'react-redux';
import React from 'react';
import {signup} from '../../actions/session_actions';

// const mapStateToProps = state => ({

// })

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(undefined, mapDispatchToProps)(SignupForm);