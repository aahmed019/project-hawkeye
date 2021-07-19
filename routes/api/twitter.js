const express = require('express');
const router = express.Router();
const Twitter = require('twitter-v2');
require('dotenv').config();

var client = new Twitter({
    bearer_token: process.env.BEARER_TOKEN,
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
});

router.get('/', (req, res) => {

    var params = {
        screen_name: 'POTUS'
    }

    client.get('users/show', params, function(error, user, response){
        if (!error) {
            client.get(`2/users/${user.id_str}/tweets`, { }, function(error, data, response) {
                console.log(data)
                // let tweets = data.statuses
                // let results = {}
                // for (let i = 0; i < tweets.length; i++) {
                //     results[i] = tweets[i].text
                // }
                // res.json(results);
            })
        }
        else{
            console.log(error)
        }
    });

    // client.get('statuses/user_timeline', { screen_name: `POTUS`, q:'children',  count: 1, exclude_replies: true, include_rts: false}, function(error, data, response) {
    //         console.log(data)
    //         let tweets = data.statuses
    //         let results = {}
    //         for (let i = 0; i < tweets.length; i++) {
    //             results[i] = tweets[i].text
    //         }
    //         res.json(results);
    // })

});




module.exports = router;