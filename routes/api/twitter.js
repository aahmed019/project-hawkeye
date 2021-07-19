const express = require('express');
const router = express.Router();
const needle = require('needle');
require('dotenv').config();

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
            max_results: 100
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
            let results = {}
            let word = 'with'
            for (let i = 0; i < tweets.data.length; i++) {
                if(tweets.data[i].text.toLowerCase().includes(word)){
                    results[`${tweets.data[i].id}`] = {id: tweets.data[i].id, text: tweets.data[i].text}
                }
            }
            res.json(results)
    
        } catch (e) {
            console.log(e);
            process.exit(-1);
        }
        process.exit();
    })();

});




module.exports = router;