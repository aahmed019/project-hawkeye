import * as TwitterAPIUtil from "../util/twitter_api_util";
import { receiveErrors } from "./session_actions";
import { beginLoading, finishLoading } from "./ui_actions";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

export const fetchTweets = (username, filter) => dispatch => {
  dispatch(beginLoading());

  return TwitterAPIUtil.fetchTweets(username, filter).then(res => {
    dispatch(receiveTweets(res.data));
    dispatch(finishLoading());
  }, err => {
    dispatch(receiveErrors(err.response.data));
    dispatch(finishLoading());
  })
};