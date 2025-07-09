const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  brandName: String,
  brandSubtitle: String,
  tagline: String,
  celebrationType: String,
  celebrationDetail: String,
  achievement: String,
  specialMention: String,
  specialGuest: String,
  guestTitle: String,
  image: String,
  backgroundColor: String,
  textColor: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
