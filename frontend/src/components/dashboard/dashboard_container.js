import { connect } from 'react-redux';
import { deleteWorkspace, fetchWorkspaces, postFolder, postWorkspace, deleteFolder, addTweetToFolder } from './../../actions/workspace_actions';
import Dashboard from './dashboard';
import { openModal } from '../../actions/modal_actions';
const mapStateToProps = state => {
  return {
    workspaces: Object.values(state.entities.workspaces)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchWorkspaces()),
    createFolder: (workspaceId, name) => dispatch(postFolder(workspaceId, name)),
    openModal: type => dispatch(openModal(type))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);