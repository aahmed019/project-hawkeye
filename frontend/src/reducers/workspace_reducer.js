import { 
  RECEIVE_WORKSPACE, 
  RECEIVE_WORKSPACES, 
  REMOVE_WORKSPACE,
  REMOVE_FOLDER
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
      delete newState[action.id];
      return newState;

    case REMOVE_FOLDER:
      let copy = [...newState[action.id].folders]
      copy.splice(action.idx, 1);
      newState[action.id].folders = copy;
      return newState;

    default:
      return oldState;
  };
};