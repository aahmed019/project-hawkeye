import { combineReducers } from 'redux';
import tweets from './tweet_reducer';
import workspaces from './workspace_reducer';
const EntitiesReducer = combineReducers({
  tweets,
  workspaces
});

export default EntitiesReducer;