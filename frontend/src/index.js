import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import './stylesheets/origin.scss';

import { postFolder, postWorkspace, updateComment } from './util/workspace_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {

        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);

        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
          store.dispatch(logout());
        }
    } else {
        store = configureStore({});
    }
    const root = document.getElementById('root');
    window.addWorkSpace = postWorkspace;
    window.addFolder = postFolder;
    window.update = updateComment

    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(<h1>Hello</h1>, root);
});