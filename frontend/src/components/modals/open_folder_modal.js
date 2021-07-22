import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CommentsContainer from '../comments/comments_container';

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

    render() {
        if (!this.props.modal || this.props.modal.modalType !== 'open_folder') return null;

        const {tweets} = this.props.modal.folder
        const hello = tweets.map((tweet,idx) => (
          <li className='tweet' key={`tweet-${idx}`}>
             <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src={tweet.profile_pic} /></li>
                <a className='tweet-link'href={tweet.user_url}>
                  {tweet.username}
                </a>
              </li>
              <li className='tweet-body'>
                <a href={tweet.source}>
                  {tweet.text}
                </a>
              </li>
            </ul>
        </li>
        ))

        return (
        <div className='modal-folder'>
            <div className='modal-folder-child'>
                <span className='close-button'><button onClick={() => this.props.closeModal()}>&#x2715;</button></span>
                <div className='modal-form-folder'>
                  <div className='folder-container'>
                    <div className='left-tweet'>
                      {hello}
                    </div>
                    <div className='right-comments'>
                        {/* <CommentsContainer workspace_id ={id} folder = {folder}/> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default connect(mSTP, mDTP)(CreateWorkspaceModal);