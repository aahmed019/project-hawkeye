import * as WorkspaceAPIUtil from './../util/workspace_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_WORKSPACES = "RECEIVE_WORKSPACES";
export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";
export const REMOVE_WORKSPACE = "REMOVE_WORKSPACE";
export const REMOVE_FOLDER = "REMOVE_FOLDER";

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

const removeFolder = (id, idx) => ({
  type: REMOVE_FOLDER,
  id,
  idx
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

export const postFolder = (workspaceId, name) => dispatch => {
  WorkspaceAPIUtil.postFolder(workspaceId, name).then(res => {
    dispatch(receiveWorkspace(res.data));
  }, err => dispatch(receiveErrors(err.response.data)));
}

export const deleteFolder = (workspaceId, name, idx) => dispatch => {
  WorkspaceAPIUtil.deleteFolder(workspaceId, name).then(res => {
    dispatch(removeFolder(workspaceId, idx));
  }, err => dispatch(receiveErrors(err.response.data)));
}