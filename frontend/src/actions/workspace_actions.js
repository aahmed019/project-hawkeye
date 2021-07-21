import * as WorkspaceAPIUtil from './../util/workspace_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_WORKSPACES = "RECEIVE_WORKSPACES";
export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";
export const REMOVE_WORKSPACE = "REMOVE_WORKSPACE";

const receiveWorkspaces = workspaces => ({
  type: RECEIVE_WORKSPACES,
  workspaces
})

const receiveWorkspace = workspace => ({
  type: RECEIVE_WORKSPACE,
  workspace
})

const removeWorkspace = id => ({
  type: REMOVE_WORKSPACE,
  id
})

export const fetchWorkspaces = () => dispatch => {
  WorkspaceAPIUtil.fetchWorkspaces().then(res => {
    dispatch(receiveWorkspaces(res.data));
  }, err => dispatch(receiveErrors(err.response.data)));
};

export const postWorkspace = title => dispatch => {
  WorkspaceAPIUtil.postWorkspace(title).then(res => {
    dispatch(receiveWorkspace(res.data));
  }, err => dispatch(receiveErrors(err.response.data)));
};

export const deleteWorkspace = id => dispatch => {
  WorkspaceAPIUtil.deleteWorkspace(id).then(res => {
    dispatch(removeWorkspace(res.data._id));
  }, err => dispatch(receiveErrors(err.response.data)));
};

export const postFolder = (workspaceId, title) => dispatch => {
  WorkspaceAPIUtil.postFolder(workspaceId, title).then(res => {
    dispatch(receiveWorkspace(res.data));
  }, err => dispatch(receiveErrors(err.response.data)));
}