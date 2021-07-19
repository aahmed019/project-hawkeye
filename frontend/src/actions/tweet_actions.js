import * as TwitterAPIUtil from "../util/twitter_api_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

export const fetchTweets = (username, filter) => dispatch => (
  TwitterAPIUtil.fetchTweets(username, filter).then(res => {
    dispatch(receiveTweets(res.data))
  }, err => (
    dispatch(receiveErrors(err.response.data))
  ))
);