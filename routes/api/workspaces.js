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
    const {title} = req.body.params.data
    const {name, tweets} = req.body.params.data.folders
    // console.log(title)
    // console.log(tweets)
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

    Workspace.findByIdAndUpdate("60f777bb638ce546d91012c3",
        { "$push": { "folders.0.tweets": {
            username: 'test4-username',
            profile_pic: 'test4-pic',
            user_url: 'test4-userUrl',
            body: 'test4-body',
            source: 'test4-source',
        } } },
        { "new": true, "upsert": true },
        function (err, managerparent) {
            if (err) throw err;
            res.json(managerparent);
        }
    );

});

router.delete('/remove-tweet', (req, res) => {

    Workspace.findByIdAndUpdate("60f777bb638ce546d91012c3",
        { "$pull": { "folders.0.tweets": {
            source: 'test4-source',
        } } },
        { "new": true, "upsert": true },
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
        { "new": true, "upsert": true },
        function (err, managerparent) {
            if (err) throw err;
            res.json(managerparent);
        }
    );

});

router.patch('/update-comment', (req, res) => {
    console.log(req.body)
    // Workspace.findByIdAndUpdate(req.body.workspace_id,
    //     { "$set": { [`comments.${req.body.comment_id}`] : {
    //         body: req.body.comment,
    //     } } },
    //     { "new": true, "upsert": true },
    //     function (err, managerparent) {
    //         if (err) throw err;
    //         res.json(managerparent);
    //     }
    // );

});


module.exports = router;