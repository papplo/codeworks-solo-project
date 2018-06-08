const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  passwordHash: { type: String, required: true },
  email:        { type: String, required: true, unique: true },
  username:     { type: String, required: true, unique: true },
  tokenSeed:    { type: String, required: true, unique: true },
  created:      { type: Date, default : () => new Date() },
});

const tellusUser = module.exports = mongoose.model('tellusUser', userSchema);
