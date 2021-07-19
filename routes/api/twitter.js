const express = require('express');
const router = express.Router();
var Twitter = require('twitter');
require('dotenv').config();

const regEx = /\"().+\"/;

var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    bearer_token: process.env.BEARER_TOKEN,
});

router.get('/', (req, res) => {

    var params = {
        q: 'POTUS',
        exclude_replies: true,
        incldue_rts: false,
        count: 10
    }

    return client.get('search/tweets', params, function(error, data, response) {
        let tweets = data.statuses
        let results = {}

        for (let i = 0; i < tweets.length; i++) {            
            results[i] = {
                id: tweets[i].id,
                created_at: tweets[i].created_at,
                text: tweets[i].extended_tweet ? tweets[i].extended_tweet.full_text : tweets[i].text,
                source: `https://twitter.com/${tweets[i].user.screen_name}/status/${tweets[i].id_str}`,
                username: tweets[i].user.name,
                profile_pic: tweets[i].user.profile_image_url_https,
                user_url: `https://twitter.com/${tweets[i].user.screen_name}`
            }
        }
        res.json(results);
    })
});




module.exports = router;