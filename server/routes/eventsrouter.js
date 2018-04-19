const express = require('express');
const Event = require('../models/events');

let eventsRouter = express.Router();

eventsRouter.post('/new', function(req, res) {
  let date = new Date(req.body.date + 'T' + req.body.time);
  console.log(req.body.date + 'T' + req.body.time);
  let attendanceReq = req.body.attendanceReq == 'true' ? true : false
    Event.createEvent(req.body.title, req.body.description, date, 
      req.body.location, req.body.organization, attendanceReq)
      .then((event) => {
        res.json({response: 'success', data: event});
      })
      .catch((err) => {
        res.json({response: 'failure', data: err});
      });
  });

  eventsRouter.post('/events', function(req, res) {
    let config = {};
    if (req.body.attendanceReq === 'true') {
      config.eventAttendanceRequired = true
    }

    Event.find(config)
    .then((events) => {
      events = events.sort((a,b) => {
        return b.date - a.date;
      });
      res.json({response: 'success', data: events});
    })
    .catch((err) => {
      res.json({response: 'failure', data: err});
    });
  });

  module.exports = eventsRouter;