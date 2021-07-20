const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkspaceSchema = new Schema({
        // creator: { type: Schema.Types.ObjectId, ref: 'users'},
        workspaceName: String,
        tweets: [{
            username: String,
            profile_pic: String,
            user_url: String,
            body: String,
            date: Date,
            source: String,
        }]
    }, 
    {
        timestamps: true
    }
)

module.exports = Workspace = mongoose.model('workspaces', WorkspaceSchema);