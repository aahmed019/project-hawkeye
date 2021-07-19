const express = require('express');
const router = express.Router();
var Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    bearer_token: process.env.BEARER_TOKEN,
});

router.get('/', (req, res) => {

    var params = {
        q: 'POTUS',
        count: 2
    }

    return client.get('search/tweets', params, function(error, data, response) {
        let tweets = data.statuses
        let results = {}
        for (let i = 0; i < tweets.length; i++) {
            results[i] = tweets[i].text
        }
        res.json(results);
    })
});




module.exports = router;