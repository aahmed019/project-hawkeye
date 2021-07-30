import React from 'react';
import TweetContainer from '../tweets/tweet_container';
class TweetSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='tweet-search'>
        <TweetContainer />
      </div>
    )
    
  }
}


export default TweetSearch;