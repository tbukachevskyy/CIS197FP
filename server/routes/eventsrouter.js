import express from 'express';
import Event from '../models/events'

let eventsRouter = express.Router();

eventsRouter.post('/new', function(req, res) {
    Event.createPost(req.body.title, req.body.description, req.body.date, 
      req.body.location, req.body.organization, req.body.foodtypes, req.body.attendanceReq)
      .then((event) => {
        res.json({respose: 'success', data: event});
      })
      .catch((err) => {
        res.json({response: 'failure', data: err});
      });
  });

  eventsRouter.get('/events:attendance:?food', function(req, res) {
    Event.find({eventAttendanceRequired: attendance, foodTypes: food})
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

  module.export = eventsRouter;