import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import TweetIndex from './tweet_index';

const mapStateToProps = state => {
  return {
    tweets: Object.values(state.entities.tweets)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: (username, filter) => dispatch(fetchTweets(username, filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetIndex);