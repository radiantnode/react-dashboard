const dotenv = require('dotenv').config();
const express = require('express');
const router = require('express-promise-router')();
const fetch = require('node-fetch');
const ical = require('node-ical');
const _ = require('lodash');

const app = express();
const port = 5001;

const calUrls = process.env.REACT_APP_CALENDAR_URLS.split(',');

router.get('/calendar', async (req, res) => {
  // fetch all calendar data
  let calData = await Promise.all(
    calUrls.map(url => fetch(url).then(resp => resp.text()))
  );

  // parse all ics data
  calData = await Promise.all(
    calData.map(data => ical.parseICS(data))
  );

  // merge cal data into a nice array
  calData = calData.map(data => _.values(data));
  calData = _.flatten(calData);

  // filter events
  calData = _.filter(calData, event => {
    return event.type == 'VEVENT' && Date.parse(event.start) > Date.now()
  });

  calData = _.sortBy(calData, 'start');

  res.json({ calData });


  // ical.fromURL(calUrls[1], {}, (err, data) => {
  //   data = _.filter(data, event => {
  //     return event.type == 'VEVENT' && Date.parse(event.start) > Date.now()
  //   });
    
  //   res.json(data);
  // });

});

app.use(router);

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
});
