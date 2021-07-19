const express = require('express');
const router = express.Router();
// const Twitter = require('twitter-v2');
const needle = require('needle');
require('dotenv').config();

// var client = new Twitter({
//     bearer_token: process.env.BEARER_TOKEN,
//     consumer_key: process.env.CONSUMER_KEY,
//     consumer_secret: process.env.CONSUMER_SECRET,
// });

const token = process.env.BEARER_TOKEN;
const userEndPointURL = "https://api.twitter.com/2/users/by?usernames="

router.get('/', (req, res) => {

    async function getUsers() {

        //specify user name here
        const params = {
            usernames: "POTUS", 
        }
    
        // this is the HTTP header that adds bearer token authentication
        const res = await needle('get', userEndPointURL, params, {
            headers: {
                "User-Agent": "v2UserLookupJS",
                "authorization": `Bearer ${token}`
            }
        })
    
        if (res.body) {
            return res.body;
        } else {
            throw new Error('Unsuccessful request')
        }
    }


    async function getTweets(id) {
        const params = {
            max_results: 5
        }
    
        // this is the HTTP header that adds bearer token authentication
        const res = await needle('get', `https://api.twitter.com/2/users/${id}/tweets`, params, {
            headers: {
                "User-Agent": "v2TweetLookupJS",
                "authorization": `Bearer ${token}`
            }
        })
    
        if (res.body) {
            return res.body;
        } else {
            throw new Error('Unsuccessful request');
        }
    }
    
    (async () => {
    
        try {
            // Make request
            const response = await getUsers();
            const tweets = await getTweets(response.data[0].id)
            console.dir(tweets, {
                depth: null
            });
    
        } catch (e) {
            console.log(e);
            process.exit(-1);
        }
        process.exit();
    })();





    

    // const { user } = await client.get('users/show', params, function(error, user, response){
    //     if (!error) {
    //         client.get(`2/users/${user.id_str}/tweets`, { }, function(error, data, response) {
    //             console.log(data)
    //             // let tweets = data.statuses
    //             // let results = {}
    //             // for (let i = 0; i < tweets.length; i++) {
    //             //     results[i] = tweets[i].text
    //             // }
    //             // res.json(results);
    //         })
    //     }
    //     else{
    //         console.log(error)
    //     }
    // });

    

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