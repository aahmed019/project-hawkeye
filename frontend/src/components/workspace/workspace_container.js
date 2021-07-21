import { connect } from 'react-redux';
import { deleteWorkspace, fetchWorkspaces, postFolder, postWorkspace, deleteFolder } from '../../actions/workspace_actions';
import WorkspaceIndex from './workspace_index';

const mapStateToProps = state => {
  return {
    workspaces: Object.values(state.entities.workspaces)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchWorkspaces()),
    createWorkspace: title => dispatch(postWorkspace(title)),
    deleteWorkspace: id => dispatch(deleteWorkspace(id)),
    createFolder: (workspaceId, name) => dispatch(postFolder(workspaceId, name)),
    deleteFolder: (workspaceId, name, idx) => dispatch(deleteFolder(workspaceId, name, idx))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceIndex);