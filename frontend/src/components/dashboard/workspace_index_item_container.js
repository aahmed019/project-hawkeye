import { connect } from 'react-redux';
import WorkspaceIndexItem from './workspace_index_item';
import { closeModal, openModal } from '../../actions/modal_actions';
import { addTweetToFolder, deleteFolder, deleteWorkspace, postWorkspace } from '../../actions/workspace_actions';

const mSTP = state => ({
  currentUser: state.session.user,
  dragging: state.drag.status === 'dragging',
  modal: state.entities.modal,
  tweet: state.drag.tweet ? state.drag.tweet : null
});

const mDTP = dispatch => ({
  addTweetToFolder: (workspaceId, folder, tweet) => dispatch(addTweetToFolder(workspaceId, folder, tweet)),
  closeModal: () => dispatch(closeModal()),
  createWorkspace: title => dispatch(postWorkspace(title)),
  deleteFolder: (workspaceId, name, idx) => dispatch(deleteFolder(workspaceId, name, idx)),
  deleteWorkspace: id => dispatch(deleteWorkspace(id)),
  openModal: (modalType, id, folder) => dispatch(openModal(modalType, id, folder)),
});

export default connect(mSTP, mDTP)(WorkspaceIndexItem);