import React from 'react';

class TweetIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTweets();
  }

  render(){
    const tweets = this.props.tweets.map((tweet, idx) => (
      <li key={`tweet-${idx}`}>
        <ul>
          <li>
            <a href={tweet.user_url}>
              {tweet.username}
            </a>
          </li>
          <li><img src={tweet.profile_pic} /></li>
          <li>
            <a href={tweet.source}>
              {tweet.text}
            </a>
          </li>
        </ul>
      </li>
    ))

    return(
      <div>
        <ul>
          {tweets}
        </ul>
      </div>
    );
  }
};

export default TweetIndex;