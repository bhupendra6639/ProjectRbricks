const mongoose = require('mongoose');

const TreatmentSchema = new mongoose.Schema({
  title: String,
  icon: String,
  color: String,
  iconColor: String
});

module.exports = mongoose.model('Treatment', TreatmentSchema);
