import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import { startDragging, stopDragging } from './../../actions/drag_actions';
import TweetItem from './tweet_item';

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.drag.status === 'dragging' && ownProps.tweet.id === state.drag.tweet.id
  };
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetItem);