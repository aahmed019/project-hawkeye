import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deleteTweetFromFolder } from './../../actions/workspace_actions';
import CommentsContainer from '../comments/comments_container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const mSTP = state => ({
  modal: state.entities.modal,
  currentUser: state.session.user
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deleteTweet: (workspaceId, folder_idx, tweet) => dispatch(deleteTweetFromFolder(workspaceId, folder_idx, tweet))
});

class CreateWorkspaceModal extends React.Component {

  componentWillUnmount() {
    this.props.closeModal();
  }
  constructor(props) {
    super(props);
    this.handleDeleteTweet = this.handleDeleteTweet.bind(this);
  }

  handleDeleteTweet(tweet, idx){
    return e => {
      tweet['idx'] = idx;
      this.props.deleteTweet(this.props.modal.id, this.props.modal.folder.idx, tweet);
    }
  }

  render() {
    if (!this.props.modal || this.props.modal.modalType !== 'open_folder') return null;
    console.log(this.props)
    const {id, folder} = this.props.modal
    const tweets = this.props.modal.folder.tweets
    const hello = tweets.map((tweet, idx) => (
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
          <div 
            className="tweet-close-button"
            onClick={this.handleDeleteTweet(tweet, idx)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
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
                        <CommentsContainer workspace_id ={id} folder = {folder}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default connect(mSTP, mDTP)(CreateWorkspaceModal);