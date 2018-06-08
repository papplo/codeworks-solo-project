'use strict'

/* import or require - rather requeire as commonJs*/
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// our .env variables
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/cw-soloproject';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

/* Here we go */
app.use(bodyParser.json());
app.use(cors());

app.all('*', (req, res) => {
  console.log('Echo 404 on catch-all');
  return res.sendStatus(404);
})


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

exports.start = start
