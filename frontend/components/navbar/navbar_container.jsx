import { connect } from 'react-redux';
import React from 'react';
import Navbar from './navbar_form';
import {login, logout} from '../../actions/session_actions'
import {fetchCategories} from '../../actions/category_actions'



const mapStateToProps = state => ({
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
    fetchCategories: () => dispatch(fetchCategories())
    
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);