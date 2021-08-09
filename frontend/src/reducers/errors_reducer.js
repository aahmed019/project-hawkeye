import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import { modalErrorsReducer } from './modal_errors_reducer';
import { tweetErrorsReducer } from './tweet_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    tweets: tweetErrorsReducer,
    modal: modalErrorsReducer
});