import axios from 'axios';

export const fetchTweets = (filters) => {
    return axios.get('/api/tweets', filters)
};