const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Workspace = require('../../models/Workspace');
const db = require('../../config/keys').mongoURI;

router.get('/', (req, res) => {
    Workspace.find({}, function(err, workspaces) {
        var workspaceMap = {};
    
        workspaces.forEach(function(workspace) {
            workspaceMap[workspace._id] = workspace;
        });
    
        console.log(workspaceMap);
    });
})

router.post('/', (req, res) => {
    // console.log(req.body.params.data)
    const {title, tweets} = req.body.params.data
    // console.log(title)
    // console.log(tweets)
    const newWorkspace = new Workspace({
        title: title,
        tweets: tweets
    });
    newWorkspace.save().then(payload => res.json(payload))
    
});

router.post('/add', (req, res) => {

    Workspace.findByIdAndUpdate("60f706f6c1e2732279bddc29",
        { "$push": { "tweets": {
            username: 'test3-username',
            profile_pic: 'test3-pic',
            user_url: 'test3-userUrl',
            body: 'test3-body',
            date: Date.now(),
            source: 'test3-source',
        } } },
        { "new": true, "upsert": true },
        function (err, managerparent) {
            if (err) throw err;
            console.log(managerparent);
        }
    );

});

module.exports = router;