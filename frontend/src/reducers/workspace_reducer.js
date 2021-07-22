import { 
  RECEIVE_WORKSPACE, 
  RECEIVE_WORKSPACES, 
  REMOVE_WORKSPACE,
  REMOVE_FOLDER,
  REMOVE_TWEET_FROM_FOLDER
} from "../actions/workspace_actions";

export default function(oldState = {}, action){
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_WORKSPACES:
      action.workspaces.forEach(workspace => {
        newState[workspace._id] = workspace;
      });

      return newState;

    case RECEIVE_WORKSPACE:
      newState[action.workspace._id] = action.workspace;
      return newState;

    case REMOVE_WORKSPACE:
      delete newState[action.id]
      return newState;

    case REMOVE_FOLDER:
      newState[action.id].folders.splice(action.idx, 1);
      return newState;

    case REMOVE_TWEET_FROM_FOLDER:
      let newFolders = [...newState[action.workspaceId].folders];
      newFolders[action.folder_idx].tweets.splice(action.tweetIdx, 1);
      newState[action.workspaceId].folders = newFolders;
      return newState;

    default:
      return oldState;
  };
};