// controllers/formController.js
const FormData = require('../models/FormData');

exports.createFormSubmission = async (req, res) => {
  try {
    const formData = new FormData(req.body);
    const savedData = await formData.save();
    res.status(201).json({
      success: true,
      message: 'Form submitted successfully',
      data: savedData
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllFormSubmissions = async (req, res) => {
  try {
    const submissions = await FormData.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: submissions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};