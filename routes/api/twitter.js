const express = require('express');
const router = express.Router();
const needle = require('needle');
require('dotenv').config();
const validateTwitterInput = require('../../validation/tweet-filter')

const token = process.env.BEARER_TOKEN;
const userEndPointURL = "https://api.twitter.com/2/users/by?usernames="

router.get('/', (req, res) => {
    async function getUsers() {
        //specify user name here
        const params = {
            usernames: req.query.username,
            "user.fields": "username,name,profile_image_url"
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
            max_results: 100,
            exclude: 'retweets,replies',
            'tweet.fields':'created_at,conversation_id'
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
            return res.body;
        } else {
            throw new Error('Unsuccessful request');
        }
    }
    
    (async () => {
        const { errors, isValid } = validateTwitterInput(req.query);
        if(!isValid) return res.status(400).json(errors);
        try {
            // Make request
            const response = await getUsers();
            if(response.errors) return res.status(400).json(errors)
            let tweets = await getTweets(response.data[0].id);
            if(tweets.meta.result_count === 0) return res.status(400).json(errors)
            let word = req.query.filter;
            let results = {};
            let max_results = 10;

            for (let i = 0; i < tweets.data.length; i++) {
                if(tweets.data[i].text.toLowerCase().includes(word)){
                    results[`${tweets.data[i].id}`] = {
                        id: tweets.data[i].id, 
                        created_at: tweets.data[i].created_at,
                        text: tweets.data[i].text,
                        source: `https://twitter.com/${response.data[0].username}/status/${tweets.data[i].conversation_id}`,
                        username: response.data[0].name,
                        profile_pic: response.data[0].profile_image_url,
                        user_url: `https://twitter.com/${response.data[0].username}`
                    };
                }
            }

            while(tweets.meta.result_count !== 0 && Object.keys(results).length <= max_results){
                let newTweets = await getTweets(response.data[0].id, tweets.meta.oldest_id)
                if(newTweets.meta.result_count === 0) break;
                tweets.meta = newTweets.meta

                for (let i = 0; i < newTweets.data.length; i++) {
                    if(newTweets.data[i].text.toLowerCase().includes(word)){
                        results[`${newTweets.data[i].id}`] = {
                            id: newTweets.data[i].id, 
                            created_at: newTweets.data[i].created_at,
                            text: newTweets.data[i].text,
                            source: `https://twitter.com/${response.data[0].username}/status/${newTweets.data[i].conversation_id}`,
                            username: response.data[0].name,
                            profile_pic: response.data[0].profile_image_url,
                            user_url: `https://twitter.com/${response.data[0].username}`
                        };
                    }
                }
            }

            res.json(results)
        } catch (e) {
            console.log(e);
            process.exit(-1);
        }
        // process.exit();
    })();
});




module.exports = router;