import axios from 'axios';

export const fetchTweets = (username, filter) => {
    return axios.get('/api/tweets', 
        {
            params: { username, filter }
        }
    )
};