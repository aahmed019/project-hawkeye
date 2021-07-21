const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        workspaces: [{
            type: Schema.Types.ObjectId, ref: 'workspaces'
        }]
    }, 
    {
        timestamps: true
    }
)

module.exports = User = mongoose.model('users', UserSchema);