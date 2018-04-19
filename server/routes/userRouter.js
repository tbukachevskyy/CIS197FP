import express from 'express';
import Users from '../models/user'

var userRouter = express.Router();

userRouter.post('/new', function(req, res) {
    Users.newUser(req.body.username, req.body.password, req.body.email)
    .then((user) => {
        res.json({message: 'User created', data: user});
    }).catch((err) => {
        res.json({message: 'failed to register user', data: err});
    });
});

userRouter.post('/signin', function(req, res) {
    Users.verify(req.body.username, req.body.password)
    .then((result) => {
        if (result) {
            res.json({message: 'authentication successful'})
        } else {
            res.json({message: 'Authentication failed'})
        }
    })
    .catch((err) => {
        res.json({message: err.message, data: err});
    });
});

module.exports = userRouter;