import express from 'express';

let apiRouter = express.Router();

apiRouter.post('/new', function(req, res) {
    Event.createPost(req.body.title, req.body.description, req.body.date, 
      req.body.location, req.body.organization, req.body.foodtypes, req.body.attendanceReq)
      .then((event) => {
        res.json({respose: 'success', data: event});
      })
      .catch((err) => {
        res.json({response: 'failure', data: err});
      });
  });

  apiRouter.get('/events', function(req, res) {
    Event.getAllPosts()
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

  module.export = apiRouter;