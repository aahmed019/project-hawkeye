import { BEGIN_DRAGGING, STOP_DRAGGING } from "../actions/drag_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const _default = {
  status: 'static',
  tweet: undefined
}

export default function(oldState = _default, action){
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case BEGIN_DRAGGING:
      newState.status = 'dragging';
      newState.tweet = action.tweet;
      return newState;

    case STOP_DRAGGING:
      newState.status = 'static';
      newState.tweet = undefined;
      return newState;

    case RECEIVE_USER_LOGOUT:
      return _default;

    default:
      return oldState;
  }
};