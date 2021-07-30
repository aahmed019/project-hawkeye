import React from 'react';
import Draggable from 'react-draggable';

class TweetItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDrag(tweet){
    return e => {
      if (this.props.selected) {
        this.props.stopDragging();
      } else {
        this.props.startDragging(tweet);
      }
    }
  }

  handleOriginalTweet(url){
    return e => {
      window.open(url);
    }
  }

  render() {
    const {tweet, idx} = this.props;
    return (
      
      <li className={`tweet ${this.props.selected ? 'selected':''}`} id={idx} key={`tweet-${idx}`} onClick={this.handleDrag(tweet)}>
        <ul>
          <li className='tweet-head'>
            <li className='tweet-img'><img src={tweet.profile_pic} /></li>
            <a className='tweet-link' href={tweet.user_url}>
              {tweet.username}
            </a>
          </li>
          <li className='tweet-body'>
            <a>
              {tweet.text}
            </a>
          </li>
          <li>
            <button className ='select-btn' onClick={this.handleOriginalTweet(tweet.source)}>Go To Tweet</button>
          </li>
        </ul>
      </li>
      
    )
  }
}

export default TweetItem