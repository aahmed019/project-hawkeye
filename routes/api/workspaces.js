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
    
        res.send(workspaceMap);  
    });
})
