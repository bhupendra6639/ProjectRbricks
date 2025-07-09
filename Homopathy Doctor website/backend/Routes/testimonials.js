const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// POST - Add new testimonial
router.post('/', async (req, res) => {
  try {
    const newCard = new Testimonial(req.body);
    const saved = await newCard.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All testimonials
router.get('/', async (req, res) => {
  try {
    const cards = await Testimonial.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Update by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Delete by ID
router.delete('/:id', async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
