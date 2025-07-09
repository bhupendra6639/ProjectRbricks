const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Disease', DiseaseSchema);
