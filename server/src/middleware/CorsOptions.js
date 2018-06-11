const dotenv = require('dotenv');
dotenv.config();

const whitelist = process.env.CORS_WHITELIST.split(' ');

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


exports.whitelist = whitelist;
exports.corsOptions = corsOptions;
