import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

userSchema.static.newUser = function(username, password, email) {
    let newUser = new this({
        username: username,
        password: password,
        email: email
    });
    return bcrypt.hash(newUser.password, 1)
    .then((hash) => {
        newUser.password = hash;
        return newUser.save();
    });
}

userSchema.statics.verify = function(username, password) {
    return this.findOne({username: username})
    .then((user) => {
        if (!user) {
            throw new Error('No such user');
        }
        return bcrypt.compare(password, user.password);
    });
}

module.exports = mongoose.model('Users', UserSchema);
