import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";
import { REMOVE_TWEET_FROM_FOLDER } from "../actions/workspace_actions";

export default function(state = null, action){
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case OPEN_MODAL:
      return action.data;
    case CLOSE_MODAL:
      return null;
    case REMOVE_TWEET_FROM_FOLDER:
      debugger;
      if(!(state && state.folder)) return state;
      let newTweets = [...newState.folder.tweets];
      newTweets.splice(action.tweetIdx, 1);
      newState.folder.tweets = newTweets;
      return newState;
    case RECEIVE_USER_LOGOUT:
      return null;
    default:
      return state;
  }
}