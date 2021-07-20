import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { fetchTweets } from './util/twitter_api_util';
import './stylesheets/html5reset-1.6.1.scss';
import './stylesheets/nav-style.scss';
import './stylesheets/auth-style.scss';
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
    window.store = store
    window.tweets = fetchTweets
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(<h1>Hello</h1>, root);
});