// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div className='app'>
        {/* <ProtectedRoute path="/" component={NavBarContainer} /> */}
        {/* <AuthRoute exact path="/" component={NavBarContainer}/> */}
        {/* <NavBarContainer /> */}
        <Switch>
            
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute component={defaultContainer} />
            {/* <Redirect to="/" /> */}
        </Switch>
    </div>
);
const defaultContainer = () => (
    <>
        {<NavBarContainer />}
        <AuthRoute exact path="/" component={MainPage} />
    </>
)
export default App;