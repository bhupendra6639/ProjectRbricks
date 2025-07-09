const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  icon: String,
  title: String,
  checkmark: Boolean
});

const experienceSchema = new mongoose.Schema({
  yearsOfExperience: String,
  experienceTitle: String,
  description: String,
  features: [featureSchema]
});

module.exports = mongoose.model('Experience', experienceSchema);
