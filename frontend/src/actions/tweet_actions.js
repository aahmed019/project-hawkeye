import * as TwitterAPIUtil from "../util/twitter_api_util";
import { beginLoading, finishLoading } from "./ui_actions";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_TWEET_ERRORS = "RECEIVE_TWEET_ERRORS";

const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

const receiveTweetErrors = errors => ({
  type: RECEIVE_TWEET_ERRORS,
  errors
})

export const fetchTweets = (username, filter) => dispatch => {
  dispatch(beginLoading());

  return TwitterAPIUtil.fetchTweets(username, filter).then(res => {
    dispatch(receiveTweets(res.data));
    dispatch(finishLoading());
  }, err => {
    if(err.response.statusText === "Bad Request"){
      dispatch(receiveTweetErrors(
        ["Tweets could not be fetched... Perhaps username doesn't exist?"]
      ));
    }else{
      dispatch(receiveTweetErrors(err.response.data));
    }

    dispatch(finishLoading());
  })
};