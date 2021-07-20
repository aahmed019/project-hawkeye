const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Workspace = require('../../models/Workspace');

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
    const newWorkspace = new Workspace({
        title: 'TEST 1 WORKSPACE',
        tweets: [
            {
                username: 'test1-username',
                profile_pic: 'test1-pic',
                user_url: 'test1-userUrl',
                body: 'test1-body',
                date: Date.now(),
                source: 'test1-source',
            },
            {
                username: 'test2-username',
                profile_pic: 'test2-pic',
                user_url: 'test2-userUrl',
                body: 'test2-body',
                date: Date.now(),
                source: 'test2-source',
            }
        ]
    });
    newWorkspace.save()
    
})