import { combineReducers } from 'redux';
import { modalErrorsReducer } from './modal_errors_reducer';

import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    modal: modalErrorsReducer
});