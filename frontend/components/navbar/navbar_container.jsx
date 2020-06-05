import { connect } from 'react-redux';
import React from 'react';
import Navbar from './navbar_form';
import {login, logout} from '../../actions/session_actions'



const mapStateToProps = state => ({
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
    //coming back later to do explore functionality because leads to category page
    //coming back later to do start a project functionality because leads to project page
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);