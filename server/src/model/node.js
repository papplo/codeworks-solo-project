const mongoose = require('mongoose');

const nodeSchema = mongoose.Schema({
  title:              { type: String },
  title_url:          { type: String },
  node_type:          { type: String },
  node_type_name:     { type: String },

  tag:                [
    { name: { type: String },
      id: {type: Number },
      custom: {type: Boolean }
    }
  ],
  poster_path:        { type: String },
  backdrop_path:      { type: String },
  short_description:  { type: String },
  overview:           { type: String },

  geolocation:        { type: { type: String }, coordinates: [ ] },
  created_at:         { type: Date, default : () => new Date() },
  created_released:   { type: Date, default : () => new Date() },
  created_lifespan:   { type: Number, default : 3600*24*7 },
  created_by:         { type: mongoose.Schema.Types.ObjectId, ref: 'tellusUser'},

  comments:
    { text: String,
      posted_at: { type: Date },
      posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'tellusUser' }
    }
});

const tellusNode = module.exports = mongoose.model('tellusNode', nodeSchema);
