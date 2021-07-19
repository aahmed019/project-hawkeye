import { 
  RECEIVE_TWEETS 
} from "../actions/tweet_actions";

export default function(oldState = {}, action){
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_TWEETS:
      return action.tweets;

    default:
      return oldState;
  }
}