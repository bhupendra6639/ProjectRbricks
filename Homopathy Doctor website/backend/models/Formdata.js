const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: String,
  phone: String,
  location: String,
  disease: String, // dropdown selected
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FormData', formDataSchema);

