// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainIndex from './index-page/main-index';
import CreateWorkspaceModal from './modals/create_workspace_modal';
import OpenFolderModal from './modals/open_folder_modal';

const App = () => (
    <div className='app'>
        <CreateWorkspaceModal />
        <OpenFolderModal />
        
        <AuthRoute exact path="/" component={NavBarContainer} />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        <ProtectedRoute exact path="/" component={MainIndex} />
    </div>
);
export default App;