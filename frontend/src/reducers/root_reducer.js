import { combineReducers } from 'redux';
import drag from './drag_reducer';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
const RootReducer = combineReducers({
    drag,
    entities,
    session,
    errors,
    ui
});

export default RootReducer;