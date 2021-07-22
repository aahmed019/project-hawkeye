import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
  modal: state.entities.modal,
  currentUser: state.session.user
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

class CreateWorkspaceModal extends React.Component {

  componentWillUnmount() {
    this.props.closeModal();
  }
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modal || this.props.modal.modalType !== 'open_folder') return null;

    return (
      <div className='modal'>
        <div className='modal-child'>
          <div className='modal-form-folder '>
            <span className='close-button'><button onClick={() => this.props.closeModal()}>&#x2715;</button></span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(CreateWorkspaceModal);