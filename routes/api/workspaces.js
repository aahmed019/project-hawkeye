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
    const {title} = req.body.params.data
    const {name, tweets} = req.body.params.data.folders
    const newWorkspace = new Workspace({
        title: title,
        folders:[{
            name: name,
            tweets: tweets
        }]
    });
    newWorkspace.save().then(payload => res.json(payload))
    
});

router.post('/add-tweet', (req, res) => {

    Workspace.findByIdAndUpdate(req.body.workspace_id,
        { "$push": { [`folders.${req.body.folder_id}.tweets`]: {
            username: req.body.tweet.username,
            profile_pic: req.body.tweet.profile_pic,
            user_url: req.body.tweet.user_url,
            body: req.body.tweet.body,
            source: req.body.tweet.source,
        } } },
        { "new": true, "upsert": true },
        function (err, managerparent) {
            if (err) throw err;
            res.json(managerparent);
        }
    );

});

router.delete('/remove-tweet', (req, res) => {
    Workspace.findByIdAndUpdate("req.body.workspace_id",
        { "$pull": { [`folders.${req.body.folder_id}.tweets`]: {
            source: req.body.tweet.source,
        } } },
        function (err, managerparent) {
            if (err) throw err;
            res.json(managerparent);
        }
    );
});

router.post('/add-comment', (req, res) => {
    Workspace.findByIdAndUpdate(req.body.workspace_id,
        { "$push": { "comments": {
            body: req.body.comment,
        } } },
        { "new": true, "upsert": true },
        function (err, managerparent) {
            if (err) throw err;
            res.json(managerparent);
        }
    );

});

router.delete('/remove-comment', (req, res) => {
    Workspace.findByIdAndUpdate(req.body.workspace_id,
        { "$pull": { "comments": {
            body: req.body.comment,
        } } },
        function (err, managerparent) {
            if (err) throw err;
            res.json(managerparent);
        }
    );

});

router.patch('/update-comment', (req, res) => {
    // console.log(req.body)
    Workspace.findByIdAndUpdate(req.body.workspace_id,
        { "$set": { [`comments.${req.body.comment.comment_id}`] : {
            body: req.body.comment.comment_body,
        } } },
        { "new": true, "upsert": true },
        function (err, managerparent) {
            if (err) throw err;
            res.json(managerparent);
        }
    );
});


module.exports = router;