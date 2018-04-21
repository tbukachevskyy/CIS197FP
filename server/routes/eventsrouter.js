const express = require('express');
const Event = require('../models/events');

let eventsRouter = express.Router();

eventsRouter.post('/new', function(req, res) {
  let date = new Date(req.body.date + 'T' + req.body.time);
  let attendanceReq = req.body.attendanceReq === 'true' ? true : false;
  let vegan = req.body.vegan === 'true' ? true : false;
  let vegetarian = req.body.vegetarian === 'true' ? true : false;
    Event.createEvent(req.body.title, req.body.description, date, 
      req.body.location, req.body.organization, attendanceReq, vegetarian, vegan)
      .then((event) => {
        res.json({response: 'success', data: event});
      })
      .catch((err) => {
        res.json({response: 'failure', data: err});
      });
  });

  eventsRouter.post('/events', function(req, res) {
    let config = {};
    if (!req.body.attendanceReq) {
      config.eventAttendanceRequired = false
    }
    if (req.body.veganReq) {
      config.veganOptions = true
    }
    if (req.body.vegetarianReq) {
      config.vegetarianOptions = true
    }
    Event.getEventsByFilter(config)
    .then((events) => {
      events = events.sort((a,b) => {
        return b.date - a.date;
      });
      for (let i = 0; i < events.length; i++) {
        events[i].date = events[i].date.toDateString();
      }
      res.json({response: 'success', data: events});
    })
    .catch((err) => {
      res.json({response: 'failure', data: err.message});
    });
  });

  module.exports = eventsRouter;