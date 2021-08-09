import { RECEIVE_TWEET_ERRORS } from "../actions/tweet_actions";
import { BEGIN_LOADING } from "../actions/ui_actions";

export const tweetErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_TWEET_ERRORS:
      return action.errors;
    case BEGIN_LOADING:
      return [];
    default:
      return state;
  }
}