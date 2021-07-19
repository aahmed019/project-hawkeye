import { 
  RECEIVE_TWEETS 
} from "../actions/tweet_actions";

export default function(oldState = {}, action){
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_TWEETS:
      Object.values(action.tweets).forEach(tweet => {
        newState[tweet.id] = tweet;
      });
      return newState;

    default:
      return oldState;
  }
}