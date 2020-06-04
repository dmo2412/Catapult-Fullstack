import { connect } from 'react-redux';
import React from 'react';
import Navbar from './navbar_form';
import {login} from '../../actions/session_actions'

// const mapStateToProps = state => ({
//     // search feature goes here
// })

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    //coming back later to do explore functionality because leads to category page
    //coming back later to do start a project functionality because leads to project page
    
})

export default connect(undefined, mapDispatchToProps)(Navbar);