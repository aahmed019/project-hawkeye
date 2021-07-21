import React from 'react';

class TweetIndex extends React.Component{
  
  componentDidMount() {
    document.body.classList.add('hide-scroll');
  }
  
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

    return(
      <div className='tweets-container'>
        <div className='search-form'>
          <form onSubmit={this.handleSubmit}>
            <div className='inputs-container'>

            <h1>Username</h1>
            <input 
              type="text" 
              onChange={this.update('username')}
              value={this.state.username}
              placeholder='Enter a username'/>
            <h1>Filter</h1>
            <input 
              type="text" 
              onChange={this.update('filter')}
              value={this.state.filter}
              placeholder='Enter a filter'/>
            </div>
            <div className='button-container'>

              <button>Search</button>
            </div>
          </form>
        </div>

        <ul className='tweets-feed-container'>
          {tweets}
          {/* <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li>
          <li className='tweet'>
            <ul>
              <li className='tweet-head'>
                <li className='tweet-img'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/1200px-Joe_Biden_presidential_portrait.jpg' /></li>
                <a className='tweet-link' href=''>
                  @POTUS
                </a>
              </li>
              <li className='tweet-body'>
                <a href=''>
                i have very big news, the biggest of news!
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    );
  }
};

export default TweetIndex;