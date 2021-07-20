import { combineReducers } from 'redux';
import tweets from './tweet_reducer';
const EntitiesReducer = combineReducers({
  tweets
});

export default EntitiesReducer;