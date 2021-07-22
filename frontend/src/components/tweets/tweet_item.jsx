import React from 'react';
import Draggable from 'react-draggable';

class TweetItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }
   handleDrag(tweet){
    return e => {
      // debugger;
      // e.target.value.classList.add('selected')
      if (this.state.selected) {
        this.props.stopDragging();
        this.setState({selected: false});
      } else {
        this.props.startDragging(tweet);
        this.setState({selected: true});
      }
      
      // this.props.startDragging(tweet);
    }
  }

  render() {
    const {tweet, idx} = this.props;
    return (
      
      <li className={`tweet ${this.state.selected ? 'selected':''}`} id={idx} key={`tweet-${idx}`}>
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