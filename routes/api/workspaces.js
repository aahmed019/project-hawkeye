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

module.exports = router;