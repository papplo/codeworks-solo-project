const nodeSchema = mongoose.Schema({
  title:              { type: String, required: true },
  title_url:          { type: String, required: true },
  node_type:          { name: String, name_url: String, id: Number, custom: Boolean },
  tag:                [
    { name: { type: String},
      id: {type: Number},
      custom: {type: Boolean}
    }
  ],

  poster_path:        { type: String, required: true },
  backdrop_path:      { type: String, required: true },

  short_description:  { type: String, required: true },
  overview:           { type: String, required: true },

  created_at:         { type: Date, default : () => new Date() },
  created_released:   { type: Date, default : () => new Date() },
  created_lifespan:   { type: Number, default : 3600*24* },

  created_by:         { type: mongoose.Schema.Types.ObjectId, ref: 'user'}

  comments:           [
    { text: String,
      posted_at: { type: Date, default : () => new Date() },
      posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
  ]

});

const tellusNode = module.exports = mongoose.model('tellusNode', userSchema);
