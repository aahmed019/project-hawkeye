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
        function(err, results){
            if (err) throw err;
            res.json(results);
        })
});

router.post('/addfolder', (req, res) => {
    console.log(req.body.params)

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

router.delete('/remove', (req, res) => {

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

module.exports = router;