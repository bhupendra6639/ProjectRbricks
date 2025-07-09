// controllers/testimonialController.js
const TestimonialCard = require('../models/TestimonialCard');

exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await TestimonialCard.find({ isActive: true });
    res.status(200).json({
      success: true,
      data: testimonials
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = new TestimonialCard(req.body);
    const savedTestimonial = await testimonial.save();
    res.status(201).json({
      success: true,
      data: savedTestimonial
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateTestimonial = async (req, res) => {
  try {
    const updatedTestimonial = await TestimonialCard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTestimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }
    res.status(200).json({
      success: true,
      data: updatedTestimonial
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await TestimonialCard.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Testimonial deactivated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};