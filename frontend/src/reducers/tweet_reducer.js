import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";
import { 
  RECEIVE_TWEETS 
} from "../actions/tweet_actions";

export default function(oldState = {}, action){
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_TWEETS:
      let cleanState = {};
      Object.values(action.tweets).forEach(tweet => {
        cleanState[tweet.id] = tweet;
      });
      return cleanState;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return oldState;
  }
}