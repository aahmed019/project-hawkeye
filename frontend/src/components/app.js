// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Workspace from './workspace/workspace';
const App = () => (
    <div className='app'>
        {/* <ProtectedRoute path="/" component={NavBarContainer} /> */}
        {/* <AuthRoute exact path="/" component={NavBarContainer}/> */}
        {/* <NavBarContainer /> */}
        <Switch>
            
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route component={defaultContainer} />
            {/* <Redirect to="/" /> */}
            
        </Switch>
    </div>
);
// ON LOGIN: REDIRECT TO WORKSPACE PAGE
const defaultContainer = () => (
    <div className='main-index'>
        {<NavBarContainer />}
        <ProtectedRoute path="/" component={Workspace} />
        <Switch>
            {/* <ProtectedRoute exact path="/" component={Workspace} /> */}
            <AuthRoute exact path="/" component={MainPage} />
            
        </Switch>
        
    </div>
)
export default App;