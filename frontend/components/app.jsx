import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginContainer from './session/login_form_container';
import SignUpContainer from './session/signup_form_container';

const App = () => (
    <div>
        <h1>Test</h1>
        {/* <Switch>
            <Route exact path ='/login' component={LoginContainer}/>
            <Route exact path ='/signup/new' component={SignUpContainer}/>
        </Switch> */}
        <LoginContainer/>
    </div>
)
export default App;