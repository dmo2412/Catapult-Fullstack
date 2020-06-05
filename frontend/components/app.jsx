import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginContainer from './session/login_form_container';
import SignUpContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import FooterContainer from './footer/footer_container'
import SplashContainer from './splash/splash_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => (
    <div>
        <NavbarContainer/>
        <Switch>
            <Route exact path = '/' component={SplashContainer}/>
            <AuthRoute exact path ='/login' component={LoginContainer}/>
            <AuthRoute exact path ='/signup' component={SignUpContainer}/>
        </Switch>
        <FooterContainer/>
    </div>
)
export default App;