const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: ['/^[a-z0-9\._-]@[\.a-z[{2,6}]$/i', 'Please enter a valid email.']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length +1;
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length +1;
});

const User = model('User', UserSchema);

module.exports = User;