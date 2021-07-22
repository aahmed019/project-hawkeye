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

  constructor(props) {
    super(props);

    this.state = {
      
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    //e.preventDefault();
    
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    
  }
  render() {
    // debugger;
    if (this.props.modal !== 'create_workspace') {
      return null;
    }

    return (
      <div className='modal'>
        <div className='modal-child'>
          <div className='modal-form '>
            <span className='close-button'><button onClick={() => this.props.closeModal()}>&#x2715;</button></span>
            <div className='modal-header'>
              <h2>Create Workspace</h2>
            </div>
            <div className='form-container'>
              <form>
                
                <input type='text' placeholder='some text'></input>
                <button type='submit' onClick={this.handleSubmit}>Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(CreateWorkspaceModal);