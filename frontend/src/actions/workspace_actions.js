import * as WorkspaceAPIUtil from './../util/workspace_api_util';
import { stopDragging } from './drag_actions';
import { receiveErrors } from './session_actions';

export const RECEIVE_WORKSPACES = "RECEIVE_WORKSPACES";
export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";
export const REMOVE_WORKSPACE = "REMOVE_WORKSPACE";
export const REMOVE_FOLDER = "REMOVE_FOLDER";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

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

const removeComment = (id, idx) => ({
    type: REMOVE_COMMENT,
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

export const addTweetToFolder = (workspaceId, folder, tweet) => dispatch => {
  WorkspaceAPIUtil.addTweet(workspaceId, folder, tweet).then(res => {
    dispatch(stopDragging());
    dispatch(receiveWorkspace(res.data));
  }, err => dispatch(receiveErrors(err.response.data)));
}

export const addCommentToWorkspace = (workspaceId, comment) => dispatch => {
    WorkspaceAPIUtil.addComment(workspaceId, comment).then(res => {
        dispatch(receiveWorkspace(res.data));
    }, err => dispatch(receiveErrors(err.response.data)));
}

export const updateCommentInWorkspace = (workspaceId, comment) => dispatch => {
    WorkspaceAPIUtil.updateComment(workspaceId, comment).then(res => {
        dispatch(receiveWorkspace(res.data));
    }, err => dispatch(receiveErrors(err.response.data)));
}

export const removeCommentInWorkspace = (workspaceId, comment, idx) => dispatch => {
    WorkspaceAPIUtil.removeComment(workspaceId, comment).then(res => {
        dispatch(removeComment(workspaceId, idx));
    }, err => dispatch(receiveErrors(err.response.data)));
}

