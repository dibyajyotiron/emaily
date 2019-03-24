const mongoose = require('mongoose');

const { Schema } = mongoose;
const recipientSchema = require('./recipient');

const surveySchema = new Schema({
  title: {
    type: 'String',
    required: 'true',
  },
  subject: 'String',
  body: String,
  recipients: [recipientSchema],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  dateSent: Date,
  lastResponded: Date,
});

module.exports = mongoose.model('Survey', surveySchema);
