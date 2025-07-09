const express = require('express');
const router = express.Router();
const Treatment = require('../models/Treatment');

// POST - Add new treatment
router.post('/', async (req, res) => {
  try {
    const newTreatment = new Treatment(req.body);
    const saved = await newTreatment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/bulk', async (req, res) => {
  try {
    const saved = await Treatment.insertMany(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All treatments
router.get('/', async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.status(200).json(treatments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - Delete by ID
router.delete('/:id', async (req, res) => {
  try {
    await Treatment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Treatment deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
