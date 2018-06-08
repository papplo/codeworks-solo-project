'use strict'

/* import or require - rather requeire as commonJs*/
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./route/auth-router');
const app = express();

// our .env variables
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/cw-soloproject';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

/* Here we go */
app.use(bodyParser.json());
app.use(cors());

/* middleware here */
app.use('/', router);



const start = () => {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  })
}
const stop = () => {
  app.close(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  })
}

exports.start = start;
exports.stop = stop;
