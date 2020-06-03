import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginContainer from './session/login_form_container';
import SignUpContainer from './session/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => (
    <div>
        <div className='signup-login-route'>
            <AuthRoute exact path ='/login' component={LoginContainer}/>
            <AuthRoute exact path ='/signup' component={SignUpContainer}/>
        </div>
    </div>
)
export default App;