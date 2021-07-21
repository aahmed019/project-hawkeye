import React from 'react';

class TweetIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      filter: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchTweets(this.state.username, this.state.filter);
  }

  render(){
    // CREATE TWEET ITEM 
    // TWEETS APPEARING NICE
    // 
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
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Username</h1>
            <input 
              type="text" 
              onChange={this.update('username')}
              value={this.state.username}/>
            <h1>Filter</h1>
            <input 
              type="text" 
              onChange={this.update('filter')}
              value={this.state.filter}/>

            <button>Filter</button>
          </form>
        </div>

        <ul>
          {tweets}
        </ul>
      </div>
    );
  }
};

export default TweetIndex;