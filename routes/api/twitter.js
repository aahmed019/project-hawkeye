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
            usernames: "raph_gabriel",
            
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


    async function getTweets(id, old_id) {
        const params = {
            max_results: 5,
            exclude: 'retweets,replies',
            'tweet.fields':'created_at',
            "user.fields": "created_at,username",
        }

        if(old_id){
            params['until_id'] = old_id
        }
    
        // this is the HTTP header that adds bearer token authentication
        const res = await needle('get', `https://api.twitter.com/2/users/${id}/tweets`, params, {
            headers: {
                "User-Agent": "v2TweetLookupJS",
                "authorization": `Bearer ${token}`
            }
        })
    
        if (res.body) {
            console.log(res.body)
            return res.body;
        } else {
            throw new Error('Unsuccessful request');
        }
    }
    
    (async () => {
    
        try {
            // Make request
            const response = await getUsers();
            let tweets = await getTweets(response.data[0].id)
            console.log(tweets)
            // let word = 'with'
            // let results = {}

            // for (let i = 0; i < tweets.data.length; i++) {
            //     if(tweets.data[i].text.toLowerCase().includes(word)){
            //         results[`${tweets.data[i].id}`] = {id: tweets.data[i].id, text: tweets.data[i].text}
            //     }
            // }

            // while(tweets.meta.result_count !== 0){
            //     let newTweets = await getTweets(response.data[0].id, tweets.meta.oldest_id)
            //     if(newTweets.meta.result_count === 0) break;
            //     tweets.meta = newTweets.meta

            //     for (let i = 0; i < newTweets.data.length; i++) {
            //         if(newTweets.data[i].text.toLowerCase().includes(word)){
            //             results[`${newTweets.data[i].id}`] = {id: newTweets.data[i].id, text: newTweets.data[i].text}
            //         }
            //     }
            // }

            // res.json(results)
    
        } catch (e) {
            console.log(e);
            process.exit(-1);
        }
        process.exit();
    })();

});




module.exports = router;