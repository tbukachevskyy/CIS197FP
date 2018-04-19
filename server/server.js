const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken');
const Event = require('/models/events');

mongoose.connect(process.env.MONGODB_URI);


mongoose.Promise = global.Promise;

// instantiate express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '..', 'public')));

import eventsRouter from './routes/eventsRouter';
app.use('/events', apiRouter);

import userRouter from './routes/userRouter';
app.use('/user', userRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// set up app to listen on port 3000  or any env port specified
app.listen(process.env.PORT || 3000, () => {
  console.log('listening on ' + (process.env.PORT || 3000));
});

// export app for testing purposes
module.exports = app;
