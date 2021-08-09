import React from 'react';
import TweetItemContainer from './tweet_item_container';
import TweetItem from './tweet_item';

class TweetIndex extends React.Component{
  
  componentDidMount() {
    document.body.classList.add('hide-scroll');
  }
  componentDidUpdate() {

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
    let loading = document.querySelector('.loading-screen');
    let ph = document.querySelector('.placeholder');
    if(ph !== null) ph.classList.add('hide-comp');
    loading.classList.remove('hide-comp');
    this.props.fetchTweets(this.state.username, this.state.filter).then( () => {
      loading.classList.add('hide-comp');
    });
  }
  
  render(){
    console.log(this.props.errors);

    const loading = (
      <div className='loading-screen hide-comp'>
        <h1>Loading...</h1>
      </div>
    )
    const placeHolder = (
      <div className='placeholder'>
        <h1>Search now to get results</h1>
      </div>
    )
    const errors = this.props.errors.length > 0 ? (
      this.props.errors.map(error => (
        <div className="tweet-error">
          <h1>{error}</h1>
        </div>
      ))
    ) : null;
    const tweets = this.props.tweets.map((tweet, idx) => (
      <TweetItemContainer tweet={tweet} idx={idx} startDragging={this.props.startDragging} stopDragging={this.props.stopDragging} />
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
          {errors}
          {loading}
          {tweets.length >= 1 ? tweets : placeHolder}
        </ul>
      </div>
    );
  }
};

export default TweetIndex;