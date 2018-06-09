'use strict'

/* import or require - rather requeire as commonJs*/
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = require('./route/auth-router');
const app = express();

/* middleware here */
const {corsOptions} = require('./middleware/CorsOptions');

// our .env variables
dotenv.config();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/cw-soloproject';

// our db connect instance
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


/* Here we go */
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/', router);

const start = () => {
  app.listen(PORT, () => {
    console.log(`CORS server listening on port: ${PORT}`);
  })
}
const stop = () => {
  app.close(PORT, () => {
    console.log(`CORS server STOPPED on port: ${PORT}`);
  })
}

exports.start = start;
exports.stop = stop;
