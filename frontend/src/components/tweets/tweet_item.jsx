import React from 'react';
import Draggable from 'react-draggable';

class TweetItem extends React.Component {
  constructor(props) {
    super(props);
  }
   handleDrag(tweet){
    return e => {
      // debugger;
      // e.target.value.classList.add('selected')
      if (this.props.selected) {
        this.props.stopDragging();
      } else {
        this.props.startDragging(tweet);
      }
      
      // this.props.startDragging(tweet);
    }
  }

  render() {
    const {tweet, idx} = this.props;
    return (
      
      <li className={`tweet ${this.props.selected ? 'selected':''}`} id={idx} key={`tweet-${idx}`}>
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
          <li>
            <button className ='select-btn'onClick={this.handleDrag(tweet)}>Select</button>
          </li>
        </ul>
      </li>
      
    )
  }
}

export default TweetItem