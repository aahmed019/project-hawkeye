import React from 'react';

class TweetIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTweets();
  }

  render(){
    const tweets = this.props.tweets.map(tweet => (
      <li>
        {tweet}
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