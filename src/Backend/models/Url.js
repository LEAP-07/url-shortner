const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  urlId: {
    type: String,
    required: true,
  },
  origUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: String,
    default: Date.now,
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const UrlModel = mongoose.model('Url',UrlSchema);
module.exports = UrlModel;
