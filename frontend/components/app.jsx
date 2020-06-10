import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginContainer from './session/login_form_container';
import SignUpContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import FooterContainer from './footer/footer_container';
import SplashContainer from './splash/splash_container';
import CreateProjectContainer from './projects/create_project_container';
import ProjectShowContainer from './projects/project_show_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import UpdateProjectContainer from './projects/update_project_container'
// import CategoryContainer from './categories/category_container'

const App = () => (
    <div>
        <NavbarContainer/>
        <Switch>
            <Route exact path = '/' component={SplashContainer}/>
            <AuthRoute exact path ='/login' component={LoginContainer}/>
            <AuthRoute exact path ='/signup' component={SignUpContainer}/>
            <ProtectedRoute exact path ='/projects/new/' component={CreateProjectContainer}/>
            {/* <Route exact path = '/projects/categories' component={CategoryContainer}/> */}
            <Route exact path = '/projects/:projectId' component={UpdateProjectContainer}/>
            {/* <Route exact path ='/projects/:projectId' component={ProjectShowContainer}/> */}
            {/* <ProtectedRoute exact path ='/projects/new' component={CreateProjectContainer}/> */}
        </Switch>
        <FooterContainer/>
    </div>
)
export default App;