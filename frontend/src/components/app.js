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
import CreateWorkspaceModal from './modals/create_workspace_modal';

const App = () => (
    <div className='app'>
        <CreateWorkspaceModal />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route component={defaultContainer} />
        </Switch>
    </div>
);
// ON LOGIN: REDIRECT TO WORKSPACE PAGE
const defaultContainer = () => (
    <>
        <AuthRoute exact path="/" component={NavBarContainer} />
        <AuthRoute path="/" component={MainPage} />
        <ProtectedRoute path="/" component={MainIndex} />
        
    </>
)
export default App;