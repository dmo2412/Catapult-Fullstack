import {connect} from 'react-redux';
import React from 'react';
import LoginForm from './login_form'
import {login} from '../../actions/session_actions'
import {receiveErrors} from '../../actions/session_actions'
//need some other imports but will come back to this

const mapStateToProps = ({errors}) => ({
    errors: errors.session
})

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
