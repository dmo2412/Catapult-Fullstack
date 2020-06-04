import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginContainer from './session/login_form_container';
import SignUpContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import FooterContainer from './footer/footer_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => (
    <div>
        <NavbarContainer/>
        <div className='signup-login-route'>
            <AuthRoute exact path ='/login' component={LoginContainer}/>
            <AuthRoute exact path ='/signup' component={SignUpContainer}/>
        </div>
        <FooterContainer/>
    </div>
)
export default App;