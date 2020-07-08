import {connect} from 'react-redux';
import React from 'react';
import {signup, login, receiveErrors} from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = (state) => {
    // let errors;
    // if (Array.isArray(state.errors.session)) {
    //     errors = state.errors.session
    // }
    return {
        errors: state.errors
    }
    
}

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);