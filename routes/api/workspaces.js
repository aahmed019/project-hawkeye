const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Workspace = require('../../models/Workspace');
const db = require('../../config/keys').mongoURI;

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    Workspace.find({ "_id": { "$in": req.user.workspaces } },
        function(err, results){
            if(err) throw err;
            res.json(results);
        }
    )
})

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const {title} = req.body.params
    const newWorkSpace = new Workspace({
        creator: req.user._id,
        title,
        folders: []
    })

    newWorkSpace.save()
        .then(payload => {
            User.findByIdAndUpdate(req.user._id,
                { "$push": { "workspaces": payload._id }},
                { "new": true, "upsert": true },
                function (err, results) {
                    if (err) throw err;
                    console.log(newWorkSpace);
                    res.json(newWorkSpace);
                }
            );
        });
});

router.delete('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    Workspace.findByIdAndRemove(req.body.id,
        function(removeError, results){
            if (removeError) throw removeError;

            User.findByIdAndUpdate(req.user._id,
                { "$pull": { "workspaces": results._id }},
                function (updateError, _) {
                    if (updateError) throw updateError;
                    res.json(results);
                }
            );
        });
});

router.post('/addfolder', (req, res) => {
    Workspace.findByIdAndUpdate(req.body.params.workspaceId,
        { "$push": { "folders": {
            name: req.body.params.name,
            tweets: []
        } } },
        { "new": true, "upsert": true },
        function (err, results) {
            if (err) throw err;
            res.json(results);
        }
    );
});

router.delete('/deletefolder', (req, res) => {
    Workspace.findByIdAndUpdate(req.body.workspaceId,
        { "$pull": { "folders": {
            name: req.body.name
        } } },
        function (err, results) {
            if (err) throw err;
            console.log(results);
            res.json(results);
        }
    );
});

/* Ali routes */

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