import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { postWorkspace } from '../../actions/workspace_actions';
const mSTP = state => ({

  modal: state.entities.modal,
  currentUser: state.session.user
});

const mDTP = dispatch => ({
  postWorkspace: (title) => dispatch(postWorkspace(title)),
  closeModal: () => dispatch(closeModal()),
});

class CreateWorkspaceModal extends React.Component {

  componentWillUnmount() {
    this.props.closeModal();
  }
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    //e.preventDefault();
    this.setState({title: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postWorkspace(this.state.title);
    this.props.closeModal();
  }
  render() {

    if (!this.props.modal || this.props.modal.modalType !== 'create_workspace') return null;

    return (
      <div className='modal ws-background'>
        <div className='modal-child ws'>
          <div className='modal-form ws'>
            <span className='close-button'><button onClick={() => this.props.closeModal()}>&#x2715;</button></span>
            
            <div className='form-container'>
              <div className='modal-header'>
                {/* <h2></h2> */}
              </div>
              <form>
                
                <input type='text' placeholder='Workspace Title' onChange={this.handleInput} maxLength="25" />
                <button type='submit' className='create-btn' onClick={this.handleSubmit}>Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(CreateWorkspaceModal);