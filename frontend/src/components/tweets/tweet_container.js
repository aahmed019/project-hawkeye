import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import { startDragging, stopDragging } from './../../actions/drag_actions';
import TweetIndex from './tweet_index';

const mapStateToProps = state => {
  return {
    tweets: Object.values(state.entities.tweets),
    errors: state.errors.tweets
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: (username, filter) => dispatch(fetchTweets(username, filter)),
    startDragging: tweet => dispatch(startDragging(tweet)),
    stopDragging: () => dispatch(stopDragging())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetIndex);