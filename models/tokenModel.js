const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  _userId: { type: mongoose.Schema.ObjectId, ref: 'User' },
  token: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
    expires: 43200,
  },
});

const Toekn = mongoose.model('Toekn', tokenSchema);
module.exports = Toekn;
