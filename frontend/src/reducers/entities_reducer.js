import { combineReducers } from 'redux';
import tweets from './tweet_reducer';
import workspaces from './workspace_reducer';
import modal from './modal_reducer';
const EntitiesReducer = combineReducers({
  tweets,
  workspaces,
  modal
});

export default EntitiesReducer;