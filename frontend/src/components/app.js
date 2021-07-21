// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Workspace from './workspace/workspace';
import MainIndex from './index-page/main-index';
const App = () => (
    <div className='app'>
        <Switch>
            <AuthRoute exact path="/" component={NavBarContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <ProtectedRoute path="/" component={MainIndex} />
    </div>
);
export default App;