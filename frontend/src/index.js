import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import './stylesheets/origin.scss';
import './stylesheets/html5reset-1.6.1.scss';
import './stylesheets/nav-style.scss';
import './stylesheets/auth-style.scss';
import './stylesheets/main-index.scss';
import './stylesheets/workspace.scss';
import './stylesheets/main-index.scss';
import './stylesheets/sidebar.scss';
import './stylesheets/tweet-search.scss';
import './stylesheets/modal.scss';

import { postFolder, postWorkspace } from './util/workspace_api_util';

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
        window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }
    const root = document.getElementById('root');
    window.addWorkSpace = postWorkspace
    window.addFolder = postFolder

    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(<h1>Hello</h1>, root);
});