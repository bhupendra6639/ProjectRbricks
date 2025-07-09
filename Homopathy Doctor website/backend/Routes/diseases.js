const express = require('express');
const router = express.Router();
const Disease = require('../models/Disease');

// POST - Add a new disease
router.post('/', async (req, res) => {
  try {
    const newDisease = new Disease(req.body);
    const saved = await newDisease.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/diseases/bulk - Add multiple diseases at once
router.post('/bulk', async (req, res) => {
  try {
    const result = await Disease.insertMany(req.body); // req.body must be an array of valid JSON objects
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// GET - All diseases
router.get('/', async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.status(200).json(diseases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Update a disease by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Disease.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Delete disease by ID
router.delete('/:id', async (req, res) => {
  try {
    await Disease.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Disease deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
