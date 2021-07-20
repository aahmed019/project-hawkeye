import React from 'react';
import TweetContainer from '../tweets/tweet_container';
import LoadingContainer from './../loading/loading_container';

class MainPage extends React.Component {

    render() {
        return (
        <div>
            <LoadingContainer />
            <TweetContainer />
        </div>
        );
    }
}

export default MainPage;