import { connect } from 'react-redux';
import { deleteWorkspace, fetchWorkspaces, postFolder, postWorkspace, deleteFolder, addTweetToFolder } from './../../actions/workspace_actions';
import Dashboard from './dashboard';
import { openModal } from '../../actions/modal_actions';
const mapStateToProps = state => {
  return {
    workspaces: Object.values(state.entities.workspaces),
    dragging: state.drag.status === 'dragging',
    tweet: state.drag.tweet ? state.drag.tweet : null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchWorkspaces()),
    createWorkspace: title => dispatch(postWorkspace(title)),
    deleteWorkspace: id => dispatch(deleteWorkspace(id)),
    createFolder: (workspaceId, name) => dispatch(postFolder(workspaceId, name)),
    deleteFolder: (workspaceId, name, idx) => dispatch(deleteFolder(workspaceId, name, idx)),
    openModal: type => dispatch(openModal(type)),
    addTweetToFolder: (workspaceId, folder, tweet) => dispatch(addTweetToFolder(workspaceId, folder, tweet))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);